"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const LightNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="absolute top-3 left-0 right-0 z-50 text-fefe bg-transparent">
      <div
        className="container mx-auto flex items-center justify-between px-6 py-4"
        ref={dropdownRef}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center logo_wrapper">
          <Image
            src="/assets/images/logo-dark.png"
            alt="Logo"
            width={180}
            height={30}
            draggable="false"
            className="h-full w-full"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center text-lg relative text-dark">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="transition px-2 py-2 hover:text-primary active:text-primary font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="transition px-2 py-2 hover:text-primary active:text-primary font-medium"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/our-services"
                className="transition px-2 py-2 hover:text-primary active:text-primary font-medium"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/our-projects"
                className="transition px-2 py-2 hover:text-primary active:text-primary font-medium"
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                href="/our-insights"
                className="transition px-2 py-2 hover:text-primary active:text-primary font-medium"
              >
                Insights
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Desktop */}
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
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-gray-100 shadow-2xl backdrop-blur border-t border-white/10">
          <ul className="flex flex-col text-lg p-4 space-y-2">
            <li>
              <Link
                href="/"
                className="block px-2 py-2 transition text-dark active:text-black font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="block px-2 py-2 transition text-dark active:text-black font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/our-services"
                className="block px-2 py-2 transition text-dark active:text-black font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Services
              </Link>
            </li>{" "}
            <li>
              <Link
                href="/our-projects"
                className="block px-2 py-2 transition text-dark active:text-black font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                href="/our-insights"
                className="block px-2 py-2 transition text-dark active:text-black font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default LightNavbar;
