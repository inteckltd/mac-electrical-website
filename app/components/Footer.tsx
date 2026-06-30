import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { SERVICE_PAGES, servicePath } from "@/lib/services";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = SERVICE_PAGES.map((s) => ({
  label: s.navLabel,
  href: servicePath(s.slug),
}));

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo_white.png"
              alt="MAC Electrical Contractors"
              width={160}
              height={40}
              className="h-10 w-auto mb-6"
            />
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Professional commercial electrical contractors delivering safe,
              reliable, and compliant solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mac_electrical_contractors/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {/* Instagram icon */}
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-brand-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-brand-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone className="mr-3 h-4 w-4 text-brand-accent shrink-0" />
                <a
                  href="tel:07896249965"
                  className="hover:text-white transition-colors"
                >
                  07896 249965
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-4 w-4 text-brand-accent shrink-0" />
                <a
                  href="mailto:tim@mac-electrical.co.uk"
                  className="hover:text-white transition-colors break-all"
                >
                  tim@mac-electrical.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MAC Electrical Contractors. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
