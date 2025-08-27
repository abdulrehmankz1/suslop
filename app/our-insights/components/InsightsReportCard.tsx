import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InsightsReportCardProps {
  image: string;
  title: string;
  link: string;
  date: string;
}

const InsightsReportCard = ({
  image,
  title,
  link,
  date,
}: InsightsReportCardProps) => {
  return (
    <Link href={link} className="updates_card group">
      <div className="image_wrapper rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          draggable="false"
          width={315}
          height={200}
          className="object-cover w-full! h-full!"
        />
      </div>
      <div className="mt-6 block">
        {/* Date from props */}
        <div className="text-[#00000080] text-lg mb-1">{date}</div>
        {/* Title underline on hover */}
        <h4 className="text-dark group-hover:underline">{title}</h4>
      </div>
    </Link>
  );
};

export default InsightsReportCard;
