interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-500">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-muted">{description}</p>}
    </div>
  );
}
