import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with H-Tech Supports to discuss your wireless and network service needs.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
