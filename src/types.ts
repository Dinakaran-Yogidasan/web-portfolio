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
  level: number; // 0-100
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Frontend" | "DevOps" | "System Design";
  imageUrl: string;
  slug: string;
}

export interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  isThinking?: boolean;
}
