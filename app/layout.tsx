import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mac-electrical.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "MAC Electrical Contractors | Commercial Electrical Services",
    template: "%s | MAC Electrical Contractors",
  },
  description:
    "Delivering safe, reliable, and compliant electrical solutions for schools, nursing homes, and commercial properties across the region.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    siteName: "MAC Electrical Contractors",
    title: "MAC Electrical Contractors | Commercial Electrical Services",
    description:
      "Delivering safe, reliable, and compliant electrical solutions for schools, nursing homes, and commercial properties across the region.",
    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "MAC Electrical Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAC Electrical Contractors | Commercial Electrical Services",
    description:
      "Safe, reliable, and compliant electrical solutions for commercial properties.",
    images: ["/images/og_image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
