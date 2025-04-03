// import H2 from './Text/H2.svelte';
import Link from 'next/link';
import Image from 'next/image';

export default function News() {
    return (
        <>
            <h2>مواقع اتكلمت عننا</h2>
            <div className="lg:flex grid place-items-center my-20 justify-evenly items-center gap-16">
                <Link
                    href="https://www.almasryalyoum.com/news/details/2824181"
                    target="_blank"
                    aria-label="المصري اليوم"
                >
                    <Image src={"/images/news/almasryalyoum.png"} alt="almasryalyoum" width="176" height={120} className="w-48 h-auto" />
                </Link>
                <a
                    href="https://al-ain.com/article/afrocentric-civilization-ancient-egypt"
                    target="_blank"
                    aria-label="العين الاخبارية"
                >
                    <Image src={"/images/news/alan-news.png"} alt="alan-news" width="96" height={120} className="w-24 h-auto" />
                </a>
                <a
                    href="https://arabic.rt.com/society/1416288-%D9%87%D8%AC%D9%88%D9%85-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D9%85%D8%AB%D9%84-%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A-%D9%83%D9%8A%D9%81%D9%8A%D9%86-%D9%87%D8%A7%D8%B1%D8%AA-%D8%A8%D8%B3%D8%A8%D8%A8-%D8%AD%D8%AF%D9%8A%D8%AB%D9%87-%D8%B9%D9%86-%D9%85%D9%84%D9%88%D9%83-%D9%85%D8%B5%D8%B1/"
                    target="_blank"
                    aria-label="ار تي العربية"
                >
                    <Image src={"/images/news/rt.png"} alt="rt" width={112} height={100} className="w-28 h-auto" />
                </a>
                <a
                    href="https://www.alhurra.com/arabic-and-international/2023/02/21/%D9%85%D8%A7-%D9%88%D8%B1%D8%A7%D8%A1-%D8%A5%D9%84%D8%BA%D8%A7%D8%A1-%D8%AD%D9%81%D9%84-%D9%83%D9%8A%D9%81%D9%86-%D9%87%D8%A7%D8%B1%D8%AA-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1-%D8%A7%D9%84%D8%A3%D9%81%D8%A7%D8%B1%D9%82%D8%A9-%D9%85%D9%84%D9%88%D9%83-%D9%85%D8%B5%D8%B1-%D8%A7%D9%84%D8%AD%D9%82%D9%8A%D9%82%D9%8A%D9%88%D9%86%D8%9F"
                    target="_blank"
                    aria-label="الحرة"
                >
                    <Image src={"/images/news/alhurra.png"} alt="alhurra" width="176" height={130} className="w-44 h-auto" />
                </a>
            </div>
        </>
    )
}

