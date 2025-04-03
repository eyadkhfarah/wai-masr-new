import "server-only";
import { Client } from "@notionhq/client";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

// Revalidate data every 1 second in Next.js
export const revalidate = 1;

const NOTION_API_KEY = process.env.YOUR_NOTION_API_KEY;
const NOTION_API_KEY_BLOG = process.env.YOUR_NOTION_BLOG_API_KEY;
const NOTION_BLOG_DATABASE_ID = process.env.YOUR_NOTION_DATABASE_BLOG_ID;

export const notionForm = new Client({
  auth: NOTION_API_KEY,
});

export const notionBlog = new Client({
  auth: NOTION_API_KEY_BLOG,
});

// Blog

export async function fetchPosts() {
  const response = await notionBlog.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID!,
    filter: {
      property: "Status",
      status: { equals: "Live" },
    },
  });
  return response;
}

export async function fetchPostSlug(slug: string) {
  const response = await notionBlog.databases.query({
    database_id: NOTION_BLOG_DATABASE_ID!,
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
  });
  return response.results[0] as PageObjectResponse | undefined;
}

export async function fetchPostBlocks(pageId: string) {
  const response = await notionBlog.blocks.children.list({
    block_id: pageId,
  });
  return response.results as BlockObjectResponse[];
}