import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">

        <nav className="h-20 flex items-center justify-between px-10">

            {/* Logo */}
            <Link href="/" className="flex items-center">
            <img
                src="/logo_bg.png"
                alt="HunchMind Intelligence"
                className="h-30 w-auto"
            />
            </Link>

            {/* Center Menu */}
            <div className="hidden lg:flex items-center gap-10">

            <Link
                href="/"
                className="text-sm font-medium text-green-700 border-b-2 border-green-700 pb-1"
            >
                Home
            </Link>

            <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-green-700"
            >
                About Us
            </Link>

            <Link
                href="/vision"
                className="text-sm font-medium text-gray-700 hover:text-green-700"
            >
                Our Vision
            </Link>

            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-700">
                Solutions
                <ChevronDown size={14} />
            </button>

            <Link
                href="/impact"
                className="text-sm font-medium text-gray-700 hover:text-green-700"
            >
                Impact
            </Link>

            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-green-700">
                Resources
                <ChevronDown size={14} />
            </button>

            <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-green-700"
            >
                Contact Us
            </Link>

            </div>

            {/* CTA */}
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-800 transition">
            Let's Connect
            <ArrowRight size={16} />
            </button>

        </nav>

        </header>
    );
}