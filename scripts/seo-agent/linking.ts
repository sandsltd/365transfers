import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";

export interface LinkingResult {
  total: number;
  details: { postTitle: string; linksAdded: number }[];
}

interface PostInfo {
  slug: string;
  title: string;
  targetKeyword: string;
  description: string;
}

// Service and location pages to include as link targets
const SITE_PAGES = [
  { title: "Airport Transfers", url: "/airport-transfers" },
  { title: "Manchester Airport Taxi", url: "/manchester-airport-taxi" },
  { title: "Birmingham Airport Taxi", url: "/birmingham-airport-taxi" },
  { title: "East Midlands Airport Taxi", url: "/east-midlands-airport-taxi" },
  { title: "Liverpool Airport Taxi", url: "/liverpool-airport-taxi" },
  { title: "London Airport Transfers", url: "/london-airport-transfers" },
  { title: "Local & National Journeys", url: "/local-national" },
  { title: "Days Out Transport", url: "/days-out" },
  { title: "Events & Tours", url: "/events-tours" },
  { title: "School Contracts", url: "/school-contracts" },
  { title: "Corporate Accounts", url: "/account-work" },
  { title: "Complex Journeys", url: "/complex-journey" },
  { title: "Every Occasion", url: "/every-occasion" },
  { title: "Alton Towers Taxi", url: "/alton-towers-taxi" },
  { title: "Taxi Stoke-on-Trent", url: "/taxi-stoke-on-trent" },
  { title: "Taxi Stafford", url: "/taxi-stafford" },
  { title: "Wheelchair Accessible Taxi", url: "/wheelchair-accessible-taxi" },
  { title: "Airport Transfer Prices", url: "/airport-transfer-prices" },
  { title: "About Us", url: "/about" },
  { title: "Contact Us", url: "/contact" },
];

function getAllPosts(): PostInfo[] {
  const blogDir = path.join(process.cwd(), CONFIG.blogContentDir);
  if (!fs.existsSync(blogDir)) return [];

  const entries = fs.readdirSync(blogDir, { withFileTypes: true });
  const posts: PostInfo[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const pagePath = path.join(blogDir, entry.name, "page.tsx");
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, "utf-8");

    const titleMatch = content.match(/title:\s*"([^"]+?)(?:\s*\|\s*365 Transfers)?"/);
    const title = titleMatch?.[1] || "";
    const descMatch = content.match(/description:\s*"([^"]+)"/);
    const description = descMatch?.[1] || "";
    const keywordsMatch = content.match(/keywords:\s*"([^"]+)"/);
    const targetKeyword = keywordsMatch
      ? keywordsMatch[1].split(",")[0].trim()
      : "";

    if (title) {
      posts.push({
        slug: entry.name,
        title,
        targetKeyword,
        description,
      });
    }
  }

  return posts;
}

export async function addInternalLinks(): Promise<LinkingResult> {
  const posts = getAllPosts();
  const details: { postTitle: string; linksAdded: number }[] = [];

  if (posts.length < 2) {
    console.log("Not enough posts for internal linking.");
    return { total: 0, details };
  }

  const anthropic = new Anthropic();
  const blogDir = path.join(process.cwd(), CONFIG.blogContentDir);

  let totalLinksAdded = 0;

  for (const post of posts) {
    const filePath = path.join(blogDir, post.slug, "page.tsx");
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Count existing internal links (Next.js Link components + standard anchor internal links)
    const existingLinkComponents = (
      fileContent.match(/<Link\s+href="\/[^"]*"/g) || []
    ).filter(
      // Exclude the "Back to Blog" navigation link
      (l) => !l.includes('href="/blog"')
    ).length;
    const existingAnchorLinks = (
      fileContent.match(/<a\s+[^>]*href="\/[^"]*"/g) || []
    ).filter((l) => !l.includes("tel:")).length;
    const totalExisting = existingLinkComponents + existingAnchorLinks;

    if (totalExisting >= 5) {
      continue;
    }

    // Get other posts
    const otherPosts = posts.filter((p) => p.slug !== post.slug);
    if (otherPosts.length === 0) continue;

    const otherPostsList = otherPosts
      .map(
        (p) =>
          `- Title: "${p.title}" | URL: /blog/${p.slug} | Keyword: "${p.targetKeyword}"`
      )
      .join("\n");

    const sitePagesList = SITE_PAGES.map(
      (p) => `- ${p.title}: ${p.url}`
    ).join("\n");

    const maxNewLinks = Math.max(1, 5 - totalExisting);

    // Split file into the part before JSX return and the JSX body
    // We only want to modify the JSX content, not imports/metadata
    const returnIndex = fileContent.indexOf("return (");
    if (returnIndex === -1) continue;

    const preamble = fileContent.slice(0, returnIndex);
    const jsxBody = fileContent.slice(returnIndex);

    const response = await anthropic.messages.create({
      model: CONFIG.contentModel,
      max_tokens: 8192,
      messages: [
        {
          role: "user",
          content: `You are adding internal links to a blog post for 365 Transfers (taxisstone.co.uk). The goal is to naturally link to related content where it makes sense contextually.

## Current Post
Title: "${post.title}"
Target keyword: "${post.targetKeyword}"

## Post JSX Body (everything from the return statement)
${jsxBody}

## Other Blog Posts Available to Link To
${otherPostsList}

## Service Pages Available to Link To
${sitePagesList}

## Existing Internal Links
This post already has ${totalExisting} internal links.

## Rules
- Add up to ${maxNewLinks} internal links where contextually relevant
- Prioritise service page links (e.g. /manchester-airport-taxi, /alton-towers-taxi) over blog-to-blog links
- Use natural anchor text that fits the sentence (not "click here" or the full title)
- Use Next.js Link component format: <Link href="/path">anchor text</Link>
- The Link import already exists at the top of the file — do NOT add it again
- Only link where it genuinely makes sense — don't force links
- Do NOT change any other content — keep everything exactly the same
- Do NOT modify existing links
- Do NOT add links to external sites
- Return the COMPLETE JSX body (from "return (" to the final "}"). No imports, no metadata, no code fences, no explanation.
- If no natural linking opportunities exist, return the body unchanged`,
        },
      ],
    });

    const newJsxBody =
      response.content[0].type === "text" ? response.content[0].text : "";

    // Count new links
    const newLinkComponents = (
      newJsxBody.match(/<Link\s+href="\/[^"]*"/g) || []
    ).filter((l) => !l.includes('href="/blog"')).length;
    const newAnchorLinks = (
      newJsxBody.match(/<a\s+[^>]*href="\/[^"]*"/g) || []
    ).filter((l) => !l.includes("tel:")).length;
    const newTotal = newLinkComponents + newAnchorLinks;
    const linksAdded = newTotal - totalExisting;

    if (linksAdded > 0) {
      // Clean any code fence wrapping from the response
      const cleanedBody = newJsxBody
        .replace(/^```tsx?\n?/gm, "")
        .replace(/^```\n?/gm, "")
        .trim();

      fs.writeFileSync(filePath, preamble + cleanedBody + "\n");
      totalLinksAdded += linksAdded;
      details.push({ postTitle: post.title, linksAdded });
      console.log(
        `Added ${linksAdded} internal links to "${post.title}"`
      );
    }
  }

  return { total: totalLinksAdded, details };
}
