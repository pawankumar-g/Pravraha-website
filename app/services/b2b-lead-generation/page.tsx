"use client";

import React from "react";
import Footer from "@/app/components/Footer";
import ContactSection from "@/app/components/ContactSection";
import { Target, Users, Bot, BarChart3 } from "lucide-react";

const features = [
  {
    title: "ICP & Persona Development",
    desc: "Define your ideal customers and target only high-quality prospects.",
    icon: Target,
  },
  {
    title: "Multi-Channel Outreach",
    desc: "Reach prospects via Email, LinkedIn, and Calls with automation.",
    icon: Users,
  },
  {
    title: "Intent Data Analysis",
    desc: "Engage prospects at the right time using behavioral insights.",
    icon: Bot,
  },
  {
    title: "Appointment Setting",
    desc: "Book qualified meetings directly into your sales calendar.",
    icon: BarChart3,
  },
];

const steps = [
  {
    title: "Strategy & Discovery",
    desc: "Understand your business, goals, and ideal customers.",
  },
  {
    title: "List Building & Enrichment",
    desc: "Build a highly targeted and enriched prospect list.",
  },
  {
    title: "Campaign Execution",
    desc: "Launch and optimize outreach campaigns for best results.",
  },
  {
    title: "Reporting & Optimization",
    desc: "Track performance and continuously improve ROI.",
  },
];

export default function Page() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            B2B Lead Generation Services
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Fill your pipeline with high-quality, sales-ready leads using
            data-driven strategies and automation.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="/B2B.jpg"
            alt="Team Meeting"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

   <section className="bg-gradient-to-b from-gray-50 to-white py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    <h2 className="text-5xl font-bold mb-6 text-gray-900">
      A Smarter Way to Generate Leads
    </h2>

    <p className="text-lg text-gray-600 mb-20 max-w-2xl mx-auto">
      We combine strategy, data, and automation to deliver consistent, scalable growth.
    </p>

    <div className="grid md:grid-cols-4 gap-10">
      {features.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="group rounded-3xl p-1 bg-[#6F8586] hover:scale-105 transition duration-500"
          >
            {/* INNER CARD */}
            <div className="bg-white rounded-3xl p-10 h-full shadow-md hover:shadow-2xl transition duration-500">

              {/* ICON */}
              <div className="relative w-20 h-20 mx-auto mb-8">
                <div className="absolute inset-0 bg-yellow-300 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>

                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 border-2 border-black group-hover:bg-yellow-400 transition duration-300">
                  <Icon className="w-9 h-9 text-yellow-700 group-hover:text-black transition duration-300" />
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-base text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Proven Process
          </h2>
          <p className="text-gray-600 mb-12">
            A structured workflow designed for predictable growth.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg relative hover:-translate-y-2 transition"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mt-6 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Scale Your Pipeline?
        </h2>
        <p className="mb-6 text-gray-300">
          Let’s generate high-quality leads for your business.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition">
          Book a Call
        </button>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}