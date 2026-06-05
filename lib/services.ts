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

export function getServiceLabel(slug: string): string | undefined {
  return SERVICE_OPTIONS.find((s) => s.slug === slug)?.label;
}

export function contactHref(slug: ServiceSlug): string {
  return `/contact?service=${slug}`;
}
