import {
  BarChart3,
  Building2,
  Brain,
  ArrowRight,
  Building,
  Truck,
  Road,
  Database,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Supply Intelligence",
    description:
      "Real-time insights on demand, pricing and market movements across regions.",
    icon: BarChart3,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Logistics Intelligence",
    description:
      "Optimize routes, reduce empty returns and improve fleet productivity.",
    icon: Truck,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Infrastructure Intelligence",
    description:
      "Smart networks of warehouses, parking yards and logistics infrastructure.",
    icon: Building2,
    iconColor: "text-violet-600",
    bgColor: "bg-violet-100",
  },
  {
    title: "Decision Intelligence",
    description:
      "AI-driven recommendations for faster, smarter and more profitable decisions.",
    icon: Brain,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

const stats = [
  {
    icon: Building,
    value: "10+",
    label: "Markets Covered",
  },
  {
    icon: Truck,
    value: "5000+",
    label: "Trucks Onboard",
  },
  {
    icon: Road,
    value: "1000+",
    label: "Roadside Routes",
  },
  {
    icon: Database,
    value: "1M+",
    label: "Data Points Analyzed Daily",
  },
  {
    icon: Users,
    value: "50+",
    label: "Partners & Growing",
  },
];

export default function WhatWeDo() {
  return (
    <section
      className="
        mx-auto
        max-w-7xl
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        pt-36
        lg:pt-44
        md:pt-28
        pb-16
        lg:pb-20
      "
    >
      {/* Heading */}
      <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
        What We Do
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
        <h2
          className="
            max-w-xl
            font-bold
            text-gray-900
            leading-tight
            text-3xl
            sm:text-4xl
            lg:text-5xl
          "
        >
          Intelligence Across the Supply Chain Ecosystem
        </h2>

        <p
          className="
            max-w-lg
            text-gray-600
            leading-7
            text-sm
            sm:text-base
            self-center
          "
        >
          We combine data, technology and domain expertise to deliver
          intelligence that creates real impact across the entire
          supply chain.
        </p>
      </div>

      {/* Service Cards */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${service.bgColor}`}
              >
                <Icon className={`h-6 w-6 ${service.iconColor}`} />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-black">
                {service.title}
              </h3>

              <p className="mb-6 text-sm leading-6 text-gray-600">
                {service.description}
              </p>

              <ArrowRight className="h-5 w-5 text-green-700" />
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="mt-14 rounded-2xl border border-gray-200 bg-white">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className={`
                  flex
                  items-center
                  gap-4
                  p-6
                  ${
                    index !== stats.length - 1
                      ? "border-b sm:border-b lg:border-b-0 lg:border-r border-gray-200"
                      : ""
                  }
                `}
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-green-100">
                  <Icon className="h-6 w-6 text-green-700" />
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-black">
                    {stat.value}
                  </h4>

                  <p className="text-sm leading-5 text-gray-600">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}