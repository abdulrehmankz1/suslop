import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Image from "next/image";
import DetailSlider from "../components/DelailSlider";
import VideoWrapper from "../components/VideoWrapper";

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
  {
    title: "Indigenous Community Land-Use Planning Initiative",
    location: "Location",
    region: "XYZ Region, Lorem Ipsum",
    description:
      "Suslop worked with local government and Indigenous leadership to plan and deliver a 50MW solar farm. The project created over 200 jobs, reduced regional emissions, and established a long-term revenue stream for community programs.",
    slug: "indigenous-community-land-use-planning-initiative",
  },
  {
    image: "/assets/images/project-image.png",
    title: "Coastal Infrastructure Climate Resilience Project",
    location: "Location",
    region: "XYZ Region, Lorem Ipsum",
    description:
      "Suslop worked with local government and Indigenous leadership to plan and deliver a 50MW solar farm. The project created over 200 jobs, reduced regional emissions, and established a long-term revenue stream for community programs.",
    slug: "coastal-infrastructure-climate-resilience-project",
  },
];

const Page = async ({ params }: CaseStudyPageProps) => {
  const { slug } = await params;

  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) return notFound();

  return (
    <section className="px-4 py-10">
      <div className="container mx-auto">
        <Navbar />
        <div className="detail_page">
          <div className="image_wrapper overflow-hidden rounded-2xl">
            <Image
              src="/assets/images/detail-image.png"
              alt={study.title}
              width={600}
              height={400}
              className="rounded-lg mt-20 w-full! h-full! object-cover"
              draggable="false"
            />
          </div>

          <div className="mt-12">
            <h2 className="text-dark lg:w-[60%] md:w-[80%] w-full">
              Bridging the Gap Between Policy and Practice
            </h2>
            <p className="mt-3 text-dark opacity-[0.7]">
              How strategic planning and local engagement can transform
              sustainability policies into measurable on-the-ground impact. How
              strategic planning and local engagement can transform
              sustainability policies into measurable on-the-ground impact.How
              strategic planning and local engagement can transform
              sustainability policies into measurable on-the-ground impact.How
              strategic planning and local engagement can transform
              sustainability policies into measurable on-the-ground impact.How
              strategic planning and local engagement can transform
              sustainability policies into measurable on-the-ground impact.How
              strategic planning and local engagement can transform
              sustainability policies into measurable on-the-ground impact.
            </p>
          </div>
          <div>
            <DetailSlider />
            <div>
              <h4 className="text-dark">
                Bridging the Gap Between Policy and Practice
              </h4>
              <p className="mt-3 text-dark opacity-[0.7]">
                How strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.
                How strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.
              </p>
            </div>
            <div className="mt-10">
              <h4 className="text-dark">
                Bridging the Gap Between Policy and Practice
              </h4>
              <p className="mt-3 text-dark opacity-[0.7]">
                How strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.
                How strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.How
                strategic planning and local engagement can transform
                sustainability policies into measurable on-the-ground impact.
              </p>
            </div>
            <div>
              {/* Video wrapper */}
              <div className="my-10">
                <VideoWrapper />
              </div>
              <div>
                <h4 className="text-dark">
                  Bridging the Gap Between Policy and Practice
                </h4>
                <p className="mt-3 text-dark opacity-[0.7]">
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground impact.
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground
                  impact.How strategic planning and local engagement can
                  transform sustainability policies into measurable
                  on-the-ground impact.How strategic planning and local
                  engagement can transform sustainability policies into
                  measurable on-the-ground impact.How strategic planning and
                  local engagement can transform sustainability policies into
                  measurable on-the-ground impact.How strategic planning and
                  local engagement can transform sustainability policies into
                  measurable on-the-ground impact.
                </p>
              </div>
              <div className="mt-10">
                <h4 className="text-dark">
                  Bridging the Gap Between Policy and Practice
                </h4>
                <p className="mt-3 text-dark opacity-[0.7]">
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground impact.
                  How strategic planning and local engagement can transform
                  sustainability policies into measurable on-the-ground
                  impact.How strategic planning and local engagement can
                  transform sustainability policies into measurable
                  on-the-ground impact.How strategic planning and local
                  engagement can transform sustainability policies into
                  measurable on-the-ground impact.How strategic planning and
                  local engagement can transform sustainability policies into
                  measurable on-the-ground impact.How strategic planning and
                  local engagement can transform sustainability policies into
                  measurable on-the-ground impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
