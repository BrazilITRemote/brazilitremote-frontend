import { getInstructorById, Instructor } from "./instructors";

// Helper function to get current date in Brasilia timezone
export const getDateFromBrasiliaTime = (date?: string): Date => {
  const now = date ? new Date(date) : new Date();

  // Get the current date and time in Brasilia timezone
  const brasiliaDateTime = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(now);

  // Extract date and time parts
  const year = parseInt(
    brasiliaDateTime.find((part) => part.type === "year")?.value || "0"
  );
  const month = parseInt(
    brasiliaDateTime.find((part) => part.type === "month")?.value || "0"
  );
  const day = parseInt(
    brasiliaDateTime.find((part) => part.type === "day")?.value || "0"
  );
  const hour = parseInt(
    brasiliaDateTime.find((part) => part.type === "hour")?.value || "0"
  );
  const minute = parseInt(
    brasiliaDateTime.find((part) => part.type === "minute")?.value || "0"
  );
  const second = parseInt(
    brasiliaDateTime.find((part) => part.type === "second")?.value || "0"
  );

  // Create date in UTC but adjusted for Brasilia time
  const brasiliaDate = new Date();
  brasiliaDate.setUTCFullYear(year);
  brasiliaDate.setUTCMonth(month - 1); // month is 0-indexed
  brasiliaDate.setUTCDate(day);
  brasiliaDate.setUTCHours(hour, minute, second, 0);

  return brasiliaDate;
};

// Returns numeric Y/M/D for the given instant as seen in America/Sao_Paulo
const getBrasiliaDateParts = (
  d?: Date
): { year: number; month: number; day: number } => {
  const now = d ?? new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  return {
    year: parseInt(parts.find((p) => p.type === "year")?.value || "0", 10),
    month: parseInt(parts.find((p) => p.type === "month")?.value || "0", 10),
    day: parseInt(parts.find((p) => p.type === "day")?.value || "0", 10),
  };
};

// Timezone-safe (America/Sao_Paulo) YYYY-MM-DD for the NEXT first Thursday of THIS or NEXT month
export const getFirstThursdayOfMonthYMD = (): string => {
  const { year, month, day: todayDay } = getBrasiliaDateParts();

  // Day-of-week for the 1st of the given month (0=Sun..6=Sat), computed at 12:00 UTC to avoid TZ edge cases
  const dowFirst = new Date(Date.UTC(year, month - 1, 1, 12)).getUTCDay();
  const firstThursdayDay = 1 + ((4 - dowFirst + 7) % 7);

  let y = year;
  let m = month;
  // If hoje (em Brasília) já passou da primeira quinta, usamos o mês seguinte
  if (todayDay >= firstThursdayDay) {
    if (m === 12) {
      y += 1;
      m = 1;
    } else {
      m += 1;
    }
  }

  // Recalcula a primeira quinta do mês escolhido
  const dowFirstChosen = new Date(Date.UTC(y, m - 1, 1, 12)).getUTCDay();
  const d = 1 + ((4 - dowFirstChosen + 7) % 7);

  const mm = String(m).padStart(2, "0");
  const dd = String(d).padStart(2, "0");
  return `${y}-${mm}-${dd}`;
};

// Helper function to parse event date consistently
const parseEventDate = (dateString: string): Date => {
  // Parse as local date to avoid timezone issues
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed
};

