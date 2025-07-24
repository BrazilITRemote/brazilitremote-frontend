"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";

const menuItems = [
  { name: "Eventos", href: "/#eventos" },
  { name: "Organizadores", href: "/#organizadores" },
  { name: "Vagas", href: "/vagas" },
  { name: "Sobre", href: "/about" },
];

const respectUserThemePreference = false;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (respectUserThemePreference &&
        !savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <nav className="container mx-auto px-4 flex justify-between items-center py-3">
        <Link
          href="/"
          className="font-bold text-xl text-slate-800 dark:text-white flex items-center gap-3"
        >
          <Image
            alt="Logo Brazil IT Remote"
            src="/images/bir-logo.png"
            width={48}
            height={48}
            className="rounded-full p-1 border border-gray-100 bg-[#fecb22] dark:bg-gray-300 dark:border-transparent transition-colors duration-150 ease-in-out"
          />
          <span className="">Brazil IT Remote</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop menu */}
          <div className="hidden sm:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/#comunidade"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Junte-se ao Discord
            </Link>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            className="cursor-pointer text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none rounded-lg text-sm p-2.5"
          >
            <FiMoon className={`${darkMode ? "hidden" : "block"} w-5 h-5`} />
            <FiSun className={`${darkMode ? "block" : "hidden"} w-5 h-5`} />
          </button>

          {/* Mobile menu button */}
          <button
            className="w-8 sm:hidden text-slate-800 dark:text-white h-8"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <RiCloseFill className={open ? "block" : "hidden"} size={32} />
            <FiMenu className={open ? "hidden" : "block"} size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav
        className={`sm:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-slate-400 dark:border-slate-800 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Link
            href="/#comunidade"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center mt-4"
            onClick={() => setOpen(false)}
          >
            Junte-se ao Discord
          </Link>
        </div>
      </nav>
    </header>
  );
}
