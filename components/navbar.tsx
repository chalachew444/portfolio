"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    function updateActiveSection() {
      const currentSection = [...navItems]
        .reverse()
        .find(({ id }) => {
          const section = document.getElementById(id);
          return section && section.getBoundingClientRect().top <= 120;
        });

      setActiveSection(currentSection?.id ?? "hero");
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  function renderNavLink(item: (typeof navItems)[number], mobile = false) {
    const active = activeSection === item.id;

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        aria-current={active ? "location" : undefined}
        className={`focus-ring relative rounded-full transition-colors duration-200 ${
          mobile
            ? "px-3 py-3 text-sm"
            : "px-3 py-2 text-sm"
        } ${
          active
            ? "bg-accent/10 font-semibold text-accent"
            : "text-muted hover:bg-accent/5 hover:text-accent"
        }`}
      >
        {item.label}
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent"
          initial={false}
          animate={{ scaleX: active ? 1 : 0, opacity: active ? 1 : 0 }}
          whileHover={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </Link>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="section-wrap flex h-[4.5rem] items-center justify-between">
        <Link href="#home" className="focus-ring flex items-center gap-2.5 rounded-sm" onClick={() => setMenuOpen(false)}>
          <span className="grid size-8 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">CY</span>
          <span className="text-sm font-semibold tracking-tight">Chalachew<span className="text-accent">.</span></span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-1">
            {navItems.map((item) => renderNavLink(item))}
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-3 md:hidden">
          <div className="section-wrap flex flex-col">
            {navItems.map((item) => renderNavLink(item, true))}
          </div>
        </div>
      )}
    </header>
  );
}
