import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border-t-4 border-brand-blue group",
        className
      )}
    >
      <div className="w-14 h-14 bg-brand-light dark:bg-brand-dark rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
        <Icon className="h-6 w-6 text-brand-blue group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      <Link
        href={href}
        className="text-brand-blue font-semibold text-sm flex items-center group-hover:text-brand-dark dark:group-hover:text-gray-300 transition-colors"
      >
        Request a quote
        <ArrowRight className="ml-2 h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
