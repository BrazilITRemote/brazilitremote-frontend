export interface Organizer {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export const organizers: Organizer[] = [
  {
    id: "1",
    name: "Ana Costa",
    role: "Fundadora",
    avatar: "/images/ana.jpg",
  },
  {
    id: "2",
    name: "Carlos Alberto",
    role: "Coordenador",
    avatar: "/images/carlos.jpg",
  },
];