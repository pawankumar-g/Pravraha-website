"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 mt-12">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 min-h-[220px]">
          
          {/* Company Info */}
          <div className="lg:col-span-2 flex flex-col justify-between h-full">
            <div>
              <Image
                src="/logo.avif"
                alt="PravRaha"
                width={150}
                height={40}
                className="mb-4"
              />

              <p className="text-gray-600 max-w-md leading-relaxed mb-6">
                The full-stack GTM intelligence platform for B2B SaaS teams.
                Proprietary B2B data, intent-based prospecting, and SDR-led
                outreach — built for growth-stage companies who want precision
                over volume.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-600">
              <a
                href="https://www.linkedin.com/company/pravraha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="cursor-pointer hover:text-orange-500 transition" />
              </a>

              <a
                href="https://x.com/PravRaha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="cursor-pointer hover:text-orange-500 transition" />
              </a>

              <a
                href="https://www.instagram.com/pravraha_software/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="cursor-pointer hover:text-orange-500 transition" />
              </a>

              <a
                href="https://www.youtube.com/@PravrahaSoftware"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="cursor-pointer hover:text-orange-500 transition" />
              </a>
            </div>
          </div>

          {/* Products + Services */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Products
              </h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>
                  <Link
                    href="/go-to-market"
                    className="hover:text-orange-500 transition"
                  >
                    GTM Intelligence Platform
                  </Link>
                </li>
              </ul>

              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Services
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link
                    href="/services/b2b-lead-generation"
                    className="hover:text-orange-500 transition"
                  >
                    B2B Lead Generation Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Contact
              </h3>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <p>support@pravraha.com</p>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} />
                  <p>Arizona, USA</p>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} />
                  <p>Ranchi, Jharkhand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 max-w-2xl">
            Get outbound GTM playbooks, prospecting frameworks, and B2B sales
            insights straight from the team building PravRaha.
          </p>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none w-full md:w-64 text-gray-900 placeholder:text-gray-500"
            />
            <button className="bg-orange-500 text-white px-6 rounded-r-lg hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2026 PravRaha. All Rights Reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="#" className="hover:text-orange-500 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              Terms
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}