"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { learningNow } from "@/data/portfolio";

export function LearningNowSection() {
  return (
    <section id="learning" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Aprendendo agora"
          title="Em modo estudo ativo"
          subtitle="Estou aprofundando fundamentos para crescer como dev que entende o sistema por inteiro, nao so a camada de interface."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {learningNow.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Card className="h-full border-white/15 bg-white/[0.03]">
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.detail}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.12em] text-primary/80">
                    {item.progress}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
