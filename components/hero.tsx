"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="section-wrap relative grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-16 sm:py-20 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="max-w-2xl"
      >
        <div className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-2 text-xs font-medium text-accent sm:text-sm">
          <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-40" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
          </span>
          <span>Available for Software Engineering Internship Roles</span>
        </div>
        <p className="eyebrow mb-4">Software Engineer · Student · Builder</p>
        <h1 className="max-w-3xl text-[clamp(2.65rem,7.3vw,5.75rem)] font-semibold leading-[1.02] tracking-[-0.075em]">
          Hi, I&apos;m{" "}
          <span className="text-accent">Chalachew Yesuneh</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-foreground/85 sm:text-xl">
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

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="relative mx-auto w-full max-w-[25rem]"
      >
        <div
          className="absolute -inset-3 rotate-3 rounded-[2.25rem] border border-accent/20 sm:-inset-4"
          aria-hidden="true"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-border bg-surface shadow-glow">
          <Image
            src="/profile.png"
            alt="Portrait of Chalachew Yesuneh"
            fill
            priority
            sizes="(max-width: 768px) 85vw, 400px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-20 text-white">
            <p className="text-sm font-semibold">{profile.name}</p>
            <p className="mt-1 text-xs text-white/80">
              Software Engineer · Student · Builder
            </p>
          </div>
        </div>
        <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border bg-surface p-4 shadow-xl sm:block md:-left-8">
          <p className="text-xs text-muted">Currently building</p>
          <p className="mt-1 text-sm font-semibold">
            Hulegeb Market <span className="text-accent">↗</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
