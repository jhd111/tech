import Image from "next/image";
import Link from "next/link";
import { Globe2, Monitor, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const bullets = [
  "Bringing cost effective and on-time IT solutions to the market.",
  "To be included in the list of the best 100 IT companies.",
  "Our company has 100+ IT engineers World Wide.",
];

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    caption: "Perfect solutions that business demands",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    caption: "Providing excellent technology solutions",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    caption: "We eagerly put in use new IT innovations",
  },
];

export default function AboutSection() {
  return (
    // No bottom padding here on purpose: the gallery grid below carries a
    // negative bottom margin so its cards sit half inside this white
    // section and half overlapping the dark section that follows it.
    <section className="relative bg-white pb-0 pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: image with stat badge */}
          <Reveal className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Team collaborating on an IT support project"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl bg-brand px-4 py-3 text-white shadow-lg sm:-bottom-6 sm:left-10 sm:px-5 sm:py-4">
              <span className="text-xl font-extrabold sm:text-2xl">1500+</span>
              <span className="text-xs leading-tight text-white/85 sm:text-sm">
                Satisfied
                <br />
                Clients
              </span>
            </div>
          </Reveal>

          {/* Right: content */}
          <Reveal delay={150}>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Who We Are
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
              We&apos;re Creating Effective &amp; Seamless IT Solutions!
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              At H-Tech Supports, we are more than just a managed IT services
              provider, we are your strategic technology partner. With a
              mission to empower businesses through cutting-edge technology
              solutions, we have been at the forefront of the IT industry for
              over 5 years.
            </p>

            <div className="mt-6 flex flex-wrap gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Globe2 size={20} />
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  Resource Support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Monitor size={20} />
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  IT Operations
                </span>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-amber-500"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <Link
              href="/company"
              className="mt-8 inline-block rounded-md bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-amber-600"
            >
              Learn More
            </Link>
          </Reveal>
        </div>

        {/* Gallery row — positioned to overlap the section below it */}
        <div className="relative z-10 mt-16 grid gap-6 -mb-16 sm:grid-cols-3 sm:-mb-24 md:-mb-32">
          {gallery.map((item, index) => (
            <Reveal
              key={item.caption}
              delay={index * 120}
              className="group relative overflow-hidden rounded-xl shadow-xl"
            >
              <div className="relative h-56 w-full sm:h-64">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <p className="absolute inset-x-4 bottom-4 rounded-md bg-white px-3 py-2 text-center text-xs font-semibold text-slate-800 shadow sm:text-sm">
                {item.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
