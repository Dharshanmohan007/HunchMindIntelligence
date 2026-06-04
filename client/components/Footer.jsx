import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#F8F7F3] mt-20">

        {/* CTA SECTION */}
        <section className="max-w-7xl mx-auto px-6">

            <div className="bg-[#F3F1EA] rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left Illustration */}
            <div>
                <img
                src="/images/footer-left.png"
                alt="South India"
                className="w-52"
                />
            </div>

            {/* Center Content */}
            <div className="flex-1">

                <h2 className="text-4xl font-bold text-green-800 leading-tight">
                Let's Build the Future
                <br />
                of South India Together
                </h2>

                <p className="text-gray-600 mt-3">
                Join our network and get the latest insights and updates.
                </p>

            </div>

            {/* Email Input */}
            <div className="flex items-center bg-white rounded-xl overflow-hidden shadow-sm">

                <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-4 outline-none w-72"
                />

                <button className="bg-green-700 text-white px-6 py-4 hover:bg-green-800">
                Let's Connect →
                </button>

            </div>

            {/* Right Illustration */}
            <div>
                <img
                src="/images/footer-right.png"
                alt="Bharatanatyam"
                className="w-40"
                />
            </div>

            </div>

        </section>

        {/* MAIN FOOTER */}
        <section className="max-w-7xl mx-auto px-6 py-16">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

            {/* Logo Column */}
            <div>

                <img
                src="/logo_bg.png"
                alt="HunchMind"
                className="h-25 "
                />

                <p className="text-gray-600 leading-7">
                Intelligence and insight supply chains forward.
                Smarter decisions. Stronger networks.
                Sustainable impact.
                </p>

                <div className="flex gap-4 mt-6 text-xl">

                <a href="#">LinkedIn</a>
                <a href="#">X</a>
                <a href="#">YouTube</a>
                <a href="#">Instagram</a>

                </div>

            </div>

            {/* Company */}
            <div>

                <h4 className="font-semibold mb-5">
                Company
                </h4>

                <div className="space-y-3 text-gray-600">

                <Link href="/about">About Us</Link>

                <div>
                    <Link href="/vision">
                    Our Vision
                    </Link>
                </div>

                <div>
                    <Link href="/careers">
                    Careers
                    </Link>
                </div>

                <div>
                    <Link href="/contact">
                    Contact Us
                    </Link>
                </div>

                </div>

            </div>

            {/* Solutions */}
            <div>

                <h4 className="font-semibold mb-5">
                Solutions
                </h4>

                <div className="space-y-3 text-gray-600">

                <p>Supply Intelligence</p>

                <p>Logistics Intelligence</p>

                <p>Infrastructure Intelligence</p>

                <p>Decision Intelligence</p>

                </div>

            </div>

            {/* Resources */}
            <div>

                <h4 className="font-semibold mb-5">
                Resources
                </h4>

                <div className="space-y-3 text-gray-600">

                <p>Insights</p>

                <p>Reports</p>

                <p>Blog</p>

                <p>Case Studies</p>

                </div>

            </div>

            {/* Stay Connected */}
            <div>

                <h4 className="font-semibold mb-5">
                Stay Connected
                </h4>

                <p className="text-gray-600 mb-5">
                Join our network and get the latest insights and updates.
                </p>

                <div className="flex items-center border rounded-xl overflow-hidden">

                <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 flex-1 outline-none"
                />

                <button className="px-4">
                    →
                </button>

                </div>

            </div>

            </div>

        </section>

        {/* COPYRIGHT */}
        <section className="border-t">

            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-500">
                © 2026 HunchMind Intelligence Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-500">

                <Link href="/privacy">
                Privacy Policy
                </Link>

                <Link href="/terms">
                Terms of Use
                </Link>

            </div>

            </div>

        </section>

        </footer>
    );
}