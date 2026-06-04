import Link from "next/link";
import { Phone } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="bg-brand-blue py-16 relative overflow-hidden">
      {/* Decorative dot-grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Need a reliable electrical partner?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Whether you need immediate reactive maintenance or want to discuss a
          long-term SLA for your facility, our team is ready to help.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:07525336097"
            className="bg-white text-brand-blue hover:bg-gray-50 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center shadow-lg"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call 07896 249965
          </a>
          <Link
            href="/contact"
            className="bg-brand-dark text-white hover:bg-gray-800 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center shadow-lg"
          >
            Request a Callback
          </Link>
        </div>
      </div>
    </section>
  );
}
