import Image from "next/image";
import React from "react";
import Btn from "../Button/Btn";
import Link from "next/link";


interface Post {
  properties: {
    Slug?: {
      rich_text: { plain_text: string; }[];
    };
    Thumbnail?: { files?: { name: string }[] };
    Name?: { title?: { plain_text: string }[] };
    Category?: { select?: { name: string } };
    Publication?: { date?: { start: string } };
    Summary?: { rich_text: { plain_text: string }[] };
  };
}

interface ArtBentoGrid1Props {
  post: Post[];
}

export default function ArtBentoGrid1({ post }: ArtBentoGrid1Props) {
  return (
    <div className="grid grid-cols-4 gap-9">
          {post.map(
            (post: any, i) =>
              i < 1 && (
                <Link
                  href={"/post/" + post.properties.Slug.rich_text[0].plain_text}
                  key={i}
                  className={`relative overflow-hidden group rounded-2xl shadow-md md:col-span-2 lg:col-span-2 row-span-2`}
                >
                  <Image
                    src={
                      post.properties.Thumbnail?.files?.[0]?.name ||
                      "/default-thumbnail.jpg"
                    }
                    alt={
                      post.properties.Name?.title?.[0]?.plain_text ||
                      "Default Alt Text"
                    }
                    width={500}
                    height={1200}
                    className="group-hover:scale-105 w-full h-[600px] object-cover transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4">
                    <span className="text-xs w-fit bg-white text-black font-bold px-2 py-1 rounded-md">
                      {post.properties.Category?.select?.name}
                    </span>

                    <h3 className="text-white font-bold text-4xl ">
                      {post.properties.Name?.title?.[0]?.plain_text ||
                        "Default Title"}
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
              )
          )}

          <div className="col-span-2 grid h-full">
            {post.slice(1).map(
              (post: any, i) =>
                i < 3 && (
                  <div
                    className="flex justify-between items-center gap-10 border-b-2 py-5"
                    key={i}
                  >
                    <div className="grid">
                      <h3 className="text-dark dark:text-light font-bold text-xl">
                        {post.properties.Name?.title?.[0]?.plain_text ||
                          "Default Title"}
                      </h3>
                      <p className="dark:text-light/50 line-clamp-2">
                        {post.properties.Summary.rich_text[0].plain_text}
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
                      link={
                        "/post/" + post.properties.Slug.rich_text[0].plain_text
                      }
                      newTab={false}
                    />
                  </div>
                )
            )}
          </div>
        </div>
  );
}
