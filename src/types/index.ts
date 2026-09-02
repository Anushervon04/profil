export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
  status?: 'Live' | 'In development' | 'Archived';
  features?: string[];
  architecture?: string;
}

export type ProjectCategory =
  | 'Web Applications'
  | 'EdTech'
  | 'SaaS'
  | 'Admin Systems'
  | 'Business'
  | 'Education'
  | 'AI'
  | 'Other';

export interface Technology {
  name: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  color: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}
