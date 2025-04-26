export interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  instructors: string[];
  image?: string;
}

export const workshops: Workshop[] = [
  {
    id: "1",
    title: "Introdução ao React",
    description: "Aprenda os fundamentos do React e como construir interfaces interativas.",
    date: "2025-05-10",
    instructors: ["Maria Silva"],
    image: "https://placehold.co/600x400?text=Workshop+React",
  },
  {
    id: "2",
    title: "TypeScript Avançado",
    description: "Domine recursos avançados do TypeScript para aplicações robustas.",
    date: "2025-05-17",
    instructors: ["João Pereira"],
    image: "https://placehold.co/600x400?text=Workshop+TypeScript",
  },
];