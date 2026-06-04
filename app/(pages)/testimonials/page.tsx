import type { Metadata } from "next";
import { Star } from "lucide-react";
import SectionHeader from "@/app/components/SectionHeader";
import CtaSection from "@/app/components/CtaSection";

export const metadata: Metadata = {
  title: "Testimonials | MAC Electrical Contractors",
  description:
    "Read what our clients say about MAC Electrical Contractors — homeowners, schools, nursing homes, and commercial facilities.",
};

const testimonials = [
  {
    name: "Ste",
    role: "Homeowner",
    rating: 5,
    quote:
      "Tim's quality and workmanship is top quality. He is very much affordable and a really nice guy. Came with an accurate list and worked in different parts of the house to accommodate social distancing for my dad. Made allowances for carers visits and trips on the stair lift.",
  },
  {
    name: "Mark",
    role: "Facilities Manager",
    rating: 5,
    quote:
      "We brought MAC Electrical on to manage planned preventative maintenance across our commercial units and the difference has been immediate. Faults are caught early, response times are fast, and the engineers always communicate clearly. A contractor we genuinely trust.",
  },
  {
    name: "Ben",
    role: "Homeowner",
    rating: 5,
    quote:
      "We have used Tim for all our domestic electrical needs and I have to say all work has been completed to the highest quality. There should be a special six-star rating category for professionals like the employees of MAC Electrical...",
  },
  {
    name: "Claire",
    role: "School Business Manager",
    rating: 5,
    quote:
      "Keeping on top of electrical compliance across a busy school is no small task, but MAC Electrical make it straightforward. Their EICR reports are thorough, the certification is always delivered on time, and they work around the school day without any disruption to staff or pupils.",
  },
  {
    name: "Robert",
    role: "Nursing Home Manager",
    rating: 5,
    quote:
      "Our SLA with MAC Electrical covers all routine testing, emergency lighting checks, and priority call-outs across the home. The team are always respectful of our residents and discreet in how they work. Having that guaranteed response time gives us real peace of mind.",
  },
  {
    name: "Scott",
    role: "Homeowner",
    rating: 5,
    quote:
      "We have had electricians in the past that don't turn up on time or don't complete work. We have used Tim now for 3 years and he is excellent. Great service. They really helped me out when my heater went out. They made the service and payment very convenient for me. I highly recommend this company.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-brand-dark text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">
            Client Feedback
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trusted by homeowners, schools, care homes, and commercial
            facilities — here&apos;s what the people we work with have to say.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Reviews"
            heading="Trusted Across the Region"
            center
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 flex flex-col"
              >
                <StarRating count={t.rating} />
                <blockquote className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gray-100 dark:border-gray-700 pt-5">
                  <p className="font-bold text-brand-dark dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
