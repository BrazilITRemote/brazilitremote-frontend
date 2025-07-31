import { getOrganizerById, Organizer } from "./organizers";

// Helper function to get current date in Brasilia timezone
const getTodayInBrasilia = (): Date => {
  const now = new Date();
  // Get the current date in Brasilia timezone using Intl.DateTimeFormat
  const brasiliaDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  // Parse the date string to create a Date object
  const [year, month, day] = brasiliaDate.split("-").map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed
};

// gets the NEXT first Thursday of the THIS OR NEXT month
const getFirstThursdayOfMonth = (): Date => {
  const today = getTodayInBrasilia();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Find the first Thursday of the current month
  const firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1);
  const firstThursdayOfCurrentMonth = new Date(firstDayOfCurrentMonth);
  firstThursdayOfCurrentMonth.setDate(
    firstThursdayOfCurrentMonth.getDate() +
      ((4 - firstThursdayOfCurrentMonth.getDay() + 7) % 7)
  );

  // If today is past the first Thursday, return the first Thursday of the next month
  if (today >= firstThursdayOfCurrentMonth) {
    const firstDayOfNextMonth = new Date(currentYear, currentMonth + 1, 1);
    const firstThursdayOfNextMonth = new Date(firstDayOfNextMonth);
    firstThursdayOfNextMonth.setDate(
      firstThursdayOfNextMonth.getDate() +
        ((4 - firstThursdayOfNextMonth.getDay() + 7) % 7)
    );
    return firstThursdayOfNextMonth;
  }

  return firstThursdayOfCurrentMonth;
};

// Helper function to parse event date consistently
const parseEventDate = (dateString: string): Date => {
  // Parse as local date to avoid timezone issues
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed
};

// Utility functions to filter events
export const getUpcomingEvents = (events: Event[]): Event[] => {
  const today = getTodayInBrasilia();

  return events
    .filter((event) => {
      const eventDate = parseEventDate(event.date);
      return eventDate >= today;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Earliest first
};

export const getPastEvents = (events: Event[]): Event[] => {
  const today = getTodayInBrasilia();

  return events
    .filter((event) => {
      const eventDate = parseEventDate(event.date);
      return eventDate < today;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Most recent first
};

// Get all events sorted by date (upcoming first, then past events in reverse chronological order)
export const getAllEventsSorted = (events: Event[]): Event[] => {
  const upcoming = getUpcomingEvents(events);
  const past = getPastEvents(events);
  return [...upcoming, ...past];
};

// Get instructor/organizer for an event
export const getEventInstructor = (event: Event): Organizer | undefined => {
  return getOrganizerById(event.instructorId);
};

// Utility function to format date in Portuguese
export const formatEventDate = (dateString: string): string => {
  // Use the same parsing method to ensure consistency
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

// Utility function to format date and time in Portuguese
export const formatEventDateTime = (
  dateString: string,
  timeString: string
): string => {
  // Use the same parsing method to ensure consistency
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

export interface Event {
  instructorId: string; // Reference to organizer ID
  time: string; // Format: HH:MM
  date: string; // Format: YYYY-MM-DD
  title: string;
  shortDescription: string; // Markdown content
  description: string; // Markdown content
  public: string; // e.g., "Estudantes / Engenheiros Backend"
  complexity: string; // e.g., "Iniciante / Intermediário / Avançado"
  discord: string;
  live: string;
}

// EVENTS
export const events: Event[] = [
  {
    // this is a dynamic ongoing event
    time: "20:00",
    date: getFirstThursdayOfMonth().toISOString().split("T")[0],
    complexity: "Aberto a todos",
    public: "",
    live: "",
    discord:
      "https://discord.com/events/1290128210171789312/1397405211890286673",
    title: "Reunião Mensal",
    shortDescription: `Feedback da diretoria, destaques de membros, vagas com indicação e palco aberto pra trocar ideias sobre carreira. Participe e fortaleça nossa rede!`,
    description: "",
    instructorId: "control-c",
  },
  {
    time: "20:30",
    date: "2025-07-15",
    complexity: "Intermediário / Avançado",
    public: "Estudantes / Engenheiros Backend",
    live: "https://www.youtube.com/watch?v=NsMeb9BgziE",
    discord: "https://discord.com/invite/4b2xBNND?event=1393756402329325649",
    title: "Clube de Leitura - Trilha Backend - #001",
    shortDescription: `Junte-se à nossa trilha de estudos Backend! Leia e debata os artigos com a comunidade no Discord, aprenda, colabore e fortaleça sua rede.

**Título do artigo:** \\
Testcontainers Best Practices for .NET \\
[ver artigo](https://www.milanjovanovic.tech/blog/testcontainers-best-practices-dotnet-integration-testing#targetBlank)

**Duração:** \\
Aproximadamente 40 minutos (Leitura e Discussão)

**Público-Alvo:** \\
Estudantes / Engenheiros / Backend`,
    description: "",
    instructorId: "magoolation",
  },
  {
    time: "20:30",
    date: "2025-06-26",
    complexity: "Iniciante / Intermediário",
    public: "",
    live: "https://www.youtube.com/watch?v=AMomlIAdg3s",
    discord:
      "https://discord.com/channels/1290128210171789312/1391481055638458399/1391541501917532241",
    title: "Clube de Leitura - Trilha DevOps - #002",
    shortDescription: `Junte-se à nossa trilha de estudos DevOps! Leia e debata os artigos com a comunidade no Discord, aprenda, colabore e fortaleça sua rede.

**Título do artigo:** \\
Por que você NÃO deve escolher DevOps como carreira. \\
[ver artigo](https://andreybyhalenko.medium.com/why-you-should-not-choose-devops-as-a-career-b5fe10dccf14#targetBlank)

**Duração:** \\
Aproximadamente 55 minutos (Leitura e Discussão)

**Público-Alvo:** \\
Estudantes / Engenheiros DevOps`,
    description: "",
    instructorId: "control-c",
  },
  {
    time: "21:00",
    date: "2025-06-19",
    complexity: "Iniciante / Intermediário",
    public: "",
    live: "https://www.youtube.com/watch?v=o605bOjACR8",
    discord:
      "https://discord.com/channels/1290128210171789312/1391481055638458399/1391485286990745620",
    title: "Clube de Leitura - Trilha DevOps - #001",
    shortDescription: `Junte-se à nossa trilha de estudos DevOps! Leia e debata os artigos com a comunidade no Discord, aprenda, colabore e fortaleça sua rede.

**Título do artigo:** \\
Who is Mr. DevOps? \\
[ver artigo](https://medium.com/pharos-production/who-is-mr-devops-e95bb3a8b42c#targetBlank)

**Duração:** \\
Aproximadamente 1 hora (Leitura e Discussão)

**Público-Alvo:** \\
Estudantes / Engenheiros DevOps`,
    description: "",
    instructorId: "control-c",
  },
];
