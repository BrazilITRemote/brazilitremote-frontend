import React from "react";
import PageTitle from "../../components/ui/Title";
import EventCard from "../../components/EventCard";
import { events } from "@/lib/events";
import { getPastEvents, getUpcomingEvents } from "@/lib/functions/events";

export default function EventosPage() {
  const upcomingEvents = getUpcomingEvents(events);
  const pastEvents = getPastEvents(events);

  return (
    <section className="py-20 lg:py-24 bg-gray-100 dark:bg-slate-700">
      <div className="container mx-auto px-4">
        {/* Upcoming Events Section */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <PageTitle
              title="Próximos Eventos"
              description="Encontre todos os nossos eventos disponíveis."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => {
                return (
                  <EventCard
                    key={`upcoming-${event.date}-${index}`}
                    event={event}
                    variant="upcoming"
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <div>
            <PageTitle
              title="Eventos que já rolaram"
              description="Encontre todos os nossos eventos passados."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => {
                return (
                  <EventCard
                    key={`past-${event.date}-${index}`}
                    event={event}
                    variant="past"
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
