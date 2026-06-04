import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  center = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      <p className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark dark:text-white">
        {heading}
      </h2>
    </div>
  );
}
