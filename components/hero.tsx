"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";

export function Hero() {
  const [photoUnavailable, setPhotoUnavailable] = useState(false);

  return (
    <section id="home" className="section-wrap relative grid min-h-[calc(100svh-4.5rem)] items-center gap-14 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-24">
      <div className="pointer-events-none absolute -left-36 top-12 -z-10 size-80 rounded-full bg-accent/10 blur-[100px]" />
      <div className="max-w-2xl">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-2 text-xs font-medium text-accent">
          <Sparkles size={14} />
          <span>Building useful things for a connected community</span>
        </div>
        <p className="eyebrow mb-4">Hello, I&apos;m</p>
        <h1 className="text-[clamp(3.2rem,8vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.075em]">
          Chalachew
          <br />
          <span className="text-accent">Yesuneh.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-foreground/85 sm:text-xl">
          Full-Stack Software Engineer
          <span className="text-muted"> &amp; </span>
          Founder of ሁለገብ ገበያ
        </p>
        <p className="mt-4 max-w-lg text-base leading-7 text-muted">
          I&apos;m a fourth-year software engineering student turning thoughtful ideas into practical digital products for people and businesses in Injibara.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#projects" className="focus-ring inline-flex h-12 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:brightness-110">
            View Projects <ArrowRight size={16} />
          </Link>
          <Link href="#contact" className="focus-ring inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent">
            Contact Me
          </Link>
          <a href={profile.cv} download className="focus-ring inline-flex h-12 items-center gap-2 rounded-full px-3 text-sm font-semibold text-muted transition hover:text-foreground">
            <Download size={16} /> Download CV
          </a>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
          <MapPin size={15} className="text-accent" /> Injibara, Ethiopia
        </p>
        <div className="mt-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.13em] text-muted">
          <span className="h-px w-9 bg-border" /> Scroll to explore <ArrowDown size={14} />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[25rem]">
        <div className="absolute -inset-4 rounded-[2.25rem] border border-accent/20 rotate-3" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.8rem] border border-border bg-gradient-to-br from-accent/15 via-surface to-surface shadow-glow">
          {!photoUnavailable ? (
            <Image
              src={profile.photo}
              alt="Portrait of Chalachew Yesuneh"
              fill
              priority
              sizes="(max-width: 768px) 85vw, 400px"
              className="object-cover"
              onError={() => setPhotoUnavailable(true)}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center overflow-hidden">
              <div className="absolute -right-16 -top-14 size-64 rounded-full border border-accent/20" />
              <div className="absolute -right-6 -top-4 size-44 rounded-full border border-accent/20" />
              <div className="absolute -bottom-28 -left-16 size-72 rounded-full border border-accent/20" />
              <div className="relative text-center">
                <span className="block text-8xl font-semibold tracking-[-0.08em] text-accent/80">CY</span>
                <span className="mt-3 block text-xs font-medium uppercase tracking-[0.2em] text-muted">Software · Community · Ideas</span>
              </div>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-6 pt-20 text-white">
            <p className="text-sm font-semibold">{profile.name}</p>
            <p className="mt-1 text-xs text-white/75">Student · Builder · Founder</p>
          </div>
        </div>
        <div className="absolute -bottom-5 -left-8 hidden rounded-2xl border border-border bg-surface p-4 shadow-xl sm:block">
          <p className="text-xs text-muted">Currently building</p>
          <p className="mt-1 text-sm font-semibold">Hulegeb Gebeya <span className="text-accent">↗</span></p>
        </div>
      </div>
    </section>
  );
}
