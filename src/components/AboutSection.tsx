"use client";

import Link from "next/link";
import { FaDiscord, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import React from "react";

const statsData = [
  {
    id: 1,
    icon: FaDiscord,
    iconColor: "#5865F2",
    label: "Discord",
    href: "https://discord.gg/4AVYUCdF2P",
  },
  {
    id: 2,
    icon: FaYoutube,
    iconColor: "#FF0000",
    label: "YouTube",
    href: "https://www.youtube.com/@BrazilITRemote",
  },
  {
    id: 3,
    icon: FaLinkedin,
    iconColor: "#0A66C2",
    label: "LinkedIn",
    href: "https://www.linkedin.com/groups/8365824/",
  },
  {
    id: 4,
    icon: FaFacebook,
    iconColor: "#1877F2",
    label: "Facebook",
    href: "https://www.facebook.com/groups/BrazilCanadaIT",
  },
];

export default function AboutSection() {
  return (
    <section className="relative text-center py-20 md:py-32 bg-slate-50 dark:bg-gray-900">
      <div className="relative mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Conexões humanas para quem vive de tecnologia
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300">
          Somos uma comunidade de profissionais de TI que promove oficinas,
          clubes de leitura, e eventos online com foco em aprendizado
          colaborativo, inclusão e diversidade.
        </p>
        <p className="mt-2 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300">
          Apoiamos estudantes, grupos racializados, LGBTQIA+ e pessoas com
          deficiência.
        </p>
        {/* Social Cards */}
        <div className="mt-12 mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link
                key={stat.id}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    <Icon
                      size={42}
                      color={stat.iconColor}
                      className="drop-shadow-sm"
                    />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {stat.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
