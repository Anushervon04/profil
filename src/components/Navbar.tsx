import { useEffect, useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { developer } from '@/data/developer';
import { useTheme } from '@/hooks/useTheme';
import { LogoMark } from '@/components/LogoMark';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${isScrolled ? 'glass border-b border-base shadow-sm' : ''}`}>
      <div className="section-container flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <LogoMark />
          <span className="font-display text-sm font-semibold text-fg">Anushervon<span className="text-accent-500">.</span></span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[13px] font-medium text-muted transition-colors hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {developer.github && <a href={developer.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-fg"><Github size={17} /></a>}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a href="#contact" className="ml-2 rounded-lg bg-fg px-4 py-2 text-xs font-semibold text-[rgb(var(--bg))] transition-transform hover:-translate-y-0.5">Let's talk</a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button type="button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} className="flex h-9 w-9 items-center justify-center rounded-lg border border-base text-fg">
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-base bg-base px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="section-container flex flex-col gap-1 px-0">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-elev hover:text-fg">{item.label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
