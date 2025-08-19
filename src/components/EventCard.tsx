import Markdown from "react-markdown";
import { Event } from "../lib/events";
import markdownComponents from "../lib/markdown";
import { Button } from "./ui/Button";
import Image from "next/image";
import {
  formatEventDate,
  formatEventDateTime,
  getEventInstructor,
} from "@/lib/functions/events";

interface EventCardProps {
  readonly event: Event;
  readonly variant: "upcoming" | "past";
}

export default function EventCard({ event, variant }: EventCardProps) {
  const isUpcoming = variant === "upcoming";
  const instructor = getEventInstructor(event);

  // If no instructor found, don't render the card or handle gracefully
  if (!instructor) {
    return null;
  }

  // Conditional styles based on variant
  const cardStyles = isUpcoming
    ? "bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
    : "bg-gray-200/60 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-6 flex flex-col opacity-80 hover:opacity-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300";

  const dateStyles = isUpcoming
    ? "text-sm font-semibold text-blue-600 dark:text-blue-400"
    : "text-sm font-semibold text-slate-500 dark:text-slate-400";

  const avatarStyles = isUpcoming
    ? "w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold text-2xl border-2 border-green-500 dark:border-green-400 overflow-hidden"
    : "w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 font-semibold text-2xl border-2 border-orange-500 dark:border-orange-600 overflow-hidden";

  const activeLink = isUpcoming ? event.discord : event.live;

  return (
    <div className={`relative overflow-hidden block ${cardStyles}`}>
      {isUpcoming ? null : (
        <div className="cursor-default absolute w-65 flex flex-col items-center justify-end z-10 pb-4 min-h-20 py-6 -top-4 -right-27 rotate-45 bg-blue-600 dark:bg-slate-900 text-xs font-semibold text-gray-100 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded shadow-md">
          <span className="italic">Concluído</span>
        </div>
      )}
      <div className="mb-2">
        <div className={dateStyles}>
          {isUpcoming ? (
            <div className="flex md:block flex-col items-start">
              <span>{formatEventDateTime(event.date, event.time)}</span>
              <span> (Horário de Brasília)</span>
            </div>
          ) : (
            formatEventDate(event.date)
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1 pr-5">
          {event.title}
        </h3>
      </div>
      <div className="text-slate-600 dark:text-slate-300 mb-6 flex-grow text-sm *:leading-snug">
        <Markdown components={markdownComponents}>
          {event.shortDescription || event.description}
        </Markdown>
      </div>
      <div className="flex flex-col md:flex-row pt-4 mt-auto border-t border-slate-300 dark:border-slate-700">
        <div className="flex items-center gap-4 w-2/3">
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
          <div className="">
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
        <a
          className="w-full max-w-72 md:max-w-none mt-6 md:w-auto mx-auto md:my-auto"
          href={activeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            {isUpcoming ? "Participar" : "Assistir"}
          </Button>
        </a>
      </div>
    </div>
  );
}
