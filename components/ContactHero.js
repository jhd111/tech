import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative flex h-64 items-end overflow-hidden sm:h-72 md:h-80 ">
      <Image
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand/60" />
      <div
        className="pointer-events-none absolute -right-6 -top-1/3 hidden h-[220%] w-40 bg-gradient-to-br from-indigo-500/80 to-purple-600/80 sm:block md:w-56"
        style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8">
        <h1 className="text-3xl font-extrabold uppercase tracking-wide sm:text-4xl md:text-5xl text-center text-white">
          Contact
        </h1>
        <nav
          className="mt-2 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/80 sm:text-sm"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-white">Contact</span>
        </nav>
      </div>
    </section>
  );
}
