import Link from "next/link";
import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section className="mt-10 mb-10 relative isolate overflow-hidden bg-brand-dark">
      {/* Diagonal stripe texture across the whole banner */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 2px, transparent 2px, transparent 56px)",
        }}
        aria-hidden="true"
      />

      {/* Purple triangular accent, top-right */}
      <div
        className="pointer-events-none absolute -right-6 -top-1/3 h-[220%] w-28 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90 sm:w-40 md:w-56 lg:w-72"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-16 -top-1/3 hidden h-[220%] w-24 bg-gradient-to-br from-indigo-400/60 to-purple-500/60 sm:block md:w-32 lg:w-40"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold text-amber-400 sm:text-base">
            We&apos;re here to help grow your business.
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
            We are here to take care of your IT issues while you focus on
            limitless growth !
          </h2>
        </Reveal>

        <Reveal delay={150} className="shrink-0">
          <Link
            href="/contact"
            className="inline-block w-full rounded-md bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-brand transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
          >
            Contact Us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
