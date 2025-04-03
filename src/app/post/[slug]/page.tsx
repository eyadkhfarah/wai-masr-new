import Share from "@/components/Articles/Share";
import { categories } from "@/lib/categories";
import {
  fetchPostBlocks,
  fetchPostSlug,
  fetchPosts,
  notionBlog,
} from "@/lib/notion";
import { NotionPage } from "@/types/notionType";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import { console } from "inspector";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import React from "react";
import { RiUserLine } from "react-icons/ri";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = (await fetchPostSlug(slug)) as unknown as NotionPage;
  if (!post) {
    return notFound();
  }

  return {
    title: post.properties.Name.title[0].plain_text,
    description: post.properties.Summary.rich_text[0].plain_text,
    alternates: {
      canonical: `/post/${post.properties.Slug.rich_text[0].plain_text}`,
    },
    openGraph: {
      title: post.properties.Name.title[0].plain_text,
      description: post.properties.Summary.rich_text[0].plain_text,
      type: "article",
      url: `/post/${post.properties.Slug.rich_text[0].plain_text}`,
      siteName: "/",
      images: [
        {
          url: post.properties.Thumbnail.files[0].name,
          width: 1200,
          height: 630,
          alt: post.properties.Name.title[0].plain_text,
        },
      ],
    },
  };
}

export default async function PagePost({ params }: { params: Params }) {
  const slug = (await params).slug;
  const post = (await fetchPostSlug(slug)) as unknown as NotionPage;

  if (!post) return notFound();

  const content = await fetchPostBlocks(post.id);
  const siteUrl = process.env.PUBLIC_DOMAIN_URL;

  // Fetch all posts to determine navigation links
  const allPosts = await fetchPosts();

  // Sort posts by created_time (oldest first)
  const sortedPosts = allPosts.results
    .map((post: any) => post)
    .sort(
      (a, b) =>
        new Date(a.created_time).getTime() - new Date(b.created_time).getTime()
    );

  // Use the slug from params or from post properties for comparison
  const currentIndex = sortedPosts.findIndex(
    (p: any) => p.properties.Slug.rich_text[0].plain_text === slug
  );
  if (currentIndex === -1) {
    return notFound();
  }

  const publicationDate = new Date(
    post.properties.Publication.date.start
  ).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const category = categories.find(
    (cat) => cat.title === post.properties.Category.select.name
  );

  const mainCategory = categories.find((category) =>
    category.SecondaryCategory.some(
      (sub) => sub.title === post.properties.SubCategory?.select?.name
    )
  );
  const subCategory = mainCategory?.SecondaryCategory?.find(
    (sub) => sub.title === post.properties.SubCategory?.select?.name
  );

  console.log(post.properties.Tags.multi_select);

  const DateJson = new Date(post.properties.Publication.date.start).toJSON();

  // const currentPost = sortedPosts[currentIndex];
  // const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  // const nextPost =
  //   currentIndex < sortedPosts.length - 1
  //     ? sortedPosts[currentIndex + 1]
  //     : null;

  const render = new NotionRenderer({
    client: notionBlog,
  });

  // Render the Notion blocks to HTML
  const html = await render.render(...content);

  render.use(hljsPlugin({}));
  render.use(bookmarkPlugin(undefined));

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    url: siteUrl + "/post/" + post.properties.Slug.rich_text[0].plain_text,
    headline: post.properties.Name.title[0].plain_text,
    image: post.properties.Thumbnail.files[0].name,
    description: post.properties.Summary.rich_text[0].plain_text,
    section: post.properties.Category.select.name,
    keywords: post.properties.Tags.multi_select.map((tag) => tag.name),
    datePublished: DateJson,
    dateModified: post.last_edited_time,
      publisherName: "وعي مصر",
      publisherLogo: siteUrl + "logo.png",
      author: post.properties.Author.select.name,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": siteUrl + "/post/" + post.properties.Slug.rich_text[0].plain_text,
      },
  };

  const JsonLdImage = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: post.properties.Thumbnail.files[0].name,
    creditText: "وعي مصر",
    license: siteUrl + "/terms",
    acquireLicensePage: siteUrl + "/terms",
    creator: {
      "@type": "Person",
      name: "وعي مصر",
    },
    copyrightNotice: "وعي مصر",
  };

  return (
    <>
      <section className="">
        <div className="grid gap-4">
          <div className="flex items-center gap-6">
            <Link
              href={"/articles/" + category?.link}
              className="p-2 bg-primary font-bold text-light dark:bg-light dark:text-dark"
            >
              {post.properties.Category.select.name}
            </Link>
            <Link
              href={"/articles/" + category?.link + "/" + subCategory?.slug}
              className="p-2 bg-primary font-bold text-light dark:bg-light dark:text-dark"
            >
              {post.properties.SubCategory.select.name}
            </Link>
            <div className="dark:text-white">{publicationDate}</div>
            <span>•</span>
            <div className="dark:text-white">{publicationDate}</div>
          </div>
          <h1 className="prose dark:prose-invert text-primary dark:text-white md:text-[4rem] text-4xl w-fit">
            {post.properties.Name.title[0].plain_text}
          </h1>

          <p className="dark:text-white">
            {post.properties.Summary.rich_text[0].plain_text}
          </p>

          <div className="flex justify-between">
            <div className="flex items-center gap-5 dark:text-white">
              <div className="p-2 rounded-full bg-primary text-light dark:bg-light dark:text-dark">
                <RiUserLine className="text-xl" />
              </div>

              {post.properties.Author.select.name}
            </div>

            <Share
              title={post.properties.Name.title[0].plain_text}
              url={
                siteUrl +
                "/post/" +
                post.properties.Slug.rich_text[0].plain_text
              }
            />
          </div>
        </div>
        <Image
          className="rounded-2xl"
          alt={post.properties.Name.title[0].plain_text}
          src={`${post.properties.Thumbnail.files[0].name}`}
          width={1200}
          height={850}
        />
        <div className="grid grid-cols-4 gap-6 place-content-start">
          <div className="col-span-1"></div>
          <article
            className="prose prose-lg col-span-2 prose-headings:text-primary prose-img:rounded-2xl prose-strong:font-bold dark:prose-invert prose-a:text-primary dark:prose-headings:text-light prose-a:no-underline"
            dangerouslySetInnerHTML={{ __html: html }}
          ></article>
          <aside className="col-span-1">
            <h2>مقالات هتعجبك</h2>
            <div className=""></div>
          </aside>
        </div>
      </section>

      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLdImage) }}
      />
    </>
  );
}

{
  /* <div className="col-span-1"></div>
        <article className="prose prose-img:rounded-2xl prose-strong:font-bold dark:prose-invert prose-a:text-primary prose-a:no-underline mx-auto lg:max-w-6xl md:max-w-2xl max-w-xs md:mt-8 my-8 grid gap-8 col-span-2">
        
        </article>
        <aside className="col-span-1"></aside> */
}
