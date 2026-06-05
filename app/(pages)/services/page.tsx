import type { Metadata } from "next";
import {
  Building2,
  Flame,
  Lightbulb,
  ShieldCheck,
  Camera,
  Zap,
} from "lucide-react";
import ServiceCard from "@/app/components/ServiceCard";
import SlaSection from "@/app/components/SlaSection";
import CtaSection from "@/app/components/CtaSection";
import SectionHeader from "@/app/components/SectionHeader";
import { contactHref } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | MAC Electrical Contractors",
  description:
    "Explore our full range of commercial electrical services — maintenance, fire alarms, emergency lighting, CCTV, and compliance testing.",
};

const services = [
  {
    id: "maintenance",
    icon: Building2,
    title: "Commercial Maintenance",
    description:
      "Planned preventative maintenance (PPM) and reactive support packages keep your electrical infrastructure in peak condition. We reduce the risk of costly unplanned outages and ensure your facilities remain operational.",
    href: contactHref("maintenance"),
  },
  {
    id: "fire-alarms",
    icon: Flame,
    title: "Fire Alarm Systems",
    description:
      "From design through to commissioning and ongoing servicing, we deliver BS5839-compliant fire alarm systems for commercial, educational, and care environments. Regular testing and maintenance reports are included.",
    href: contactHref("fire-alarms"),
  },
  {
    id: "emergency-lighting",
    icon: Lightbulb,
    title: "Emergency Lighting",
    description:
      "Correctly installed and regularly tested emergency lighting is a legal requirement. We install, commission, and certify systems to BS EN 1838 and provide full documentation for your compliance records.",
    href: contactHref("emergency-lighting"),
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Compliance & Testing",
    description:
      "Electrical Installation Condition Reports (EICR), PAT testing, and ongoing compliance management — all tailored to the specific requirements of schools, care homes, and commercial buildings.",
    href: contactHref("compliance"),
  },
  {
    id: "cctv",
    icon: Camera,
    title: "CCTV & Security",
    description:
      "Full design, supply, installation, and maintenance of CCTV and security systems. We work across IP and analogue platforms to deliver reliable surveillance solutions for your premises.",
    href: contactHref("cctv"),
  },
  {
    id: "electrical-installation",
    icon: Zap,
    title: "Electrical Installations",
    description:
      "New-build fitouts, refurbishments, and upgrades — our team delivers commercial electrical installations to the highest standard, on time and in compliance with the latest BS7671 wiring regulations.",
    href: contactHref("electrical-installation"),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-brand-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Electrical Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive range of electrical services designed around the
            needs of schools, care homes, and commercial facilities.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            heading="Everything Your Facility Needs"
            center
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.id} id={s.id}>
                <ServiceCard {...s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SlaSection />
      <CtaSection />
    </>
  );
}
