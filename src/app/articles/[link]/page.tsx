import { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/categories";
import { fetchPosts } from "@/lib/notion";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ArtCard from "@/components/Articles/ArtCard";

interface PageProps {
  params: {
    link: string;
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    link: category.link,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { link } = await params;
  const category = categories.find((cat) => cat.link === link);

  return {
    title: `${category?.title || "Category Not Found"}`,
    description: `${category?.description || "This category does not exist."}`,
    alternates: {
      canonical: "/articles/" + category?.link || "/articles",
    },
    openGraph: {
      title: `${category?.title ?? "Category Not Found"}`,
      description: `${category?.description ?? "Description not available"}`,
      url: "/articles/" + category?.link || "/articles",
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { link } = await params;
  const category = categories.find((cat) => cat.link === link);

  const posts = await fetchPosts();
  const articles = Array.isArray(posts?.results)
    ? posts.results.filter(
        (post: any) =>
          post.properties.Category?.select?.name === category?.title
      )
    : [];

  return (
    <section>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="font-bold">
            <Link
              className="hover:text-blue-500 transition-colors"
              href="/articles"
            >
              المقالات
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{category?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1>{category?.title}</h1>
      <ul className="flex flex-wrap gap-4">
        {category?.SecondaryCategory.map((sub, i) => (
          <li key={i}>
            <Link className="category" href={`${category.link}/${sub.slug}`}>
              {sub.title}
            </Link>
          </li>
        ))}
      </ul>

      {articles.length > 0 ? (
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {articles.map((post: any, i) => (
            <ArtCard index={i} post={post} />
          ))}
        </div>
      ) : (
        <section className="flex flex-col items-center justify-center w-full h-96">
          <p className="text-center text-4xl font-bold text-primary dark:text-light">
            لا توجد مقالات في هذا القسم.
          </p>
        </section>
      )}
    </section>
  );
}
