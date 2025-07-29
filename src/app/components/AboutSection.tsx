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
      <div className="relative container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Conexões humanas para quem vive de tecnologia
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
          Somos uma comunidade de profissionais de TI que promove workshops e eventos online com foco em aprendizado colaborativo, inclusão e diversidade. 
        </p>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
          Apoiamos estudantes, grupos racializados, LGBTQIA+ e pessoas com deficiência.
        </p>
        {/* Social Icons */}
        <div className="mt-12 mx-auto max-w-96 grid grid-cols-2 md:grid-cols-4 gap-12">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link
                key={stat.id}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-slate-600 dark:text-slate-300 hover:opacity-80 transition-opacity"
              >
                <Icon size={42} color={stat.iconColor} />
                <span className="text-sm">{stat.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
