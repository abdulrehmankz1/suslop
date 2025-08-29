"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import LightNavbar from "./LinghtNavbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // sirf details pages ke liye
  const isDetailPage =
    pathname.startsWith("/blog-perspectives/") ||
    pathname.startsWith("/our-projects/");

  return (
    <>
      {isDetailPage ? <LightNavbar /> : <Navbar />}
    </>
  );
}
