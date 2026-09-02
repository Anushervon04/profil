import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Project, ProjectCategory } from '@/types';
import { projects, projectCategories } from '@/data/projects';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';

export function ProjectsSection() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = useMemo(() => category === 'All' ? projects : projects.filter((project) => project.category === category as ProjectCategory), [category]);

  return <section id="projects" className="section-padding bg-elev"><div className="section-container"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionHeading eyebrow="Selected work" title="Projects with a point of view." description="A growing collection of systems, interfaces, and experiments. Each project is a chance to make something clearer, faster, and more useful." /><a href="#contact" className="group hidden items-center gap-2 text-sm font-medium text-accent-500 md:inline-flex">Have a project in mind? <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a></div><div className="no-scrollbar mt-12 flex gap-2 overflow-x-auto border-b border-base pb-3">{projectCategories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`shrink-0 rounded-md px-3 py-2 text-xs font-medium transition-colors ${category === item ? 'bg-accent-500 text-white' : 'text-muted hover:bg-card hover:text-fg'}`}>{item}</button>)}</div><div className="mt-8 grid gap-5 md:grid-cols-2">{filtered.map((project, index) => <ProjectCard key={project.id} project={project} onSelect={setSelected} featured={category === 'All' && index === 0} />)}</div><p className="mt-8 text-center text-xs text-muted">Project screenshots, links, and case studies will appear here as they are added to the portfolio data.</p></div><ProjectModal project={selected} onClose={() => setSelected(null)} /></section>;
}
