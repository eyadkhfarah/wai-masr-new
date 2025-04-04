import { Post } from "@/types/notionType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturedArticle {
  post: Post;
  key: number;
}

export default function FeaturedArticle({ post }: FeaturedArticle) {
  return (
    <Link
      href={`/post/${post.properties.Slug.rich_text[0].plain_text}`}
      className="relative overflow-hidden group rounded-2xl shadow-md col-span-1 md:col-span-2 lg:col-span-2"
    >
      <Image
        src={
          post.properties.Thumbnail?.files?.[0]?.name ||
          "/default-thumbnail.jpg"
        }
        alt={post.properties.Name?.title?.[0]?.plain_text || "Default Alt Text"}
        width={500}
        height={1200}
        className="group-hover:scale-105 w-full h-[600px] object-cover transition-transform duration-300"
      />
      <div className="w-full absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4">
        <span className="text-xs w-fit bg-white text-black font-bold px-2 py-1 rounded-md">
          {post.properties.Category?.select?.name}
        </span>
        <h3 className="text-white font-bold text-4xl ">
          {post.properties.Name?.title?.[0]?.plain_text || "Default Title"}
        </h3>
        <p className="text-sm w-fit text-gray-300 mt-1">
          {post.properties.Publication?.date?.start
            ? new Date(
                post.properties.Publication.date.start
              ).toLocaleDateString("ar-EG", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Unknown Date"}
        </p>
      </div>
    </Link>
  );
}
