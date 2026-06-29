import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CtaSection from "@/app/components/CtaSection";
import {
  SERVICE_PAGES,
  getServicePage,
  contactHref,
  type ServiceSlug,
} from "@/lib/services";

const howWeWorkSteps = [
  {
    number: "01",
    title: "Get in touch",
    body: "Call us or submit an enquiry and we'll respond promptly to discuss your requirements.",
  },
  {
    number: "02",
    title: "Site survey",
    body: "We visit your premises to assess the scope of work and provide a clear, competitive quote.",
  },
  {
    number: "03",
    title: "Works carried out",
    body: "Our qualified engineers complete the work safely and efficiently, with minimal disruption to your operations.",
  },
  {
    number: "04",
    title: "Certification & handover",
    body: "We provide all required test certificates, compliance documentation, and a full handover pack.",
  },
];

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};

  return {
    title: `${service.title} | MAC Electrical Contractors`,
    description: service.subtitle,
  };
}

export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">
            {service.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Overview */}
            <div>
              <div className="w-14 h-14 bg-brand-light dark:bg-brand-dark rounded-lg flex items-center justify-center mb-6">
                <Icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-6">
                {service.whatWeDoHeading}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                {service.overview}
              </p>
              <Link
                href={contactHref(slug as ServiceSlug)}
                className="inline-flex items-center bg-brand-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-md"
              >
                Request a quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* What's included */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-6">
                What&apos;s included
              </h3>
              <ul className="space-y-4">
                {service.included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Steps */}
            <div className="lg:w-1/2">
              <p className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">
                Our Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-8">
                How we work
              </h2>
              <ol className="space-y-6">
                {howWeWorkSteps.map((step) => (
                  <li key={step.number} className="flex items-start gap-5">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue text-white font-bold text-sm flex items-center justify-center">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-brand-dark dark:text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link
                href={contactHref(slug as ServiceSlug)}
                className="inline-flex items-center mt-10 bg-brand-dark hover:bg-gray-800 dark:bg-brand-blue dark:hover:bg-blue-700 text-white px-8 py-3.5 rounded-md font-bold transition-colors"
              >
                Get a free quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={`/images/services/${service.image}`}
                  alt={`MAC Electrical — ${service.title}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-4 rounded-lg inline-block">
                    <p className="font-bold text-lg">MAC Electrical</p>
                    <p className="text-sm text-gray-200">Trusted. Compliant. Reliable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
