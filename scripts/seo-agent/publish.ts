import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { CONFIG } from "./config";

function run(cmd: string): string {
  console.log(`> ${cmd}`);
  return execSync(cmd, { encoding: "utf-8", cwd: process.cwd() }).trim();
}

export function updateSessionLog(
  strategyContent: string,
  summary: string
): string {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const newEntry = `### ${today} — Automated SEO Agent Run
- **What was done:** ${summary}
- **Run type:** Automated (GitHub Actions)
`;

  const sessionLogMarker = "## Session Log";
  const instructionsEnd =
    "> **Instructions for future sessions:**";

  const markerIndex = strategyContent.indexOf(sessionLogMarker);
  if (markerIndex === -1) {
    return strategyContent + "\n\n" + sessionLogMarker + "\n\n" + newEntry;
  }

  const afterMarker = strategyContent.indexOf(instructionsEnd, markerIndex);
  if (afterMarker !== -1) {
    const nextNewline = strategyContent.indexOf("\n\n", afterMarker);
    const insertPoint = nextNewline !== -1 ? nextNewline + 2 : afterMarker;
    return (
      strategyContent.slice(0, insertPoint) +
      newEntry +
      "\n" +
      strategyContent.slice(insertPoint)
    );
  }

  const headerEnd = strategyContent.indexOf("\n", markerIndex);
  return (
    strategyContent.slice(0, headerEnd + 1) +
    "\n" +
    newEntry +
    "\n" +
    strategyContent.slice(headerEnd + 1)
  );
}

function updateBlogIndex(slug: string, title: string, description: string, category: string, date: string): void {
  const blogIndexPath = path.join(process.cwd(), "app/blog/page.tsx");
  if (!fs.existsSync(blogIndexPath)) return;

  let content = fs.readFileSync(blogIndexPath, "utf-8");

  // Check if the post is already in the blogPosts array
  if (content.includes(`slug: "${slug}"`)) return;

  // Add new post at the top of the blogPosts array
  const newEntry = `  {
    slug: "${slug}",
    title: "${title}",
    excerpt: "${description}",
    date: "${date}",
    category: "${category}",
  },\n`;

  const arrayStart = content.indexOf("const blogPosts = [");
  if (arrayStart === -1) return;

  const insertPoint = content.indexOf("\n", arrayStart) + 1;
  content = content.slice(0, insertPoint) + newEntry + content.slice(insertPoint);

  fs.writeFileSync(blogIndexPath, content);
  console.log(`Updated blog index with new post: "${title}"`);
}

function updateSitemap(slug: string, date: string): void {
  const sitemapPath = path.join(process.cwd(), "app/sitemap.ts");
  if (!fs.existsSync(sitemapPath)) return;

  let content = fs.readFileSync(sitemapPath, "utf-8");

  const blogUrl = `\${baseUrl}/blog/${slug}`;
  if (content.includes(blogUrl)) return;

  // Insert before the careers entry or at the end of the routes array
  const newEntry = `    {
      url: \`\${baseUrl}/blog/${slug}\`,
      lastModified: new Date("${date}"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },\n`;

  // Find a good insertion point - before the careers entry
  const careersIndex = content.indexOf("`${baseUrl}/careers`");
  if (careersIndex !== -1) {
    // Find the start of this route object
    const objStart = content.lastIndexOf("{", careersIndex);
    const lineStart = content.lastIndexOf("\n", objStart);
    content = content.slice(0, lineStart + 1) + newEntry + content.slice(lineStart + 1);
  } else {
    // Fallback: insert before the closing bracket of the routes array
    const closingBracket = content.lastIndexOf("];");
    if (closingBracket !== -1) {
      content = content.slice(0, closingBracket) + newEntry + content.slice(closingBracket);
    }
  }

  fs.writeFileSync(sitemapPath, content);
  console.log(`Updated sitemap with new blog URL: /blog/${slug}`);
}

export function publishToMain(
  strategyContent: string,
  blogSlug: string | null,
  blogTitle: string | null,
  blogDescription: string | null,
  blogCategory: string | null,
  blogDate: string | null,
  blogFilesModified: boolean = false
): void {
  const strategyPath = path.join(process.cwd(), CONFIG.strategyDocPath);
  fs.writeFileSync(strategyPath, strategyContent);

  // Update blog index and sitemap if a new post was created
  if (blogSlug && blogTitle && blogDescription && blogCategory && blogDate) {
    updateBlogIndex(blogSlug, blogTitle, blogDescription, blogCategory, blogDate);
    updateSitemap(blogSlug, blogDate);
  }

  run('git config user.name "github-actions[bot]"');
  run('git config user.email "41898282+github-actions[bot]@users.noreply.github.com"');

  // Stage strategy doc (rankings + session log)
  run(`git add ${CONFIG.strategyDocPath}`);

  // Stage blog index and sitemap
  run("git add app/blog/page.tsx");
  run("git add app/sitemap.ts");

  // Stage all blog files if internal links were modified, otherwise just the new post
  if (blogFilesModified) {
    run(`git add ${CONFIG.blogContentDir}/`);
  } else if (blogSlug) {
    run(`git add ${CONFIG.blogContentDir}/${blogSlug}/`);
  }

  const status = run("git status --porcelain");
  if (!status) {
    console.log("No changes to commit.");
    return;
  }

  const commitMsg = blogTitle
    ? `chore(seo): automated update — rankings + new blog post`
    : "chore(seo): automated update — rankings check";

  const msgFile = path.join(process.cwd(), ".commit-msg.tmp");
  fs.writeFileSync(msgFile, commitMsg);
  try {
    run("git commit -F .commit-msg.tmp");
  } finally {
    if (fs.existsSync(msgFile)) fs.unlinkSync(msgFile);
  }
  run("git pull --rebase origin main");
  run("git push origin main");
  console.log("All changes committed and pushed to main.");
}
