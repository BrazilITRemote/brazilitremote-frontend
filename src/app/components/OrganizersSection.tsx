import React from "react";
import { FiGithub, FiUser } from "react-icons/fi";

export default function OrganizersSection() {
  const organizers = [
    {
      id: "1",
      name: "Ana Costa",
      role: "Fundadora",
      linkedin: "#",
    },
    {
      id: "2",
      name: "Carlos Alberto",
      role: "Coordenador",
      linkedin: "#",
    },
    {
      id: "3",
      name: "Juliana Lima",
      role: "Conteúdo",
      linkedin: "#",
    },
    {
      id: "4",
      name: "Felipe Mota",
      role: "Parcerias",
      linkedin: "#",
    },
  ];

  return (
    <section
      id="organizadores"
      className="py-20 lg:py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
          Nossos Organizadores
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
          As pessoas apaixonadas que fazem a comunidade Brazil IT Remote
          acontecer.
        </p>
        <div className="mt-12 flex justify-center gap-6 md:gap-8 flex-wrap">
          {organizers.map((organizer) => (
            <div
              key={organizer.id}
              className="flex flex-col items-center text-center w-34 md:w-40"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-200 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-700 shadow-lg flex items-center justify-center">
                <FiUser className="w-8 h-8 md:w-10 md:h-10 text-slate-500 dark:text-slate-400" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-white">
                {organizer.name}
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                {organizer.role}
              </p>
              <a
                href={organizer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-green-700 dark:text-green-500 hover:underline inline-flex items-center gap-1.5"
              >
                <FiGithub className="w-4 h-4" />
                Github
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
