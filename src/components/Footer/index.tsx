"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Email from "./Email";
import {
  RiArrowLeftLine,
  RiFacebookFill,
  RiInstagramLine,
  RiTelegram2Fill,
  RiTwitterXLine,
  RiYoutubeFill,
} from "react-icons/ri";

import { footerLink } from "@/lib/footerLink";
import { NavList } from "@/lib/NavList";
import { ContactList } from "@/lib/ContactList";
import { categories } from "@/lib/categories";

export default function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="grid gap-8 p-5 w-full md:p-7 md:px-32 pb-24 bg-primary text-white">
      <div className="mx-auto lg:max-w-7xl md:max-w-2xl max-w-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* القسم الأول: الاشتراك */}
          <div className="grid col-span-1 md:col-span-2">
            <h3 className="text-center md:text-right text-light">
              خليك مطّلعاً معانا على أحدث الأخبار والقصص والرؤى من مصر والعالم.
            </h3>
            <div className="flex justify-center md:justify-start">
              <Email />
            </div>

            {/* القوائم */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 mt-5">
              <div className="md:col-span-1">
                <h3 className="font-bold text-center md:text-right text-light">
                  الصفحات
                </h3>
                <ul className="grid gap-3 text-center md:text-right text-sm">
                  {NavList.map((link, index) => (
                    <li key={index}>
                      <Link className="text-gray-500 transition-all ease-in-out duration-300 hover:text-light" href={`${link.link}`}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✅ إخفاء هذا القسم في الموبايل */}
              <div className="hidden md:block md:col-span-1 w-full">
                <h3 className="font-bold text-center md:text-right text-light">
                  الأقسام
                </h3>
                <div className="grid grid-cols-2 gap-4 md:gap-16">
                  <ul className="grid gap-3 text-sm">
                    {categories.slice(0, 5).map((category, i) => (
                      <li key={i}>
                        <Link
                          className="text-gray-500 whitespace-nowrap hover:text-light transition-all ease-in-out duration-300"
                          href={"/articles/" + category.link}
                        >
                          {category.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="grid gap-3 text-sm">
                    {categories.slice(5, 11).map((link, index) => (
                      <li key={index}>
                        <Link
                          className="text-gray-500 whitespace-nowrap hover:text-light transition-all ease-in-out duration-300"
                          href={`${link.link}`}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-1">
                <h3 className="font-bold text-center md:text-right text-light">
                  تواصل ومصادر
                </h3>
                <ul className="grid gap-3 text-center md:text-right text-sm">
                  {ContactList.map((link, index) => (
                    <li key={index}>
                      <Link className="text-gray-500 hover:text-light transition-all ease-in-out duration-300" href={`${link.link}`}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* القسم الثاني: روابط التواصل الاجتماعي */}
          <div className="grid gap-4">
            {[
              {
                href: "https://web.facebook.com/W3i.EG",
                icon: RiFacebookFill,
                text: "فيسبوك",
              },
              {
                href: "https://www.instagram.com/w3i.eg",
                icon: RiInstagramLine,
                text: "إنستاجرام",
              },
              {
                href: "https://www.twitter.com/W3iEgy",
                icon: RiTwitterXLine,
                text: "تويتر (X)",
              },
              {
                href: "https://t.me/W3iEgy",
                icon: RiTelegram2Fill,
                text: "تليجرام",
              },
              {
                href: "https://www.youtube.com/@w3istation",
                icon: RiYoutubeFill,
                text: "يوتيوب",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                className="font-black group border-b-2 pb-2 flex justify-between items-center transition-all w-full ease-in-out duration-300"
              >
                <div className="flex gap-4 items-center">
                  <span className="p-2 text-2xl text-white rounded-md bg-black group-hover:bg-blue-500 transition-colors duration-500">
                    <item.icon />
                  </span>
                  <p className="transition-all ease-in-out duration-300 text-light group-hover:text-light">{item.text}</p>
                </div>
                <RiArrowLeftLine className="group-hover:rotate-45 transition ease-in-out duration-300 text-xl" />
              </Link>
            ))}
          </div>
        </div>

        {/* القسم السفلي */}
        <div className="flex flex-col md:flex-row justify-between text-sm items-center gap-4 mt-8 md:gap-0">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-9 text-center md:text-right">
            <Link href="/">
              <Image
                src={"/logo.svg"}
                alt="لوجو وعي - مصر"
                className="h-12 lg:h-16 invert"
                height={32}
                width={130}
              />
            </Link>
            <span>|</span>
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-9">
              {footerLink.map((link, index) => (
                <li key={index}>
                  <Link
                    href={`${link.link}`}
                    className="text-gray-500 transition-all ease-in-out duration-300 hover:text-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-right">
            <p>© {new Date().getFullYear()} وعي مصر - جميع الحقوق محفوظة</p>
            <p>
              تم بناء الموقع من خلال{" "}
              <Link
                href="https://designs-by-eyad.vercel.app"
                className="transition-all ease-in-out duration-300 underline hover:text-light"
              >
                Designs By Eyad
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
