"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import LightNavbar from "./LinghtNavbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // detail pages + contact page
  const isLightNavbar =
    pathname.startsWith("/blog-perspectives/") ||
    pathname.startsWith("/our-projects/") ||
    pathname.startsWith("/our-insights/") ||
    pathname.startsWith("/our-reports/") ||
    pathname.startsWith("/news-room/") ||
    pathname === "/contact-us";

  return <>{isLightNavbar ? <LightNavbar /> : <Navbar />}</>;
}
