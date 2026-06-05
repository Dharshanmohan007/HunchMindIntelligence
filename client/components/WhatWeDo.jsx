import {
    BarChart3,
    Building2,
    Brain,
    ArrowRight,
    Building,
    Truck,
    Road,
    Database,
    Users
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

    export default function WhatWeDo() {
    return (
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <p className="text-green-700 text-sm font-semibold uppercase tracking-wider mb-4">
            What We Do
        </p>

            <div>
                <div className="grid lg:grid-cols-2 gap-10 mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 leading-tight max-w-xl">
                    Intelligence Across the Supply Chain Ecosystem
                    </h2>

                    <p className="text-gray-600 leading-relaxed max-w-lg">
                    We combine data, technology and domain expertise to deliver
                    intelligence that creates real impact across the entire supply chain.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <div
                        key={index}
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
                        >
                        <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-5`}>
                            <Icon className={`w-6 h-6 ${service.iconColor}`} />
                        </div>

                        <h3 className="font-semibold text-lg mb-3 text-black">
                            {service.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-5">
                            {service.description}
                        </p>

                        <ArrowRight className="w-5 h-5 text-green-700" />
                        </div>
                    );
                    })}
                </div>
            </div>

            {/* Stats Row */}
            <div className="mt-14 rounded-2xl border bg-white py-10">
                <div className="grid grid-cols-2 md:grid-cols-5">
                    
                    <div className="flex items-center justify-center gap-3 px-6 md:border-r border-gray-200">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                        <Building className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-black">10+</h4>
                        <p className="text-sm text-gray-600">Markets Covered</p>
                    </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 px-6 md:border-r border-gray-200">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                        <Truck className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-black">5000+</h4>
                        <p className="text-sm text-gray-600">Trucks Onboard</p>
                    </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 px-6 md:border-r border-gray-200">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                        <Road className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-black">1000+</h4>
                        <p className="text-sm text-gray-600">Roadside Routes</p>
                    </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 px-6 md:border-r border-gray-200">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                        <Database className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-black">1M+</h4>
                        <p className="text-sm text-gray-600">Data Points Analyzed Daily</p>
                    </div>
                    </div>

                    <div className="flex items-center justify-center gap-3 px-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                        <Users className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-black">50+</h4>
                        <p className="text-sm text-gray-600">Partners & Growing</p>
                    </div>
                    </div>

                </div>
                </div>
        </section>
    );
}