"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="z-50 relative">
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed flex items-center justify-center top-0 left-1/2 h-[5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center h-3/4"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="px-3 py-1 rounded-full hover:bg-gray-200 hover:text-gray-800 active:bg-gray-400 active:text-gray-950 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Navbar;
