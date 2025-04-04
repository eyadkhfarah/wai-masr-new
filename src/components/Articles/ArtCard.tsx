import { Post } from "@/types/notionType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const siteUrl = process.env.PUBLIC_DOMAIN_URL;

interface ArtHeaderProps {
  post: Post;
  index: number;
}

export default function ArtCard({ post, index }: ArtHeaderProps) {
  return (
    <Link
      key={index}
      href={"/post/" + post.properties.Slug.rich_text[0].plain_text}
      className="grid overflow-hidden hover:scale-105 transition-transform ease-in-out duration-300 bg-white dark:bg-primary rounded-2xl"
    >
      <Image
        src={
          post.properties.Thumbnail?.files?.[0]?.name ||
          "/default-thumbnail.jpg"
        }
        alt={post.properties.Name?.title?.[0]?.plain_text || "Default Alt Text"}
        width={500}
        height={300}
        className="w-full"
      />
      <div className="p-5 grid gap-7">
        <div className="grid">
          <h2 className="text-2xl mb-3 mt-0">
            {post.properties.Name?.title?.[0]?.plain_text || "Default Title"}
          </h2>
          <p className="dark:text-light/40 text-dark/50 line-clamp-2">
            {post.properties.Summary?.rich_text?.[0]?.plain_text ||
              "No Summary"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs w-fit bg-primary text-light dark:bg-light dark:text-primary font-bold px-2 py-1 rounded-md">
            {post.properties.Category?.select?.name}
          </span>
          <p className="dark:text-light/80 text-xs font-bold">
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
      </div>
    </Link>
  );
}
