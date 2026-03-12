"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="O que eu sei"
          title="Minha caixa de ferramentas atual"
          subtitle="Conhecimentos que uso na pratica entre desenvolvimento, suporte tecnico e rotina de resolucao de problemas."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {skillCategories.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card className="h-full border-white/15 bg-white/3">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-foreground">
                    {group.category}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {item}
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
