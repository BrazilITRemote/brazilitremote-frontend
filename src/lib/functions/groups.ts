import { getInstructorById, Instructor } from "../instructors";
import { getBrasiliaDateParts } from "./datetime";

// Parse YYYY-MM-DD into a timezone-agnostic Date anchored at noon UTC
// This avoids off-by-one day issues when server default TZ is UTC or differs from America/Sao_Paulo
export const parseGroupDate = (dateString: string): Date => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12));
};

// Get "today" as seen in Brasília, anchored at noon UTC to compare dates-only safely
const getTodayBrasiliaNoonUTC = (): Date => {
  const { year, month, day } = getBrasiliaDateParts();
  return new Date(Date.UTC(year, month - 1, day, 12));
};

// Upcoming groups (generic over any item with a 'date' field)
export const getUpcomingGroups = <T extends { date: string }>(
  groups: T[]
): T[] => {
  const today = getTodayBrasiliaNoonUTC();
  return groups
    .filter((group) => parseGroupDate(group.date) >= today)
    .sort(
      (a, b) =>
        parseGroupDate(a.date).getTime() - parseGroupDate(b.date).getTime()
    );
};

// Past groups (generic over any item with a 'date' field)
export const getPastGroups = <T extends { date: string }>(groups: T[]): T[] => {
  const today = getTodayBrasiliaNoonUTC();
  return groups
    .filter((group) => parseGroupDate(group.date) < today)
    .sort(
      (a, b) =>
        parseGroupDate(b.date).getTime() - parseGroupDate(a.date).getTime()
    );
};

export const getCurrentGroups = <T extends { date: string, endDate:string }>(groups: T[]): T[] => {
  const today = getTodayBrasiliaNoonUTC();
  return groups
    .filter((group) => {
      const groupDate = parseGroupDate(group.date);
      if (groupDate >= today) return false;
      if (!group.endDate) return true; // no end date = ongoing
      return parseGroupDate(group.endDate) > today;
    })
    .sort(
      (a, b) =>
        parseGroupDate(b.date).getTime() - parseGroupDate(a.date).getTime()
    );
};
// All groups sorted (upcoming first, then past in reverse chronological order)
export const getAllGroupsSorted = <T extends { date: string }>(
  groups: T[]
): T[] => {
  const upcoming = getUpcomingGroups(groups);
  const past = getPastGroups(groups);
  return [...upcoming, ...past];
};

// Get instructor for an group
export const getGroupInstructor = (group: {
  instructorId: string;
}): Instructor | undefined => {
  return getInstructorById(group.instructorId);
};

// Format date in Portuguese (America/Sao_Paulo safe via Date parsing rule above)
export const formatGroupDate = (dateString: string): string => {
  const date = parseGroupDate(dateString);
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
export const formatGroupDateTime = (
  dateString: string,
  timeString: string
): string => {
  const date = parseGroupDate(dateString);
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
