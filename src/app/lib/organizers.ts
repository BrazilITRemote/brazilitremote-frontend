export interface Organizer {
  id: string;
  name: string;
  role: string;
  avatar: string;
  active: boolean;
  linkedIn?: string; // Optional LinkedIn profile link
  github?: string; // Optional GitHub profile link
}

export const organizers: Organizer[] = [
  {
    id: "control-c",
    name: "Control-C",
    role: "Senior Manager, SRE/DevSecOps",
    avatar: "",
    active: true,
  },
  {
    id: "magoolation",
    name: "Magoolation",
    role: "Microsoft MVP, DevOps Engineer",
    avatar: "",
    active: true,
  },
  {
    id: "thundree",
    name: "Thundree",
    role: "Frontend Developer",
    avatar: "",
    active: true,
    github: "https://github.com/thundree",
  },
  {
    id: "bokao",
    name: "Bokão",
    role: "Coordenador",
    avatar: "",
    active: true,
  },
];

// Helper function to find organizer by ID
export const getOrganizerById = (id: string): Organizer | undefined => {
  return organizers.find((organizer) => organizer.id === id);
};

// Helper function to get only active organizers
export const getActiveOrganizers = (): Organizer[] => {
  return organizers.filter((organizer) => organizer.active);
};
