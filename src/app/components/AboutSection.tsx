"use client";

import Link from "next/link";
import React from "react";

const statsData = [
  {
    id: 1,
    value: "200+",
    label: "Membros no Discord",
    href: "https://discord.gg/4AVYUCdF2P",
    hasSpecialWrapper: true,
  },
  {
    id: 2,
    value: "100+",
    label: "Seguidores no YouTube",
    href: "https://www.youtube.com/@BrazilITRemote",
    hasSpecialWrapper: false,
  },
  {
    id: 3,
    value: "450+",
    label: "Membros no LinkedIn",
    href: "https://www.linkedin.com/groups/8365824/",
    hasSpecialWrapper: false,
  },
  {
    id: 4,
    value: "6.7k+",
    label: "Membros no Facebook",
    href: "https://www.facebook.com/groups/BrazilCanadaIT",
    hasSpecialWrapper: false,
  },
];

export default function AboutSection() {
  return (
    <section className="relative text-center py-20 md:py-32 bg-slate-50 dark:bg-gray-900">
      <div className="relative container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Conexões humanas para quem vive de tecnologia.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
          Somos uma comunidade de profissionais de TI que promovem workshops e
          eventos online, focados em aprendizado colaborativo e crescimento
          mútuo.
        </p>

        {/* Stats Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {statsData.map((stat) => {
            const cardContent = (
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <p className="text-4xl font-bold text-green-700 dark:text-blue-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            );

            if (stat?.hasSpecialWrapper) {
              return (
                <div
                  key={stat.id}
                  className="anim-wrapper w-full -mt-1 rounded-2xl"
                >
                  <div className="inner p-1">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={stat.href}
                      className="block"
                    >
                      {cardContent}
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={stat.id}
                target="_blank"
                rel="noopener noreferrer"
                href={stat.href}
                className="block"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
