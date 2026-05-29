export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}
