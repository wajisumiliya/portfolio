export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  link: string;
  category: 'Fullstack' | 'Backend' | 'Systems';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  logoUrl?: string;
  companyUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
}