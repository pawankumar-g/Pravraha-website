// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const FEATURES = [
//   {
//     title: "ICP-Based Prospecting & Account Intelligence",
//     description:
//       "Build your ideal customer profile, size your total addressable market, and identify high-intent accounts before your competitors do.",
//     image: "/hero.jpg",
//   },
//   {
//     title: "B2B Prospect Discovery & Sales Intelligence",
//     description:
//       "Surface in-market buyers from a proprietary B2B contact database filtered to your ICP using intent data, firmographics, and technographics",
//     image: "/image2.avif",
//   },
//   {
//     title: "B2B Data Enrichment & Account Intelligence",
//     description:
//       "Enrich every prospect with verified email addresses, mobile numbers, tech stack data, funding signals, and real-time buying intent automatically",
//     image: "/image3.avif",
//   },
//   {
//     title: "SDR-Led Multichannel Outreach & Sequencing",
//     description:
//       "Cold email, LinkedIn, and phone sequences — run by trained SDRs, personalised to your ICP, and engineered to book meetings. This is PravRaha's hardest-to-replicate advantage.",
//     image: "/about1.jpg",
//   },
// ];

// export default function ProductsSection() {
//   return (
//     <section className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#D4AF37]/30 blur-[140px] rounded-full"></div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: -25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             The B2B Prospecting & GTM Intelligence Platform Built for
//             <span className="block text-[#D4AF37] font-semibold">
//               Revenue Teams
//             </span>
//           </h2>

//           <p className="mt-6 text-lg text-gray-600">
//           From ICP definition to booked meetings — PravRaha combines proprietary B2B data, intent signals, and SDR-led outreach in one precision GTM engine
//           </p>
//         </motion.div>

//         {/* 4 Column Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {FEATURES.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition"
//             >
//               {/* Image */}
//               <div className="relative h-40 w-full overflow-hidden">
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition duration-500"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-gray-900 leading-snug">
//                   {feature.title}
//                 </h3>

//                 <p className="mt-3 text-sm text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>

//                 <button className="mt-4 inline-flex items-center text-sm font-semibold text-[#D4AF37] hover:text-yellow-600 transition">
//                   Learn more
            
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FEATURES = [
  {
    title: "ICP-Based Prospecting & Account Intelligence",
    description:
      "Build your ideal customer profile, size your total addressable market, and identify high-intent accounts before your competitors do.",
    image: "/hero.jpg",
    cta: "Explore account intelligence →",
  },
  {
    title: "B2B Prospect Discovery & Sales Intelligence",
    description:
      "Surface in-market buyers from a proprietary B2B contact database filtered to your ICP using intent data, firmographics, and technographics",
    image: "/image2.avif",
    cta: "See our B2B data engine →",
  },
  {
    title: "B2B Data Enrichment & Account Intelligence",
    description:
      "Enrich every prospect with verified email addresses, mobile numbers, tech stack data, funding signals, and real-time buying intent automatically",
    image: "/image3.avif",
    cta: "See enrichment in action →",
  },
  {
    title: "SDR-Led Multichannel Outreach & Sequencing",
    description:
      "Cold email, LinkedIn, and phone sequences — run by trained SDRs, personalised to your ICP, and engineered to book meetings. This is PravRaha's hardest-to-replicate advantage.",
    image: "/about1.jpg",
    cta: "See our outreach engine →",
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
            The B2B Prospecting & GTM Intelligence Platform Built for
            <span className="block text-[#D4AF37] font-semibold">
              Revenue Teams
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            From ICP definition to booked meetings — PravRaha combines proprietary B2B data, intent signals, and SDR-led outreach in one precision GTM engine
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
                  {feature.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}