import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";

interface RankingData {
  keyword: string;
  position: number | null;
  previousPosition: string;
}

interface GeneratedPost {
  slug: string;
  title: string;
  description: string;
  targetKeyword: string;
  category: string;
  date: string;
  tsxContent: string;
  isRefresh: boolean;
  wordCount: number;
  refreshReason: string | null;
}

function calculateWordCount(tsxContent: string): number {
  // Strip JSX tags, imports, and code artifacts to count real words
  const textOnly = tsxContent
    .replace(/import[\s\S]*?from\s*"[^"]*";?/g, "")
    .replace(/export\s+(const|default|function)[\s\S]*?(?=\n\n)/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/className="[^"]*"/g, "")
    .trim();
  return textOnly.split(/\s+/).filter((w) => w.length > 0).length;
}

interface ExistingPost {
  slug: string;
  title: string;
  description: string;
  targetKeyword: string;
  date: string;
  category: string;
}

function getExistingPosts(): {
  keywords: Set<string>;
  titles: string[];
  posts: ExistingPost[];
} {
  const blogDir = path.join(process.cwd(), CONFIG.blogContentDir);
  const keywords = new Set<string>();
  const titles: string[] = [];
  const posts: ExistingPost[] = [];

  if (!fs.existsSync(blogDir)) return { keywords, titles, posts };

  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const pagePath = path.join(blogDir, entry.name, "page.tsx");
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, "utf-8");

    // Parse metadata from export const metadata: Metadata
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const descMatch = content.match(/description:\s*"([^"]+)"/);
    const keywordsMatch = content.match(/keywords:\s*"([^"]+)"/);
    const dateMatch = content.match(/new Date\("(\d{4}-\d{2}-\d{2})"\)/);

    const title = titleMatch?.[1]?.replace(/\s*\|\s*365 Transfers$/, "") || "";
    const description = descMatch?.[1] || "";
    const slug = entry.name;

    // Extract target keyword (first keyword in the keywords string)
    let targetKeyword = "";
    if (keywordsMatch) {
      targetKeyword = keywordsMatch[1].split(",")[0].trim();
    }

    // Try to detect category from badge text
    const categoryMatch = content.match(
      /className="bg-accent text-primary[^"]*"[^>]*>\s*\n?\s*([^<]+)/
    );
    const category = categoryMatch?.[1]?.trim() || "General";

    if (title) {
      keywords.add(targetKeyword.toLowerCase());
      titles.push(title);
      posts.push({
        slug,
        title,
        description,
        targetKeyword,
        date: dateMatch?.[1] || "",
        category,
      });
    }
  }

  return { keywords, titles, posts };
}

function pickNextTopic(strategyContent: string): {
  keyword: string;
  context: string;
} | null {
  const { keywords: existingKeywords } = getExistingPosts();

  const contentPriorities: { keyword: string; context: string }[] = [];

  // Check the content priority list
  const contentSection = strategyContent.match(
    /\*\*Content to create \(in priority order\):\*\*([\s\S]*?)(?=\n---|\n##)/
  );
  if (contentSection) {
    const items = contentSection[1].match(/\d+\.\s+(.+)/g);
    if (items) {
      for (const item of items) {
        const text = item.replace(/^\d+\.\s+/, "").trim();
        const quotedMatch = text.match(/\*\*"([^"]+)"\*\*/);
        const keyword = quotedMatch ? quotedMatch[1] : text.split(":")[0];
        contentPriorities.push({ keyword, context: text });
      }
    }
  }

  // Then check tier keywords that don't have posts yet
  const tierRegex =
    /### Tier \d+ — \w+.*?\n\n((?:\|.*\n)*)/g;
  let tierMatch;
  while ((tierMatch = tierRegex.exec(strategyContent)) !== null) {
    const rows = tierMatch[1].match(
      /\|\s*\d+\s*\|\s*([^|]+?)\s*\|[^|]*\|[^|]*\|([^|]*)\|/g
    );
    if (rows) {
      for (const row of rows) {
        const parts = row.split("|").filter((p) => p.trim());
        if (parts.length >= 4) {
          const keyword = parts[1].trim();
          const targetPage = parts[4]?.trim() || "";
          if (
            keyword !== "Keyword" &&
            targetPage.toLowerCase().includes("blog")
          ) {
            contentPriorities.push({
              keyword,
              context: `Target page: ${targetPage}`,
            });
          }
        }
      }
    }
  }

  for (const topic of contentPriorities) {
    if (!existingKeywords.has(topic.keyword.toLowerCase())) {
      return topic;
    }
  }

  return null;
}

