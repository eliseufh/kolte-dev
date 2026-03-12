"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sections/section-heading";
import { timeline } from "@/data/portfolio";

export function JourneySection() {
  return (
    <section id="journey" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Jornada"
          title="Minha jornada na tecnologia, ate aqui"
          subtitle="Uma trilha com mudancas de contexto, muito aprendizado e vontade real de crescer como profissional tecnico completo."
        />

        <div className="relative mt-10 space-y-6 before:absolute before:left-2.75 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-linear-to-b before:from-primary/70 before:to-white/10 md:before:left-1/2 md:before:-translate-x-1/2">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative grid gap-4 md:grid-cols-2 md:gap-10"
            >
              <div className="hidden md:block" />
              <div className="absolute left-0 top-2 size-5.5 rounded-full border border-primary/70 bg-slate-950 shadow-[0_0_0_6px_rgba(2,6,23,1)] md:left-1/2 md:-translate-x-1/2" />
              <div className="rounded-2xl border border-white/15 bg-white/3 p-5 md:col-span-1 md:col-start-1 md:text-right">
                <p className="text-xs uppercase tracking-[0.15em] text-primary/80">
                  {item.period}
                </p>
                <h3 className="mt-2 text-base font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
