import React from "react";
import { workshops } from "../lib/workshops";

export default function CalendarSection() {
  // Helper to format dates in pt-BR (timezone-safe)
  const formatDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d, 12)); // noon UTC to avoid TZ drift
    return new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "America/Sao_Paulo",
    }).format(dt);
  };
  return (
    <section
      id="calendar"
      className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/70"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Calendário de Eventos
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-600 dark:border-blue-400 ml-4">
            {workshops.slice(0, 4).map((ws) => (
              <article key={ws.id} className="mb-8 ml-6">
                <div className="absolute w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 -left-1.5 border-2 border-white dark:border-slate-900" />
                <time
                  dateTime={ws.date}
                  className="block mb-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
                >
                  {formatDate(ws.date)}
                </time>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {ws.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  {ws.description}
                </p>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Instrutores: {ws.instructors.join(", ")}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
