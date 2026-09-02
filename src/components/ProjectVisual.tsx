import { ArrowUpRight, Code2, Layers3 } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectVisualProps {
  project: Project;
  compact?: boolean;
}

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  if (project.images.length > 0) {
    return <img src={project.images[0]} alt={`${project.title} preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />;
  }

  return (
    <div className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-[#11151b] via-[#121922] to-[#0b0e12] ${compact ? 'p-5' : 'p-7'}`}>
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(rgba(89,192,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(89,192,255,.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent-300"><Code2 size={13} /> {project.category}</span>
          <ArrowUpRight size={16} className="text-slate-500 transition-colors group-hover:text-accent-300" />
        </div>
        <div className="relative py-5">
          <div className="absolute -left-5 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-accent-500/10 blur-2xl" />
          <div className="relative flex items-center gap-3">
            <Layers3 size={compact ? 24 : 34} className="text-accent-400" strokeWidth={1.2} />
            <div className="h-px w-10 bg-accent-500/50" />
            <span className="font-mono text-xs text-slate-500">/build/{project.id}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => <span key={tech} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-400">{tech}</span>)}
        </div>
      </div>
    </div>
  );
}
