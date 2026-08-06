"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

// Same zero-backend approach as ContactForm.js — Formspree emails every
// submission (including the attached resume) straight to your inbox.
//
// Setup:
// 1. In your Formspree dashboard, create a form for applications (or reuse
//    your existing one).
// 2. Add to .env.local:
//      NEXT_PUBLIC_FORMSPREE_CAREERS_ENDPOINT=https://formspree.io/f/your_id
// 3. Restart the dev server / redeploy.
// Note: Formspree's free plan caps submissions per month and attachment
// size — check their pricing page if you expect a high volume of resumes.
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_CAREERS_ENDPOINT ||
  "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";

export default function CareersForm({ jobOptions = [] }) {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [agreed, setAgreed] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!agreed) return;

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
        setAgreed(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-md border border-transparent bg-slate-100 px-4 py-3 text-sm text-slate-700 shadow-sm placeholder:text-slate-400 focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand";
  const labelClass = "mb-1.5 block text-left text-xs font-semibold text-slate-700";

  return (
    <Reveal delay={150} className="mx-auto mt-8 max-w-sm text-left">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label className={labelClass}>Your name</label>
          <input type="text" name="name" required aria-label="Your name" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Your email</label>
          <input type="email" name="email" required aria-label="Your email" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Select Job</label>
          <select name="job" defaultValue="" className={inputClass}>
            <option value="">--</option>
            {jobOptions.map((title) => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
            <option value="General Application">General Application</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Your Location</label>
          <input type="text" name="location" aria-label="Your location" className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>Attach Your Resume</label>
          <div className="rounded-md bg-slate-100 px-3 py-2.5">
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              aria-label="Attach your resume"
              className="w-full text-xs text-slate-500 file:mr-3 file:rounded file:border file:border-slate-300 file:bg-white file:px-2 file:py-1 file:text-xs file:font-medium file:text-slate-600"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Your message (optional)</label>
          <textarea name="message" rows={5} aria-label="Your message" className={inputClass} />
        </div>

        {/* reCAPTCHA-style checkbox box */}
        <div className="flex w-fit items-center gap-3 rounded-md border border-slate-300 bg-white px-3 py-2.5 shadow-sm">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(event) => setAgreed(event.target.checked)}
            required
            className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand"
          />
          <span className="text-xs text-slate-600">I&apos;m not a robot</span>
          <span className="ml-2 flex flex-col items-center border-l border-slate-200 pl-2 text-slate-400">
            <ShieldCheck size={16} className="text-blue-500" />
            <span className="mt-0.5 text-[8px] leading-none">reCAPTCHA</span>
          </span>
        </div>

        <div className="pt-2 text-center">
          <button
            type="submit"
            disabled={status === "sending" || !agreed}
            className="rounded-full bg-brand-dark px-8 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Submitting..." : "Submit"}
          </button>
        </div>

        {status === "success" && (
          <p className="rounded-md bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
            Thanks! Your application has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {FORMSPREE_ENDPOINT.includes("REPLACE_WITH_YOUR_FORM_ID")
              ? "This form isn't connected yet — add NEXT_PUBLIC_FORMSPREE_CAREERS_ENDPOINT to .env.local."
              : "Something went wrong sending your application. Please try again."}
          </p>
        )}
      </form>
    </Reveal>
  );
}