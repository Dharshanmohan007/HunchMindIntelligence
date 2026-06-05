import Image from "next/image";

const companies = [
    {
        name: "Vedanta",
        logo: "/trusted/vedanta.png",
    },
    {
        name: "TVS",
        logo: "/trusted/tvs.png",
    },
    {
        name: "Reliance Retail",
        logo: "/trusted/reliance.png",
    },
    {
        name: "Coromandel",
        logo: "/trusted/coromandel.png",
    },
    {
        name: "Sankar",
        logo: "/trusted/sankar.png",
    },
    {
        name: "Koch",
        logo: "/trusted/koch.png",
    },
    {
        name: "IDH",
        logo: "/trusted/idh.png",
    },
    ];

    export default function TrustedBy() {
    return (
        <section className="py-16">
        <div className="container mx-auto px-6">
            <div className="px-8 py-8">
            <p className="text-center text-sm font-medium text-gray-500 mb-8">
                Trusted by forward-thinking businesses
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
                {companies.map((company) => (
                <div
                    key={company.name}
                    className="relative h-12 w-32 grayscale hover:grayscale-0 transition"
                >
                    <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                    />
                </div>
                ))}

                <span className="text-sm text-gray-500 font-medium">
                and more...
                </span>
            </div>
            </div>
        </div>
        </section>
    );
}