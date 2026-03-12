"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-4 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/15 bg-linear-to-br from-slate-900/80 to-slate-950 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:p-12"
        >
          <SectionHeading
            eyebrow="Contato"
            title="Se curtiu a vibe, me chama"
            subtitle="Estou sempre aberto para trocar ideia sobre tecnologia, projetos, aprendizado e oportunidades para crescer construindo coisas boas."
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="mailto:seuemail@exemplo.com">
              <Button size="lg">Bater um papo por email</Button>
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary" size="lg">
                Conectar no LinkedIn
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
