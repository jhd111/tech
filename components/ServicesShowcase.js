import Link from "next/link";
import {
  Server,
  Search,
  Truck,
  Wrench,
  Trash2,
  Boxes,
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Server,
    title: "Datacenter Support",
    text: "Dedicated help for uptime, safety, speed and smooth working.",
  },
  {
    icon: Search,
    title: "Surveys and Installations",
    text: "We survey and install for quick, easy, adaptable jobs.",
  },
  {
    icon: Truck,
    title: "Rollouts and Migrations",
    text: "Smooth rollouts and tech migrations with any deadline.",
  },
  {
    icon: Wrench,
    title: "Hardware Break Fix",
    text: "Fast hardware repair and replacement for smooth, quick fixes.",
  },
  {
    icon: Trash2,
    title: "Disposal & Destructions",
    text: "Secure disposal and data destruction, discreet and prompt.",
  },
  {
    icon: Boxes,
    title: "Resources Services",
    text: "Resources for staffing, support, training, and project needs.",
  },
];

export default function ServicesShowcase() {
  return (
    // Extra top padding makes room for the AboutSection gallery cards that
    // overlap down into this section (see the negative margin there).
    <section className="relative overflow-hidden bg-brand-dark pb-20 pt-28 text-white sm:pt-36 md:pt-44">
      {/* subtle diagonal background accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-400">
              <span className="h-px w-8 bg-amber-400" aria-hidden="true" />
              What We&apos;re Offering
            </p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl md:text-4xl">
              Dealing in all Professional IT Services
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm text-white/70 sm:text-base">
              Our technicians stay current with the latest tech and hold
              certifications tailored to customer needs. They continuously
              adapt to emerging trends to ensure top-notch service.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              key={title}
              delay={index * 100}
              className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-brand-dark">
                <Icon size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-white/65">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block rounded-md bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-dark transition-colors hover:bg-amber-600"
          >
            View All Services
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
