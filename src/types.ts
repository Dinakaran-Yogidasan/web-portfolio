export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  category: "Frontend" | "DevOps" | "Fullstack";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

