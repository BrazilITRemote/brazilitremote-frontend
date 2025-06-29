"use client";

import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <section className="relative text-center py-20 md:py-32 bg-slate-50 dark:bg-gray-900">
      <div className="relative container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Conexões humanas para quem vive de tecnologia.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
          Somos uma comunidade de profissionais de TI que promovem workshops e
          eventos online, focados em aprendizado colaborativo e crescimento
          mútuo.
        </p>

        {/* Stats Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
          <Link
            href="https://www.facebook.com/groups/BrazilCanadaIT"
            className="block"
          >
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-black/20 hover:shadow-xl transition-shadow">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                6.9k+
              </p>
              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Membros no Facebook
              </p>
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/groups/8365824/"
            className="block"
          >
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-black/20 hover:shadow-xl transition-shadow">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                360+
              </p>
              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Membros no LinkedIn
              </p>
            </div>
          </Link>

          <Link href="https://discord.gg/4AVYUCdF2P" className="block">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg shadow-slate-200/50 dark:shadow-black/20 ring-2 ring-blue-500/50 dark:ring-blue-500/70 hover:shadow-xl transition-shadow">
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                110+
              </p>
              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Membros no Discord
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
