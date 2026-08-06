
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users, CheckCircle2, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Company",
  description:
    "Learn about H-Tech Supports, our mission, vision, and the values driving our team across more than 50 countries.",
};

const values = [
  {
    icon: Heart,
    title: "Honesty and Integrity",
    text: "We stand by our ethos, say what we are going to do and then deliver upon it. If we can't do it we will tell you.",
  },
  {
    icon: Users,
    title: "Empathy and Diligence",
    text: "We understand your position then work with you until it is brought to a satisfactory conclusion.",
  },
  {
    icon: CheckCircle2,
    title: "Be Prepared",
    text: "We will always be prepared to do what is required to get the job done in a timely and professional manner.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "Our relationships are built on trust, trust to deliver what we say we will deliver. It's quite simple, if there's no trust then there's no relationship.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader title="Company" />

      {/* The Company */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Overlapping image collage */}
          <Reveal className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute left-0 top-0 h-[70%] w-[70%] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"
                alt="H-Tech Supports team collaborating"
                fill
                sizes="(min-width: 1024px) 20vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[65%] w-[55%] overflow-hidden rounded-xl shadow-xl ring-4 ring-white">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=900&auto=format&fit=crop"
                alt="Network infrastructure"
                fill
                sizes="(min-width: 1024px) 16vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 grid grid-cols-5 gap-1.5 opacity-70"
              aria-hidden="true"
            >
              {Array.from({ length: 15 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              ))}
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={150}>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-700">
              <span className="h-px w-8 bg-amber-700" aria-hidden="true" />
              The Company
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-brand sm:text-3xl">
              H-Tech Supports has a strong global presence, delivering
              solutions across more than 50 countries.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Our engineers cover a broad spectrum of vendor technologies and
              are site-ready to assist in almost any situation. Global
              service is provisioned through a mix of our own engineers and
              highly vetted approved partners, servicing client requirements
              across multiple sectors, from single-site consultations to
              enterprise-wide rollouts.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              But it doesn&apos;t stop there — H-Tech Supports can support
              you in many other areas, for example data center, unified
              collaboration, desktop support with backfill or fixed-term
              contracted engineers, and of course telecoms and data
              communications. We also support global rollouts and maintain
              forward stocking locations to help ease the burden of
              international shipping.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative isolate overflow-hidden bg-brand-dark py-20 text-center text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand/95 to-brand-light/90" />
        </div>

        <Reveal className="relative mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Mission Statement
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base italic leading-relaxed text-white/90 sm:text-lg">
            &ldquo;To provide exceptional technical support and innovative
            solutions to our clients worldwide. We strive to keep their IT
            systems running seamlessly, enabling them to focus on their core
            business.&rdquo;
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-brand shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
          >
            Let&apos;s get in touch
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* Vision Statement */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-700">
                <span className="h-px w-8 bg-amber-700" aria-hidden="true" />
                Vision Statement
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-brand sm:text-3xl">
                Vision Statement
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                &ldquo;We envision H-Tech Supports as the go-to partner for
                organizations seeking reliable, forward-thinking IT services.
                Our commitment to excellence, agility, and global reach
                positions us as leaders in the industry, driving digital
                transformation and technological advancement.&rdquo;
              </p>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brand"
              >
                Our Services
                <ArrowRight size={16} />
              </Link>
            </Reveal>

            <Reveal delay={150} className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
                  alt="Our vision"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand/30" />
              </div>
              <div
                className="absolute -bottom-4 -right-4 grid grid-cols-5 gap-1.5 opacity-70"
                aria-hidden="true"
              >
                {Array.from({ length: 15 }).map((_, i) => (
                  <span key={i} className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why H-Tech Support */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-extrabold text-brand sm:text-3xl">
              Why H-Tech Support
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
              You can always count on H-Tech Support because we know their
              values.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, index) => (
              <Reveal
                key={title}
                delay={index * 100}
                className="rounded-xl bg-brand-dark p-6 text-left text-white shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
