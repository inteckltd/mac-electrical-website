import Image from "next/image";

const clients = [
  {
    name: "St Roccos",
    logo: "/images/clients/st-roccos.webp",
  },
  {
    name: "Park Royal",
    logo: "/images/clients/park-royal.png",
  },
  {
    name: "Hampton by Hilton",
    logo: "/images/clients/hampton-hilton.png",
  },
  {
    name: "AgeUK Cheshire",
    logo: "/images/clients/ageuk-cheshire.webp",
  },
  {
    name: "Kings Academy Trust",
    logo: "/images/clients/kings-trust.svg",
  },
];

export default function ClientLogos() {
  return (
    <section
      aria-label="Companies we have worked with"
      className="relative bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-10">
          Trusted by leading organisations
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-12 items-center">
          {clients.map((client) => (
            <li key={client.name} className="flex justify-center">
              <div className="group relative flex h-16 md:h-20 w-full max-w-[200px] items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={200}
                  height={80}
                  className="h-14 md:h-16 w-auto max-w-full object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 dark:opacity-40 dark:group-hover:opacity-90"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
