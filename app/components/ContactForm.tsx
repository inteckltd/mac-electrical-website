"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { getServiceLabel, SERVICE_OPTIONS } from "@/lib/services";

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedService =
    getServiceLabel(searchParams.get("service") ?? "") ?? "";
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: replace with Resend / Formspree API call when ready
    // e.g. await fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) })
    await new Promise((r) => setTimeout(r, 600)); // brief pause for UX
    router.push("/contact/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
          >
            First name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            autoComplete="given-name"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
            placeholder="Jane"
          />
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
          >
            Last name
          </label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            autoComplete="family-name"
            required
            className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
        >
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
        >
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
          placeholder="07700 900000"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
        >
          Service required
        </label>
        <select
          id="service"
          name="service"
          defaultValue={preselectedService}
          className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
        >
          <option value="">Select a service…</option>
          {SERVICE_OPTIONS.map(({ label }) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition resize-none"
          placeholder="Tell us about your project or requirements…"
        />
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-3 h-auto rounded-md text-base transition-colors disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
