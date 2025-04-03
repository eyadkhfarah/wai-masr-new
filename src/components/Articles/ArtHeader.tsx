import { Post } from "@/types/notionType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const siteUrl = process.env.PUBLIC_DOMAIN_URL

interface ArtHeaderProps {
  post: Post;
  index: number;
}

export default function ArtHeader({ post, index }: ArtHeaderProps) {
  const publicationDate = new Date(post.properties.Publication.date.start).toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Link href={"/post/" + post.properties.Slug.rich_text[0].plain_text} key={index} className="cursor-pointer relative group overflow-hidden rounded-2xl">
      {/* Article Image with Hover Effect */}
      <Image
        className="w-full h-[550px] -z-20 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        alt={post.properties.Name.title[0].plain_text}
        src={`${post.properties.Thumbnail.files[0].name}`}
        width={1200}
        height={900}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Text Content Overlay */}
      <div className="absolute w-full bottom-5 left-5 text-white p-5 px-16">
        <p className=" uppercase font-semibold opacity-80">{post.properties.Category.select.name}</p>
        <h2 className="text-4xl font-bold text-light">{post.properties.Name.title[0].plain_text}</h2>
        {/* Make the date in arabic */}
        <p className="text-sm mt-2 opacity-80">{publicationDate} · {post.properties.Author.select.name}</p>
      </div>
    </Link>
  );
}