async function generateNewTopic(
  strategyContent: string
): Promise<{ keyword: string; context: string }> {
  const { titles } = getExistingPosts();
  const anthropic = new Anthropic();

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `You are an SEO strategist for 365 Transfers (taxisstone.co.uk), a professional taxi and transfer service based in Stone, Staffordshire, serving the wider Staffordshire, Shropshire, and South Cheshire area.

## SEO Strategy
${strategyContent}

## Existing Blog Posts
${titles.length > 0 ? titles.map((t) => `- ${t}`).join("\n") : "None yet."}

## Your Task
Suggest ONE new blog post topic that would be valuable for SEO. Consider:
- Long-tail keywords Staffordshire residents might search for about taxis, transfers, and local transport
- Airport transfer topics (Manchester, Birmingham, East Midlands, Liverpool, London airports)
- Local attraction transport (Alton Towers, Trentham Estate, bet365 Stadium)
- Location-specific content targeting towns (Stone, Stoke-on-Trent, Stafford, Newcastle-under-Lyme, Uttoxeter)
- Topics that complement existing posts without duplicating them
- Service-specific deep dives (wheelchair accessible, school transport, corporate accounts, events)

Respond in EXACTLY this JSON format, nothing else:
{"keyword": "the target keyword phrase", "context": "A 1-2 sentence description of the article angle and why it's valuable for SEO"}`,
      },
    ],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";
  const parsed = JSON.parse(text);
  return { keyword: parsed.keyword, context: parsed.context };
}

function findPostToRefresh(
  rankings: RankingData[]
): { post: ExistingPost; reason: string } | null {
  const { posts } = getExistingPosts();
  if (posts.length === 0) return null;

  const now = new Date();

  for (const post of posts) {
    if (!post.date) continue;
    const publishedDate = new Date(post.date);
    const ageInDays =
      (now.getTime() - publishedDate.getTime()) / (1000 * 60 * 60 * 24);
    if (ageInDays < 60) continue;

    const ranking = rankings.find(
      (r) => r.keyword.toLowerCase() === post.targetKeyword.toLowerCase()
    );
    if (!ranking) continue;

    const prevMatch = ranking.previousPosition.match(/Position ([\d.]+)/);
    if (prevMatch && ranking.position !== null) {
      const prev = parseFloat(prevMatch[1]);
      const drop = ranking.position - prev;
      if (drop >= 5) {
        return {
          post,
          reason: `Ranking dropped from #${prev} to #${ranking.position} for "${ranking.keyword}"`,
        };
      }
    }

    if (prevMatch && ranking.position === null) {
      return {
        post,
        reason: `Lost ranking for "${ranking.keyword}" (was Position ${prevMatch[1]}, now not indexed)`,
      };
    }

    if (ageInDays > 120 && ranking.position === null) {
      return {
        post,
        reason: `Published ${Math.round(ageInDays)} days ago and still not ranking for "${ranking.keyword}"`,
      };
    }
  }

  return null;
}

