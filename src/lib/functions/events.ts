import { getInstructorById, Instructor } from "../instructors";
import { getDateFromBrasiliaTime } from "./datetime";

// Parse YYYY-MM-DD as a local Date (month 0-indexed)
export const parseEventDate = (dateString: string): Date => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
};

// Upcoming events (generic over any item with a 'date' field)
export const getUpcomingEvents = <T extends { date: string }>(
  events: T[]
): T[] => {
  const today = getDateFromBrasiliaTime();
  return events
    .filter((event) => parseEventDate(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

// Past events (generic over any item with a 'date' field)
export const getPastEvents = <T extends { date: string }>(events: T[]): T[] => {
  const today = getDateFromBrasiliaTime();
  return events
    .filter((event) => parseEventDate(event.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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
