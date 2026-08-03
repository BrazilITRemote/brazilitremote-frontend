"use client";

import Markdown from "react-markdown";
import { Group } from "../lib/groups";
import markdownComponents from "../lib/markdown";
import { Button } from "./ui/Button";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi2";
import {
  formatGroupDate,
  formatGroupDateTime,
  getGroupInstructor,
} from "@/lib/functions/groups";
import { useState } from "react";

interface GroupCardProps {
  readonly group: Group;
  readonly variant: "current" | "past";
}

export default function GroupCard({ group, variant }: GroupCardProps) {
  const isCurrent = variant === "current";
  const instructor = getGroupInstructor(group);
  const [showDescription, setShowDescription] = useState(false);

  // Se não encontrar o instrutor, não renderiza o card
  if (!instructor) {
    return null;
  }

  // Estilos condicionais baseados na variante
  const cardStyles = isCurrent
    ? "bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
    : "bg-gray-200/60 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-6 flex flex-col opacity-80 hover:opacity-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300";

  const dateStyles = isCurrent
    ? "text-sm font-semibold text-blue-600 dark:text-blue-400"
    : "text-sm font-semibold text-slate-500 dark:text-slate-400";

  const avatarStyles = isCurrent
    ? "w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold text-2xl border-2 border-green-500 dark:border-green-400 overflow-hidden"
    : "w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 font-semibold text-2xl border-2 border-orange-500 dark:border-orange-600 overflow-hidden";

  const activeLink = isCurrent ? group.discord : group.live;

  const hasFullDescription =
    group.description &&
    group.shortDescription &&
    group.description !== group.shortDescription;

  return (
    <div className={`relative overflow-hidden block ${cardStyles}`}>
      {isCurrent ? null : (
        <div className="cursor-default absolute w-65 flex flex-col items-center justify-end z-10 pb-4 min-h-20 py-6 -top-4 -right-27 rotate-45 bg-blue-600 dark:bg-slate-900 text-xs font-semibold text-gray-100 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded shadow-md">
          <span className="italic">Concluído</span>
        </div>
      )}

      {/* Cabeçalho */}
      <div className="mb-2">
        <div className={dateStyles}>
          {isCurrent ? (
            <div className="flex-col md:flex items-start">
              <span>{formatGroupDateTime(group.date, group.time)}</span>
              <span> (Horário de Brasília)</span>
            </div>
          ) : (
            formatGroupDate(group.date)
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1 pr-5 md:pr-0">
          {group.title}
        </h3>
      </div>

      {/* Descrição curta (sempre visível) */}
      <div className="text-slate-600 dark:text-slate-300 grow text-sm *:leading-normal mb-2">
        <Markdown components={markdownComponents}>
          {group.shortDescription}
        </Markdown>
      </div>


      {hasFullDescription && (
        <button
          onClick={() => setShowDescription(!showDescription)}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1 mb-3 self-start"
        >
          {showDescription ? "Fechar descrição" : "Ler descrição completa"}
          <HiChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              showDescription ? "rotate-180" : ""
            }`}
          />
        </button>
      )}


      {showDescription && hasFullDescription && (
        <div className="mb-4 border-t border-blue-100 dark:border-slate-600 pt-3">
          <div className="text-slate-600 dark:text-slate-300 text-sm *:leading-normal">
            <Markdown components={markdownComponents}>
              {group.description}
            </Markdown>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row pt-4 mt-4 md:mt-auto border-t border-slate-300 dark:border-slate-700">
        <div className="flex items-center gap-4 w-full md:w-2/3">
          <div className={`min-w-12 ${avatarStyles}`}>
            {instructor.avatar ? (
              <Image
                src={instructor.avatar}
                alt={instructor.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            ) : (
              <>{instructor.name.split(" ")[0][0]}</>
            )}
          </div>
          <div>
            <p className="font-semibold text-slate-800 dark:text-white">
              {instructor.name}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {instructor.role.map((role, index) => (
                <span key={`${instructor.id}-role-${index}`}>
                  {role}
                  {index < instructor.role.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>

        {(isCurrent || activeLink) && (
          <a
            className="w-full md:w-auto max-w-72 md:max-w-none mt-6 mx-auto md:my-auto"
            href={activeLink || undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!activeLink}
            onClick={!activeLink ? (e) => e.preventDefault() : undefined}
          >
            <Button
              disabled={!activeLink}
              className={`w-full md:w-auto cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold ${
                !activeLink ? "opacity-50 cursor-not-allowed!" : ""
              }`}
            >
              {isCurrent ? "Participar" : "Assistir"}
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
