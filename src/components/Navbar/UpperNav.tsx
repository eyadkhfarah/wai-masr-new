"use client";

import { useEffect, useState } from "react";
import Form from "next/form";
import { FiSearch } from "react-icons/fi";
import SocialMediaIcons from "./SoicalIcons";

export default function UpperNav() {
  const [currentDate, setCurrentDate] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");

  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString("ar-EG", { dateStyle: "full" })); // Date only
      setCurrentTime(now.toLocaleTimeString("ar-EG", { timeStyle: "short" })); // Time only (No seconds)
    };

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <nav className="bg-primary text-light w-full p-3 md:block hidden">
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl md:max-w-4xl max-w-md">
        <span className="flex items-center gap-5">
          {currentDate}
          {"  "}•{"   "} {currentTime}
        </span>

        <div className="flex items-center gap-5">
          <span className="flex items-center gap-5">
            تابعنا:
            <SocialMediaIcons />
          </span>
          <Form
            action="/search"
            className="flex items-center w-fit overflow-hidden bg-white dark:bg-gray-900 rounded-lg"
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
        </div>
      </div>
    </nav>
  );
}
