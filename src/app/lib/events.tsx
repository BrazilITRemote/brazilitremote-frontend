import { getOrganizerById, Organizer } from "./organizers";

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
  if (today > firstThursdayOfCurrentMonth) {
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
      "https://discord.com/channels/1290128210171789312/1397405211890286673",
    title: "Reunião Mensal",
    shortDescription: `Feedback da diretoria, destaques de membros, vagas com indicação e palco aberto pra trocar ideias sobre carreira. Participe e fortaleça nossa rede!`,
    description: `## 📅 Pautas

###Feedback das atividades da diretoria:
- Resumo dos nossos sprints, entregas, aprendizados e próximos passos
- O que a comunidade pode melhorar?

###Destaques da Comunidade:
- Projetos ou conquistas de membros (ex: nova vaga, artigo publicado, palestra, etc.)
- Reconhecimento de contribuições (ex: quem ajudou em discussões técnicas, revisão de CV, etc.)
- Novos membros e apresentações rápidas

###Divulgação de oportunidades:
- Vagas abertas (compartilhadas por membros) que possuímos poder de indicação

###Palco Aberto - Espaço livre para falas dos membros sobre:
- Trabalho, transição de carreira
- Estudos, cursos, certificações
- Busca de oportunidades ou indicações`,
    instructorId: "control-c",
  },
  {
    time: "20:30",
    date: "2025-07-27",
    complexity: "Iniciante / Intermediário",
    public: "Estudantes / Engenheiros Backend",
    live: "https://www.youtube.com/watch?v=NsMeb9BgziE",
    discord: "https://discord.com/invite/4b2xBNND?event=1393756402329325649",
    title: "Clube de Leitura - Trilha Backend - #001",
    shortDescription: `Junte-se à nossa trilha de estudos Backend! Leia e debata os artigos com a comunidade no Discord, aprenda, colabore e fortaleça sua rede.

**Tempo Estimado do Evento:**\\
30 ~ 45 minutos (Leitura e Discussão)

**Créditos - Autor(a/e):**\\
https://www.milanjovanovic.tech/

**Artigo em PT-BR**: em anexo no Discord!`,
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
    shortDescription: `**Artigo**\\
    Por que você NÃO deve escolher DevOps como carreira`,
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
    shortDescription: `**Artigo**\\
Who is Mr. DevOps

**Autor**\\
https://medium.com/@dmytronasyrov`,
    description: "",
    instructorId: "control-c",
  },
];
