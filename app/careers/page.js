import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import CareersForm from "@/components/CareersForm";

export const metadata = {
  title: "Careers",
  description:
    "Looking for a new career? See open positions at H-Tech Supports or upload your resume for future opportunities.",
};

// Add job objects here when positions open, e.g.
// { title: "Field Engineer", location: "Remote" }
const openPositions = [];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-100 px-4 pb-16 pt-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h1 className="text-3xl font-extrabold leading-tight text-brand sm:text-4xl">
              Looking for
              <br />
              a new career?
            </h1>
            <p className="mt-4 text-sm text-slate-500">
              What life is like at H-TECHSUPPORTS? It&apos;s pretty awesome!
            </p>
            <Link
              href="#open-positions"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brand"
            >
              See open positions
              <ArrowRight size={16} />
            </Link>

            
              {/* href="#open-positions"
              aria-label="Scroll to open positions"
              className="mt-8 flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-400 transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronDown size={16} />
            </a> */}
          </Reveal>

          <Reveal delay={150} className="relative mx-auto w-full max-w-md py-6">
            {/* Small dot cluster, top-left of the photo block */}
            <div
              className="absolute -top-6 left-8 grid grid-cols-8 gap-1.5 opacity-70"
              aria-hidden="true"
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-brand/40" />
              ))}
            </div>

            {/* Single bordered rectangle containing both photos */}
            <div className="relative grid grid-cols-2 gap-1 overflow-hidden border border-white bg-white shadow-md">
              <div className="relative aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=700&auto=format&fit=crop"
                  alt="H-Tech Supports team member at work"
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] translate-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=700&auto=format&fit=crop"
                  alt="Colleague reviewing work on a tablet"
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Larger dot cluster, bottom-right, floating outside the block */}
            <div
              className="absolute -bottom-8 -right-8 grid grid-cols-10 gap-1.5 opacity-70"
              aria-hidden="true"
            >
              {Array.from({ length: 60 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-brand/40" />
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-7xl border-t border-slate-200" />
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-brand sm:text-3xl">
              Open positions
            </h2>

            {openPositions.length === 0 ? (
              <p className="mt-6 text-xs text-slate-400">
                Sorry No Job Openings
              </p>
            ) : (
              <ul className="mt-8 space-y-3 text-left">
                {openPositions.map((job) => (
                  <li
                    key={job.title}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-5 py-4"
                  >
                    <span className="font-semibold text-slate-800">
                      {job.title}
                    </span>
                    <span className="text-sm text-slate-500">
                      {job.location}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>

          <Reveal delay={100} className="mt-14">
            <h3 className="text-xl font-extrabold text-brand">
              Upload Your Resume
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              We may have an available opportunity for you.
            </p>
          </Reveal>

          <CareersForm jobOptions={openPositions.map((job) => job.title)} />
        </div>
      </section>
    </>
  );
}