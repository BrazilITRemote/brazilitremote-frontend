import { events, getUpcomingEvents } from "../lib/events";
import EventCard from "./EventCard";

export default function UpcomingEventsSection() {
  const upcomingEvents = getUpcomingEvents(events);

  return (
    <section
      id="eventos"
      className="py-20 lg:py-24 bg-gray-200 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Próximos Eventos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard
              key={`${event.date}-${index}`}
              event={event}
              variant="upcoming"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
