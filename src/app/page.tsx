import Image from "next/image";
import Link from "next/link";
import { fetchPosts } from "@/lib/notion";
import ArtHeader from "@/components/Articles/ArtHeader";
import Btn from "@/components/Button/Btn";
import egyTalk from "@/components/Icons/egyTalks";
import { RiPlayReverseLargeFill } from "react-icons/ri";
import EgyTalk from "@/components/Icons/egyTalks";

// Revalidate this page every 1 second
export const revalidate = 1;

export default async function Home() {
  const posts = await fetchPosts();
  const articles = Array.isArray(posts?.results) ? posts.results : [];

  return (
    <>
      <section>
        {posts.results.slice(0, 1).map((post: any, index) => (
          <ArtHeader key={index} post={post} index={index} />
        ))}

        <div className="flex flex-wrap justify-between gap-5">
          {articles.slice(1, 5).map((post, i) => (
            <ArticleCard key={i} post={post} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2>أخر المقالات</h2>
          <Btn
            label="شوف أكتر"
            link="/articles/"
            newTab={false}
            className="w-48"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-9 mt-6">
          {articles.slice(0, 1).map((post, i) => (
            <FeaturedArticle key={i} post={post} />
          ))}

          <div className="col-span-2 grid h-full">
            {articles.slice(1, 4).map((post, i) => (
              <ArticleListItem key={i} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <Link
          href={"https://www.youtube.com/@EgyTalks"}
          className="cursor-pointer relative group overflow-hidden rounded-2xl"
        >
          {/* Article Image with Hover Effect */}
          <Image
            className="w-full -z-20 object-cover"
            alt={"قناة EGY Talks"}
            src={`/images/egyTalks.webp`}
            width={1200}
            height={900}
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-l from-primary via-black/40 to-transparent"></div>

          {/* Text Content Overlay */}
          <div className="absolute w-full bottom-14 left-5 text-white p-5 px-16">
            <h2 className="text-4xl font-bold text-light flex items-center gap-6">
              أشترك في قناة <EgyTalk />
              <span className="sr-only">أشترك في قناة EGY Talks</span>
            </h2>
            {/* Make the date in arabic */}
            <p className="text-lg w-xl mt-2 opacity-80">
              وأتفرج علي أحدث الفيديوهات عن مصر وتاريخ مصر والقومية المصرية وأهم القضايا في
              الموسم التاني
            </p>

            <div className="flex font-bold items-center gap-5 mt-6">
              <span className="bg-primary rounded-full p-3 text-3xl text-light group-hover:bg-light group-hover:text-dark transition-all duration-300 ease-in-out">
                <RiPlayReverseLargeFill />
              </span>
              أشترك في القناة
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}

function ArticleCard({ post }: any) {
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

function FeaturedArticle({ post }: any) {
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

function ArticleListItem({ post }: any) {
  return (
    <div className="flex justify-between items-center gap-10 border-b-2 py-5">
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
        link={`/post/${post.properties.Slug.rich_text[0].plain_text}`}
        newTab={false}
      />
    </div>
  );
}
