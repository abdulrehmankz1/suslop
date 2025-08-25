import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ServiceOfferCardProps {
  number: number;
  title: string;
  description: string;
  image: string;
  listItems: string[];
}

const ServiceOfferCard = ({
  number,
  title,
  description,
  image,
  listItems,
}: ServiceOfferCardProps) => {
  return (
    <div className="service_card">
      {/* Top Row */}
      <div className="flex items-baseline">
        <h3 className="text-2xl font-bold text-dark">{number}</h3>
        <hr className="border border-y-amber-950 w-full mx-3" />
        <ArrowUpRight size={40} color="#0E0E0E" className="relative top-3" />
      </div>

      {/* Image */}
      <div className="image_wrapper my-4 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          draggable="false"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div>
        <h4 className="text-dark font-semibold">{title}</h4>
        <p className="text-dark opacity-70 md:mt-2 mt-0">{description}</p>
        <ul className="list-disc pl-5 text-black space-y-1 mt-2">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceOfferCard;