function buildTSXPrompt(
  topic: { keyword: string; context: string },
  strategyContent: string,
  today: string,
  isRefresh: boolean = false,
  existingContent?: string,
  refreshReason?: string
): string {
  const baseContext = `You are writing a blog post for 365 Transfers (taxisstone.co.uk), a professional taxi and transfer service based in Stone, Staffordshire. They provide airport transfers, local taxi services, school transport, corporate accounts, events & tours, days out, and wheelchair-accessible transport across Staffordshire, Shropshire, and South Cheshire. They have 20+ years experience, DBS-checked drivers, and operate 24/7/365.

## SEO Strategy Context
${strategyContent}`;

  const servicePages = `- /airport-transfers — Airport transfer hub page
- /manchester-airport-taxi — Manchester Airport transfers
- /birmingham-airport-taxi — Birmingham Airport transfers
- /east-midlands-airport-taxi — East Midlands Airport transfers
- /liverpool-airport-taxi — Liverpool Airport transfers
- /london-airport-transfers — London airports
- /local-national — Local & national journeys
- /days-out — Days out transport
- /events-tours — Events & tours transport
- /school-contracts — School transport
- /account-work — Corporate accounts
- /complex-journey — Complex journeys
- /every-occasion — Special occasions
- /alton-towers-taxi — Alton Towers taxi
- /taxi-stoke-on-trent — Stoke-on-Trent taxis
- /taxi-stafford — Stafford taxis
- /wheelchair-accessible-taxi — Wheelchair accessible
- /airport-transfer-prices — Airport transfer prices`;

  const tsxTemplate = `
## CRITICAL: Output Format
You MUST output a complete Next.js page component as a .tsx file. Follow this exact pattern:

\`\`\`tsx
import Link from "next/link";
import type { Metadata } from "next";
import BookNowButton from "@/components/BookNowButton";
import StructuredData from "@/components/StructuredData";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/blog/SLUG-HERE",
  },
  title: "POST TITLE | 365 Transfers",
  description: "META DESCRIPTION UNDER 160 CHARS",
  keywords: "keyword1, keyword2, keyword3",
  openGraph: {
    title: "POST TITLE",
    description: "OG DESCRIPTION",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "/logo/365logo.png",
        width: 1200,
        height: 630,
        alt: "365 Transfers Logo",
      },
    ],
  },
};

export default function ComponentName() {
  const articleSchema = createArticleSchema(
    "POST TITLE",
    "META DESCRIPTION",
    "${today}"
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://taxisstone.co.uk" },
    { name: "Blog", url: "https://taxisstone.co.uk/blog" },
    {
      name: "SHORT BREADCRUMB NAME",
      url: "https://taxisstone.co.uk/blog/SLUG-HERE",
    },
  ]);

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <div className="min-h-screen">
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  CATEGORY
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                POST TITLE
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date("${today}").toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <div className="w-full h-64 md:h-96 bg-primary flex items-center justify-center">
                <img
                  src="/logo/365logo.png"
                  alt="ALT TEXT"
                  className="opacity-20 h-48"
                />
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* INTRO CALLOUT BOX */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  INTRO PARAGRAPH
                </p>
              </div>

              {/* MAIN CONTENT WITH H2s AND H3s */}
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
                Section Heading
              </h2>
              <p className="text-gray-700 mb-4">Content...</p>

              {/* CTA SECTION AT END */}
              <div className="bg-primary text-white rounded-lg p-8 mt-12">
                <h2 className="text-3xl font-bold mb-4">CTA HEADING</h2>
                <p className="text-xl mb-6 text-gray-200">
                  CTA text with phone number 01785 335563.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <BookNowButton className="text-lg">
                    Get a Quote
                  </BookNowButton>
                  <a
                    href="tel:01785335563"
                    className="bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
                  >
                    Call 01785 335563
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="text-primary hover:underline font-semibold"
              >
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}
\`\`\`

## Rules
- Use UK English ("s" not "z": specialise, organise, etc.)
- Use <Link href="/path">anchor text</Link> for internal links (import is already included)
- Use standard <a> tags for external links
- Tailwind CSS classes for all styling
- Include the target keyword naturally 3-5 times
- Include internal links to relevant service pages where natural:
${servicePages}
- ${CONFIG.minBlogWordCount}-${CONFIG.maxBlogWordCount} words of actual content
- Tone: Professional but friendly. Write for Staffordshire residents, not industry professionals.
- Reference local geography where relevant (Stone, Stoke-on-Trent, Stafford, the Potteries, M6 motorway, etc.)
- Determine the correct category: "Airport Transfers", "Local Services", "Specialist Services", or "Seasonal Services"
- Return ONLY the TSX code. No explanation, no markdown code fences. Start with \`import\` and end with the closing \`}\``;

  if (isRefresh && existingContent) {
    return `${baseContext}

## Why This Post Needs Refreshing
${refreshReason}

## Current Post Content
${existingContent}

## Your Task
Rewrite and improve this blog post. The goal is to make it rank better for the target keyword: "${topic.keyword}"

## What To Improve
- Update any outdated information
- Improve the structure and readability
- Add more practical, actionable advice for Staffordshire residents
- Strengthen the keyword targeting without stuffing
- Add more locally-relevant references
- Make the introduction more compelling
- Ensure the content answers searcher intent fully
- Keep the same slug

${tsxTemplate}`;
  }

  return `${baseContext}

## Your Task
Write a blog post targeting this keyword: "${topic.keyword}"
Context: ${topic.context}

${tsxTemplate}`;
}

