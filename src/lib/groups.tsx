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
  courseHours: number;
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
    title: "AI Engineer - Temporada 1",
    shortDescription: `**Grupo de estudos de AI Engineer**

Estudos focados em conceitos de Inteligência Artificial Generativa: Context Window, Parâmetros, RAG, MCP's, implicações práticas, impactos sociais e ambientais.`,
    description: `
A Inteligência Artificial não é mais exclusividade de pesquisadores e cientistas de dados. A IA Generativa e os LLMs (Grandes Modelos de Linguagem) estão se tornando parte do dia a dia do trabalho — desde a escrita e pesquisa até a automação e agentes inteligentes. Se você quer realmente entender como os sistemas de IA funcionam hoje (e não apenas usar o ChatGPT e torcer para o melhor), este curso oferece essa base.

Esta é uma introdução prática e amigável para iniciantes à IA moderna — mas não confunda "amigável para iniciantes" com "superficial". Ao final, você terá construído um pipeline de RAG (Geração Aumentada por Recuperação) visualmente usando Langflow, e construído e implantado seu próprio servidor MCP (Model Context Protocol) funcional, com autenticação OAuth real e integração com APIs — duas coisas que a maioria dos cursos "introdução à IA" nunca chega nem perto.


#### O que aprendemos:

  - Fundamentos essenciais da IA Generativa e como os LLMs realmente "pensam" e geram respostas

  - Tokens, prompts e como a tokenização afeta tanto a qualidade da saída quanto o custo da API

  - Técnicas de engenharia de prompt para obter resultados consistentes e confiáveis de qualquer LLM

  - RAG (Geração Aumentada por Recuperação) — a diferença entre RAG tradicional e RAG agêntico, e como construir um pipeline de RAG visualmente usando Langflow, sem necessidade de codificação pesada

  - Agentes de IA: como eles planejam, raciocinam e usam ferramentas em armazenamentos vetoriais, pesquisas na web e APIs

  - MCP (Model Context Protocol) — o padrão emergente para conectar modelos de IA a ferramentas e sistemas reais, incluindo hosts, clientes, servidores e camadas de transporte

  - Projeto prático: construir seu próprio servidor MCP para gerenciar o Google Agenda, com autenticação OAuth e acesso à API ao vivo — liste, agende e exclua eventos através de um cliente de IA

  - Como executar e comparar modelos de código aberto localmente, e explorar IA agêntica com AWS Bedrock


Este curso é intencionalmente focado — é a rampa de entrada sólida antes de se comprometer com um bootcamp de várias semanas e vários frameworks. Saímos com profundidade conceitual real, um pipeline de RAG funcional construído visualmente no Langflow e um projeto MCP prático completo — não uma turnê inacabada por dez frameworks diferentes de agentes.

**Participantes**
- Gustavo Suto - [LinkedIn](https://www.linkedin.com/in/gustavosuto) / [Github](https://github.com/guyrux)
- Harsh
- Hermes Junior - [LinkedIn](https://www.linkedin.com/in/hermes-junior-b48319366) / [Github](https://github.com/hermesjrns)
- Jefferson Lima - [LinkedIn](https://www.linkedin.com/in/jeffersonislima) / [Github](https://github.com/JeffersonISLima)
- Jennifer F Lima - [LinkedIn](https://www.linkedin.com/in/jedoblen) / [Github](https://github.com/jedoblen)
- Rafael Santos - [LinkedIn](https://www.linkedin.com/in/santosrafaels) / [Github](https://github.com/sousarafael)
- Wilson Santos - [LinkedIn](https://www.linkedin.com/in/wilson-42) / [Github](https://github.com/muvucka)
- Yago de Souza
    `,
    instructorId: "control-c",
    courseHours: 12
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
    courseHours: 60
  },
];
