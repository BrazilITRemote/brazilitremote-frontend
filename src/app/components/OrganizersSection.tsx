import React from "react";
import { FiUser } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import Image from "next/image";
import { getActiveOrganizers } from "../lib/organizers";

export default function OrganizersSection() {
  const activeOrganizers = getActiveOrganizers();

  return (
    <section
      id="organizadores"
      className="py-20 lg:py-24 bg-white dark:bg-gray-900"
    >
      <div className="w-full md:container mx-auto px-2 md:px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">
          Nossos Organizadores
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
          As pessoas apaixonadas que fazem a comunidade Brazil IT Remote
          acontecer.
        </p>
        <div className="w-full mt-12 px-0 flex justify-center gap-3 md:gap-8 flex-wrap">
          {activeOrganizers
            .toSorted((a, b) => a.name.localeCompare(b.name))
            .map((organizer) => (
              <div
                key={organizer.id}
                className="flex flex-col items-center text-center w-[48%] md:w-40"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-200 dark:bg-slate-700 ring-4 ring-white dark:ring-slate-700 shadow-lg flex items-center justify-center overflow-hidden">
                  {organizer.avatar ? (
                    <Image
                      src={organizer.avatar}
                      alt={organizer.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FiUser className="w-8 h-8 md:w-10 md:h-10 text-slate-500 dark:text-slate-400" />
                  )}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-800 dark:text-white">
                  {organizer.name}
                </h3>
                <p className="flex flex-col text-slate-500 dark:text-slate-400 h-14">
                  {organizer.role.map((role, index) => (
                    <span key={`${organizer.id}-role-${index}`}>
                      {role}
                      {index < organizer.role.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>

                {(organizer.linkedIn ||
                  organizer.github ||
                  organizer.nickname) && (
                  <div className="mt-3 flex flex-col items-center justify-center gap-1">
                    {organizer.nickname && (
                      <span
                        className="flex gap-2 items-center text-blue-600 dark:text-blue-400 transition-colors duration-200"
                        title="Discord"
                      >
                        <FaDiscord className="w-5 h-5" />
                        <span>{organizer.nickname}</span>
                      </span>
                    )}
                    {organizer.linkedIn && (
                      <a
                        href={organizer.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                        title="LinkedIn"
                      >
                        <FaLinkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {organizer.github && (
                      <a
                        href={organizer.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200"
                        title="GitHub"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
