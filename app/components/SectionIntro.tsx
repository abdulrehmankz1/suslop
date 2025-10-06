import Link from "next/link";

interface SectionIntroProps {
    heading: string;
    paragraph: string;
    buttonText: string;
    buttonLink: string;
    className?: string;
}

export default function SectionIntro({
    heading,
    paragraph,
    buttonText,
    buttonLink,
    className = "",
}: SectionIntroProps) {
    return (
        <div
            className={`grid grid-cols-1 xl:grid-cols-2 xl:gap-20 lg:gap-5 gap-5 lg:mb-12 md:mb-8 mb-5 ${className}`}
        >
            <div className="xl:w-2/3 w-[90%]">
                <h2 className="text-dark">{heading}</h2>
            </div>

            <div>
                <p className="text-black">{paragraph}</p>
                <Link href={buttonLink}>
                    <button className="btn secondary_btn mt-5">{buttonText}</button>
                </Link>
            </div>
        </div>
    );
}
