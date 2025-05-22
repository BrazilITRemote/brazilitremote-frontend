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
    avatar: "https://placehold.co/64x64?text=Palestrante",
  },
  {
    id: "2",
    name: "Carlos Alberto",
    role: "Coordenador",
    avatar: "https://placehold.co/64x64?text=Palestrante",
  },
];
