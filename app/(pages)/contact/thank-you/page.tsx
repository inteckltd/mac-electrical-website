import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Message Sent | MAC Electrical Contractors",
  description: "Thank you for getting in touch — we will be in contact shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 flex-1">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-brand-light dark:bg-brand-dark rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="h-10 w-10 text-brand-blue" />
        </div>

        <h1 className="text-4xl font-bold text-brand-dark dark:text-white mb-4">
          Message received!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
          Thank you for getting in touch. We aim to respond to all enquiries
          within one business day. If your matter is urgent, please call us
          directly.
        </p>

        {/* Call CTA */}
        <a
          href="tel:07525336097"
          className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg mb-6"
        >
          <Phone className="h-5 w-5" />
          Call 07525 336097
        </a>

        <div className="mt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-brand-blue font-semibold hover:underline"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
