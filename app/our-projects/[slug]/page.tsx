import { notFound } from "next/navigation";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Dummy data
const caseStudies = [
  {
    slug: "renewable-energy-partnership-for-regional-growth",
    title: "Renewable Energy Partnership for Regional Growth",
    description:
      "This case study highlights how Suslop collaborated with local governments and Indigenous leadership to deliver a 50MW solar farm...",
    location: "XYZ Region, Lorem Ipsum",
  },
  // ... other case studies
];

const Page = async ({ params }: CaseStudyPageProps) => {
  const { slug } = await params;

  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) return notFound();

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-dark">{study.title}</h1>
      <p className="mt-3 text-gray-700">{study.description}</p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-50">
        <h2 className="text-lg font-semibold">Location</h2>
        <p className="text-gray-600">{study.location}</p>
      </div>
    </section>
  );
};

export default Page;