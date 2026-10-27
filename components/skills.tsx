import { ArrowUpRight, Braces, Code2, Database } from "lucide-react";
import { skills } from "@/data/portfolio";

const icons = [Code2, Database, Braces];

export function Skills() {
  return (
    <section id="skills" className="section-wrap py-24 sm:py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow mb-4">Tools of the trade</p>
          <h2 className="section-title">My tech stack.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-muted">A growing toolkit for designing, building, and shipping dependable digital experiences.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
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
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80">{skill}</span>
                ))}
              </div>
              <ArrowUpRight size={16} className="ml-auto mt-8 text-muted transition group-hover:text-accent" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
