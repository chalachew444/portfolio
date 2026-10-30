"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Lightbulb, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

const values = [
  { icon: GraduationCap, title: "Learning by building", text: "Fourth-year Software Engineering student at Injibara University, growing my craft through study and hands-on projects." },
  { icon: Lightbulb, title: "Locally minded", text: "I care about technology that reflects real needs and opens up opportunities in the communities around me." },
  { icon: MapPin, title: "Rooted in Injibara", text: "Building from Injibara, Ethiopia, with a belief that ambitious digital products can start anywhere." },
];

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="border-y border-border/70 bg-surface/50 py-24 sm:py-28">
      <div className="section-wrap grid gap-12 md:grid-cols-[0.72fr_1.28fr] md:gap-20">
        <div>
          <p className="eyebrow mb-4">A little about me</p>
          <h2 className="section-title max-w-sm">Technology with a local point of view.</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-muted">
            I&apos;m Chalachew, a fourth-year Software Engineering student at{" "}
            {profile.university} in Injibara, Ethiopia. I enjoy turning early
            ideas into reliable software, with an emphasis on clean code,
            maintainable systems, and scalable architecture.
          </p>
          <p className="mt-5 text-base leading-7 text-muted">
            I build full-stack projects to strengthen my engineering skills and
            explore how thoughtful digital products can make everyday services
            more accessible in my community.
          </p>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id="about-details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="overflow-hidden"
              >
                <p className="pt-5 text-base leading-7 text-muted">
                  I&apos;m currently developing{" "}
                  <span className="font-semibold text-foreground">
                    ሁለገብ ገበያ (Hulegeb Market)
                  </span>
                  , a local marketplace and service-brokerage platform for
                  Injibara. I value clear communication, continuous learning,
                  and building software that is understandable today and ready
                  to grow tomorrow.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={expanded ? "about-details" : undefined}
            onClick={() => setExpanded((value) => !value)}
            className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-accent transition hover:gap-3"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={expanded ? "back" : "more"}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.16 }}
              >
                {expanded ? "Back / Show Less" : "See More"}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <ArrowUpRight size={16} aria-hidden="true" />
            </motion.span>
          </button>
          <a href="#projects" className="focus-ring mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-accent hover:gap-3">
            Explore what I&apos;m building <ArrowUpRight size={16} />
          </a>
          <div className="mt-10 grid gap-6 border-t border-border pt-7 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={18} className="mb-3 text-accent" />
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
