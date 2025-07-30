import Markdown from "react-markdown";
import { Event, formatEventDate, getEventInstructor } from "../lib/events";
import markdownComponents from "../lib/markdown";
import { Button } from "./ui/Button";

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
    ? "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
    : "bg-gray-200/60 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-6 flex flex-col opacity-80 hover:opacity-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300";

  const dateStyles = isUpcoming
    ? "text-sm font-semibold text-blue-600 dark:text-blue-400"
    : "text-sm font-semibold text-slate-500 dark:text-slate-400";

  const avatarStyles = isUpcoming
    ? "w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-300 font-semibold text-2xl border border-blue-200 dark:border-blue-700"
    : "w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 font-semibold text-2xl";

  const activeLink = isUpcoming ? event.discord : event.live;

  return (
    <div className={`${cardStyles} block`}>
      <div className="mb-4">
        <p className={dateStyles}>{formatEventDate(event.date)}</p>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1">
          {event.title}
        </h3>
      </div>
      <div className="text-slate-600 dark:text-slate-300 mb-6 flex-grow *:leading-snug">
        <Markdown components={markdownComponents}>
          {event.shortDescription || event.description}
        </Markdown>
      </div>
      <div className="flex flex-col md:flex-row pt-4 mt-auto border-t border-slate-300 dark:border-slate-700">
        <div className="flex items-center gap-4 w-2/3">
          <div className={`min-w-12 ${avatarStyles}`}>
            {instructor.name.split(" ")[0][0]}
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
