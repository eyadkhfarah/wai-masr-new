import React from "react";
import Btn from "../Button/Btn";
import { Post } from "@/types/notionType";

interface ArticleListItem {
  post: Post;
  key: number;
}

export default function ArticleListItem({ post }: ArticleListItem) {
  return (
    <div className="lg:flex grid justify-between items-center gap-10 border-b-2 py-5">
      <div className="grid">
        <h3 className="text-dark dark:text-light font-bold text-xl">
          {post.properties.Name?.title?.[0]?.plain_text || "Default Title"}
        </h3>
        <p className="dark:text-light/50 line-clamp-2">
          {post.properties.Summary?.rich_text?.[0]?.plain_text || "No Summary"}
        </p>
        <div className="flex items-center gap-5 mt-3">
          <span className="text-xs w-fit bg-primary text-light dark:bg-light dark:text-primary font-bold px-2 py-1 rounded-md">
            {post.properties.Category?.select?.name}
          </span>
          <p className="dark:text-light/80">
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
      <Btn
        label="أقرا أكتر"
        className="md:w-full w-fit"
        link={`/post/${post.properties.Slug.rich_text[0].plain_text}`}
        newTab={false}
      />
    </div>
  );
}
