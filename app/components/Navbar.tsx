"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { SERVICE_PAGES, servicePath } from "@/lib/services";

const topNavLinks = [
  { label: "Home", href: "/" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top bar — desktop only */}
      <div className="bg-brand-dark text-white py-2 px-4 sm:px-6 lg:px-8 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center space-x-6">
          <a
            href="tel:01925669777"
            className="flex items-center hover:text-brand-accent transition-colors"
          >
            <Phone className="mr-2 h-4 w-4 text-brand-accent" />
            01925 669 777
          </a>
          <a
            href="mailto:info@mac-electrical.co.uk"
            className="flex items-center hover:text-brand-accent transition-colors"
          >
            <Mail className="mr-2 h-4 w-4 text-brand-accent" />
            info@mac-electrical.co.uk
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo.png"
                alt="MAC Electrical Contractors"
                width={160}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 py-2 z-50">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-800 mb-1"
                    >
                      All Services
                    </Link>
                    {SERVICE_PAGES.map((s) => (
                      <Link
                        key={s.slug}
                        href={servicePath(s.slug)}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-brand-blue transition-colors"
                      >
                        {s.navLabel}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {topNavLinks
                .filter((l) => l.label !== "Home")
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}

              <Link
                href="/contact"
                className="bg-brand-blue hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-md"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-brand-dark dark:hover:text-white focus:outline-none"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pb-6 pt-4 space-y-1">
            {/* Contact info */}
            <div className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-4">
              <a
                href="tel:01925669777"
                className="flex items-center gap-2 hover:text-brand-blue"
              >
                <Phone className="h-4 w-4 text-brand-accent" />
                01925 669 777
              </a>
              <a
                href="mailto:info@mac-electrical.co.uk"
                className="flex items-center gap-2 hover:text-brand-blue"
              >
                <Mail className="h-4 w-4 text-brand-accent" />
                info@mac-electrical.co.uk
              </a>
            </div>

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-gray-700 dark:text-gray-300 font-medium hover:text-brand-blue transition-colors"
            >
              Home
            </Link>

            {/* Mobile Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center justify-between w-full py-2.5 text-gray-700 dark:text-gray-300 font-medium hover:text-brand-blue transition-colors"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 pb-1 space-y-1 border-l-2 border-brand-blue ml-1">
                  <Link
                    href="/services"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block py-1.5 text-sm font-semibold text-brand-blue"
                  >
                    All Services
                  </Link>
                  {SERVICE_PAGES.map((s) => (
                    <Link
                      key={s.slug}
                      href={servicePath(s.slug)}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors"
                    >
                      {s.navLabel}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {topNavLinks
              .filter((l) => l.label !== "Home")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-gray-700 dark:text-gray-300 font-medium hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}

            <div className="pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-brand-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
