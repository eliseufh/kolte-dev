"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { featuredProjects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos em destaque"
          subtitle="Projetos que mostram como eu penso produto, codigo e evolucao tecnica no dia a dia."
        />

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <Card className="group h-full border-white/15 bg-linear-to-b from-white/6 to-white/2 transition-all duration-300 hover:-translate-y-1 hover:border-white/30">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-foreground">
                      {project.title}
                    </h3>
                    <Badge>{project.status}</Badge>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {project.summary}
                  </p>
                  <p className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-xs leading-6 text-slate-300">
                    {project.impact}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/3 px-2 py-1 text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-1">
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition group-hover:text-primary"
                    >
                      Ver projeto
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
