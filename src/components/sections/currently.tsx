"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { currentCards } from "@/data/portfolio";

export function CurrentlySection() {
  return (
    <section id="currently" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Atualmente"
          title="Um retrato rapido do meu momento"
          subtitle="Esses quatro blocos mostram no que estou focado hoje e para onde estou caminhando nos proximos meses."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {currentCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Card className="h-full border-white/15 bg-linear-to-b from-white/6 to-white/2">
                <CardContent className="p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-primary/80">
                    {card.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {card.detail}
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
