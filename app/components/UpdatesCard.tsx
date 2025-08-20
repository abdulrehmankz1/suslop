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
    <div>
      <Image
        src={image}
        alt={title}
        draggable="false"
        width={315}
        height={200}
        className="rounded-md object-cover w-full"
      />
      <Link href={link} className="hover:underline mt-6 block">
        <h4 className="text-dark">{title}</h4>
      </Link>
    </div>
  );
};

export default UpdatesCard;
