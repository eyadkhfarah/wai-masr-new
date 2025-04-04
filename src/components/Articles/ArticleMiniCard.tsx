import { Post } from "@/types/notionType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ArticleMiniCard {
  post: Post;
  key: number;
}

export default function ArticleMiniCard({ post }: ArticleMiniCard) {
  return (
    <Link
      href={`/post/${post.properties.Slug.rich_text[0].plain_text}`}
      className="relative group overflow-hidden rounded-2xl w-full sm:w-[48%] lg:w-[23%]"
    >
      <Image
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
        alt={post.properties.Name?.title?.[0]?.plain_text || "Article Image"}
        src={
          post.properties.Thumbnail?.files?.[0]?.name ||
          "/default-thumbnail.jpg"
        }
        width={400}
        height={400}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      <div className="absolute w-full bottom-1 left-5 text-white p-5 px-16">
        <p className="uppercase text-sm font-semibold opacity-80">
          {post.properties.Category?.select?.name}
        </p>
        <h2 className="md:text-lg line-clamp-2 text-2xl font-bold text-light">
          {post.properties.Name?.title?.[0]?.plain_text || "No Title"}
        </h2>
      </div>
    </Link>
  );
}
