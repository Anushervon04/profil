import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/types';
import { ProjectVisual } from '@/components/ProjectVisual';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  featured?: boolean;
}

export function ProjectCard({ project, onSelect, featured = false }: ProjectCardProps) {
  return (
    <article className={`group overflow-hidden rounded-2xl border border-base bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-2xl hover:shadow-black/10 ${featured ? 'md:col-span-2' : ''}`}>
      <button type="button" onClick={() => onSelect(project)} className="block w-full text-left" aria-label={`View ${project.title} details`}>
        <div className={`${featured ? 'aspect-[2/1] sm:aspect-[2.25/1]' : 'aspect-[1.65/1]'} overflow-hidden`}><ProjectVisual project={project} compact={!featured} /></div>
      </button>
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-500">{project.category}</span>
          {project.status && <span className="flex items-center gap-1.5 text-[11px] text-muted"><span className={`h-1.5 w-1.5 rounded-full ${project.status === 'Live' ? 'bg-success-500' : 'bg-warning-500'}`} />{project.status}</span>}
        </div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-semibold tracking-tight text-fg">{project.title}</h3>
          <ArrowUpRight size={17} className="mt-1 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-500" />
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">{project.technologies.slice(0, 3).map((tech) => <span key={tech} className="rounded-md bg-elev px-2 py-1 text-[10px] font-medium text-muted">{tech}</span>)}</div>
          <div className="flex shrink-0 items-center gap-2">
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} aria-label={`${project.title} on GitHub`} className="text-muted transition-colors hover:text-fg"><Github size={15} /></a>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" onClick={(event) => event.stopPropagation()} aria-label={`Open ${project.title} live demo`} className="text-muted transition-colors hover:text-accent-500"><ExternalLink size={15} /></a>}
          </div>
        </div>
      </div>
    </article>
  );
}
