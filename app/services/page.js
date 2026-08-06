import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services-data";

export const metadata = {
  title: "Services",
  description:
    "Explore H-Tech Supports' services: professional service, wireless survey, network support, structured cabling, end user computing support, ITAD, and staff augmentation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Everything you need for reliable, global IT services."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, title, intro, offerings }, index) => {
            const Icon = offerings[0].icon;
            return (
              <Reveal
                key={slug}
                delay={index * 80}
                className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={22} />
                </span>
                <h2 className="mt-5 text-lg font-bold text-brand">{title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                  {intro}
                </p>
                <Link
                  href={`/services/${slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-amber-700 group-hover:underline"
                >
                  Learn more &rarr;
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
