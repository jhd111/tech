"use client";

import { useState } from "react";
import Reveal from "./Reveal";

// Easiest zero-backend way to get form submissions into your inbox:
// Formspree (https://formspree.io) emails every submission to you — no
// server code, no API keys, no SMTP setup needed on your end.
//
// Setup (2 minutes):
// 1. Go to https://formspree.io and sign up free.
// 2. Create a new form and set its "send to" address to your inbox.
// 3. Copy the endpoint it gives you, e.g. https://formspree.io/f/abcdwxyz
// 4. Create a file named .env.local in the project root with:
//      NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz
// 5. Restart `npm run dev` (or redeploy). Submit the form once and confirm
//    the verification email Formspree sends you — after that, every
//    submission lands straight in your inbox.
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

const fields = [
  { name: "name", label: "Your Name", type: "text", half: true, required: true },
  { name: "email", label: "Email Address", type: "email", half: true, required: true },
  { name: "phone", label: "Phone Number", type: "tel", half: true, required: false },
  { name: "subject", label: "Subject", type: "text", half: true, required: false },
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();

    if (FORMSPREE_ENDPOINT.includes("REPLACE_WITH_YOUR_FORM_ID")) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Reveal delay={150} className="rounded-2xl bg-slate-50 p-4 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.label}
              required={field.required}
              aria-label={field.label}
              className="w-full rounded-md border border-transparent bg-white px-4 py-3.5 text-sm text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          ))}
        </div>

        <textarea
          name="message"
          placeholder="Write a Message"
          required
          aria-label="Write a Message"
          rows={6}
          className="w-full rounded-md border border-transparent bg-white px-4 py-3.5 text-sm text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-md bg-brand-dark px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send a Message"}
        </button>

        {status === "success" && (
          <p className="rounded-md bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            Thanks! Your message has been sent — we&apos;ll get back to you
            soon.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {FORMSPREE_ENDPOINT.includes("REPLACE_WITH_YOUR_FORM_ID")
              ? "This form isn't connected yet — add your Formspree endpoint to .env.local as NEXT_PUBLIC_FORMSPREE_ENDPOINT."
              : "Something went wrong sending your message. Please try again or email us directly."}
          </p>
        )}
      </form>
    </Reveal>
  );
}
