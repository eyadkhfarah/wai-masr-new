import { fetchPosts } from "../../lib/notion";
import RSS from "rss";

// Revalidate this page every 1 second
export const revalidate = 1;

export async function GET() {
  const siteUrl =
    process.env.NEXT_PUBLIC_DOMAIN_URL ||
    "https://w3ieg.com";

  // Create a new feed instance each time GET runs
  const feed = new RSS({
    title: "وعي مصر",
    description: "نبض التيار القومي المصري!",
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    copyright: `${new Date().getFullYear()} Designs By Eyad`,
    language: "en",
    pubDate: new Date(),
  });

  // // Fetch posts from Notion
  const posts = await fetchPosts();

  // // Loop over each post and add an item to the RSS feed
  // posts.results.forEach((post: any) => {
  //   // Safely extract fields in case they're missing
  //   const title =
  //     post.properties?.Name?.title?.[0]?.plain_text || "Untitled Post";
  //   const slug =
  //     post.properties?.Slug?.rich_text?.[0]?.plain_text || "missing-slug";
  //   const date =
  //     post.properties?.Publication?.date?.start || new Date().toISOString();
  //   const description =
  //     post.properties?.Subtitle?.rich_text?.[0]?.plain_text || "";

  //   feed.item({
  //     title,
  //     guid: `${siteUrl}/blog/${slug}`,
  //     url: `${siteUrl}/blog/${slug}`,
  //     date,
  //     description,
  //     author: "Eyad Farah",
  //   });
  // });

  // // Generate the XML with indentation
  // const xml = feed.xml({ indent: true });

  // // Return as a Response
  // return new Response(xml, {
  //   headers: {
  //     "Content-Type": "application/rss+xml; charset=utf-8",
  //   },
  };