// Utility functions to filter events
export const getUpcomingEvents = (events: Event[]): Event[] => {
  const today = getDateFromBrasiliaTime();

  return events
    .filter((event) => {
      const eventDate = parseEventDate(event.date);
      return eventDate >= today;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Earliest first
};

export const getPastEvents = (events: Event[]): Event[] => {
  const today = getDateFromBrasiliaTime();

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

// Get instructor for an event
export const getEventInstructor = (event: Event): Instructor | undefined => {
  return getInstructorById(event.instructorId);
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
    time: "20:00",
    date: "2025-09-03",
    complexity: "Iniciante / Intermediário",
    public: "Estudantes / Profissionais de TI / Software Livre",
    live: "",
    discord: "",
    title: "Clube de Leitura - A Catedral e o Bazar - #001",
    shortDescription: `Junte-se ao nosso Clube de Leitura! Vamos discutir o livro "A Catedral e o Bazar".

Tradução (PT-BR): [Domínio Público](http://www.dominiopublico.gov.br/download/texto/tl000001.pdf#targetBlank)

**Público-Alvo:** Estudantes / Profissionais de TI / Software Livre`,
    description: "",
    instructorId: "zawacki",
  },
  {
    time: "20:00",
    date: "2025-09-10",
    complexity: "Iniciante / Intermediário",
    public: "Estudantes / Profissionais de TI / Software Livre",
    live: "",
    discord: "",
    title: "Clube de Leitura - A Catedral e o Bazar - #002",
    shortDescription: `Continuação do Clube de Leitura sobre "A Catedral e o Bazar".

Tradução (PT-BR): [Domínio Público](http://www.dominiopublico.gov.br/download/texto/tl000001.pdf#targetBlank)

**Público-Alvo:** Estudantes / Profissionais de TI / Software Livre`,
    description: "",
    instructorId: "zawacki",
  },
  {
    time: "20:00",
    date: "2025-09-16",
    complexity: "Iniciante / Intermediário",
    public: "Estudantes / Profissionais de TI / Software Livre",
    live: "",
    discord: "",
    title: "Clube de Leitura - A Catedral e o Bazar - #003",
    shortDescription: `Encerramento do Clube de Leitura sobre "A Catedral e o Bazar".

Tradução (PT-BR): [Domínio Público](http://www.dominiopublico.gov.br/download/texto/tl000001.pdf#targetBlank)

**Público-Alvo:** Estudantes / Profissionais de TI / Software Livre`,
    description: "",
    instructorId: "zawacki",
  },
  {
    // this is a dynamic ongoing event
    time: "20:00",
    date: getFirstThursdayOfMonthYMD(),
    // date (dinâmico) gerado em horário de Brasília para evitar desvios de fuso
    complexity: "Aberto a todos",
    public: "",
    live: "",
    discord:
      "https://discord.com/events/1290128210171789312/1397405211890286673",
    title: "Reunião Mensal",
    shortDescription: `**Evento ocorre na primeira quinta-feira do mês**

Feedback da diretoria, destaques de membros, vagas com indicação e palco aberto pra trocar ideias sobre carreira. Participe e fortaleça nossa rede!`,
    description: "",
    instructorId: "control-c",
  },
  {
    time: "20:30",
    date: "2025-07-15",
    complexity: "Intermediário / Avançado",
    public: "Estudantes / Engenheiros Backend",
    live: "https://www.youtube.com/watch?v=NsMeb9BgziE",
    discord: "",
    title: "Clube de Leitura - Trilha Backend - #001",
    shortDescription: `Junte-se à nossa trilha de estudos Backend! Leia e debata os artigos com a comunidade no Discord, aprenda, colabore e fortaleça sua rede.

**Artigo:** [Testcontainers Best Practices for .NET Integration Testing](https://www.milanjovanovic.tech/blog/testcontainers-best-practices-dotnet-integration-testing#targetBlank)

**Público-Alvo:** Estudantes / Engenheiros / Backend`,
    description: "",
    instructorId: "magoolation",
  },
  {
    time: "20:30",
    date: "2025-06-26",
    complexity: "Iniciante / Intermediário",
    public: "",
    live: "https://www.youtube.com/watch?v=AMomlIAdg3s",
    discord: "",
    title: "Clube de Leitura - Trilha DevOps - #002",
    shortDescription: `Junte-se à nossa trilha de estudos DevOps! Leia e debata os artigos com a comunidade no Discord, aprenda, colabore e fortaleça sua rede.

**Artigo:** [Why you should NOT choose DevOps as a career.](https://andreybyhalenko.medium.com/why-you-should-not-choose-devops-as-a-career-b5fe10dccf14#targetBlank)

**Público-Alvo:** Estudantes / Engenheiros DevOps`,
    description: "",
    instructorId: "control-c",
  },
  {
    time: "21:00",
    date: "2025-06-19",
    complexity: "Iniciante / Intermediário",
    public: "",
    live: "https://www.youtube.com/watch?v=o605bOjACR8",
    discord: "",
    title: "Clube de Leitura - Trilha DevOps - #001",
    shortDescription: `Junte-se à nossa trilha de estudos DevOps! Leia e debata os artigos com a comunidade no Discord, aprenda, colabore e fortaleça sua rede.

**Artigo:** [Who is Mr. DevOps?](https://medium.com/pharos-production/who-is-mr-devops-e95bb3a8b42c#targetBlank)

**Público-Alvo:** Estudantes / Engenheiros DevOps`,
    description: "",
    instructorId: "control-c",
  },
];
