"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Sou movido por curiosidade, nao por titulo"
          subtitle="Gosto de tecnologia porque ela mistura criatividade com raciocinio tecnico. Pra mim, aprender e parte do trabalho."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-8"
        >
          <Card className="border-white/15 bg-white/[0.03]">
            <CardContent className="grid gap-6 p-7 md:grid-cols-3 md:p-8">
              <p className="text-sm leading-7 text-muted-foreground md:col-span-2 md:text-base">
                Comecei na programacao criando interfaces e produtos, e hoje
                tambem vivo a rotina de suporte tecnico. Isso me deu uma visao
                mais completa: nao basta funcionar no ambiente ideal, precisa
                funcionar na vida real. Continuo estudando para unir cada vez
                mais desenvolvimento, infraestrutura e arquitetura de sistemas.
              </p>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-primary/80">
                    Momento
                  </p>
                  <p className="mt-1 text-foreground">Dev junior em evolucao</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-primary/80">
                    Hoje
                  </p>
                  <p className="mt-1 text-foreground">
                    Helpdesk, troubleshooting e estudo tecnico
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-primary/80">
                    Direcao
                  </p>
                  <p className="mt-1 text-foreground">
                    Dev + Cloud + Infra + Arquitetura
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
