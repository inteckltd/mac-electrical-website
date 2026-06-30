import type { Metadata } from "next";
import Hero from "@/app/components/Hero";
import ClientLogos from "@/app/components/ClientLogos";
import ServiceCard from "@/app/components/ServiceCard";
import SlaSection from "@/app/components/SlaSection";
import CtaSection from "@/app/components/CtaSection";
import SectionHeader from "@/app/components/SectionHeader";
import { SERVICE_PAGES, servicePath } from "@/lib/services";

export const metadata: Metadata = {
  title: { absolute: "MAC Electrical Contractors | Commercial Electrical Services" },
  description:
    "Delivering safe, reliable, and compliant electrical solutions for schools, nursing homes, and commercial properties across the region.",
};

const homeServices = SERVICE_PAGES.slice(0, 4).map((s) => ({
  icon: s.icon,
  title: s.title,
  description: s.overview,
  href: servicePath(s.slug),
}));

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />

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
            {homeServices.map((s) => (
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
