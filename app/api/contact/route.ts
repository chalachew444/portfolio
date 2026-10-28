import { NextResponse } from "next/server";
import { profile } from "@/data/portfolio";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { error: "Please submit the contact form as JSON." },
      { status: 415 },
    );
  }

  let parsedBody: unknown;

  try {
    parsedBody = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Please submit a valid contact form." },
      { status: 400 },
    );
  }

  if (
    typeof parsedBody !== "object" ||
    parsedBody === null ||
    Array.isArray(parsedBody)
  ) {
    return NextResponse.json(
      { error: "Please submit a valid contact form." },
      { status: 400 },
    );
  }

  const body = parsedBody as ContactBody;

  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({
      message: "Thanks! Your message has been sent.",
    });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > 100) {
    return NextResponse.json(
      { error: "Please provide a name of 1–100 characters." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!message || message.length > 5000) {
    return NextResponse.json(
      { error: "Your message must be between 1 and 5,000 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !sender) {
    console.error(
      "Contact form delivery is unavailable: RESEND_API_KEY and RESEND_FROM_EMAIL must be configured.",
    );
    return NextResponse.json(
      { error: "Message delivery is temporarily unavailable. Please email directly." },
      { status: 503 },
    );
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [profile.email],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
    signal: AbortSignal.timeout(10_000),
  }).catch((error: unknown) => {
    console.error("Contact form email provider request failed.", error);
    return null;
  });

  if (!resendResponse?.ok) {
    console.error(
      "Contact form email provider returned an unsuccessful response.",
      resendResponse?.status ?? "network error",
    );
    return NextResponse.json(
      { error: "Unable to deliver your message right now. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Thanks! Your message has been sent.",
  });
}
