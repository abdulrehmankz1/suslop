"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  region: string;
  descriptionLabel: string;
  descriptionValue: string;
  slug: string;
}

const ProjectCard = ({
  image,
  title,
  location,
  region,
  descriptionLabel,
  descriptionValue,
  slug,
}: ProjectCardProps) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/our-projects/${slug}`);
  };

  return (
    <div className="p-5 flex flex-col lg:flex-row items-start project_card gap-6 mb-5">
      {/* Image block */}
      <div className="w-full lg:w-[30%]">
        <div className="project_img_wrapper">
          <Image
            src={image}
            alt={title}
            width={500}
            height={360}
            draggable={false}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Content block */}
      <div className="w-full xl:w-[70%] lg:w-[60%]">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
          <h4 className="text-dark lg:w-[50%]">{title}</h4>

          {/* Location */}
          <div className="flex items-start gap-2 w-full lg:w-[210px]">
            <Image
              src="/assets/images/location.svg"
              alt="Project Location"
              width={30}
              height={30}
              draggable={false}
            />
            <div>
              <span className="text-black">{location}</span>
              <div className="text-[#00000080] text-lg leading-[100%]">
                {region}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <h6 className="text-black font-medium project_subtitle">
            {descriptionLabel}
          </h6>
          <p className="text-dark opacity-[0.7] line-clamp-3">
            {descriptionValue}
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleNavigate}
          className="btn secondary_btn lg:mt-9 md:mt-7 mt-5"
        >
          Read Case Study
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
