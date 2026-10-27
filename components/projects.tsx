import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, Star } from "lucide-react";
import { projects } from "@/data/portfolio";

export function Projects() {
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
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-md bg-background px-2.5 py-1.5 text-[0.68rem] font-medium text-foreground/75">{technology}</span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-5 pt-7">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Search GitHub for ${project.name}`}
                  className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-semibold transition hover:text-accent"
                >
                  <Github size={16} /> GitHub <ArrowUpRight size={14} />
                </Link>
                {project.demo ? (
                  <Link href={project.demo} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-muted transition hover:text-accent">
                    <ExternalLink size={15} /> Live Demo
                  </Link>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-2 text-sm text-muted/70" aria-label="Live demo not available">
                    <ExternalLink size={15} /> Demo soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-5 text-muted">
          GitHub links currently open repository searches. Replace them with direct project URLs when your repositories are public.
        </p>
      </div>
    </section>
  );
}
