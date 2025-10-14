"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const LightNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // Close mobile menu if clicked outside
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if running inside a simulator (no window.location.origin)
  const isSimulator =
    typeof window !== "undefined" &&
    (window.location.origin === "null" ||
      window.location.origin === "file://" ||
      window.location.origin.startsWith("blob:"));

  return (
    <header className="absolute top-3 left-0 right-0 z-50 text-dark bg-transparent overflow-hidden">
      <div
        className="container mx-auto flex items-center justify-between px-6 py-4"
        ref={dropdownRef}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center logo_wrapper">
          {/* Use plain <img> in simulator, <Image> in Next.js */}
          {isSimulator ? (
            <img
              src="/assets/images/logo-dark.png"
              alt="Logo"
              width={180}
              height={30}
              draggable="false"
              className="h-full w-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "https://via.placeholder.com/180x30?text=Logo";
              }}
            />
          ) : (
            <Image
              src="/assets/images/logo-dark.png"
              alt="Logo"
              width={180}
              height={30}
              draggable="false"
              className="h-full w-full object-contain"
              priority
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-lg relative text-dark">
          <ul className="flex items-center gap-6 font-medium">
            <li>
              <Link href="/" className="px-2 py-2 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="px-2 py-2 hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/our-services"
                className="px-2 py-2 hover:text-primary"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/our-projects"
                className="px-2 py-2 hover:text-primary"
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                href="/our-insights"
                className="px-2 py-2 hover:text-primary"
              >
                Insights
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA (Desktop Only) */}
        <Link
          href="/contact-us"
          className="btn secondary_btn_outline hidden lg:inline-flex"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden bg-gray-100 shadow-2xl backdrop-blur border-t border-white/10 transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col text-lg p-4 space-y-2 font-medium text-dark">
          {[
            { href: "/", label: "Home" },
            { href: "/about-us", label: "About Us" },
            { href: "/our-services", label: "Our Services" },
            { href: "/our-projects", label: "Our Projects" },
            { href: "/our-insights", label: "Insights" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-2 py-2 hover:text-primary transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default LightNavbar;
