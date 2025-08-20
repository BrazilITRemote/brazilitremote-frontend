import {
  getFirstThursdayOfMonthYMD,
  getNextWeekdayWithinRangeYMD,
} from "./functions/datetime";

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
  // Evento dinâmico do Clube de Leitura (Zawacki): todas as quartas entre 03/09 e 16/09
  {
    time: "20:00",
    date: getNextWeekdayWithinRangeYMD(3, "2025-09-03", "2025-09-16"), // 3 = Quarta-feira
    complexity: "Iniciante / Intermediário",
    public: "Estudantes / Profissionais de TI / Software Livre",
    live: "",
    discord: "https://discord.gg/Qd2J78cpFk?event=1407843780694114314",
    title: "Clube de Leitura – Trilha Cultura – #001",
    shortDescription: `Mergulhe na cultura que moldou o modelo de desenvolvimento aberto e colaborativo do software livre! Venha debater com a comunidade sobre como esses modelos influenciam nosso trabalho hoje.

**Livro:** [A Catedral e o Bazar](http://www.dominiopublico.gov.br/download/texto/tl000001.pdf#targetBlank)

**Público-Alvo:** Estudantes / Profissionais de TI / Software Livre`,
    description: "",
    instructorId: "zawacki",
  },
  {
    // this is a dynamic ongoing event
    time: "20:00",
    date: getFirstThursdayOfMonthYMD(),
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
