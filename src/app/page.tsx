export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_85%,rgba(99,102,241,0.12),transparent_35%)]" />

      <section className="w-full max-w-xl rounded-2xl border border-white/15 bg-slate-950/65 p-8 text-center shadow-[0_20px_60px_rgba(2,6,23,0.45)] backdrop-blur md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Maintenance mode
        </p>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
          Website under construction
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-300 md:text-base">
          I am rebuilding this portfolio. A cleaner and improved version is
          coming soon.
        </p>

        <div className="mx-auto mt-7 h-px w-16 bg-white/20" />
      </section>
    </main>
  );
}
