import { getInstructorById, Instructor } from "../instructors";
import { getBrasiliaDateParts } from "./datetime";

// Parse YYYY-MM-DD into a timezone-agnostic Date anchored at noon UTC
// This avoids off-by-one day issues when server default TZ is UTC or differs from America/Sao_Paulo
export const parseEventDate = (dateString: string): Date => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12));
};

// Get "today" as seen in Brasília, anchored at noon UTC to compare dates-only safely
const getTodayBrasiliaNoonUTC = (): Date => {
  const { year, month, day } = getBrasiliaDateParts();
  return new Date(Date.UTC(year, month - 1, day, 12));
};

// Upcoming events (generic over any item with a 'date' field)
export const getUpcomingEvents = <T extends { date: string }>(
  events: T[]
): T[] => {
  const today = getTodayBrasiliaNoonUTC();
  return events
    .filter((event) => parseEventDate(event.date) >= today)
    .sort(
      (a, b) =>
        parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime()
    );
};

// Past events (generic over any item with a 'date' field)
export const getPastEvents = <T extends { date: string }>(events: T[]): T[] => {
  const today = getTodayBrasiliaNoonUTC();
  return events
    .filter((event) => parseEventDate(event.date) < today)
    .sort(
      (a, b) =>
        parseEventDate(b.date).getTime() - parseEventDate(a.date).getTime()
    );
};

// All events sorted (upcoming first, then past in reverse chronological order)
export const getAllEventsSorted = <T extends { date: string }>(
  events: T[]
): T[] => {
  const upcoming = getUpcomingEvents(events);
  const past = getPastEvents(events);
  return [...upcoming, ...past];
};

// Get instructor for an event
export const getEventInstructor = (event: {
  instructorId: string;
}): Instructor | undefined => {
  return getInstructorById(event.instructorId);
};

// Format date in Portuguese (America/Sao_Paulo safe via Date parsing rule above)
export const formatEventDate = (dateString: string): string => {
  const date = parseEventDate(dateString);
  return date
    .toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "America/Sao_Paulo",
    })
    .toUpperCase();
};

// Format date + time in Portuguese
export const formatEventDateTime = (
  dateString: string,
  timeString: string
): string => {
  const date = parseEventDate(dateString);
  const formattedDate = date
    .toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "America/Sao_Paulo",
    })
    .toUpperCase();
  return `${formattedDate} - ${timeString}`;
};
