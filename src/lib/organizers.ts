import { Instructor } from "./instructors";

export interface Organizer extends Instructor {
  id: string;
  name: string;
  nickname: string;
  role: string[];
  avatar: string;
  active: boolean;
}

export const organizers: Organizer[] = [
  {
    id: "control-c",
    name: "Ygor A.",
    nickname: "Control-C",
    role: ["SRE", "DevSecOps"],
    avatar: "/images/organizador (2).jpg",
    active: true,
    github: "https://github.com/ygorth",
  },
  {
    id: "carranca",
    name: "Rafael S.",
    nickname: "Carranca",
    role: ["DevOps", "CloudOps"],
    avatar: "/images/organizador (3).jpg",
    active: true,
    github: "https://github.com/sousarafael",
  },
  {
    id: "magoolation",
    name: "Alexandre S.",
    nickname: "magoolation",
    role: ["Cloud Solution Architect", "Microsoft"],
    avatar: "/images/organizador (1).jpg",
    active: true,
    github: "https://github.com/magoolation",
  },
  {
    id: "thundree",
    name: "Richard",
    nickname: "Thundree",
    role: ["Frontend Developer"],
    avatar: "/images/organizador (6).png",
    active: true,
    github: "https://github.com/thundree",
  },
  {
    id: "zawacki",
    name: "Zawacki",
    nickname: "Zawacki",
    role: ["Backend Developer", "YouTube Canal Teclas"],
    avatar: "/images/organizador (4).jpg",
    active: true,
    github: "https://github.com/lfzawacki",
  },
].sort((a, b) => a.name.localeCompare(b.name));

// Helper function to find organizer by ID
export const getOrganizerById = (id: string): Organizer | undefined => {
  return organizers.find((organizer) => organizer.id === id);
};

// Helper function to get only active organizers
export const getActiveOrganizers = (): Organizer[] => {
  return organizers.filter((organizer) => organizer.active);
};
