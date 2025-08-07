import { events, getUpcomingEvents, getPastEvents } from "../lib/events";
import EventCard from "./EventCard";

export default function EventsSection() {
  const upcomingEvents = getUpcomingEvents(events);
  const pastEvents = getPastEvents(events);

  const allEvents = [...upcomingEvents, ...pastEvents];

  return (
    <>
      {/* Upcoming Events Section */}
      <section
        id="eventos"
        className="py-20 lg:py-24 bg-gray-100 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
            Eventos
          </h2>
          {allEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allEvents.map((event, index) => {
                const isUpComingEvent = upcomingEvents.includes(event);
                return (
                  <EventCard
                    key={`event-${event.date}-${index}`}
                    event={event}
                    variant={isUpComingEvent ? "upcoming" : "past"}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Nenhum evento programado no momento. Fique ligado nas nossas
                redes sociais!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
