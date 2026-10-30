"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-wrap relative grid min-h-[calc(100svh-4.5rem)] grid-cols-[4rem_minmax(0,1fr)] items-start gap-4 py-16 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-8 sm:py-20 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-12 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55 }}
        className="relative mt-1 aspect-square w-16 overflow-hidden rounded-full border-4 border-surface shadow-[0_0_0_1px_rgb(var(--accent)/0.28)] sm:w-24 md:w-32"
      >
        <Image
          src={profile.photo}
          alt="Portrait of Chalachew Yesuneh"
          fill
          priority
          sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, 128px"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="max-w-3xl"
      >
        <span id="home" className="absolute top-0" aria-hidden="true" />
        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-2 text-[0.65rem] font-medium text-accent sm:mb-7 sm:gap-2.5 sm:px-3.5 sm:text-sm">
          <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-40" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
          </span>
          <span>Available for Software Engineering Internship Roles</span>
        </div>
        <p className="eyebrow mb-4">Software Engineer · Student · Builder</p>
        <h1 className="max-w-3xl text-[clamp(2rem,7vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.075em]">
          Hi, I&apos;m{" "}
          <span className="text-accent">Chalachew Yesuneh</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-foreground/85 sm:mt-6 sm:text-xl">
          Full-Stack Software Engineer
          <span className="text-muted"> — </span>4th-Year Student
        </p>
        <p className="mt-4 max-w-lg text-base leading-7 text-muted">
          I build practical, thoughtfully engineered software for people and
          businesses in Injibara, Ethiopia.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="#projects"
            className="focus-ring inline-flex h-12 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
          >
            View Projects <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <a
            href={profile.cv}
            download
            className="focus-ring inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent"
          >
            <Download size={16} aria-hidden="true" /> Download Resume
          </a>
        </div>
        <p className="mt-7 inline-flex items-center gap-2 text-sm text-muted">
          <MapPin size={15} className="text-accent" aria-hidden="true" />
          Injibara, Ethiopia
        </p>
        <a
          href="#about"
          className="focus-ring mt-9 flex w-fit items-center gap-3 rounded-sm text-xs font-medium uppercase tracking-[0.13em] text-muted transition hover:text-accent"
        >
          <span className="h-px w-9 bg-border" /> Scroll to explore
          <ArrowDown size={14} aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
