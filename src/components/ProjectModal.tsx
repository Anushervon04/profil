import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ExternalLink, Github, X } from 'lucide-react';
import type { Project } from '@/types';
import { ProjectVisual } from '@/components/ProjectVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!project) return;
    setActiveImage(0);
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown); };
  }, [project, onClose]);

  if (!project) return null;

  const hasImages = project.images.length > 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label={`${project.title} details`}>
      <div className="mx-auto min-h-full max-w-4xl py-4 sm:py-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--bg))] shadow-2xl">
          <div className="flex items-center justify-between border-b border-base px-5 py-4 sm:px-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-500">Project details</span>
            <button type="button" onClick={onClose} aria-label="Close project details" className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-elev hover:text-fg"><X size={17} /></button>
          </div>
          <div className="aspect-[2/1] max-h-[430px] overflow-hidden"><ProjectVisual project={project} /></div>
          {hasImages && <div className="flex gap-2 border-b border-base bg-elev p-3">{project.images.map((image, index) => <button key={image} type="button" onClick={() => setActiveImage(index)} className={`h-14 w-20 overflow-hidden rounded-md border-2 ${index === activeImage ? 'border-accent-500' : 'border-transparent'}`}><img src={image} alt={`${project.title} screenshot ${index + 1}`} className="h-full w-full object-cover" /></button>)}</div>}
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="font-mono text-xs text-muted">{String(project.category).toUpperCase()} / {project.id}</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg">{project.title}</h2>
              <p className="mt-5 text-sm leading-7 text-muted">{project.longDescription || project.description}</p>
              {project.features && <div className="mt-8"><h3 className="text-sm font-semibold text-fg">Key features</h3><ul className="mt-4 space-y-3">{project.features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6 text-muted"><Check size={16} className="mt-1 shrink-0 text-accent-500" />{feature}</li>)}</ul></div>}
              {project.architecture && <div className="mt-8"><h3 className="text-sm font-semibold text-fg">Architecture</h3><p className="mt-3 text-sm leading-7 text-muted">{project.architecture}</p></div>}
            </div>
            <aside>
              <h3 className="text-sm font-semibold text-fg">Technology</h3>
              <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-lg border border-base bg-elev px-3 py-2 text-xs text-muted">{tech}</span>)}</div>
              {(project.liveUrl || project.githubUrl) && <div className="mt-8 flex flex-wrap gap-3">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-accent-600">Live demo <ExternalLink size={14} /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-base px-4 py-2.5 text-xs font-semibold text-fg transition-colors hover:border-accent-500"><Github size={14} /> Source</a>}</div>}
            </aside>
          </div>
          <div className="flex items-center justify-between border-t border-base px-6 py-4 text-xs text-muted sm:px-8"><button type="button" onClick={() => setActiveImage((index) => Math.max(0, index - 1))} disabled={!hasImages || activeImage === 0} className="inline-flex items-center gap-2 disabled:opacity-30"><ArrowLeft size={14} /> Previous</button>{hasImages && <span>{activeImage + 1} / {project.images.length}</span>}<button type="button" onClick={() => setActiveImage((index) => Math.min(project.images.length - 1, index + 1))} disabled={!hasImages || activeImage === project.images.length - 1} className="inline-flex items-center gap-2 disabled:opacity-30">Next <ArrowRight size={14} /></button></div>
        </div>
      </div>
    </div>
  );
}
