import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";

const benefits = [
  {
    title: "Regular Inspections & Testing",
    body: "Scheduled visits to maintain system health and prevent unexpected failures.",
  },
  {
    title: "Priority Call-Outs",
    body: "Guaranteed response times for critical electrical emergencies.",
  },
  {
    title: "Compliance Management",
    body: "We handle your certification schedules so you never miss a compliance deadline.",
  },
];

export default function SlaSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/sla-image.jpg"
                alt="Professional electrician inspecting commercial electrical panel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="bg-brand-blue text-white p-4 rounded-lg inline-block shadow-lg">
                  <p className="font-bold text-2xl">100%</p>
                  <p className="text-sm">Compliance Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <SectionHeader
              eyebrow="Service Level Agreements"
              heading="Maintenance Contracts Built Around Your Business"
              className="mb-6"
            />
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              We specialize in providing robust Service Level Agreements (SLAs)
              for schools, nursing homes, and commercial facilities. Our
              tailored packages ensure you remain fully compliant, minimize
              downtime, and protect your staff and customers.
            </p>

            <ul className="space-y-5 mb-8">
              {benefits.map((b) => (
                <li key={b.title} className="flex items-start">
                  <CheckCircle2 className="text-brand-blue mt-0.5 mr-3 h-5 w-5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-dark dark:text-white">
                      {b.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-0.5">
                      {b.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center bg-brand-dark hover:bg-gray-800 dark:bg-brand-blue dark:hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-bold transition-colors"
            >
              Discuss SLA Packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