export async function generateBlogPost(
  strategyContent: string,
  rankings: RankingData[] = []
): Promise<GeneratedPost | null> {
  const refreshCandidate = findPostToRefresh(rankings);

  if (refreshCandidate) {
    console.log(
      `Refreshing post: "${refreshCandidate.post.title}" — ${refreshCandidate.reason}`
    );
    return await refreshPost(
      refreshCandidate.post,
      refreshCandidate.reason,
      strategyContent
    );
  }

  let topic = pickNextTopic(strategyContent);

  if (!topic) {
    console.log(
      "All planned topics covered. Generating a new topic with AI..."
    );
    topic = await generateNewTopic(strategyContent);
    console.log(`AI suggested topic: "${topic.keyword}"`);
  }

  console.log(`Generating blog post for keyword: "${topic.keyword}"`);

  const anthropic = new Anthropic();
  const today = new Date().toISOString().split("T")[0];

  const prompt = buildTSXPrompt(topic, strategyContent, today);

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 8192,
    messages: [{ role: "user", content: prompt }],
  });

  let tsxContent =
    response.content[0].type === "text" ? response.content[0].text : "";

  // Strip any accidental markdown code fences
  tsxContent = tsxContent
    .replace(/^```tsx?\n?/gm, "")
    .replace(/^```\n?/gm, "")
    .trim();

  // Parse metadata from generated TSX
  const titleMatch = tsxContent.match(
    /title:\s*"([^"]+?)(?:\s*\|\s*365 Transfers)?"/
  );
  const title = titleMatch?.[1] || topic.keyword;

  const descMatch = tsxContent.match(/description:\s*"([^"]+)"/);
  const description = descMatch?.[1] || "";

  const canonicalMatch = tsxContent.match(/canonical:\s*"\/blog\/([^"]+)"/);
  const slug =
    canonicalMatch?.[1] ||
    topic.keyword
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  // Detect category
  const categoryMatch = tsxContent.match(
    /bg-accent text-primary[^>]*>\s*\n?\s*([^<\n]+)/
  );
  const category = categoryMatch?.[1]?.trim() || "General";

  // Write the file
  const postDir = path.join(process.cwd(), CONFIG.blogContentDir, slug);
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }
  fs.writeFileSync(path.join(postDir, "page.tsx"), tsxContent);

  console.log(`Blog post written: ${CONFIG.blogContentDir}/${slug}/page.tsx`);

  return {
    slug,
    title,
    description,
    targetKeyword: topic.keyword,
    category,
    date: today,
    tsxContent,
    isRefresh: false,
    wordCount: calculateWordCount(tsxContent),
    refreshReason: null,
  };
}

async function refreshPost(
  post: ExistingPost,
  reason: string,
  strategyContent: string
): Promise<GeneratedPost> {
  const anthropic = new Anthropic();
  const postDir = path.join(process.cwd(), CONFIG.blogContentDir, post.slug);
  const filePath = path.join(postDir, "page.tsx");
  const existingContent = fs.readFileSync(filePath, "utf-8");
  const today = new Date().toISOString().split("T")[0];

  const prompt = buildTSXPrompt(
    { keyword: post.targetKeyword, context: `Refreshing: ${post.title}` },
    strategyContent,
    today,
    true,
    existingContent,
    reason
  );

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 8192,
    messages: [{ role: "user", content: prompt }],
  });

  let tsxContent =
    response.content[0].type === "text" ? response.content[0].text : "";

  tsxContent = tsxContent
    .replace(/^```tsx?\n?/gm, "")
    .replace(/^```\n?/gm, "")
    .trim();

  const titleMatch = tsxContent.match(
    /title:\s*"([^"]+?)(?:\s*\|\s*365 Transfers)?"/
  );
  const title = titleMatch?.[1] || post.title;

  const descMatch = tsxContent.match(/description:\s*"([^"]+)"/);
  const description = descMatch?.[1] || post.description;

  const categoryMatch = tsxContent.match(
    /bg-accent text-primary[^>]*>\s*\n?\s*([^<\n]+)/
  );
  const category = categoryMatch?.[1]?.trim() || post.category;

  fs.writeFileSync(filePath, tsxContent);
  console.log(`Refreshed post: ${CONFIG.blogContentDir}/${post.slug}/page.tsx`);

  return {
    slug: post.slug,
    title,
    description,
    targetKeyword: post.targetKeyword,
    category,
    date: today,
    tsxContent,
    isRefresh: true,
    wordCount: calculateWordCount(tsxContent),
    refreshReason: reason,
  };
}
