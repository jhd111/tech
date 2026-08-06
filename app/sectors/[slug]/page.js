import { notFound } from "next/navigation";
import DetailPageTemplate from "@/components/DetailPageTemplate";
import { sectors, getSectorBySlug } from "@/lib/sectors-data";

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export function generateMetadata({ params }) {
  const sector = getSectorBySlug(params.slug);
  if (!sector) return {};
  return {
    title: sector.title,
    description: sector.intro,
  };
}

export default function SectorDetailPage({ params }) {
  const sector = getSectorBySlug(params.slug);
  if (!sector) notFound();

  return (
    <DetailPageTemplate
      title={sector.title}
      intro={sector.intro}
      image={sector.image}
      offerings={sector.offerings}
      steps={sector.steps}
      offeringsLabel="How We Help"
    />
  );
}
