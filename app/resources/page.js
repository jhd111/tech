import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Resources",
  description:
    "Browse H-Tech Supports resources: blog posts, case studies, whitepapers, and FAQs.",
};

const resources = [
  {
    id: "blog",
    title: "Blog",
    text: "Insights and updates from our engineering and leadership teams.",
  },
  {
    id: "case-studies",
    title: "Case Studies",
    text: "Real deployments across retail, healthcare, education, and enterprise.",
  },
  {
    id: "whitepapers",
    title: "Whitepapers",
    text: "In-depth guides on wireless standards, security, and network design.",
  },
  {
    id: "faqs",
    title: "FAQs",
    text: "Answers to the questions we hear most often from partners.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        description="Guides, stories, and answers to help you get the most from HTS."
      />
      <section className="mx-auto max-w-5xl space-y-16 px-4 py-16 lg:px-8">
        {resources.map((resource) => (
          <div key={resource.id} id={resource.id} className="scroll-mt-28">
            <h2 className="text-2xl font-bold text-brand">{resource.title}</h2>
            <p className="mt-3 text-slate-600">{resource.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
