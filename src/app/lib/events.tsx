import React from "react";

export interface Event {
  time: string; // Format: HH:MM
  date: string; // Format: YYYY-MM-DD
  title: string;
  description: string | React.ReactNode; // Can be a string or ReactNode for rich content
  complexity: string; // e.g., "Iniciante / Intermediário / Avançado"
  link: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const events: Event[] = [
  {
    time: "20:30",
    date: "2025-08-06",
    complexity: "Iniciante / Intermediário",
    link: "https://sample.com/event-link",
    title: "Clube de Leitura - Trilha DevOps - #006",
    description: (
      <div>
        <p>Título do Artigo: Teste</p>
        <p>URL: https://sample.com/article-link</p>
      </div>
    ),
    instructor: {
      name: "Magoolation",
      role: "Senior Manager, SRE/DevSecOps",
      avatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=JS",
    },
  },
  {
    time: "20:30",
    date: "2025-07-26",
    complexity: "Iniciante / Intermediário",
    link: "https://sample.com/event-link",
    title: "Clube de Leitura - Trilha DevOps - #003",
    description: (
      <div>
        <p>Título do Artigo: Teste</p>
        <p>URL: https://sample.com/article-link</p>
      </div>
    ),
    instructor: {
      name: "Magoolation",
      role: "Senior Manager, SRE/DevSecOps",
      avatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=JS",
    },
  },
  {
    time: "20:30",
    date: "2025-07-28",
    complexity: "Iniciante / Intermediário",
    link: "https://sample.com/event-link",
    title: "Clube de Leitura - Trilha DevOps - #005",
    description: (
      <div>
        <p>Título do Artigo: Teste</p>
        <p>URL: https://sample.com/article-link</p>
      </div>
    ),
    instructor: {
      name: "Magoolation",
      role: "Senior Manager, SRE/DevSecOps",
      avatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=JS",
    },
  },
  {
    time: "20:30",
    date: "2025-07-29",
    complexity: "Iniciante / Intermediário",
    link: "https://sample.com/event-link",
    title: "Clube de Leitura - Trilha DevOps - #006",
    description: (
      <div>
        <p>Título do Artigo: Teste</p>
        <p>URL: https://sample.com/article-link</p>
      </div>
    ),
    instructor: {
      name: "Magoolation",
      role: "Senior Manager, SRE/DevSecOps",
      avatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=JS",
    },
  },
  {
    time: "20:30",
    date: "2025-07-27",
    complexity: "Iniciante / Intermediário",
    link: "https://sample.com/event-link",
    title: "Clube de Leitura - Trilha DevOps - #004",
    description: (
      <div>
        <p>Título do Artigo: Teste</p>
        <p>URL: https://sample.com/article-link</p>
      </div>
    ),
    instructor: {
      name: "Magoolation",
      role: "Senior Manager, SRE/DevSecOps",
      avatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=JS",
    },
  },
  {
    time: "20:30",
    date: "2025-06-26",
    complexity: "Iniciante / Intermediário",
    link: "https://discord.com/channels/1290128210171789312/1391481055638458399/1391541501917532241",
    title: "Clube de Leitura - Trilha DevOps - #002",
    description: (
      <div>
        <p>
          Título do Artigo: Por que você NÃO deve escolher DevOps como carreira
        </p>
        <p>
          URL:
          https://andreybyhalenko.medium.com/why-you-should-not-choose-devops-as-a-career-b5fe10dccf14
        </p>
      </div>
    ),
    instructor: {
      name: "Control-C",
      role: "Senior Manager, SRE/DevSecOps",
      avatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=JS",
    },
  },
  {
    time: "21:00",
    date: "2025-06-19",
    complexity: "Iniciante / Intermediário",
    link: "https://discord.com/channels/1290128210171789312/1391481055638458399/1391485286990745620",
    title: "Clube de Leitura - Trilha DevOps - #001",
    description: (
      <div>
        <p>Título do Artigo: Who is Mr. DevOps</p>
        <p>
          URL:
          https://medium.com/pharos-production/who-is-mr-devops-e95bb3a8b42c
        </p>
        <p>Autor: https://medium.com/@dmytronasyrov</p>
      </div>
    ),
    instructor: {
      name: "Control-C",
      role: "Senior Manager, SRE/DevSecOps",
      avatar: "https://placehold.co/48x48/EBF4FF/7F9CF5?text=JS",
    },
  },
];

// Helper function to get current date in Brasilia timezone
const getTodayInBrasilia = (): Date => {
  const now = new Date();
  // Convert to Brasilia time (UTC-3)
  const brasiliaTime = new Date(
    now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
  );
  brasiliaTime.setHours(0, 0, 0, 0);
  return brasiliaTime;
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
