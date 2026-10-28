"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/data/portfolio";

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="border-y border-border/70 bg-surface/50 py-24 sm:py-28">
      <div className="section-wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow mb-4">Selected work</p>
            <h2 className="section-title">Ideas into impact.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted">A mix of products, prototypes, and architecture work shaped by real-world problems.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className={`group relative flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border bg-surface p-6 transition hover:-translate-y-1 sm:p-8 ${project.featured ? "border-accent/40 shadow-glow" : "border-border hover:border-accent/30"}`}>
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-muted">PROJECT / {project.number}</span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-[0.68rem] font-semibold text-accent">
                    <Star size={12} fill="currentColor" /> Featured Startup Project
                  </span>
                )}
              </div>
              <p className="eyebrow !text-[0.65rem]">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.name}</h3>
              {project.englishName && <p className="mt-1 text-sm text-muted">{project.englishName}</p>}
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">{project.description}</p>
              <AnimatePresence initial={false}>
                {expandedProject === project.number && (
                  <motion.div
                    id={`project-details-${project.number}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-sm leading-6 text-muted">
                      {project.details}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-md bg-background px-2.5 py-1.5 text-[0.68rem] font-medium text-foreground/75">{technology}</span>
                ))}
              </div>
              <button
                type="button"
                aria-expanded={expandedProject === project.number}
                aria-controls={
                  expandedProject === project.number
                    ? `project-details-${project.number}`
                    : undefined
                }
                onClick={() =>
                  setExpandedProject((current) =>
                    current === project.number ? null : project.number,
                  )
                }
                className="focus-ring mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-sm text-sm font-semibold text-accent transition hover:gap-3"
              >
                {expandedProject === project.number ? "Back" : "See More"}
                <ArrowUpRight
                  size={15}
                  className={
                    expandedProject === project.number ? "rotate-180" : ""
                  }
                  aria-hidden="true"
                />
              </button>
              <div className="mt-auto flex items-center gap-5 pt-7">
                {[
                  {
                    label: "Live Demo",
                    href: project.demo,
                    Icon: ExternalLink,
                  },
                  {
                    label: "GitHub Repository",
                    href: project.github,
                    Icon: Github,
                  },
                ].map(({ label, href, Icon }) =>
                  href ? (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold transition hover:text-accent"
                    >
                      <Icon size={16} aria-hidden="true" /> {label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  ) : (
                    <button
                      key={label}
                      type="button"
                      disabled
                      aria-label={`${label} URL has not been provided`}
                      title={`Add the public ${label.toLowerCase()} URL in data/portfolio.ts`}
                      className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 text-xs text-muted"
                    >
                      <Icon size={15} aria-hidden="true" /> {label}
                    </button>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-5 text-muted">
          Demo and repository URLs can be added to{" "}
          <code>data/portfolio.ts</code> as they become publicly available.
        </p>
      </div>
    </section>
  );
}
