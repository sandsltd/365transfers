import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";

interface RankingData {
  keyword: string;
  position: number | null;
  previousPosition: string;
  clicks: number;
  impressions: number;
}

export interface Recommendation {
  priority: "high" | "medium" | "low";
  category: string;
  title: string;
  description: string;
}

export async function generateRecommendations(
  strategyContent: string,
  rankings: RankingData[]
): Promise<Recommendation[]> {
  const anthropic = new Anthropic();

  // Gather existing blog posts from app/blog/*/page.tsx
  const blogDir = path.join(process.cwd(), CONFIG.blogContentDir);
  const existingPosts: string[] = [];
  if (fs.existsSync(blogDir)) {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const pagePath = path.join(blogDir, entry.name, "page.tsx");
      if (!fs.existsSync(pagePath)) continue;
      const content = fs.readFileSync(pagePath, "utf-8");
      const titleMatch = content.match(/title:\s*"([^"]+?)(?:\s*\|\s*365 Transfers)?"/);
      if (titleMatch) existingPosts.push(titleMatch[1]);
    }
  }

  // Gather site pages from app/ directory (Next.js App Router)
  const appDir = path.join(process.cwd(), "app");
  const sitePages: string[] = [];
  function scanPages(dir: string, prefix: string) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (entry.name === "api" || entry.name.startsWith("_")) continue;
        scanPages(path.join(dir, entry.name), `${prefix}/${entry.name}`);
      } else if (entry.name === "page.tsx" && prefix !== "") {
        sitePages.push(prefix);
      }
    }
  }
  sitePages.push("/");
  scanPages(appDir, "");

  const rankingSummary = rankings
    .map((r) => {
      const pos = r.position !== null ? `#${r.position}` : "Not indexed";
      return `- "${r.keyword}": ${pos} (prev: ${r.previousPosition}, clicks: ${r.clicks}, impressions: ${r.impressions})`;
    })
    .join("\n");

  const response = await anthropic.messages.create({
    model: CONFIG.contentModel,
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: `You are a technical SEO consultant analysing the current state of taxisstone.co.uk, a professional taxi and transfer service based in Stone, Staffordshire. Stone is the PRIMARY target area — SEO recommendations should prioritise "Stone" keywords and local Stone visibility first, then expand to nearby areas (Stoke-on-Trent, Stafford, etc.) as secondary targets. They offer airport transfers (Manchester, Birmingham, East Midlands, Liverpool, London), local taxi services, school transport, corporate accounts, events & tours, days out, wheelchair-accessible transport, and special occasions.

## Current SEO Strategy
${strategyContent}

## Current Keyword Rankings
${rankingSummary}

## Existing Blog Posts
${existingPosts.length > 0 ? existingPosts.map((t) => `- ${t}`).join("\n") : "None yet."}

## Current Site Pages
${sitePages.map((p) => `- ${p}`).join("\n")}

## Your Task
Analyse the current SEO state and provide 3-5 actionable recommendations. Think about:

1. **New pages to create** — Are there keywords that need dedicated service pages, location pages, or comparison content? Prioritise Stone-focused pages first (e.g. /taxi-stone, /airport-taxi-stone), then expansion pages (/taxi-newcastle-under-lyme, /trentham-estate-taxi)
2. **Technical SEO improvements** — Missing structured data, meta tag improvements, internal linking gaps, schema markup opportunities
3. **Content gaps** — Topics or angles not covered by existing blog posts that would build local authority
4. **Quick wins** — Low-effort changes that could improve rankings for specific keywords (e.g. a keyword at position 8-15 that needs a content tweak to reach page 1)
5. **Local SEO opportunities** — Google Business Profile optimisation, review strategy, local citation opportunities

Important:
- Be specific and actionable — "Add FAQ schema to the airport transfers page" is better than "Improve on-page SEO"
- Reference specific keywords and their current rankings
- Consider Stone's competitive landscape first (very low competition, 2-3 local operators), then broader Staffordshire (Uber presence, school transport contracts)
- Prioritise by impact — what will move the needle most?
- These recommendations are for the site owner to action, so they need enough detail to be useful
- Use UK English

Respond in EXACTLY this JSON format, nothing else:
[
  {
    "priority": "high",
    "category": "Category Name",
    "title": "Short actionable title",
    "description": "2-3 sentences explaining what to do and why. Be specific about which pages, keywords, or technical elements to change."
  }
]`,
      },
    ],
  });

  const text =
    response.content[0].type === "text" ? response.content[0].text : "";

  try {
    const cleaned = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    console.warn("Failed to parse recommendations JSON, skipping.");
    return [];
  }
}
