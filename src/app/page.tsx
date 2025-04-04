import Image from "next/image";
import Link from "next/link";
import { fetchPosts } from "@/lib/notion";
import { RiPlayReverseLargeFill } from "react-icons/ri";

// Components
import EgyTalk from "@/components/Icons/egyTalks";
import ArtHeader from "@/components/Articles/ArtHeader";
import Btn from "@/components/Button/Btn";
import ArticleListItem from "@/components/Articles/ArticleListItem";
import FeaturedArticle from "@/components/Articles/FeaturedArticle";
import ArticleMiniCard from "@/components/Articles/ArticleMiniCard";

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
          {articles.slice(1, 5).map((post: any, i) => (
            <ArticleMiniCard key={i} post={post} />
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
          {articles.slice(0, 1).map((post: any, i) => (
            <FeaturedArticle key={i} post={post} />
          ))}

          <div className="md:col-span-2 grid h-full">
            {articles.slice(1, 4).map((post: any, i) => (
              <ArticleListItem key={i} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section>

        <Link
          href={"https://www.youtube.com/@EgyTalks"}
          className="cursor-pointer h-full relative group overflow-hidden rounded-2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Article Image with Hover Effect */}
          <Image
            className="w-full md:h-fit bg-center h-[500px] -z-20 object-cover md:object-left object-center"
            alt={"قناة EGY Talks"}
            src={`/images/egyTalks.webp`}
            width={1200}
            height={900}
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-l from-primary via-black/40 to-transparent"></div>

          {/* Text Content Overlay */}
          <div className="absolute w-full md:bottom-14 bottom-0 left-5 text-white p-5 px-16">
            <h2 className="lg:text-4xl text-2xl font-bold text-light flex items-center gap-6">
              أشترك في قناة <EgyTalk />
              <span className="sr-only">أشترك في قناة EGY Talks</span>
            </h2>
            {/* Make the date in arabic */}
            <p className="text-light text-lg md:w-xl mt-2 opacity-80">
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

