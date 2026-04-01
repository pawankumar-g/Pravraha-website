"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full sticky top-0 z-50 border-b border-gray-300 shadow-sm" style={{ backgroundColor: "#C4CECF" }}>
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.avif"
            alt="Pravraha Technologies"
            width={150}
            height={42}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-gray-800">
          
          {/* Home */}
          <li className="relative group">
            <Link href="/" className="relative">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          {/* Products */}
          <li className="relative group">
            <span className="cursor-pointer relative">
              Products
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </span>

            <div
              className="absolute top-full mt-3 left-0 w-96 shadow-xl rounded-xl p-4 border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              style={{ backgroundColor: "#C4CECF" }}
            >
              <Link
                href="/go-to-market"
                className="block px-3 py-3"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  Go-to-Market Platform
                </h3>
                <p className="text-sm text-gray-700">
                  Accelerate market entry with automation & analytics.
                </p>
              </Link>
            </div>
          </li>

          {/* Services */}
          <li className="relative group">
            <span className="cursor-pointer relative">
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </span>

            <div
              className="absolute top-full mt-3 left-0 w-96 shadow-xl rounded-xl p-4 border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              style={{ backgroundColor: "#C4CECF" }}
            >
              <Link
                href="/services/b2b-lead-generation"
                className="block px-3 py-3"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  B2B Lead Generation Services
                </h3>
                <p className="text-sm text-gray-700">
                  High-quality, sales-ready leads using data-driven outreach.
                </p>
              </Link>
            </div>
          </li>

          {/* Resources */}
          <li className="relative group">
            <span className="cursor-pointer relative">
              Resources
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </span>

            <div
              className="absolute top-full mt-3 left-0 w-64 shadow-xl rounded-xl p-3 border border-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              style={{ backgroundColor: "#C4CECF" }}
            >
              <Link
                href="/resources/blog"
                className="block px-3 py-2"
              >
                <h3 className="font-semibold text-gray-900">Blog</h3>
                <p className="text-sm text-gray-700">
                  Insights, trends, and company updates
                </p>
              </Link>
            </div>
          </li>

          {/* Company */}
          <li className="relative group">
            <span className="cursor-pointer relative">
              Company
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </span>

            <div
              className="absolute top-full mt-3 left-0 w-72 shadow-xl rounded-xl border border-gray-300 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              style={{ backgroundColor: "#C4CECF" }}
            >
              <Link
                href="/company/about"
                className="block px-4 py-3"
              >
                <h3 className="font-semibold text-gray-900">About Us</h3>
                <p className="text-sm text-gray-700 mt-1">
                  Our mission, vision, and leadership
                </p>
              </Link>

              <div className="h-px bg-gray-300"></div>

              <Link
                href="/company/contact"
                className="block px-4 py-3"
              >
                <h3 className="font-semibold text-gray-900">Contact</h3>
                <p className="text-sm text-gray-700 mt-1">
                  Talk to our team or request a demo
                </p>
              </Link>
            </div>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            // href="/dashboard"
               href="/login"

            className="hidden md:inline-flex bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
          >
            Get Started
          </Link>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-gray-800"></span>
              <span className="block w-6 h-[2px] bg-gray-800"></span>
              <span className="block w-6 h-[2px] bg-gray-800"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-300 shadow-lg" style={{ backgroundColor: "#C4CECF" }}>
          <ul className="flex flex-col items-center gap-6 py-8 text-gray-800 font-medium">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/go-to-market" onClick={() => setMenuOpen(false)}>Go-to-Market Platform</Link></li>
            <li><Link href="/services/b2b-lead-generation" onClick={() => setMenuOpen(false)}>B2B Lead Generation Services</Link></li>
            <li><Link href="/resources/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/company/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link href="/company/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

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