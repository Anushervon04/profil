import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { developer } from '@/data/developer';

export function Footer() {
  const links = [
    { label: 'GitHub', href: developer.github, icon: Github },
    { label: 'LinkedIn', href: developer.linkedin, icon: Linkedin },
    { label: 'Telegram', href: developer.telegram, icon: Send },
    { label: 'Email', href: developer.email ? `mailto:${developer.email}` : '', icon: Mail },
  ];

  return (
    <footer className="border-t border-base bg-elev">
      <div className="section-container flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-fg">{developer.name}</p>
          <p className="mt-1 text-sm text-muted">{developer.title}</p>
        </div>
        <div className="flex items-center gap-2">
          {links.map(({ label, href, icon: Icon }) => href && (
            <a key={label} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-lg border border-base text-muted transition-colors hover:border-accent-500 hover:text-accent-500">
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
      <div className="section-container border-t border-base py-5 text-xs text-muted">
        <p>© 2026 {developer.name}. Designed & built with intent.</p>
      </div>
    </footer>
  );
}
