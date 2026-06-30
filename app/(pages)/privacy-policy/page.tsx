import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MAC Electrical Contractors collects, uses, and protects your personal data in accordance with UK GDPR.",
};

const lastUpdated = "30 June 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-brand-dark text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Policy body */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-brand-dark dark:prose-headings:text-white prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline">

            <p className="lead text-lg text-gray-600 dark:text-gray-400 mb-10">
              MAC Electrical Contractors (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to
              protecting your personal data and respecting your privacy. This
              policy explains what information we collect, how we use it, and
              your rights under the UK General Data Protection Regulation
              (UK GDPR) and the Data Protection Act 2018.
            </p>

            {/* 1 */}
            <h2 className="text-2xl mt-10 mb-4 text-brand-dark dark:text-white">1. Who We Are</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              MAC Electrical Contractors is the data controller for personal
              information collected through this website and our services. If
              you have any questions about this policy or how we handle your
              data, please contact us:
            </p>
            <ul className="text-gray-600 dark:text-gray-400 mb-6 space-y-1 list-none pl-0">
              <li><strong className="text-gray-800 dark:text-gray-200">Email:</strong>{" "}
                <a href="mailto:info@mac-electrical.co.uk">info@mac-electrical.co.uk</a>
              </li>
              <li><strong className="text-gray-800 dark:text-gray-200">Phone:</strong>{" "}
                <a href="tel:07896249965">07896 249965</a>
              </li>
            </ul>

            {/* 2 */}
            <h2 className="text-2xl mt-10 mb-4 text-brand-dark dark:text-white">2. What Data We Collect</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We may collect the following personal data when you use our
              website or contact us:
            </p>
            <ul className="text-gray-600 dark:text-gray-400 mb-6 space-y-2 list-disc pl-6">
              <li><strong className="text-gray-800 dark:text-gray-200">Identity data:</strong> first name, last name</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Contact data:</strong> email address, telephone number</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Enquiry data:</strong> the content of messages you send us via the contact form</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Technical data:</strong> IP address, browser type and version, pages visited, and time spent on the site (collected via standard server logs or analytics tools)</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We do not collect any special category data (such as health
              information, financial details, or government identifiers) through
              this website.
            </p>

            {/* 3 */}
            <h2 className="text-2xl mt-10 mb-4 text-brand-dark dark:text-white">3. How We Use Your Data</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We use your personal data for the following purposes:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-left border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-brand-light dark:bg-gray-800 text-brand-dark dark:text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Purpose</th>
                    <th className="px-4 py-3 font-semibold">Lawful Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-600 dark:text-gray-400">
                  <tr>
                    <td className="px-4 py-3">Responding to your enquiry or quote request</td>
                    <td className="px-4 py-3">Legitimate interests / pre-contractual steps</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Providing electrical services under a contract</td>
                    <td className="px-4 py-3">Performance of a contract</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Keeping records of work carried out</td>
                    <td className="px-4 py-3">Legal obligation / legitimate interests</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Improving our website and services</td>
                    <td className="px-4 py-3">Legitimate interests</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We will never sell your personal data to third parties or use it
              for unsolicited marketing without your explicit consent.
            </p>

            {/* 4 */}
            <h2 className="text-2xl mt-10 mb-4 text-brand-dark dark:text-white">4. How Long We Keep Your Data</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We retain personal data only for as long as necessary:
            </p>
            <ul className="text-gray-600 dark:text-gray-400 mb-6 space-y-2 list-disc pl-6">
              <li>Enquiries that do not result in a contract: up to <strong className="text-gray-800 dark:text-gray-200">12 months</strong></li>
              <li>Client records relating to completed work: up to <strong className="text-gray-800 dark:text-gray-200">7 years</strong> (in line with HMRC requirements)</li>
              <li>Electrical certification records: for the life of the installation or as required by regulation</li>
            </ul>

            {/* 5 */}
            <h2 className="text-2xl mt-10 mb-4 text-brand-dark dark:text-white">5. Who We Share Your Data With</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We do not sell or rent your data. We may share it with:
            </p>
            <ul className="text-gray-600 dark:text-gray-400 mb-6 space-y-2 list-disc pl-6">
              <li><strong className="text-gray-800 dark:text-gray-200">Vercel</strong> — our website hosting provider, which may process technical data (such as IP addresses and request logs) as part of serving the site. Vercel operates data centres in Europe and the US and is GDPR-compliant.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Postmark (Wildbit LLC)</strong> — our transactional email provider, which processes your contact form submission in order to deliver your enquiry to us. Postmark is GDPR-compliant and operates under a data processing agreement.</li>
              <li>Our accountants or legal advisers where required</li>
              <li>Regulatory bodies or law enforcement agencies where we are legally required to do so</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              All third parties we work with are required to handle your data
              securely and in accordance with UK GDPR.
            </p>

            {/* 6 */}
            <h2 className="text-2xl mt-10 mb-4 text-brand-dark dark:text-white">6. Cookies &amp; Analytics</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This website uses <strong className="text-gray-800 dark:text-gray-200">Vercel Analytics</strong> to
              help us understand how visitors use the site (for example, which
              pages are visited and how long is spent on them). Vercel Analytics
              is designed to be privacy-friendly: it does not use cookies, does
              not track individuals across sites, and does not collect personally
              identifiable information. Data is aggregated and used solely to
              improve the performance and content of this website.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We do not use advertising or third-party tracking cookies. If this
              changes, we will update this policy and request your consent where
              required by law.
            </p>

            {/* 7 */}
            <h2 className="text-2xl mt-10 mb-4 text-brand-dark dark:text-white">7. Your Rights</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Under UK GDPR you have the right to:
            </p>
            <ul className="text-gray-600 dark:text-gray-400 mb-6 space-y-2 list-disc pl-6">
              <li><strong className="text-gray-800 dark:text-gray-200">Access</strong> the personal data we hold about you</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Rectify</strong> inaccurate or incomplete data</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Erase</strong> your data (&ldquo;right to be forgotten&rdquo;), where no legal obligation requires us to retain it</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Restrict</strong> processing of your data in certain circumstances</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Object</strong> to processing based on legitimate interests</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Data portability</strong> — receive your data in a machine-readable format</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@mac-electrical.co.uk">info@mac-electrical.co.uk</a>.
              We will respond within 30 days. You also have the right to lodge a
              complaint with the{" "}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Information Commissioner&apos;s Office (ICO)
              </a>{" "}
              if you believe your data has been mishandled.
            </p>

            {/* 8 */}
            <h2 className="text-2xl mt-10 mb-4 text-brand-dark dark:text-white">8. Data Security</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We take reasonable technical and organisational measures to
              protect your personal data from unauthorised access, loss, or
              disclosure. Our website is served over HTTPS and contact form
              submissions are transmitted securely.
            </p>

            {/* 9 */}
            <h2 className="text-2xl mt-10 mb-4 text-brand-dark dark:text-white">9. Changes to This Policy</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We may update this privacy policy from time to time. The date at
              the top of this page will always reflect when it was last revised.
              Significant changes will be communicated where appropriate.
            </p>

            {/* 10 */}
            <h2 className="text-2xl mt-10 mb-4 text-brand-dark dark:text-white">10. Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              If you have any questions about this policy or how we handle your
              data, please get in touch:
            </p>
            <ul className="text-gray-600 dark:text-gray-400 mb-10 space-y-1 list-none pl-0">
              <li><strong className="text-gray-800 dark:text-gray-200">Email:</strong>{" "}
                <a href="mailto:info@mac-electrical.co.uk">info@mac-electrical.co.uk</a>
              </li>
              <li><strong className="text-gray-800 dark:text-gray-200">Phone:</strong>{" "}
                <a href="tel:07896249965">07896 249965</a>
              </li>
            </ul>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <Link
                href="/"
                className="text-brand-blue font-semibold hover:underline"
              >
                ← Back to Home
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
