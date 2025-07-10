import { Event, formatEventDate, getEventInstructor } from "../lib/events";

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

  return (
    <a
      href={event.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardStyles} block cursor-pointer`}
    >
      <div className="mb-4">
        <p className={dateStyles}>{formatEventDate(event.date)}</p>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1">
          {event.title}
        </h3>
      </div>
      <div className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
        {event.description}
      </div>
      <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
        <div className={avatarStyles}>
          {instructor.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-semibold text-slate-800 dark:text-white">
            {instructor.name}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {instructor.role}
          </p>
        </div>
      </div>
    </a>
  );
}
