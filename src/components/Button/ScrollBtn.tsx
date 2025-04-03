"use client"

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { RiArrowUpLine } from 'react-icons/ri';

export default function ScrollButton() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${visible ? 'lg:bottom-14 bottom-5' : 'bottom-[-9em]'
        } border-2 border-black hover:border-black cursor-pointer flex gap-4 items-center hover:bg-primary transition-all ease-in-out duration-300 fixed right-5 text-white bg-black p-3`}>
      <div className="flex items-center gap-3">
        طلع لفوق <span><RiArrowUpLine className="text-xl" /></span>
      </div>
    </button>
  );
}