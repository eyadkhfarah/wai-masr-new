"use client";

import { Menu, X } from "lucide-react";
import { NavList } from "@/lib/NavList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Form from "next/form";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTelegram2Fill,
  RiTwitterXLine,
  RiYoutubeFill,
} from "react-icons/ri";

interface NavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Navbar({ open, setOpen }: NavbarProps) {
  const router = usePathname();
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      {open && (
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            open ? "bg-black/80" : "bg-black/0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        ></div>
      )}
      <nav
        className={`fixed top-0 right-0 z-50 h-dvh dark:bg-primary bg-white w-full md:w-96 shadow-md p-4 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="cursor-pointer w-fit h-fit p-2 rounded-full dark:text-light dark:hover:bg-light dark:hover:text-dark hover:bg-primary hover:text-light transition-all ease-in-out duration-300"
          onClick={() => setOpen(false)}
        >
          <X size={32} />
        </button>
        <Form
          action="/search"
          className="flex my-8 items-center w-full md:hidden overflow-hidden bg-white dark:bg-gray-900 rounded-lg"
        >
          <button
            type="submit"
            className="p-3 text-primary dark:text-light cursor-pointer flex items-center justify-center"
          >
            <FiSearch size={20} />
          </button>
          <input
            type="text"
            name="query"
            value={query}
            onChange={handleInputChange}
            placeholder="ابحث هنا..."
            className="focus:outline-none border-0 bg-transparent focus:ring-0 dark:text-light focus:ring-blue-500 text-black"
          />
        </Form>
        <div className="flex flex-col justify-between">
          <ul className="space-y-5 h-fit mt-5">
            {NavList.map((link, i) => {
              const isActive = router === link.link.toLowerCase();
              return (
                <li key={i}>
                  <Link
                    href={`${link.link}`}
                    className={`font-bold text-3xl transition-all ease-in-out duration-300 ${
                      isActive
                        ? "text-primary dark:text-light"
                        : "dark:text-slate-600 dark:hover:text-light hover:text-primary"
                    }`}
                    target={link.newTab ? "_blank" : "_self"}
                    rel={link.newTab ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 mt-24 md:hidden">
            <p className="text-white">تابعنا:</p>
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
                className="font-black group flex justify-between items-center transition-all w-full ease-in-out duration-300"
              >
                <span className="p-2 text-2xl text-white rounded-md bg-black">
                  <item.icon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
