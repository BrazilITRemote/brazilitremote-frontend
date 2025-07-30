export interface Organizer {
  id: string;
  name: string;
  nickname: string;
  role: string[];
  avatar: string;
  active: boolean;
  linkedIn?: string;
  github?: string;
}

export const organizers: Organizer[] = [
  {
    id: "control-c",
    name: "Ygor A.",
    nickname: "Control-C",
    role: ["SRE", "DevSecOps"],
    avatar: "",
    active: true,
    github: "https://github.com/ygorth",
  },
  {
    id: "thundree",
    name: "Richard",
    nickname: "Thundree",
    role: ["Frontend Developer"],
    avatar: "",
    active: true,
    github: "https://github.com/thundree",
  },
  {
    id: "carranca",
    name: "Rafael S.",
    nickname: "Carranca",
    role: ["DevOps", "CloudOps"],
    avatar: "",
    active: true,
    github: "https://github.com/sousarafael",
  },
  {
    id: "bokao",
    name: "Rafael O.",
    nickname: "Bokão",
    role: ["Backend Developer"],
    avatar: "",
    active: true,
  },
  {
    id: "magoolation",
    name: "Alexandre S.",
    nickname: "Magoolation",
    role: ["Backend Developer", "Microsoft MVP"],
    avatar: "",
    active: true,
  },
  {
    id: "zawacki",
    name: "Zawacki",
    nickname: "Zawacki",
    role: ["Backend Developer", "Teclas"],
    avatar: "",
    active: true,
    github: "https://github.com/lfzawacki",
  },
].toSorted((a, b) => a.name.localeCompare(b.name));

// Helper function to find organizer by ID
export const getOrganizerById = (id: string): Organizer | undefined => {
  return organizers.find((organizer) => organizer.id === id);
};

// Helper function to get only active organizers
export const getActiveOrganizers = (): Organizer[] => {
  return organizers.filter((organizer) => organizer.active);
};
