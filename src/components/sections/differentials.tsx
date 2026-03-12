"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { differentials } from "@/data/portfolio";

export function DifferentialsSection() {
  return (
    <section id="differentials" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Diferenciais"
          title="O que torna meu trabalho distinto"
          subtitle="Mais que codigo: criterio de produto, qualidade de execucao e colaboracao para gerar impacto continuo."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.08 }}
            >
              <Card className="h-full border-white/15 bg-white/3">
                <CardContent className="p-6">
                  <Sparkles className="size-4 text-primary" />
                  <h3 className="mt-4 text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
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
