import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, Mail } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MAC Electrical Contractors for a quote or to discuss an SLA.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "07896 249965",
    href: "tel:07896249965",
  },
  {
    icon: Mail,
    label: "Email",
    value: "tim@mac-electrical.co.uk",
    href: "mailto:tim@mac-electrical.co.uk",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-brand-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact MAC Electrical
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to discuss your requirements? Fill in the form below or reach
            out directly — we typically respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <SectionHeader
                eyebrow="Send a Message"
                heading="Request a Quote or Callback"
                className="mb-8"
              />
              <Suspense>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contact info */}
            <div>
              <SectionHeader
                eyebrow="Contact Details"
                heading="Reach Us Directly"
                className="mb-8"
              />

              <div className="space-y-6 mb-10">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-light dark:bg-brand-dark rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-brand-dark dark:text-white font-medium hover:text-brand-blue transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-brand-dark dark:text-white font-medium">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
