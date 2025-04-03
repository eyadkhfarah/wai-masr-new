"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { NavList } from "@/lib/NavList"
import Link from "next/link";
import {
  RiMenu3Line,
  RiMoonClearLine,
  RiSearch2Line,
  RiSunLine,
} from "react-icons/ri";
import UpperNav from "./UpperNav";
import Menu from "./Menu";
import { set } from "react-hook-form";
import { NavList } from "@/lib/NavList";
import { categories } from "@/lib/categories";
import NavCategory from "./NavCategory";

interface HamburgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ open, setOpen }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before accessing the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex flex-col justify-center z-50 items-center w-10 h-10 focus:outline-none cursor-pointer`}
      >
        <span
          className={`block w-6 h-0.5 bg-dark dark:bg-white transition-transform duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-dark dark:bg-white my-1 transition-opacity duration-300 ease-in-out ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-dark dark:bg-white transition-transform duration-300 ease-in-out ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Navigation Menu */}
    </div>
  );
};

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before accessing the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[25px] h-[25px]" />; // Prevent hydration mismatch
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
    >
      {theme === "dark" ? (
        <RiSunLine className="text-white" size={25} />
      ) : (
        <RiMoonClearLine size={25} />
      )}
    </button>
  );
};

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <UpperNav />
      <nav
        className={`bg-white dark:bg-dark z-30 sticky top-0 w-full px-6 p-2 shadow-md`}
      >
        <div className="mx-auto lg:max-w-7xl md:max-w-2xl max-w-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-10">
              <Link
                href="/"
                aria-label="وعي مصر"
                className="text-white border-none"
              >
                <Image
                  src={"/logo.svg"}
                  alt="لوجو وعي مصر"
                  className={`lg:h-16 h-12 dark:invert`}
                  height={38}
                  width={98}
                />
              </Link>

              <NavCategory />
            </div>

            <div
              className={`flex gap-4 items-center text-dark dark:text-white`}
            >
              <ThemeSwitcher />
              |
              <HamburgerMenu open={isOpen} setOpen={setIsOpen} />
            </div>

            {/* <span className="font-black text-sm">قلب مشروع الوعي القومي المصري </span> */}
          </div>
        </div>
      </nav>

      <Menu open={isOpen} setOpen={setIsOpen} />
    </>
  );
}

//     const [openMenu, setOpenMenu] = useState(false)
//     const [search, setSearch] = useState("")
//     const router = usePathname();

//     function handeler() {
//         const menuTab = setOpenMenu(!openMenu);
//     }

//     return (
//         <>
//             <nav
//                 className={`z-[100] bg-black lg:static w-full p-5 flex sticky top-0 transition-all ease-in-out duration-300 gap-5 lg:justify-between items-center`}
//             // className={`z-[100] ${
//             // 	hidden || $page.url.pathname != '/' ? 'bg-black lg:static' : 'bg-transparent'
//             // } w-full p-5 flex sticky top-0 transition-all ease-in-out duration-300 gap-5 lg:justify-between items-center`}
//             >
//                 <button
//                     className="text-xl lg:hidden p-3 pr-0 block cursor-pointer text-white"
//                     onClick={handeler}
//                     aria-label="menu"
//                 >
//                     <RiMenu3Line size={25} />
//                 </button>

//                 <div className="flex w-full place-items-center gap-4 items-center">
//                     <Link href="/" aria-label="وعي مصر" className="text-white border-none">
//                         <Image src={"/logo.svg"} alt="لوجو وعي مصر" className="lg:h-16 h-12" height={48} width={128} />
//                     </Link>

//                     <span className="text-white font-black lg:text-xl text-sm">قلب مشروع الوعي القومي المصري </span>
//                 </div>

//                 <div className="border-b-4 justify-self-end border-red w-fit md:flex hidden gap-4 items-center">
//                     <input
//                         type="search"
//                         className="bg-transparent border-none placeholder:text-white text-white p-0 py-3 focus:ring-0"
//                         placeholder="بحث..."
//                     />
//                     <a
//                         href={`/search-result?search=` + search}
//                         aria-label="بحث"
//                         data-sveltekit-reload
//                         className="text-white border-none"
//                     >
//                         <RiSearch2Line />
//                         {/* <Icon src={FiSearch} /> */}
//                     </a>
//                 </div>
//             </nav>

//             {/* ${
// 		hidden || $page.url.pathname != '/'
// 			? 'bg-black border-gray-900'
// 			: 'bg-transparent border-gray-400'
// 	} */}

//             <nav
//                 className={`sticky top-0  bg-black border-gray-900 z-40 text-white w-full transition-all ease-in-out duration-300 border-t p-3 text-base lg:flex justify-between items-center hidden`}
//             >
//                 <ul className="flex gap-5 list-none m-0 p-0">

//                     {NavList.map((link, index) => (
//                         <li key={index}>
//                             <Link
//                                 aria-label={`${link.name}`}
//                                 className={`hover:text-red ${router === link.link.toLowerCase()
//                                         ? "text-red"
//                                         : "text-white"
//                                     } transition-all ease-in-out duration-300`}
//                                 href={`${link.link}`}
//                                 target={`${link.newTab === false ? "_self" : "_blank"}`}
//                             >
//                                 {link.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 {/*  */}

//                 {/* <div
// 		className="opacity-50 whitespace-nowrap hidden md:flex gap-5 transition-all ease-in-out duration-200"
// 	>
// 		<span>{time}</span>

// 		<span className="flex items-center gap-5">
// 			{new Date().toLocaleDateString('ar-arab', { dateStyle: 'full' })}
// 		</span>

// 		<span className="flex items-center gap-5">
// 			{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', day: 'numeric' })}
// 			{new Date().toLocaleDateString('ar-arab', { calendar: 'coptic', month: 'long' })}
// 			{parseFloat(year) + Number(4525)}
// 		</span>
// 	</div> */}
//             </nav>
//         </>
//     )
// }
