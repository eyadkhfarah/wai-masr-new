"use client";
import { categories } from "@/lib/categories";
import Link from "next/link";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavCategory() {
  return (
    <>
      <div className="flex items-center gap-7">
        {categories.map((category, i) => (
          <Link
            key={i}
            className="font-bold hover:text-blue-500 dark:text-white transition duration-300 ease-in-out"
            href={"/articles/" + category.link}
          >
            {category.title}
          </Link>
        ))}
      </div>
      {/* <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {categories.map((category, i) => (
                <ListItem
                  key={i}
                  title={category.title}
                  href={category.link}
                >
                  <Link
                    className="flex items-center justify-between rounded-sm px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-blue-500 dark:hover:bg-slate-800 dark:hover:text-light"
                    href={"/articles/" + category.link}
                  >
                    {category.title}
                    <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                      {category.description}
                    </span>
                  </Link>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu> */}
    </>
  );
}
