import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({
  number,
  title,
  description,
  image,
}: ServiceCardProps) => {
  return (
    <div className="service_card">
      <div className="flex items-baseline">
        <h3>{number}</h3>
        <hr className="border-1 border-y-amber-950 w-full" />
        <ArrowUpRight size={40} color="#0E0E0E" className="relative top-3" />
      </div>

      <div className="image_wrapper my-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          draggable="false"
          className="object-cover w-full! h-full!"
        />
      </div>
      <div>
        <h4 className="text-dark">{title}</h4>
        <p className="text-dark opacity-[0.7] md:mt-2 mt-0">{description}</p>
        <button className="btn secondary_btn w-full xl:mt-6 lg:mt-5 md:mt-4 mt-3">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
