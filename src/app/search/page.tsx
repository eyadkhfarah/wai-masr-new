// app/search/page.tsx

import { Metadata } from "next";

type SearchPageParams = Promise<{
  query: string;
  [key: string]: string | string[] | undefined;
}>;

type SearchPageProps = {
  searchParams: SearchPageParams;
};

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  const query = (await searchParams).query;
  const title = query ? `نتائج البحث لـ "${query}"` : "صفحة البحث";
  const description = query
    ? `عرض نتائج البحث المتعلقة بـ "${query}".`
    : "استخدم صفحة البحث للعثور على المحتوى المطلوب.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

// Revalidate this page every 1 second
export const revalidate = 1;

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = (await searchParams).query;

  // Implement your search logic here using the 'query' parameter

  return (
    <section>
      <h1>بتدور علي: {query}</h1>
      {/* Render search results here */}
    </section>
  );
}
