import {
  // getFirstThursdayOfMonthYMD,
  // getNextWeekdayWithinRangeYMD,
} from "./functions/datetime";

import { getUpcomingGroups, getCurrentGroups } from "./functions/groups";

export { getUpcomingGroups, getCurrentGroups };

export interface Group {
  instructorId: string; // Reference to organizer ID
  time: string; // Format: HH:MM
  date: string; // Format: YYYY-MM-DD
  endDate: string;
  title: string; // Event title
  shortDescription: string; // Markdown content
  description: string; // Markdown content
  public: string; // e.g., "Estudantes / Engenheiros Backend"
  // complexity: string; // e.g., "Iniciante / Intermediário / Avançado"
  discord: string;
  live: string;
}

// Groups
export const groups: Group[] = [
  {
    time: "21:00",
    date: "2026-06-20",
    endDate: "2026-07-29",
    public: "Estudantes / Desenvolvedores/ DevOps / Administradores de sistemas",
    live: "https://www.youtube.com/watch?v=3NAVCZGjsrg&t=683s",
    discord: "",
    title: "AI Engineer",
    shortDescription: `**Grupo de estudos de AI Engineer**

Estudos focados em conceitos de Inteligência Artificial Generativa: Context Window, Parâmetros, RAG, MCP's, implicações práticas, impactos sociais e ambientais.`,
    description: `**Participantes**
- Gustavo Suto
- Harsh
- Hermes Lopes Junior
- Jefferson Lima
- Jennifer Ferreira Lima
- Rafael Santos
- Will
- Yago Santos de Souza
    `,
    instructorId: "control-c",
  },
  {
    time: "21:00",
    date: "2024-11-05",
    endDate: "2025-04-24",
    public: "Estudantes / Desenvolvedores/ DevOps / Administradores de sistemas",
    live: "https://youtu.be/EN6Ovhj6a00?si=ynlKFhbcjKdcUPel",
    discord: "",
    title: "Oficina Golang com Testes",
    shortDescription: `**Grupo de estudos de Golang com Testes**

Grupo de estudos focados no aprendizado da linguagem GO orientada a Testes, GoRoutines e Modularização.`,
    description: "",
    instructorId: "control-c",
  },
];
