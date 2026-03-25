"use client";

import React from "react";
import Footer from "@/app/components/Footer";
import ContactSection from "@/app/components/ContactSection";
import { Target, Users, Bot, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Ideal Customer Profile (ICP) Definition & Account Targeting",
    desc: "We map your ideal customer profile using firmographic, technographic, and behavioural filters then build a precision target account list sized to your TAM, so every outreach dollar goes to accounts that can actually buy",
    icon: Target,
  },
  {
    title: "SDR-Led Multi-Channel Outreach",
    desc: "Our trained SDRs run personalised cold email, LinkedIn, and phone sequences on your behalf crafted to your ICP, timed to buying signals, and written to start real conversations with decision-makers",
    icon: Users,
  },
  {
    title: "Buyer Intent Data & In-Market Account Signals",
    desc: "We track job changes, funding rounds, hiring signals, tech stack shifts, and web behavioural data to identify accounts showing active buying intent so your SDRs reach out when prospects are in-market, not just on a list",
    icon: Bot,
  },
  {
    title: "B2B Appointment Setting & Meeting Booking",
    desc: "Our SDRs handle the full outreach cycle and deliver sales-qualified meetings with verified decision-makers booked directly into your calendar, with a pre-call brief so your AE walks in prepared",
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
           PravRaha is a B2B lead generation service that combines proprietary contact data, intent-based account targeting, and SDR-led outbound prospecting built for SaaS and tech companies that want qualified meetings, not just contact lists.
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

      {/* FEATURES */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            B2B Lead Generation Services That Go From Data to Booked Meetings
          </h2>

          <p className="text-lg text-gray-600 mb-20 max-w-2xl mx-auto">
            Proprietary B2B contact data. Intent-based account targeting. SDR-executed outreach. One platform, precision prospecting, and meetings on your calendar
          </p>

          <div className="grid md:grid-cols-4 gap-10">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="group rounded-3xl p-1 bg-[#6F8586] hover:scale-105 transition duration-500"
                >
                  <div className="bg-white rounded-3xl p-10 h-full shadow-md hover:shadow-2xl transition duration-500">

                    <div className="relative w-20 h-20 mx-auto mb-8">
                      <div className="absolute inset-0 bg-yellow-300 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition duration-500"></div>

                      <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 border-2 border-black group-hover:bg-yellow-400 transition duration-300">
                        <Icon className="w-9 h-9 text-yellow-700 group-hover:text-black transition duration-300" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>

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
{/*  PREMIUM PROCESS SECTION */}
<section className="py-28 bg-gradient-to-b from-white via-gray-50 to-gray-100">
  <div className="max-w-5xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
        Our Proven Process
      </h2>
      <p className="text-gray-500 text-lg max-w-xl mx-auto">
        A structured workflow designed for predictable and scalable growth.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative">

      {/* Gradient Line */}
      <div className="absolute left-4 top-0 h-full w-[3px] bg-gradient-to-b from-black via-gray-400 to-transparent rounded-full" />

      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
          className="relative pl-16 mb-14"
        >
          {/* Step Number Dot */}
          <div className="absolute left-0 top-1 flex items-center justify-center w-9 h-9 rounded-full bg-black text-white text-sm font-semibold shadow-lg">
            {i + 1}
          </div>

          {/* Card */}
          <div className="group bg-white/70 backdrop-blur-xl border border-gray-200 p-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-500">

            {/* Step Label */}
            <span className="text-xs font-semibold text-yellow-500 tracking-wider uppercase">
              Step {i + 1}
            </span>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mt-2 mb-2 group-hover:text-black transition">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {step.desc}
            </p>

            {/* Accent Line */}
            <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-black to-gray-400 group-hover:w-full transition-all duration-500"></div>

          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* CONTACT */}
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