import type { Technology } from '@/types';

export const technologies: Technology[] = [
  { name: 'React', description: 'Composable interfaces', category: 'Frontend', color: '#61dafb' },
  { name: 'TypeScript', description: 'Safer JavaScript at scale', category: 'Frontend', color: '#3178c6' },
  { name: 'Next.js', description: 'Production React framework', category: 'Frontend', color: '#ffffff' },
  { name: 'JavaScript', description: 'The language of the web', category: 'Frontend', color: '#f7df1e' },
  { name: 'HTML5', description: 'Semantic foundations', category: 'Frontend', color: '#e34f26' },
  { name: 'CSS3', description: 'Crafted visual systems', category: 'Frontend', color: '#1572b6' },
  { name: 'Tailwind CSS', description: 'Utility-first styling', category: 'Frontend', color: '#38bdf8' },
  { name: 'Django', description: 'Batteries-included backend', category: 'Backend', color: '#44b78b' },
  { name: 'Django REST Framework', description: 'Powerful API toolkit', category: 'Backend', color: '#a30000' },
  { name: 'FastAPI', description: 'Fast, typed Python APIs', category: 'Backend', color: '#05998b' },
  { name: 'Flask', description: 'Lightweight Python services', category: 'Backend', color: '#e8e8e8' },
  { name: 'REST API', description: 'Reliable integrations', category: 'Backend', color: '#f59e0b' },
  { name: 'PostgreSQL', description: 'Robust relational data', category: 'Database', color: '#4169e1' },
  { name: 'Supabase', description: 'Open source backend', category: 'Database', color: '#3ecf8e' },
  { name: 'Redis', description: 'Fast in-memory data', category: 'Database', color: '#dc382d' },
  { name: 'Git', description: 'Version control', category: 'Tools', color: '#f05032' },
  { name: 'GitHub', description: 'Collaborative development', category: 'Tools', color: '#ffffff' },
  { name: 'Docker', description: 'Portable environments', category: 'Tools', color: '#2496ed' },
  { name: 'Vite', description: 'Instant frontend tooling', category: 'Tools', color: '#646cff' },
  { name: 'npm / pnpm', description: 'Package management', category: 'Tools', color: '#cb3837' },
];

export const technologyCategories = ['Frontend', 'Backend', 'Database', 'Tools'] as const;
