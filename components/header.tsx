"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* backdrop pill */}
      <motion.div
        className="fixed top-0 left-1/2 h-[3.25rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[44rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      {/* nav — scrollable on mobile, centred pill on desktop */}
      <nav className="fixed top-0 left-0 right-0 h-[3.25rem] flex items-center sm:top-6 sm:left-1/2 sm:right-auto sm:w-auto sm:-translate-x-1/2">
        <ul className="flex w-full flex-nowrap items-center justify-around overflow-x-auto px-4 gap-1 text-[0.82rem] font-medium text-gray-500 scrollbar-hide sm:w-[initial] sm:justify-center sm:gap-5 sm:px-0 sm:text-[0.9rem] sm:overflow-visible">
          {links.map((link) => (
            <motion.li
              className="flex-shrink-0 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-2 py-2 hover:text-gray-950 transition whitespace-nowrap dark:text-gray-500 dark:hover:text-gray-300 sm:px-3 sm:py-3",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
