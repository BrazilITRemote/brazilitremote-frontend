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
import { useId, useState } from "react";

interface GroupCardProps {
  readonly group: Group;
  readonly variant: "current" | "past";
}

export default function GroupCard({ group, variant }: GroupCardProps) {
  const isCurrent = variant === "current";
  const instructor = getGroupInstructor(group);
  const [showDescription, setShowDescription] = useState(false);
  const descriptionId = useId();

  // Se não encontrar o instrutor, não renderiza o card
  if (!instructor) {
    return null;
  }

  // Estilos condicionais baseados na variante
  const cardStyles = isCurrent
    ? "bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 flex flex-col sm:flex-row items-stretch h-full hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
    : "bg-gray-200/60 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-5 flex flex-col sm:flex-row items-stretch h-full opacity-80 hover:opacity-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300";

  const dateStyles = isCurrent
    ? "text-sm font-semibold text-blue-600 dark:text-blue-400"
    : "text-sm font-semibold text-slate-500 dark:text-slate-400";

  const avatarStyles = isCurrent
    ? "w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold text-2xl border-2 border-green-500 dark:border-green-400 overflow-hidden shrink-0"
    : "w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 font-semibold text-2xl border-2 border-orange-500 dark:border-orange-600 overflow-hidden shrink-0";

  const activeLink = isCurrent ? group.discord : group.live;

  const hasFullDescription =
    group.description &&
    group.shortDescription &&
    group.description !== group.shortDescription;

  return (
    <div
      className={`relative overflow-hidden w-full focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-xl ${cardStyles}`}
      style={{ scrollSnapAlign: "start" }}
      tabIndex={0}
    >
      {isCurrent ? null : (
        <div className="cursor-default absolute w-65 flex flex-col items-center justify-end z-10 pb-4 min-h-20 py-6 -top-4 -right-27 rotate-45 bg-blue-600 dark:bg-slate-900 text-xs font-semibold text-gray-100 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded shadow-md">
          <span className="italic">Concluído</span>
        </div>
      )}

      {/* Left side: date, title, description */}
      <div className="flex-1 min-w-0 flex flex-col gap-2 pr-3">
        {/* Date / time header */}
        <div className={dateStyles}>
          {isCurrent ? (
            <div className="flex flex-col gap-1">
              <span>{formatGroupDateTime(group.date, group.time)}</span>
              <span className="shrink-0 text-xs opacity-70">(Horário de Brasília)</span>
            </div>
          ) : (
            formatGroupDate(group.date)
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-800 dark:text-white leading-tight">
          {group.title}
        </h3>

        {/* Course hours */}
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
          Carga horária: {group.courseHours}h
        </span>

        {/* Short description */}
        <div className="text-slate-600 dark:text-slate-300 text-sm *:leading-snug">
          <Markdown components={markdownComponents}>
            {group.shortDescription}
          </Markdown>
        </div>

        {/* Expand button */}
        {hasFullDescription && (
          <button
            onClick={() => setShowDescription(!showDescription)}
            aria-expanded={showDescription}
            aria-controls={descriptionId}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-xs font-medium flex items-center gap-1 self-start mt-1"
          >
            {showDescription ? "Fechar descrição" : "Ler descrição completa"}
            <HiChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                showDescription ? "rotate-180" : ""
              }`}
            />
          </button>
        )}

        {/* Full description */}
        {showDescription && hasFullDescription && (
          <div
            id={descriptionId}
            className="mt-2 border-t border-blue-100 dark:border-slate-600 pt-3"
          >
            <div className="text-slate-600 dark:text-slate-300 text-sm *:leading-normal">
              <Markdown components={markdownComponents}>
                {group.description}
              </Markdown>
            </div>
          </div>
        )}
      </div>

      {/* Right side: instructor + CTA */}
      <div className="flex flex-col items-center justify-center gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 sm:pl-3 sm:border-l border-slate-200 dark:border-slate-700 min-w-[140px]">
        <div className={avatarStyles}>
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

        <div className="text-center">
          <p className="font-semibold text-slate-800 dark:text-white text-sm leading-tight">
            {instructor.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
            {instructor.role.join(", ")}
          </p>
        </div>

        {(isCurrent || activeLink) && (
          <a
            className="w-full"
            href={activeLink || undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!activeLink}
            onClick={!activeLink ? (e) => e.preventDefault() : undefined}
          >
            <Button
              disabled={!activeLink}
              className={`w-full cursor-pointer bg-blue-600 text-white px-3 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition-colors font-semibold ${
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
