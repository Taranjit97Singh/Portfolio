export interface Profile {
  name: string;
  title: string;
  subTitle: string;
  bio: string;
  avatarUrl: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
    phone?: string;
  };
  resumeUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'languages' | 'frontend' | 'backend' | 'devops' | 'databases' | 'ai-ml';
  iconSvg?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: 'frontend' | 'fullstack' | 'ai-ml' | 'backend';
  imageName: string; // The generated mock image name or local asset
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string; // e.g., "2023 - Present"
  current: boolean;
  description: string[];
  tech: string[];
}
