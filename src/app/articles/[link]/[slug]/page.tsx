import { categories } from "@/lib/categories";
import { Metadata } from "next";
// import { fetchPosts } from "@/lib/notion";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ArtCard from "@/components/Articles/ArtCard";
import Link from "next/link";
import { fetchPosts } from "@/lib/notion";

interface PageProps {
  params: {
    link: string;
    slug: string;
  };
}

// ✅ Fixed: Correctly generates static paths for dynamic routing
export async function generateStaticParams() {
  const paths = [];
  for (const category of categories) {
    for (const sub of category.SecondaryCategory) {
      paths.push({
        link: category.link,
        slug: sub.slug,
      });
    }
  }
  return paths;
}

// ✅ Fixed: Correctly extracts metadata from params
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Find the primary category that contains this secondary category.
  const mainCategory = categories.find((category) =>
    category.SecondaryCategory.some((sub) => sub.slug === slug)
  );

  const subCategory = mainCategory?.SecondaryCategory.find(
    (sub) => sub.slug === slug
  );

  const filter = categories.filter((cat) =>
    cat.SecondaryCategory?.some((cat) => cat.slug === slug)
  );

  if (!mainCategory || !subCategory) {
    return {
      title: "القسم غير موجود",
      description: "القسم اللي بتدور عليه مش موجود",
    };
  }
  console.log(subCategory?.slug);

  return {
    title: `${subCategory?.title}`,
    description: `${subCategory?.description}`,
    alternates: {
      canonical:
        "/articles/" +
          `${filter.map((filters) => filters.link)}/` +
          subCategory.slug || "/articles",
    },
    openGraph: {
      title: `${subCategory?.title}`,
      description: `${subCategory?.description}`,
      url:
        "/articles/" +
          `${filter.map((filters) => filters.link)}/` +
          subCategory.slug || "/articles",
    },
  };
}

// ✅ Fixed: Handles missing categories with fallback UI
export default async function SubCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  // Find the primary category that contains this secondary category.
  const mainCategory = categories.find((category) =>
    category.SecondaryCategory.some((sub) => sub.slug === slug)
  );

  const subCategory = mainCategory?.SecondaryCategory.find(
    (sub) => sub.slug === slug
  );

  const filter = categories.filter((cat) =>
    cat.SecondaryCategory?.some((cat) => cat.slug === slug)
  );

  const posts = await fetchPosts();
  const articles = Array.isArray(posts?.results)
    ? posts.results.filter(
        (post: any) =>
          post.properties.SubCategory?.select?.name === subCategory?.title
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
          <BreadcrumbItem className="font-bold">
            <Link
              className="hover:text-blue-500 transition-colors"
              href={"/articles/" + filter.map((filters) => filters.link)}
            >
              {filter.map((filters) => filters.title)}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{subCategory?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1>{subCategory?.title}</h1>
      <p>{subCategory?.description}</p>
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
