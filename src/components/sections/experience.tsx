"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { experienceItems } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experiencia profissional"
          title="Onde ja atuei e o que aprendi"
          subtitle="Minha trajetoria mistura desenvolvimento e suporte tecnico, o que me deu visao pratica de produto e operacao."
        />

        <div className="mt-8 space-y-4">
          {experienceItems.map((item, index) => (
            <motion.div
              key={`${item.role}-${item.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card className="border-white/15 bg-white/3">
                <CardContent className="p-6 md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.company}
                      </p>
                    </div>
                    <p className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-muted-foreground">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {item.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
