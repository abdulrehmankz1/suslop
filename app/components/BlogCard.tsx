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
    <Link href="blog-perspectives" className="block">
      <div className="blog_card cursor-pointer">
        {/* Image */}
        <div className="image_wrapper mb-4 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            draggable="false"
            className="object-cover w-full! h-full!"
          />
        </div>

        {/* Content */}
        <div>
          <h4 className="text-dark">{title}</h4>
          <p className="text-dark opacity-[0.7] mt-2 mb-4">{description}</p>

          <div className="flex gap-9 items-center">
            <div className="text-dark mr-2 text-2xl">{linkText}</div>
            <ArrowUpRight size={35} color="#0E0E0E" />
          </div>
          <div className="h-1 w-[100px] bg-black mt-1"></div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
