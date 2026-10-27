"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { profile, socialLinks } from "@/data/portfolio";

export function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!profile.email) {
      setStatus("Add your email address in data/portfolio.ts to enable message delivery.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const sender = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${sender})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with your message ready to send.");
  }

  return (
    <section id="contact" className="section-wrap py-24 sm:py-28">
      <div className="mb-12">
        <p className="eyebrow mb-4">Let&apos;s connect</p>
        <h2 className="section-title max-w-2xl">Have an idea? Let&apos;s make it useful.</h2>
        <p className="mt-4 max-w-xl leading-7 text-muted">I&apos;m open to conversations about software, community-focused products, collaboration, and new opportunities.</p>
      </div>
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="space-y-7">
          <div>
            <p className="text-sm font-semibold">Find me online</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((social) =>
                social.href ? (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium transition hover:border-accent/50 hover:text-accent">
                    {social.label} <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span key={social.label} className="rounded-full border border-border/70 px-4 py-2.5 text-sm text-muted/70" title={`Add your ${social.label} URL in data/portfolio.ts`}>
                    {social.label}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-5">
            <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent"><Mail size={18} /></span>
            <p className="mt-4 text-sm font-semibold">Email</p>
            {profile.email ? (
              <a className="mt-1 inline-block text-sm text-muted transition hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a>
            ) : (
              <p className="mt-1 text-sm text-muted">Add your email in <code className="text-xs">data/portfolio.ts</code></p>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Your name
              <input required name="name" autoComplete="name" placeholder="Jane Smith" className="focus-ring mt-2 h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm placeholder:text-muted/70" />
            </label>
            <label className="block text-sm font-medium">
              Email address
              <input required name="email" type="email" autoComplete="email" placeholder="jane@example.com" className="focus-ring mt-2 h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm placeholder:text-muted/70" />
            </label>
          </div>
          <label className="block text-sm font-medium">
            Message
            <textarea required name="message" rows={5} placeholder="Tell me a little about what you have in mind..." className="focus-ring mt-2 w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-sm placeholder:text-muted/70" />
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <button type="submit" className="focus-ring inline-flex h-12 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:brightness-110">
              Send a message <Send size={15} />
            </button>
            {status && <p role="status" className="text-sm text-muted">{status}</p>}
          </div>
          <p className="text-xs leading-5 text-muted">This form opens your email app to send; it doesn&apos;t store or transmit your message on this website.</p>
        </form>
      </div>
    </section>
  );
}
