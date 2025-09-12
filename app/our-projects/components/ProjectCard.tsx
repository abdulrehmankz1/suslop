"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  region: string;
  description: string;
  slug: string;
}

const ProjectCard = ({
  image,
  title,
  location,
  region,
  description,
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
        <Image
          src={image}
          alt={title}
          width={500}
          height={360}
          draggable={false}
          className="w-full rounded-lg object-cover md:max-h-[250px] lg:max-h-none"
        />
      </div>

      {/* Content block */}
      <div className="w-full lg:w-[70%]">
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
              <div className="text-black">{location}</div>
              <div className="text-[#00000080] text-lg leading-[100%]">
                {region}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <div className="text-black font-medium">About the Project:</div>
          <p className="text-dark opacity-[0.7]">{description}</p>
        </div>

        {/* Button */}
        <button
          onClick={handleNavigate}
          className="btn secondary_btn lg:mt-6 md:mt-5 mt-4"
        >
          Read Case Study
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
