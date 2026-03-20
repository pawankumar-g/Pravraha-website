"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FEATURES = [
  {
    title: "ICP Definition & Market Intelligence",
    description:
      "Know exactly who your best-fit buyer is. Define your target segment, size your market, and prioritise accounts worth pursuing.",
    image: "/hero.jpg",
  },
  {
    title: "Prospect Discovery & Data Engine",
    description:
      "Find the right accounts before your competitors do. Surface in-market buyers from millions of data points filtered precisely to your ICP.",
    image: "/image2.avif",
  },
  {
    title: "Contact & Account Enrichment",
    description:
      "Turn raw leads into revenue-ready intelligence. Every contact enriched with verified emails, tech stack, funding signals, and buying intent.",
    image: "/image3.avif",
  },
  {
    title: "Multichannel Outreach & Sequencing",
    description:
      "Reach the right person, at the right time, with the right message. Multichannel sequences across email, LinkedIn, and calls personalised, timed, and built to convert.",
    image: "/about1.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#D4AF37]/30 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Powerful Products for 
            <span className="block text-[#D4AF37] font-semibold">
              Modern Teams
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
          Everything you need to launch faster, reach customers smarter, and scale your growth with confidence.
          </p>
        </motion.div>

        {/* 4 Column Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <button className="mt-4 inline-flex items-center text-sm font-semibold text-[#D4AF37] hover:text-yellow-600 transition">
                  Learn more
            
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}