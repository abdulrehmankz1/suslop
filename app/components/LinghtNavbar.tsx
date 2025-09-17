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
          <ul className="flex items-center">
            <li>
              <Link
                href="/"
                className="transition pe-8 hover:text-primary active:text-primary font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="transition pe-8 hover:text-primary active:text-primary font-medium"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/our-services"
                className="transition pe-8 hover:text-primary active:text-primary font-medium"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/our-projects"
                className="transition pe-8 hover:text-primary active:text-primary font-medium"
              >
                Our Projects
              </Link>
            </li>

            {/* Insights Dropdown */}
            <li
              className="relative pe-8"
              onMouseEnter={() => setOpenDropdown("insights")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "insights" ? null : "insights"
                  )
                }
                className="cursor-pointer transition flex items-center gap-1 hover:text-primary active:text-primary font-medium"
              >
                Insights <ChevronDown size={18} />
              </button>
              <div
                className={`absolute top-5 mt-2 w-48 text-base rounded-md text-dark bg-gray-100 shadow-xl transform transition-all duration-300 ${
                  openDropdown === "insights"
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <ul>
                  <li>
                    <Link
                      href="/our-insights"
                      className="block px-4 py-2 hover:bg-gray-200 rounded-md transition"
                    >
                      Insights
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-perspectives"
                      className="block px-4 py-2 hover:bg-gray-200 rounded-md transition"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
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
            {/* Mobile Dropdown - Insights */}
            <li>
              <button
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === "insights" ? null : "insights"
                  )
                }
                className="flex items-center justify-between w-full px-2 py-2 text-dark hover:text-primary active:text-primary font-medium"
              >
                Insights <ChevronDown size={18} />
              </button>
              {mobileDropdown === "insights" && (
                <ul className="pl-4 mt-1 space-y-1 text-dark">
                  <li>
                    <Link
                      href="/our-insights"
                      className="block py-1 hover:text-primary active:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Insights
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog-perspectives"
                      className="block py-1 hover:text-primary active:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/contact-us"
                className="btn secondary_btn_outline w-full mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default LightNavbar;
