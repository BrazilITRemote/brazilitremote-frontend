"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow">
      <div className="max-w-4xl mx-auto px-4 sm:px-0 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary-500">
          Brazil IT Remote
        </Link>
        <nav className="hidden sm:flex space-x-6">
          <Link
            href="#about"
            className="text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          >
            Sobre
          </Link>
          <Link
            href="#workshops"
            className="text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          >
            Oficinas
          </Link>
          <Link
            href="#organizers"
            className="text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          >
            Organizadores
          </Link>
          <Link
            href="#calendar"
            className="text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          >
            Calendário
          </Link>
          <Link
            href="#metrics"
            className="text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
          >
            Métricas
          </Link>
        </nav>

        <button
          className="sm:hidden p-2 text-gray-700 dark:text-gray-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="sm:hidden bg-white dark:bg-gray-900">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="#about"
              className="block text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
            >
              Sobre
            </Link>
            <Link
              href="#workshops"
              className="block text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
            >
              Oficinas
            </Link>
            <Link
              href="#organizers"
              className="block text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
            >
              Organizadores
            </Link>
            <Link
              href="#calendar"
              className="block text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
            >
              Calendário
            </Link>
            <Link
              href="#metrics"
              className="block text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
            >
              Métricas
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
