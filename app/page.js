import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesShowcase from "@/components/ServicesShowcase";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Home",
  description:
    "H-Tech Supports delivers wireless services, network deployment, and field support solutions across more than 50 countries.",
};

const highlights = [
  {
    title: "Global Reach",
    text: "Delivering wireless and network solutions across more than 50 countries.",
  },
  {
    title: "Fast Deployment",
    text: "Site surveys, design, and rollout handled by our own field engineers.",
  },
  {
    title: "24/7 Support",
    text: "Managed services and support desks that never sleep.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesShowcase />
      <CTABanner className="mb-20"/>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 120}
              className="rounded-2xl border border-slate-100 p-6 shadow-sm"
            >
              <h2 className="text-lg font-bold text-brand">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
