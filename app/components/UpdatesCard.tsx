import Image from "next/image";
import Link from "next/link";
import React from "react";

interface UpdatesCardProps {
  image: string;
  title: string;
  link: string;
}

const UpdatesCard = ({ image, title, link }: UpdatesCardProps) => {
  return (
    <Link href={link} className="updates_card">
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
      <div className="hover:underline mt-6 block">
        <h4 className="text-dark">{title}</h4>
      </div>
    </Link>
  );
};

export default UpdatesCard;
