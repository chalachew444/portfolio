"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  LoaderCircle,
  Phone,
  Send,
  Linkedin,
} from "lucide-react";
import { siGithub, siGmail, siTelegram } from "simple-icons";
import { profile } from "@/data/portfolio";

type SubmissionState =
  | { kind: "idle"; message: "" }
  | { kind: "sending"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export function Contact() {
  const [status, setStatus] = useState<SubmissionState>({
    kind: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;
    setStatus({ kind: "sending", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });
      const result: { error?: string; message?: string } =
        await response.json();

      if (!response.ok) {
        setStatus({
          kind: "error",
          message: result.error ?? "Unable to send your message. Please try again.",
        });
        return;
      }

      form.reset();
      setStatus({
        kind: "success",
        message: result.message ?? "Thanks! Your message has been sent.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "A network error interrupted your message. Please try again.",
      });
    }
  }

  const contactMethods = [
    {
      label: "Email",
      detail: profile.email,
      href: `mailto:${profile.email}`,
      brand: "gmail" as const,
    },
    {
      label: "Telegram",
      detail: profile.links.telegram
        ? "Send me a message"
        : "Telegram profile coming soon",
      href: profile.links.telegram,
      brand: "telegram" as const,
    },
    {
      label: "LinkedIn",
      detail: profile.links.linkedin
        ? "Connect with me"
        : "LinkedIn profile coming soon",
      href: profile.links.linkedin,
      Icon: Linkedin,
    },
    {
      label: "Phone Number",
      detail: profile.phone,
      href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
      Icon: Phone,
    },
    {
      label: "GitHub",
      detail: "Explore my projects",
      href: profile.links.github,
      brand: "github" as const,
    },
  ];

  return (
    <section id="contact" className="section-wrap py-24 sm:py-28">
      <div className="mb-12">
        <p className="eyebrow mb-4">Let&apos;s connect</p>
        <h2 className="section-title max-w-2xl">Have an idea? Let&apos;s make it useful.</h2>
        <p className="mt-4 max-w-xl leading-7 text-muted">I&apos;m open to conversations about software, community-focused products, collaboration, and new opportunities.</p>
      </div>
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div>
          <div>
            <p className="text-sm font-semibold">Find me online</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {contactMethods.map(
                ({ label, detail, href, Icon, brand }) => {
                  const contents = (
                    <>
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                        {brand === "telegram" ? (
                          <svg
                            viewBox="0 0 24 24"
                            className="size-[18px] fill-current"
                            aria-hidden="true"
                          >
                            <path d={siTelegram.path} />
                          </svg>
                        ) : brand === "gmail" ? (
                          <svg
                            viewBox="0 0 24 24"
                            className="size-[18px] fill-current"
                            aria-hidden="true"
                          >
                            <path d={siGmail.path} />
                          </svg>
                        ) : brand === "github" ? (
                          <svg
                            viewBox="0 0 24 24"
                            className="size-[18px] fill-current"
                            aria-hidden="true"
                          >
                            <path d={siGithub.path} />
                          </svg>
                        ) : (
                          Icon && <Icon size={18} aria-hidden="true" />
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">
                          {label}
                        </span>
                        <span className="mt-1 block break-all text-xs leading-5 text-muted">
                          {detail}
                        </span>
                      </span>
                      {href && (
                        <ArrowUpRight
                          size={14}
                          className="ml-auto shrink-0 text-muted"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target={
                        label === "Telegram" ||
                        label === "LinkedIn" ||
                        label === "GitHub"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        label === "Telegram" ||
                        label === "LinkedIn" ||
                        label === "GitHub"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="focus-ring group flex min-w-0 items-center gap-3 rounded-2xl border border-border bg-surface p-4 transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-glow"
                    >
                      {contents}
                    </a>
                  ) : (
                    <div
                      key={label}
                      title={`Add your ${label} profile URL in data/portfolio.ts`}
                      className="flex min-w-0 items-center gap-3 rounded-2xl border border-border bg-surface p-4"
                    >
                      {contents}
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-surface p-5 sm:p-7"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Send me a message</h3>
            <p className="mt-1 text-sm text-muted">
              I&apos;ll get back to you as soon as I can.
            </p>
          </div>
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium">
                  Your name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Jane Smith"
                    className="focus-ring mt-2 h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm placeholder:text-muted/70"
                  />
                </label>
                <label className="block text-sm font-medium">
                  Email address
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder="jane@example.com"
                    className="focus-ring mt-2 h-12 w-full rounded-xl border border-border bg-surface px-4 text-sm placeholder:text-muted/70"
                  />
                </label>
              </div>
              <label className="block text-sm font-medium">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  maxLength={5000}
                  placeholder="Tell me a little about what you have in mind..."
                  className="focus-ring mt-2 w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-sm placeholder:text-muted/70"
                />
              </label>
              <label className="sr-only" aria-hidden="true">
                Leave this field empty
                <input
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status.kind === "sending"}
                  className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
                >
                  {status.kind === "sending" ? (
                    <>
                      Sending...
                      <LoaderCircle
                        size={15}
                        className="animate-spin"
                        aria-hidden="true"
                      />
                    </>
                  ) : (
                    <>
                      Send a message <Send size={15} aria-hidden="true" />
                    </>
                  )}
                </button>
                {status.kind !== "idle" && status.kind !== "sending" && (
                  <p
                    role={status.kind === "error" ? "alert" : "status"}
                    className={`flex items-center gap-2 text-sm ${
                      status.kind === "error" ? "text-red-600" : "text-accent"
                    }`}
                  >
                    {status.kind === "success" && (
                      <CheckCircle2 size={16} aria-hidden="true" />
                    )}
                    {status.message}
                  </p>
                )}
              </div>
            </div>
          <p className="mt-5 text-xs leading-5 text-muted">
            Your message is delivered privately by email and isn&apos;t stored
            on this website.
          </p>
        </form>
      </div>
    </section>
  );
}
