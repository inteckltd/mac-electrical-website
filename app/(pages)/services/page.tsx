import type { Metadata } from "next";
import ServiceCard from "@/app/components/ServiceCard";
import SlaSection from "@/app/components/SlaSection";
import CtaSection from "@/app/components/CtaSection";
import SectionHeader from "@/app/components/SectionHeader";
import { SERVICE_PAGES, servicePath } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of commercial electrical services — maintenance, fire alarms, emergency lighting, CCTV, and compliance testing.",
};

const services = SERVICE_PAGES.map((s) => ({
  id: s.slug,
  icon: s.icon,
  title: s.title,
  description: s.overview,
  href: servicePath(s.slug),
}));

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
              <div key={s.id} id={s.id} className="h-full">
                <ServiceCard {...s} linkLabel="View service" className="h-full" />
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
