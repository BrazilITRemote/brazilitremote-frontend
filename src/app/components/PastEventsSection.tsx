import { events, getPastEvents } from "../lib/events";
import EventCard from "./EventCard";

export default function PastEventsSection() {
  const pastEvents = getPastEvents(events);

  return (
    <section className="py-20 lg:py-24 bg-gray-100 dark:bg-slate-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Eventos que já rolaram
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <EventCard
              key={`${event.date}-${index}`}
              event={event}
              variant="past"
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/eventos"
            className="text-lg lg:text-xl text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            rel="noopener noreferrer"
          >
            Ver todos os eventos
          </a>
        </div>
      </div>
    </section>
  );
}
