export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-7 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} Eliseu Silva - feito com cafe,
          curiosidade e codigo.
        </p>
        <p>Entre tickets e commits, sigo em modo evolucao.</p>
      </div>
    </footer>
  );
}
