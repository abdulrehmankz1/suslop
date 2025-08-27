import Navbar from "@/app/our-projects/components/Navbar";
import Image from "next/image";

const BlogDetail = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <Navbar />
        <div className="blog_detail_page mt-10">
          <div className="image_wrapper overflow-hidden rounded-2xl">
            <Image
              src="/assets/images/blog-detail.png"
              alt=""
              width={600}
              height={400}
              className="rounded-lg mt-20 w-full! h-full! object-cover"
              draggable="false"
            />
          </div>
          <div className="flex items-start mt-12 justify-between gap-12">
            <div className="w-3/5">
              <div className="">
                <h2 className="text-dark :w-[80%] w-full">
                  Bridging the Gap Between Policy and Practice
                </h2>
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
              <div className="blog_post_image">
                <div className="image_wrapper overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/images/blog-detail.png"
                    alt=""
                    width={600}
                    height={400}
                    className="rounded-lg mt-10 w-full! h-full! object-cover"
                    draggable="false"
                  />
                </div>
              </div>

              <div className="mb-[100px]">
                <div className="mt-10">
                  <h4 className="text-dark">
                    Bridging the Gap Between Policy and Practice
                  </h4>
                  <p className="mt-3 text-dark opacity-[0.7]">
                    How strategic planning and local engagement can transform
                    sustainability policies into measurable on-the-ground
                    impact. How strategic planning and local engagement can
                    transform sustainability policies into measurable
                    on-the-ground impact.How strategic planning and local
                    engagement can transform sustainability policies into
                    measurable on-the-ground impact.How strategic planning and
                    local engagement can transform sustainability policies into
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
                    sustainability policies into measurable on-the-ground
                    impact. How strategic planning and local engagement can
                    transform sustainability policies into measurable
                    on-the-ground impact.How strategic planning and local
                    engagement can transform sustainability policies into
                    measurable on-the-ground impact.How strategic planning and
                    local engagement can transform sustainability policies into
                    measurable on-the-ground impact.How strategic planning and
                    local engagement can transform sustainability policies into
                    measurable on-the-ground impact.How strategic planning and
                    local engagement can transform sustainability policies into
                    measurable on-the-ground impact.
                  </p>
                </div>
                <div>
                  <div className="mt-10">
                    <h4 className="text-dark">
                      Bridging the Gap Between Policy and Practice
                    </h4>
                    <p className="mt-3 text-dark opacity-[0.7]">
                      How strategic planning and local engagement can transform
                      sustainability policies into measurable on-the-ground
                      impact. How strategic planning and local engagement can
                      transform sustainability policies into measurable
                      on-the-ground impact.How strategic planning and local
                      engagement can transform sustainability policies into
                      measurable on-the-ground impact.How strategic planning and
                      local engagement can transform sustainability policies
                      into measurable on-the-ground impact.How strategic
                      planning and local engagement can transform sustainability
                      policies into measurable on-the-ground impact.How
                      strategic planning and local engagement can transform
                      sustainability policies into measurable on-the-ground
                      impact.
                    </p>
                  </div>
                  <div className="mt-10">
                    <h4 className="text-dark">
                      Bridging the Gap Between Policy and Practice
                    </h4>
                    <p className="mt-3 text-dark opacity-[0.7]">
                      How strategic planning and local engagement can transform
                      sustainability policies into measurable on-the-ground
                      impact. How strategic planning and local engagement can
                      transform sustainability policies into measurable
                      on-the-ground impact.How strategic planning and local
                      engagement can transform sustainability policies into
                      measurable on-the-ground impact.How strategic planning and
                      local engagement can transform sustainability policies
                      into measurable on-the-ground impact.How strategic
                      planning and local engagement can transform sustainability
                      policies into measurable on-the-ground impact.How
                      strategic planning and local engagement can transform
                      sustainability policies into measurable on-the-ground
                      impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5 border-s-2 border-[#00000033] ps-7">
              <h4 className="text-dark">Table of Content</h4>
              <ol className="mt-10 list-decimal list-outside pl-6 space-y-2">
                <li className="text-3xl text-dark pb-7">
                  Bridging the Gap Between Policy and Practice
                </li>
                <li className="text-3xl py-7 border-t-1 border-[#00000033] text-[#0E0E0E80]">
                  Bridging the Gap Between Policy and Practice
                </li>
                <li className="text-3xl py-7 border-t-1 border-[#00000033] text-[#0E0E0E80]">
                  Bridging the Gap Between Policy and Practice
                </li>
                <li className="text-3xl pt-7 border-t-1 border-[#00000033] text-[#0E0E0E80]">
                  Bridging the Gap Between Policy and Practice
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
