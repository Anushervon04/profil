import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Send } from 'lucide-react';
import { developer } from '@/data/developer';

export function Hero() {
  const socials = [
    { label: 'GitHub', href: developer.github, icon: Github },
    { label: 'LinkedIn', href: developer.linkedin, icon: Linkedin },
    { label: 'Telegram', href: developer.telegram, icon: Send },
    { label: 'Email', href: developer.email ? `mailto:${developer.email}` : '', icon: Mail },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40 [mask-image:linear-gradient(to_bottom,black_15%,transparent_80%)]" />
      <div className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-accent-500/10 blur-[100px]" />
      <div className="section-container relative grid w-full items-center gap-14 py-24 lg:grid-cols-[1.15fr_.85fr] lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-7 flex animate-fade-down items-center gap-3 font-mono text-xs text-muted"><span className="inline-block h-2 w-2 animate-pulse rounded-full bg-success-500" />{developer.availability}<span className="text-border-base">/</span>{developer.location}</div>
          <h1 className="animate-fade-up font-display text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-fg sm:text-6xl lg:text-7xl">Building digital<br /><span className="gradient-text">systems that matter.</span></h1>
          <p className="mt-8 max-w-xl animate-fade-up text-base leading-8 text-muted [animation-delay:120ms] sm:text-lg">{developer.description}</p>
          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:240ms]"><a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/20 transition-all hover:-translate-y-0.5 hover:bg-accent-600">View projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a><a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-base px-5 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent-500 hover:text-accent-500">Get in touch</a></div>
          <div className="mt-10 flex animate-fade-up items-center gap-4 [animation-delay:360ms]">{socials.map(({ label, href, icon: Icon }) => href && <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" aria-label={label} className="text-muted transition-colors hover:text-fg"><Icon size={17} strokeWidth={1.7} /></a>)}</div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-[410px] rounded-3xl border border-base bg-elev p-5 shadow-2xl shadow-black/10"><div className="absolute -inset-4 -z-10 rounded-[2rem] border border-accent-500/10" /><div className="flex h-full flex-col overflow-hidden rounded-2xl border border-base bg-[rgb(var(--bg))]"><div className="flex items-center gap-2 border-b border-base px-5 py-4"><span className="h-2.5 w-2.5 rounded-full bg-error-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-warning-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-success-400/70" /><span className="ml-auto font-mono text-[10px] text-muted">portfolio.tsx</span></div><div className="flex flex-1 flex-col justify-center px-8 font-mono text-xs leading-8 sm:text-sm"><p><span className="text-accent-400">const</span> <span className="text-fg">developer</span> = {'{'}</p><p className="pl-5"><span className="text-muted">name:</span> <span className="text-success-400">'Anushervon'</span>,</p><p className="pl-5"><span className="text-muted">focus:</span> <span className="text-success-400">'full-stack'</span>,</p><p className="pl-5"><span className="text-muted">ships:</span> <span className="text-success-400">'with intent'</span></p><p>{'}'}</p><p className="mt-4"><span className="text-accent-400">return</span> <span className="text-fg">impact</span><span className="animate-blink text-accent-400">_</span></p></div><div className="border-t border-base px-5 py-3"><div className="flex items-center justify-between font-mono text-[10px] text-muted"><span>main</span><span>UTF-8</span></div></div></div></div>
          <div className="absolute -bottom-5 -left-7 rounded-xl border border-base bg-card px-4 py-3 shadow-xl"><p className="font-mono text-[10px] text-muted">currently building</p><p className="mt-1 text-sm font-semibold text-fg">Useful things for the web.</p></div>
        </div>
      </div>
      <a href="#projects" aria-label="Scroll to projects" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-fg sm:block"><ArrowDown size={18} /></a>
    </section>
  );
}
