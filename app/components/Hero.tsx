import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Users,
  FileCheck,
  History,
} from "lucide-react";

const trustBadges = [
  { icon: CheckCircle, label: "NICEIC", sub: "Approved" },
  { icon: Users, label: "Fully", sub: "Qualified" },
  { icon: FileCheck, label: "Fully", sub: "Insured" },
  { icon: History, label: "24/7", sub: "Support" },
];

export default function Hero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden min-h-[600px] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply z-10" />
        <Image
          src="/images/hero-bg.jpg"
          alt="Electrical panel"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/20 text-brand-light text-sm font-semibold mb-6 border border-brand-blue/30 backdrop-blur-sm">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Trusted Commercial Electricians
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Commercial Electrical{" "}
            <span className="text-brand-accent">Excellence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Delivering safe, reliable, and compliant electrical solutions for
            schools, nursing homes, and commercial properties across the region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-center transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-bold text-center transition-all backdrop-blur-sm flex items-center justify-center"
            >
              Our Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/80">
            {trustBadges.map(({ icon: Icon, label, sub }) => (
              <div key={label + sub} className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-brand-accent shrink-0" />
                <span className="text-sm font-medium leading-tight">
                  {label}
                  <br />
                  {sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
