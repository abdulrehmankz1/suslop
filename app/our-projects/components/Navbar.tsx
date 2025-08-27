"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
              <Link href="/" className=" transition pe-8">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className=" transition pe-8"
              >
                About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative pe-8"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "services" ? null : "services"
                  )
                }
                className=" transition flex items-center gap-1"
              >
                Services <ChevronDown size={18} />
              </button>
              {openDropdown === "services" && (
  <ul className="absolute top-5 mt-2 w-48 text-base rounded-md text-dark bg-gray-100 shadow-xl">                  <li>
                    <Link
                      href="/services/web"
                      className="block px-4 py-2 hover:bg-gray-200 hover:rounded-md transition"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/consulting"
                      className="block px-4 py-2 hover:bg-gray-200 transition"
                    >
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/strategy"
                      className="block px-4 py-2 hover:bg-gray-200 hover:rounded-md transition"
                    >
                      Strategy
                    </Link>
                  </li>
                </ul>
              )}
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
                className=" transition flex items-center gap-1"
              >
                Insights <ChevronDown size={18} />
              </button>
              {openDropdown === "insights" && (
                <ul className="absolute top-5 mt-2 w-48 text-base rounded-md text-dark bg-gray-100 shadow-xl">
                  <li>
                    <Link
                      href="/insights/blog"
                      className="block px-4 py-2 hover:bg-gray-200 hover:rounded-md transition"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/case-studies"
                      className="block px-4 py-2 hover:bg-gray-200 transition"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/reports"
                      className="block px-4 py-2 hover:bg-gray-200 hover:rounded-md transition"
                    >
                      Reports
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* CTA Desktop */}
        <button className="btn secondary_btn_outline hidden lg:inline-flex">
          Contact Us
        </button>

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
        <nav className="lg:hidden bg-black/95 backdrop-blur border-t border-white/10">
          <ul className="flex flex-col text-lg p-4 space-y-2">
            <li>
              <Link
                href="/"
                className="block px-2 py-2  transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="block px-2 py-2  transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer px-2 py-2 ">
                  Services <ChevronDown size={18} />
                </summary>
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link
                      href="/services/web"
                      className="block py-1 "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/consulting"
                      className="block py-1 "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/strategy"
                      className="block py-1 "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Strategy
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer px-2 py-2 ">
                  Insights <ChevronDown size={18} />
                </summary>
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    <Link
                      href="/insights/blog"
                      className="block py-1 "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/case-studies"
                      className="block py-1 "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/insights/reports"
                      className="block py-1 "
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Reports
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <button
                className="btn secondary_btn_outline w-full mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
