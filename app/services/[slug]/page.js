import { notFound } from "next/navigation";
import DetailPageTemplate from "@/components/DetailPageTemplate";
import { services, getServiceBySlug } from "@/lib/services-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.intro,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <DetailPageTemplate
      title={service.title}
      intro={service.intro}
      image={service.image}
      offerings={service.offerings}
      steps={service.steps}
    />
  );
}
