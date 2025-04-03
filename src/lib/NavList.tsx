import { NavLink } from "@/types/navLink";

export const NavList: NavLink[] = [
  {
    name: "الرئيسية",
    link: "/",
    newTab: false,
    id: 1,
  },
  {
    name: "مقالات",
    link: "/articles",
    newTab: false,
    id: 2,
  },
  {
    name: "المكتبة القومية",
    link: "https://www.maktabaqawmya.com/",
    newTab: true,
    id: 5,
  },
  {
    name: "اتعلم اللغة المصرية",
    link: "/eg-lang",
    newTab: false,
    id: 6,
  },
  {
    name: "فعاليات",
    link: "/events",
    newTab: false,
    id: 4,
  },
  {
    name: "البومات",
    link: "/images",
    newTab: false,
    id: 3,
  },
];
