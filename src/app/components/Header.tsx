"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
// import ThemeToggle from "./ui/ThemeToggle";

const menuItems = [
  { name: "Sobre", href: "/about" },
  { name: "Oficinas", href: "/workshops" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="relative w-full bg-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 sm:px-0 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          Brazil IT Remote
        </Link>

        <div></div>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center">
          <nav className="flex space-x-6 mr-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? "text-primary font-medium"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* <ThemeToggle /> */}
        </div>

        <button
          className="sm:hidden text-gray-700 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <RiCloseFill className={open ? "block" : "hidden"} size={32} />
          <FiMenu className={open ? "hidden" : "block"} size={28} />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`sm:hidden absolute top-full left-0 w-full bg-white ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block ${
                isActive(item.href)
                  ? "text-primary font-medium"
                  : "text-gray-700 hover:text-primary"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-200 mt-2">
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Theme</span>
              {/* <ThemeToggle /> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
