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

          <li className="relative group">
            <Link href="/">Home</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="/products">Products</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="/services">Services</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="/resources">Resources</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
          </li>

          <li className="relative group">
            <Link href="/company">Company</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all group-hover:w-full"></span>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* CTA Button */}
          <Link
            href="/dashboard"
            className="hidden md:inline-flex bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition shadow-md"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
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

            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/company">Company</Link></li>

            <Link
              href="/dashboard"
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