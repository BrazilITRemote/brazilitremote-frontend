import React from "react";
import { workshops } from "../lib/workshops";

export default function CalendarSection() {
  // Helper to format dates in pt-BR
  const formatDate = (dateStr: string) =>
    new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateStr));
  return (
    <section id="calendar" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Calendário</h2>
        <div className="relative border-l-2 border-accent ml-4">
          {workshops.slice(0, 4).map((ws) => (
            <article key={ws.id} className="mb-8 ml-6">
              <div className="absolute w-3 h-3 bg-accent rounded-full mt-1.5 -left-1.5 border-2 border-white" />
              <time
                dateTime={ws.date}
                className="block mb-1 text-sm font-semibold text-gray-500"
              >
                {formatDate(ws.date)}
              </time>
              <h3 className="text-lg font-bold text-gray-900">{ws.title}</h3>
              <p className="text-gray-700">{ws.description}</p>
              <div className="mt-1 text-sm text-gray-500">
                {ws.instructors.join(", ")}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
