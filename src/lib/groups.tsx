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

  // === CURRENT (ongoing) — date in the past, no endDate ===
  {
    time: "21:00",
    date: "2026-07-20",
    endDate: "",
    public: "Estudantes / Engenheiros Backend",
    live: "",
    discord: "https://discord.gg/rust-systems-br",
    title: "Rust Systems Programming",
    shortDescription: `**Grupo de estudos de Rust para sistemas**

Estudos focados em ownership, borrowing, lifetimes, async/await, FFI e integração com C/C++. Participe e fortaleça nossa rede!`,
    description: "",
    instructorId: "control-c",
  },
  {
    time: "20:00",
    date: "2026-07-25",
    endDate: "",
    public: "Engenheiros Cloud / DevOps",
    live: "",
    discord: "",
    title: "Cloud Native Brasil",
    shortDescription: `**Grupo de estudos Cloud Native**

Estudos sobre Kubernetes, Helm, Terraform, service mesh, observabilidade e GitOps. Participe e fortaleça nossa rede!`,
    description: "",
    instructorId: "carranca",
  },

  // === UPCOMING — date in the future, no endDate ===
  {
    time: "21:00",
    date: "2026-07-28",
    endDate: "",
    public: "Estudantes / Engenheiros Frontend",
    live: "https://live.example.com/nextjs-avancado",
    discord: "https://discord.gg/nextjs-brasil",
    title: "Next.js Avançado",
    shortDescription: `**Grupo de estudos de Next.js em profundidade**

Estudos sobre App Router, Server Components, RFC, ISR, Edge Functions e otimização de performance. Participe e fortaleça nossa rede!`,
    description: "",
    instructorId: "thundree",
  },
  {
    time: "20:00",
    date: "2026-08-05",
    endDate: "",
    public: "Engenheiros DevOps / SRE",
    live: "https://live.example.com/k8-pratica",
    discord: "https://discord.gg/kubernetes-brasil",
    title: "Kubernetes na Prática",
    shortDescription: `**Grupo de estudos de Kubernetes para produção**

Estudos sobre clusters, operators, monitoring, debugging, networking e deploy de aplicações reais. Participe e fortaleça nossa rede!`,
    description: "",
    instructorId: "magoolation",
  },

  // === PAST (completed) — date and endDate both in the past ===
  {
    time: "21:00",
    date: "2026-06-15",
    endDate: "2026-07-20",
    public: "Estudantes / Engenheiros Data",
    live: "https://live.example.com/python-ds",
    discord: "https://discord.gg/python-ds-brasil",
    title: "Python para Data Science",
    shortDescription: `**Grupo de estudos de Python com foco em Data Science**

Estudos sobre pandas, numpy, scikit-learn, visualização de dados e pipelines ETL. Participe e fortaleça nossa rede!`,
    description: "",
    instructorId: "zawacki",
  },
  {
    time: "20:30",
    date: "2026-05-01",
    endDate: "2026-06-30",
    public: "Engenheiros Backend",
    live: "https://live.example.com/go-patterns",
    discord: "https://discord.gg/go-brasil",
    title: "Go Backend Patterns",
    shortDescription: `**Grupo de estudos de Go para backend**

Estudos sobre clean architecture, hexagonal, CQRS, gRPC, testes e deploy em produção. Participe e fortaleça nossa rede!`,
    description: "",
    instructorId: "control-c",
  },

];
