import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  linkText: string;
  linkHref: string;
}

const BlogCard = ({
  title,
  description,
  image,
  linkText,
  linkHref,
}: BlogCardProps) => {
  return (
    <div className="blog_card">
      <div className="image_wrapper mb-4">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          draggable="false"
          className="object-cover w-full! h-full! rounded-lg"
        />
      </div>
      <div>
        <h4>{title}</h4>
        <p className="text-dark opacity-[0.7] mt-2 mb-4">{description}</p>
        <Link href={linkHref}>
          <div className="flex gap-9 items-center">
            <div className="text-dark mr-2 text-2xl">{linkText}</div>
            <ArrowUpRight size={35} color="#0E0E0E" />
          </div>
          <div className="h-1 w-[100px] bg-black mt-1"></div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
