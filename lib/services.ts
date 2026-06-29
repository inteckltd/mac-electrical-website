import {
  Building2,
  Flame,
  Lightbulb,
  ShieldCheck,
  Camera,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const SERVICE_OPTIONS = [
  { slug: "maintenance", label: "Commercial Maintenance / SLA" },
  { slug: "fire-alarms", label: "Fire Alarm Systems" },
  { slug: "emergency-lighting", label: "Emergency Lighting" },
  { slug: "cctv", label: "CCTV & Security" },
  { slug: "compliance", label: "Compliance & Testing (EICR / PAT)" },
  { slug: "electrical-installation", label: "Electrical Installation" },
  { slug: "other", label: "Other / Not sure" },
] as const;

export type ServiceSlug = (typeof SERVICE_OPTIONS)[number]["slug"];

export interface ServicePage {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  /** Used as the hero subtitle and meta description */
  subtitle: string;
  icon: LucideIcon;
  /** h2 on the overview column */
  whatWeDoHeading: string;
  /** Body paragraph on the overview column */
  overview: string;
  /** Checklist items in the right-hand panel */
  included: string[];
  /** Filename inside /images/services/ — e.g. "maintenance.jpg" */
  image: string;
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "maintenance",
    navLabel: "Commercial Maintenance",
    eyebrow: "Planned & Reactive",
    title: "Commercial Electrical Maintenance",
    subtitle:
      "Planned preventative maintenance (PPM) contracts and fast reactive support — keeping schools, care homes, and commercial facilities compliant and operational all year round.",
    icon: Building2,
    whatWeDoHeading: "Commercial electrical maintenance you can rely on",
    overview:
      "Unexpected electrical failures in a commercial building don't just cause inconvenience — they can halt operations, compromise safety, and create serious compliance issues. MAC Electrical delivers structured planned preventative maintenance (PPM) programmes that keep your electrical systems in peak condition and reduce the risk of costly unplanned outages. Alongside our scheduled visits, our reactive maintenance team is available to respond quickly to faults, giving facility managers and property teams the confidence that help is always at hand. We work across schools, nursing homes, care facilities, offices, and retail premises, building long-term relationships through consistent, reliable service.",
    included: [
      "Tailored planned preventative maintenance (PPM) schedule",
      "Reactive fault-finding and same-day repairs",
      "Dedicated account manager and priority call-out",
      "Detailed maintenance logs and compliance reports",
      "Annual review meeting and forward planning",
      "Cover for lighting, distribution boards, sockets, and more",
    ],
    image: "maintenance.jpg",
  },
  {
    slug: "fire-alarms",
    navLabel: "Fire Alarm Systems",
    eyebrow: "Design, Install & Service",
    title: "Fire Alarm System Installation & Maintenance",
    subtitle:
      "BS5839-compliant fire alarm systems designed, installed, commissioned, and serviced for commercial buildings, schools, and care homes.",
    icon: Flame,
    whatWeDoHeading: "Complete fire alarm solutions from design to certification",
    overview:
      "A correctly designed and maintained fire alarm system is one of the most critical safety investments a building owner or manager can make. MAC Electrical delivers end-to-end fire alarm solutions — from initial design and risk assessment through to supply, installation, commissioning, and ongoing maintenance. All our fire alarm systems are installed and certified to BS5839, the UK standard for fire detection and fire alarm systems. We work with schools, care homes, hotels, offices, and commercial properties, providing the full documentation your insurers, local authority, and fire risk assessors require.",
    included: [
      "Fire alarm system design and specification to BS5839",
      "Supply and installation of detectors, call points, and panels",
      "Commissioning, testing, and handover documentation",
      "Quarterly and annual servicing and testing",
      "24-hour emergency fault response",
      "Upgrade and extension of existing fire alarm systems",
    ],
    image: "fire-alarms.jpg",
  },
  {
    slug: "emergency-lighting",
    navLabel: "Emergency Lighting",
    eyebrow: "Installation & Certification",
    title: "Emergency Lighting Installation & Testing",
    subtitle:
      "Legally compliant emergency lighting systems installed to BS EN 1838 — with monthly testing, annual certification, and full compliance documentation.",
    icon: Lightbulb,
    whatWeDoHeading: "Emergency lighting that meets your legal obligations",
    overview:
      "Emergency lighting is a legal requirement under the Regulatory Reform (Fire Safety) Order 2005 for all non-domestic premises. Inadequate or poorly maintained emergency lighting can put lives at risk during an evacuation and expose building owners to significant legal liability. MAC Electrical designs and installs emergency lighting systems to BS EN 1838 and BS 5266, covering escape route lighting, open area lighting, and high-risk task area lighting. We also manage the ongoing test regime — monthly functional tests and annual full-duration discharge tests — and provide the written records you need to demonstrate compliance during fire risk assessments and insurance inspections.",
    included: [
      "Emergency lighting system design to BS EN 1838 / BS 5266",
      "Supply and installation of maintained and non-maintained luminaires",
      "Central battery and self-contained system options",
      "Commissioning and initial certification",
      "Monthly functional tests and annual 3-hour discharge tests",
      "Written test records and compliance certificates",
    ],
    image: "emergency-lighting.jpg",
  },
  {
    slug: "compliance",
    navLabel: "Compliance & Testing",
    eyebrow: "EICR & PAT Testing",
    title: "Electrical Compliance Testing — EICR & PAT",
    subtitle:
      "Electrical Installation Condition Reports (EICR) and portable appliance testing (PAT) for schools, care homes, and commercial buildings — with clear reports and fast remedial works.",
    icon: ShieldCheck,
    whatWeDoHeading: "Stay legally compliant with expert electrical testing",
    overview:
      "Electrical compliance is not optional — landlords, employers, and building managers all have a legal duty to ensure electrical installations and appliances are safe. MAC Electrical provides thorough Electrical Installation Condition Reports (EICR) carried out by qualified engineers to the 18th Edition Wiring Regulations (BS7671). We also offer portable appliance testing (PAT) programmes tailored to the volume and type of equipment in your premises. Following any inspection, we provide a clear written report highlighting any code C1, C2, or C3 observations and can carry out all remedial works, making us a single point of contact for both testing and remediation.",
    included: [
      "Electrical Installation Condition Report (EICR) to BS7671",
      "Portable Appliance Testing (PAT) with asset labelling",
      "C1 and C2 remedial works carried out promptly",
      "Compliance scheduling and reminder service",
      "Detailed written reports suitable for insurers and regulators",
      "Specialist programmes for schools, care homes, and HMOs",
    ],
    image: "compliance.jpg",
  },
  {
    slug: "cctv",
    navLabel: "CCTV & Security",
    eyebrow: "Design, Install & Maintain",
    title: "CCTV & Security System Installation",
    subtitle:
      "Professional IP and analogue CCTV system design, installation, and maintenance for schools, care homes, offices, and commercial premises.",
    icon: Camera,
    whatWeDoHeading: "Reliable CCTV and security solutions for commercial premises",
    overview:
      "An effective CCTV and security system deters crime, protects staff and visitors, and provides invaluable evidence when incidents occur. MAC Electrical designs and installs systems that are fit for purpose — not oversized or under-specified. We work across IP network-based and analogue platforms, supplying and installing cameras, NVR/DVR recorders, remote viewing, and access control. Every installation starts with a site survey so we understand the specific security challenges and blind spots of your premises. Whether you need a straightforward 4-camera system for a care home or a fully integrated IP solution for a multi-site school, we deliver clean, professional installations with ongoing support.",
    included: [
      "Site security survey and system design",
      "IP and HD analogue CCTV camera installation",
      "NVR and DVR recorder setup with remote viewing",
      "Access control and door entry integration",
      "Cable management and tidy, professional installation",
      "Ongoing maintenance, health checks, and system upgrades",
    ],
    image: "cctv.jpg",
  },
  {
    slug: "electrical-installation",
    navLabel: "Electrical Installations",
    eyebrow: "New Build & Refurbishment",
    title: "Commercial Electrical Installation",
    subtitle:
      "First and second fix commercial electrical installations for new builds, refurbishments, and fit-outs — delivered to BS7671 and fully certified.",
    icon: Zap,
    whatWeDoHeading: "Commercial electrical installations done right, first time",
    overview:
      "From ground-up new builds to full-scale refurbishments and distribution board upgrades, MAC Electrical delivers commercial electrical installations that meet the latest 18th Edition Wiring Regulations (BS7671). We understand the pressures of construction programmes and work closely with main contractors, project managers, and architects to hit deadlines without cutting corners on quality or safety. Our team handles everything from first-fix containment and cabling through to second-fix wiring, testing, certification, and final commissioning. All works are completed by fully qualified electricians, and every installation is signed off with the appropriate certificates and documentation for building control and end-user records.",
    included: [
      "First and second fix electrical installation",
      "Distribution board and consumer unit design and installation",
      "Lighting schemes — LED, emergency, and controls",
      "Power, data, and EV charging infrastructure",
      "Testing and certification to BS7671 (18th Edition)",
      "As-installed drawings and full handover documentation",
    ],
    image: "electrical-installation.jpg",
  },
];

export function getServiceLabel(slug: string): string | undefined {
  return SERVICE_OPTIONS.find((s) => s.slug === slug)?.label;
}

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

export function contactHref(slug: ServiceSlug): string {
  return `/contact?service=${slug}`;
}

export function servicePath(slug: string): string {
  return `/services/${slug}`;
}
