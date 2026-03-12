"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const social = [
  { href: "https://github.com/", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:seuemail@exemplo.com", label: "Email", icon: Mail },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <Badge className="mb-5">Junior dev em evolucao constante</Badge>
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Entre interfaces, chamados e terminais: eu curto resolver problema
            de verdade.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg">
            Tenho 1 ano de experiencia como desenvolvedor junior e hoje atuo ha
            4 meses em helpdesk. Essa mistura me fez enxergar melhor como
            produto, usuario e infraestrutura se conectam no mundo real.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="#projects">
              <Button size="lg">
                Ver meus projetos
                <ArrowUpRight className="ml-2 size-4" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="secondary" size="lg">
                Conversar comigo
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {social.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 text-xs text-muted-foreground transition hover:border-white/30 hover:text-foreground"
              >
                <Icon className="size-3.5" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-10 -top-8 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-12 right-0 h-44 w-44 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-[0_25px_80px_rgba(3,5,16,0.55)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.22em] text-primary/80">
              Snapshot atual
            </p>
            <h3 className="mt-3 text-xl font-medium text-foreground">
              Codigo, suporte e muito estudo tecnico
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Meu foco hoje e crescer como profissional completo: construir boas
              interfaces e entender, por baixo, como os sistemas realmente
              funcionam.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["1 ano", "como dev junior"],
                ["4 meses", "atuando em helpdesk"],
                ["100%", "comprometido com evolucao"],
                ["∞", "curiosidade tecnica"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-black/20 p-3"
                >
                  <p className="text-lg font-semibold text-foreground">
                    {value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
