import Link from "next/link";
import Image from "next/image";

export default function PageHeader({ title, description, breadcrumb }) {
  return (
    <section className="relative flex h-64 items-end overflow-hidden sm:h-72 md:h-80 px-4 pb-16 pt-32 text-center text-white lg:px-8">
      <Image
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/75 to-brand-light/70" />

      <div className="relative mx-auto w-full">
        <h1 className="text-3xl font-extrabold uppercase tracking-wide sm:text-4xl md:text-5xl">
          {title}
        </h1>

        <p className="mt-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70 sm:text-sm">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span aria-hidden="true">&gt;</span>
          <span className="text-white">{breadcrumb || title}</span>
        </p>

        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-white/85">{description}</p>
        )}
      </div>
    </section>
  );
}