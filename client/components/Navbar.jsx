"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ChevronDown,
    ArrowRight,
    Menu,
    X,
    } from "lucide-react";

    export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
        <nav
            className="
            mx-auto
            flex
            h-16
            sm:h-18
            lg:h-20
            2xl:h-24
            4xl:h-28
            max-w-[1920px]
            items-center
            justify-between
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-12
            2xl:px-16
            4xl:px-24
            "
        >
            {/* Logo */}
            <Link href="/" className="flex items-center">
            <img
                src="/logo_bg.png"
                alt="HunchMind Intelligence"
                className="
                h-12
                w-auto
                sm:h-14
                md:h-16
                lg:h-20
                xl:h-24
                2xl:h-28
                "
            />
            </Link>

            {/* Desktop Navigation */}
            <div
            className="
                hidden
                lg:flex
                items-center
                xl:gap-8
                2xl:gap-10
                3xl:gap-12
            "
            >
            <Link
                href="/"
                className="border-b-2 border-green-700 pb-1 text-sm font-medium text-green-700 transition hover:text-green-800"
            >
                Home
            </Link>

            <Link
                href="/about"
                className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
                About Us
            </Link>

            <Link
                href="/vision"
                className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
                Our Vision
            </Link>

            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-green-700">
                Solutions
                <ChevronDown size={15} />
            </button>

            <Link
                href="/impact"
                className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
                Impact
            </Link>

            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-green-700">
                Resources
                <ChevronDown size={15} />
            </button>

            <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 transition hover:text-green-700"
            >
                Contact Us
            </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <button
                className="
                hidden
                lg:flex
                items-center
                gap-2
                rounded-lg
                bg-green-700
                px-5
                xl:px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-green-800
                "
            >
                Let's Connect
                <ArrowRight size={16} />
            </button>

            {/* Mobile Menu */}
            <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
                aria-label="Toggle navigation"
            >
                {mobileMenu ? (
                <X size={26} />
                ) : (
                <Menu size={26} />
                )}
            </button>
            </div>
        </nav>

        {/* Mobile Menu */}
        <div
            className={`
            overflow-hidden
            bg-white
            transition-all
            duration-300
            lg:hidden
            ${
                mobileMenu
                ? "max-h-[600px] border-t border-gray-100"
                : "max-h-0"
            }
            `}
        >
            <div className="flex flex-col px-6 py-5">
            <Link
                href="/"
                className="border-b border-gray-100 py-4 text-green-700 font-medium"
                onClick={() => setMobileMenu(false)}
            >
                Home
            </Link>

            <Link
                href="/about"
                className="border-b border-gray-100 py-4 text-gray-700"
                onClick={() => setMobileMenu(false)}
            >
                About Us
            </Link>

            <Link
                href="/vision"
                className="border-b border-gray-100 py-4 text-gray-700"
                onClick={() => setMobileMenu(false)}
            >
                Our Vision
            </Link>

            <button className="flex items-center justify-between border-b border-gray-100 py-4 text-gray-700">
                Solutions
                <ChevronDown size={18} />
            </button>

            <Link
                href="/impact"
                className="border-b border-gray-100 py-4 text-gray-700"
                onClick={() => setMobileMenu(false)}
            >
                Impact
            </Link>

            <button className="flex items-center justify-between border-b border-gray-100 py-4 text-gray-700">
                Resources
                <ChevronDown size={18} />
            </button>

            <Link
                href="/contact"
                className="border-b border-gray-100 py-4 text-gray-700"
                onClick={() => setMobileMenu(false)}
            >
                Contact Us
            </Link>

            <button className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-white transition hover:bg-green-800">
                Let's Connect
                <ArrowRight size={16} />
            </button>
            </div>
        </div>
        </header>
    );
}