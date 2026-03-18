"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.avif"
            alt="PravRaha"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 font-medium text-gray-700">

          {/* Home */}
          <li className="relative group">
            <Link href="/" className="relative">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>

          {/* PRODUCTS DROPDOWN */}
          <li className="relative group">
            <span className="cursor-pointer relative">
              Products
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
            </span>

            <div className="absolute top-full mt-2 left-0 w-96 bg-white shadow-xl rounded-xl p-6 border
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                            transition-all duration-200 z-50">

              <Link
                href="/go-to-market"
                className="block hover:bg-gray-50 p-3 rounded-lg transition"
              >
                <h3 className="font-semibold text-lg">
                  Go-to-Market Platform
                </h3>
                <p className="text-sm text-gray-600">
                  Comprehensive platform to accelerate your market entry and growth
                </p>
              </Link>

            </div>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="relative group">
            <span className="cursor-pointer relative">
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
            </span>

            <div className="absolute top-full mt-2 left-0 w-96 bg-white shadow-xl rounded-xl p-6 border
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                            transition-all duration-200 z-50">

              {/* B2B Lead Generation */}
              <Link
                href="/services/b2b-lead-generation"
                className="block hover:bg-gray-50 p-3 rounded-lg transition"
              >
                <h3 className="font-semibold text-lg">
                  B2B Lead Generation services
                </h3>
                <p className="text-sm text-gray-600">
                  Generate high-quality, sales-ready leads using data-driven outreach.
                </p>
              </Link>

            </div>
          </li>

          {/* Resources */}
          <li className="relative group">
            <Link href="/resources" className="relative">
              Resources
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>

          {/* Company */}
          <li className="relative group">
            <Link href="/company" className="relative">
              Company
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Link
            href="/dashboard"
            className="hidden md:inline-flex bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition shadow-md"
          >
            Get Started
          </Link>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-black"></span>
              <span className="block w-6 h-[2px] bg-black"></span>
              <span className="block w-6 h-[2px] bg-black"></span>
            </div>
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center gap-6 py-8 text-gray-700 font-medium">

            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

            <li>
              <Link href="/go-to-market" onClick={() => setMenuOpen(false)}>
                Go-to-Market Platform
              </Link>
            </li>

            {/* Services Mobile */}
            <li>
              <Link href="/services/b2b-lead-generation" onClick={() => setMenuOpen(false)}>
                B2B Lead Generation
              </Link>
            </li>

            <li><Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link></li>
            <li><Link href="/company" onClick={() => setMenuOpen(false)}>Company</Link></li>

            <Link
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="bg-orange-500 text-white px-6 py-2 rounded-full"
            >
              Get Started
            </Link>

          </ul>
        </div>
      )}

    </header>
  );
}