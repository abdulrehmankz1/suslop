"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black py-12 pb-7 rounded-t-[60px] pt-[320px] -mt-64 px-3 md:px-4 lg:px-5">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-wrap gap-12 justify-between">
          {/* Logo + About */}
          <div className="w-full md:w-2/3 lg:w-[35%]">
            {/* Logo */}
            <Link href="/" className="gap-2 md:mb-5 footer_logo">
              <Image
                src="/assets/images/logo.svg"
                alt="Logo"
                width={220}
                height={28}
                draggable="false"
                priority
              />
            </Link>

            <p className="mt-5 opacity-70 text-white">
              At Suslop, we help governments, communities, and industries design
              and deliver solutions that balance environmental responsibility,
              economic growth, and social well-being.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8 md:mt-12 flex-wrap">
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/assets/images/vk.svg"
                  alt="VK"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/assets/images/pinterest.svg"
                  alt="Pinterest"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/assets/images/instagram.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/assets/images/twitter.svg"
                  alt="Twitter"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image
                  src="/assets/images/facebook.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-2/3 xl:w-[30%] lg:w-[40%] flex flex-col flex-wrap sm:flex-row xl:justify-between lg:justify-around justify-between gap-10 text-fefe">
            {/* Links 1 */}
            <div>
              <h4 className="mb-6 md:mb-10 text-fefe">Our links</h4>
              <ul className="space-y-3 md:space-y-4 opacity-70">
                <li className="hover:underline">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/our-services">Our Services</Link>
                </li>
                <li className="hover:underline">
                  <Link href="our-projects">Our Projects</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/our-insights">Insights</Link>
                </li>
              </ul>
            </div>

            {/* Links 2 */}
            <div>
              <h4 className="mb-6 md:mb-10 text-fefe">Our links</h4>
              <ul className="space-y-3 md:space-y-4 opacity-70">
                <li className="hover:underline">
                  <Link href="/blog-perspectives">Our Blogs</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/news-room">News Room</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Our Lorem</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Loremdjs</Link>
                </li>
                <li className="hover:underline">
                  <Link href="#">Lorem Ipsum</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + Email Section */}
        <div className="border-t border-white/30 lg:my-12 md:my-7 my-5"></div>
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-3xl md:text-5xl lg:text-[65px] text-fefe">
            hello@company.com
          </div>
          <button className="bg-white text-black md:p-4 p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <ArrowUpRight size={24} />
          </button>
        </div>
        <div className="border-t border-white/30 lg:mt-12 md:mt-7 mt-5 mb-5"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-fefe opacity-[0.8]">
          <p>© SUSLOP – 2025</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
