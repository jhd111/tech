import Image from "next/image";
import PageHeader from "./PageHeader";
import CTABanner from "./CTABanner";
import Reveal from "./Reveal";

export default function DetailPageTemplate({
  title,
  intro,
  image,
  offerings,
  steps,
  offeringsLabel = "What We Offer",
}) {
  return (
    <>
      <PageHeader title={title} />

      {/* Intro: text + image */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm leading-relaxed text-amber-700 sm:text-base">
              {intro}
            </p>
          </Reveal>
          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-700">
              <span className="h-px w-8 bg-amber-700" aria-hidden="true" />
              {offeringsLabel}
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-extrabold text-brand sm:text-3xl">
              We offer the following {title} services to keep your business
              running smoothly:
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(({ icon: Icon, label }, index) => (
              <Reveal
                key={label}
                delay={index * 80}
                className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-semibold text-slate-800 sm:text-base">
                  {label}
                </span>
              </Reveal>
            ))}
          </div>

          {/* Sidebar list + process steps */}
          <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
            <Reveal className="flex flex-col gap-3">
              {offerings.map(({ label }) => (
                <div
                  key={label}
                  className="rounded-md bg-brand px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
                >
                  {label}
                </div>
              ))}
            </Reveal>

            <Reveal delay={100} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
              <ul className="space-y-4">
                {steps.map((step) => (
                  <li key={step.title} className="text-sm text-slate-600 sm:text-base">
                    <span className="font-bold text-brand">{step.title}: </span>
                    {step.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
