import { organizers } from "./organizers";

export interface Instructor {
  id: string;
  name: string;
  nickname: string;
  role: string[];
  avatar: string;
  active: boolean;
  linkedIn?: string;
  github?: string;
}

// Array to hold additional instructors
const instructorsArray: Instructor[] = [];

export const instructors: Instructor[] = [
  ...organizers,
  ...instructorsArray,
].sort((a, b) => a.name.localeCompare(b.name));

// Helper function to find instructor by ID
export const getInstructorById = (id: string): Instructor | undefined => {
  return instructors.find((instructor) => instructor.id === id);
};

// Helper function to get only active instructors
export const getActiveInstructors = (): Instructor[] => {
  return instructors.filter((instructor) => instructor.active);
};
