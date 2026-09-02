import { ArrowUpRight, Braces, Database, Layers, Server } from 'lucide-react';
import { developer } from '@/data/developer';
import { SectionHeading } from '@/components/SectionHeading';

const disciplines = [
  { icon: Layers, label: 'Product interfaces', detail: 'Clear, responsive experiences that feel natural to use.' },
  { icon: Server, label: 'Backend systems', detail: 'Reliable services and APIs built for real-world workflows.' },
  { icon: Database, label: 'Data foundations', detail: 'Thoughtful models and infrastructure that stay maintainable.' },
  { icon: Braces, label: 'End-to-end ownership', detail: 'From first idea to a polished, production-ready result.' },
];

export function AboutSection() {
  return <section id="about" className="section-padding"><div className="section-container grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><SectionHeading eyebrow="A little context" title="Engineering with clarity." description="I design and develop modern full-stack web applications, combining scalable backend architecture with clean, responsive, and intuitive interfaces." /><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-500">Start a conversation <ArrowUpRight size={15} /></a></div><div><div className="grid gap-3 sm:grid-cols-2">{disciplines.map(({ icon: Icon, label, detail }) => <div key={label} className="rounded-xl border border-base bg-card p-5 transition-colors hover:border-accent-500/40"><Icon size={20} className="text-accent-500" strokeWidth={1.5} /><h3 className="mt-5 text-sm font-semibold text-fg">{label}</h3><p className="mt-2 text-sm leading-6 text-muted">{detail}</p></div>)}</div><div className="mt-5 rounded-xl border border-base bg-elev p-6"><div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-widest text-muted">Approach</span><span className="font-mono text-[10px] text-accent-500">01 — 04</span></div><p className="mt-5 max-w-xl font-display text-xl leading-8 text-fg">“Good software is not just functional. It is understandable, adaptable, and quietly gets out of the way.”</p><p className="mt-5 text-sm text-muted">{developer.name}</p></div></div></div></section>;
}
