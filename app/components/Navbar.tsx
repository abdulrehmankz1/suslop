"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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
    <header className="absolute top-3 left-0 right-0 z-50 text-fefe bg-transparent overflow-hidden">
      <div
        className="container mx-auto flex items-center justify-between px-6 py-4"
        ref={dropdownRef}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center logo_wrapper">
          {/* Using plain <img> for better compatibility in previews */}
          <img
            src="/assets/images/logo.svg"
            alt="Logo"
            width={180}
            height={30}
            draggable="false"
            className="h-full w-full object-contain"
            onError={(e) => {
              // fallback image if path invalid
              (e.currentTarget as HTMLImageElement).src =
                "https://via.placeholder.com/180x30?text=Logo";
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-lg relative">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/"
                className="hover:text-white/70 transition px-2 py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-white/70 transition px-2 py-2"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/our-services"
                className="hover:text-white/70 transition px-2 py-2"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href="/our-projects"
                className="hover:text-white/70 transition px-2 py-2"
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                href="/our-insights"
                className="hover:text-white/70 transition px-2 py-2"
              >
                Insights
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA (Desktop Only) */}
        <Link
          href="/contact-us"
          className="btn primary_btn_outline hidden lg:inline-flex"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden bg-black/95 backdrop-blur border-t border-white/10 transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col text-lg p-4 space-y-2">
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
                className="block px-2 py-2 hover:text-white/70 transition"
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

export default Navbar;
