export interface Workshop {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  instructors: string[];
  image?: string;
}

// https://fakeimg.pl/600x400?text=Workshop+Express

export const workshops: Workshop[] = [
  {
    id: "1",
    title: "Introdução ao Node.js",
    description:
      "Aprenda os fundamentos do Node.js e como construir aplicações backend.",
    shortDescription:
      "Aprenda os fundamentos do Node.js e como construir aplicações backend.",
    date: "2025-05-03",
    instructors: ["João Silva", "Ana Costa"],
    image: "https://fakeimg.pl/600x400?text=Workshop+Node.js",
  },
  {
    id: "2",
    title: "API REST com Express",
    description: "Construa APIs RESTful usando Express e MongoDB.",
    shortDescription: "Construa APIs RESTful usando Express e MongoDB.",
    date: "2025-05-07",
    instructors: ["Carlos Oliveira"],
    image: "https://fakeimg.pl/600x400?text=Workshop+Express",
  },
  {
    id: "3",
    title: "Introdução ao React",
    description:
      "Aprenda os fundamentos do React e como construir interfaces interativas.",
    shortDescription:
      "Aprenda os fundamentos do React e como construir interfaces interativas.",
    date: "2025-05-10",
    instructors: ["Maria Silva"],
    image: "https://fakeimg.pl/600x400?text=Workshop+React",
  },
  {
    id: "4",
    title: "TypeScript Avançado",
    description:
      "Domine recursos avançados do TypeScript para aplicações robustas.",
    shortDescription:
      "Domine recursos avançados do TypeScript para aplicações robustas.",
    date: "2025-05-17",
    instructors: ["João Pereira"],
    image: "https://fakeimg.pl/600x400?text=Workshop+TypeScript",
  },
  {
    id: "5",
    title: "Docker para Iniciantes",
    description:
      "Aprenda a usar Docker para criar ambientes de desenvolvimento isolados.",
    shortDescription:
      "Aprenda a usar Docker para criar ambientes de desenvolvimento isolados.",
    date: "2025-05-20",
    instructors: ["Ana Costa"],
    image: "https://fakeimg.pl/600x400?text=Workshop+Docker",
  },
  {
    id: "6",
    title: "GraphQL com Apollo",
    description: "Construa APIs GraphQL usando Apollo Server e Apollo Client.",
    shortDescription:
      "Construa APIs GraphQL usando Apollo Server e Apollo Client.",
    date: "2025-05-24",
    instructors: ["Carlos Oliveira", "Maria Silva"],
    image: "https://fakeimg.pl/600x400?text=Workshop+GraphQL",
  },
  {
    id: "7",
    title: "Desenvolvimento Mobile com React Native",
    description: "Aprenda a criar aplicativos móveis usando React Native.",
    shortDescription: "Aprenda a criar aplicativos móveis usando React Native.",
    date: "2025-05-28",
    instructors: ["João Pereira"],
    image: "https://fakeimg.pl/600x400?text=Workshop+React+Native",
  },
  {
    id: "8",
    title: "Introdução ao Python para Data Science",
    description:
      "Aprenda os fundamentos do Python e como usá-lo para análise de dados.",
    shortDescription:
      "Aprenda os fundamentos do Python e como usá-lo para análise de dados.",
    date: "2025-06-01",
    instructors: ["Ana Costa"],
    image: "https://fakeimg.pl/600x400?text=Workshop+Python+Data+Science",
  },
];
