import type { Metadata } from "next";
import { Building2, Flame, Lightbulb, ShieldCheck } from "lucide-react";
import Hero from "@/app/components/Hero";
import ServiceCard from "@/app/components/ServiceCard";
import SlaSection from "@/app/components/SlaSection";
import CtaSection from "@/app/components/CtaSection";
import SectionHeader from "@/app/components/SectionHeader";

export const metadata: Metadata = {
  title: "MAC Electrical Contractors | Commercial Electrical Services",
  description:
    "Delivering safe, reliable, and compliant electrical solutions for schools, nursing homes, and commercial properties across the region.",
};

const services = [
  {
    icon: Building2,
    title: "Commercial Maintenance",
    description:
      "Planned preventative maintenance and reactive support to keep your facilities running safely and efficiently.",
    href: "/services#maintenance",
  },
  {
    icon: Flame,
    title: "Fire Alarm Systems",
    description:
      "Design, installation, commissioning, and regular maintenance of commercial fire alarm systems for compliance.",
    href: "/services#fire-alarms",
  },
  {
    icon: Lightbulb,
    title: "Emergency Lighting",
    description:
      "Installation, testing, and certification of emergency lighting systems to ensure safe evacuation routes.",
    href: "/services#emergency-lighting",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Testing",
    description:
      "EICR reports, PAT testing, and ongoing compliance management specifically tailored for schools and care homes.",
    href: "/services#compliance",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Expertise"
            heading="Comprehensive Commercial Services"
            center
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <SlaSection />
      <CtaSection />
    </>
  );
}
