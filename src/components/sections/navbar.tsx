"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre" },
  { href: "#journey", label: "Jornada" },
  { href: "#skills", label: "Skills" },
  { href: "#learning", label: "Aprendendo" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Projetos" },
  { href: "#currently", label: "Atualmente" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 px-4 py-3 transition-all duration-300 md:px-6",
          scrolled
            ? "bg-slate-950/80 shadow-[0_8px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            : "bg-slate-950/45 backdrop-blur",
        )}
      >
        <Link
          href="#home"
          className="text-sm font-semibold tracking-wide text-foreground"
        >
          Eliseu no modo build
        </Link>
        <ul className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          className="rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-foreground transition hover:bg-white/[0.08]"
        >
          Bora trocar ideia
        </Link>
      </nav>
    </div>
  );
}
