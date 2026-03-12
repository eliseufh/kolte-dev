type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <header className="max-w-2xl">
      <p className="text-xs uppercase tracking-[0.18em] text-primary/80">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
        {subtitle}
      </p>
    </header>
  );
}
