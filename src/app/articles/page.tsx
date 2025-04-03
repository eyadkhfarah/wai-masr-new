import ArtCard from "@/components/Articles/ArtCard";
import { categories } from "@/lib/categories";
import { fetchPosts } from "@/lib/notion";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const meta = {
  title: "المقالات",
  description: `مصر جائت ثم جاء التاريخ، مصر قصة حضارة صنعت العالم! في القسم ده، بنربط الماضي بالحاضر وبنكتشف عظمة مصر قديمًا وحديثًا  من خلال التاريخ، الشخصيات العظيمة، العلوم المصرية، الفن الراقي، الأدب العميق، المعمار اللي ملوش مثيل. كل تفصيلة بتأكد إن مصر كانت ومازالت في قلب الحضارة الإنسانية.`,
  url: "/articles",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: meta.url,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
};

export default async function page() {
  const posts = await fetchPosts();
  const articles = Array.isArray(posts?.results) ? posts.results : [];
  return (
    <>
      <section>
        <h1>كل المقالات</h1>
        <div className="flex items-center gap-7">
          {categories.map((category, i) => (
            <Link
              key={i}
              className="category"
              href={"/articles/" + category.link}
            >
              {category.title}
            </Link>
          ))}
        </div>
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
    </>
  );
}
