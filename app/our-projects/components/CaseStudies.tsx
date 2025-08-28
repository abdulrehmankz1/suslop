import CaseStudyCard from "./CaseStudyCard";

const CaseStudies = () => {
  return (
    <section>
      <div className="container mx-auto">
        <CaseStudyCard
          image="/assets/images/project-image.png"
          title="Renewable Energy Partnership for Regional Growth"
          location="Location"
          region="XYZ Region, Lorem Ipsum"
          description="Suslop worked with local government and Indigenous leadership to plan and deliver a 50MW solar farm. The project created over 200 jobs, reduced regional emissions, and established a long-term revenue stream for community programs."
          slug="renewable-energy-partnership-for-regional-growth"
        />

        <CaseStudyCard
          image="/assets/images/project-image.png"
          title="Indigenous Community Land-Use Planning Initiative"
          location="Location"
          region="XYZ Region, Lorem Ipsum"
          description="Suslop worked with local government and Indigenous leadership to plan and deliver a 50MW solar farm. The project created over 200 jobs, reduced regional emissions, and established a long-term revenue stream for community programs."
          slug="indigenous-community-land-use-planning-initiative"
        />

        <CaseStudyCard
          image="/assets/images/project-image.png"
          title="Coastal Infrastructure Climate Resilience Project"
          location="Location"
          region="XYZ Region, Lorem Ipsum"
          description="Suslop worked with local government and Indigenous leadership to plan and deliver a 50MW solar farm. The project created over 200 jobs, reduced regional emissions, and established a long-term revenue stream for community programs."
          slug="coastal-infrastructure-climate-resilience-project"
        />
      </div>
    </section>
  );
};

export default CaseStudies;
