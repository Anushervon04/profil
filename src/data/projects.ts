import type { Project } from '@/types';

export const projectCategories = [
  'All',
  'Web Applications',
  'EdTech',
  'SaaS',
  'Admin Systems',
  'Business',
  'Education',
  'AI',
  'Other',
] as const;

export const projects: Project[] = [
  {
    id: 'project-01',
    title: 'Your next project',
    description:
      'A space for a production project showcase. Add your real product, the problem it solves, and the impact it creates.',
    longDescription:
      'This project entry is ready for your first real case study. Replace the title, description, screenshots, technologies, and links in the data file when your project details are available.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'Web Applications',
    images: [],
    featured: true,
    status: 'In development',
    features: [
      'Replace this with the most important product capability',
      'Describe a measurable workflow or user experience',
      'Add the engineering detail that made the project valuable',
    ],
    architecture:
      'Add the frontend, backend, database, and deployment architecture once the project information is available.',
  },
  {
    id: 'project-02',
    title: 'Add a project here',
    description:
      'Build a strong project story around a real business, education, SaaS, or internal system you have shipped.',
    technologies: ['Django', 'PostgreSQL', 'REST API'],
    category: 'SaaS',
    images: [],
    status: 'In development',
    features: [
      'Add the primary workflow this project enables',
      'Show the technical challenge you solved',
      'Describe the outcome without invented metrics',
    ],
  },
];
