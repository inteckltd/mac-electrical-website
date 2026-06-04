import type { Metadata } from "next";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";
import CtaSection from "@/app/components/CtaSection";

export const metadata: Metadata = {
  title: "About Us | MAC Electrical Contractors",
  description:
    "Learn about MAC Electrical Contractors — experienced commercial electricians serving schools, care homes, and businesses.",
};

const values = [
  {
    icon: Award,
    title: "NICEIC Approved",
    body: "We are fully approved by the NICEIC, the UK's leading electrical certification body, giving you total confidence in our work.",
  },
  {
    icon: Users,
    title: "Expert Team",
    body: "Every member of our team is fully qualified, regularly trained, and experienced across a wide range of commercial sectors.",
  },
  {
    icon: CheckCircle2,
    title: "Fully Insured",
    body: "Comprehensive public liability insurance means you are always protected when you choose MAC Electrical.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    body: "Electrical emergencies don't wait — neither do we. Our rapid response team is available around the clock.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-brand-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">
            About MAC Electrical
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted Commercial Electrical Partner
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Delivering safe, reliable, and fully compliant electrical services
            to schools, nursing homes, and commercial buildings — built on a
            foundation of expertise, integrity, and care.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              eyebrow="Our Mission"
              heading="Safety and Compliance at the Heart of Everything"
              center
              className="mb-8"
            />
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              At MAC Electrical Contractors, we believe that every organisation
              deserves electrical services they can rely on. From planned
              preventative maintenance to emergency call-outs, we bring
              professionalism, transparency, and technical excellence to every
              project. Our close relationships with schools and care homes mean
              we understand the unique pressures these environments face, and we
              plan our work to minimise disruption at every turn.
            </p>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose Us"
            heading="What Sets Us Apart"
            center
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md text-center"
              >
                <div className="w-14 h-14 bg-brand-light dark:bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
