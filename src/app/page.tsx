export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[42px_42px] mask-[radial-gradient(circle_at_center,black,transparent_80%)]" />

      <section className="w-full max-w-xl rounded-3xl border border-white/15 bg-slate-950/70 p-8 text-center shadow-[0_20px_80px_rgba(2,6,23,0.6)] backdrop-blur-xl md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/90">Aviso</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
          Website em construcao
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
          Estou preparando uma nova versao do portfolio. Em breve esta pagina
          vai voltar com uma experiencia completa.
        </p>
        <p className="mt-5 text-xs text-slate-400">
          Obrigado pela paciencia.
        </p>
      </section>
    </main>
  );
}
