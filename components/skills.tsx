"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Braces, Code2, Database } from "lucide-react";
import { skills } from "@/data/portfolio";
import { SkillIcon } from "@/components/skill-icon";

const icons = [Code2, Database, Braces];
const skillDetails: Record<string, string> = {
  "Next.js": "Server-rendered and full-stack React applications.",
  React: "Component-driven interfaces and interactive user experiences.",
  TypeScript: "Typed JavaScript for maintainable application code.",
  "Tailwind CSS": "Responsive, utility-first styling and design systems.",
  "HTML & CSS": "Accessible semantic markup and polished responsive layouts.",
  "Node.js": "Server-side JavaScript for full-stack web applications.",
  NestJS: "Structured, modular APIs with TypeScript.",
  "Express.js": "Lightweight REST APIs and backend services.",
  PostgreSQL: "Relational database design and dependable data storage.",
  "Prisma ORM": "Type-safe database access and schema modeling.",
  Git: "Version control and collaborative development workflows.",
  Docker: "Containerized development and application deployment.",
};

export function Skills() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills" className="section-wrap py-24 sm:py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow mb-4">Tools of the trade</p>
          <h2 className="section-title">My tech stack.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted">A growing toolkit for designing, building, and shipping dependable digital experiences.</p>
      </div>
      <div id="skills-details" className="grid gap-4 md:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = icons[index];
          return (
            <article key={group.title} className="group rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40 sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent"><Icon size={20} /></span>
                <span className="font-mono text-xs text-muted">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
              <p className="mt-2 text-sm text-muted">{group.description}</p>
              <div className="mt-6 space-y-3">
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-3 py-3"
                  >
                    <span className="flex min-w-0 items-center gap-2.5 text-sm font-medium">
                      <SkillIcon name={skill} />
                      {skill}
                    </span>
                    <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-1 text-[0.68rem] font-semibold text-accent">
                      {skill === "HTML & CSS" ? "Advanced" : "Intermediate"}
                    </span>
                  </div>
                ))}
              </div>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-3 border-t border-border pt-4">
                      {group.items.map((skill) => (
                        <li key={skill} className="text-xs leading-5 text-muted">
                          <span className="font-semibold text-foreground">
                            {skill}:
                          </span>{" "}
                          {skillDetails[skill] ??
                            "Foundational knowledge for software development."}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
              <ArrowUpRight size={16} className="ml-auto mt-8 text-muted transition group-hover:text-accent" />
            </article>
          );
        })}
      </div>
      <div className="mt-7 text-center">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls="skills-details"
          onClick={() => setExpanded((value) => !value)}
          className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent"
        >
          {expanded ? "Back" : "See More / Details"}
          <ArrowUpRight
            size={15}
            className={expanded ? "rotate-180" : ""}
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}
