// "use client";

// import { motion } from "framer-motion";
// import {
//   ChartBarIcon,
//   UserGroupIcon,
//   PaperAirplaneIcon,
// } from "@heroicons/react/24/outline";
// import { useState } from "react";

// const PRODUCTS = [
//   {
//     title: "Go-to-Market Platform",
//     description:
//       "Accelerate your launch strategy with automation, powerful analytics, and smart insights.",
//     icon: ChartBarIcon,
//   },
//   {
//     title: "Lead Enrichment",
//     description:
//       "Enhance your pipeline with verified and enriched data that improves targeting and conversions.",
//     icon: UserGroupIcon,
//   },
//   {
//     title: "Multi-Channel Outreach",
//     description:
//       "Reach prospects through email, social media, and multiple engagement channels seamlessly.",
//     icon: PaperAirplaneIcon,
//   },
// ];

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };

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
//           className="text-center max-w-2xl mx-auto mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             Powerful Products for
//             <span className="block text-[#D4AF37] font-semibold">
//               Modern Teams
//             </span>
//           </h2>

//           <p className="mt-6 text-lg text-gray-600">
//             Everything you need to launch faster, reach customers smarter,
//             and scale your growth with confidence.
//           </p>
//         </motion.div>

//         {/* Product Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {PRODUCTS.map((product, index) => (
//             <SpotlightCard key={index} product={product} />
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// /* ---------------- SPOTLIGHT CARD ---------------- */

// type Product = {
//   title: string;
//   description: string;
//   icon: React.ElementType;
// };

// function SpotlightCard({ product }: { product: Product }) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const Icon = product.icon;

//   return (
//     <motion.div
//       variants={card}
//       whileHover={{ y: -10 }}
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         setPosition({
//           x: e.clientX - rect.left,
//           y: e.clientY - rect.top,
//         });
//       }}
//       className="group relative rounded-2xl border border-gray-200 bg-white p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl"
//     >

//       {/* Spotlight Effect */}
//       <div
//         className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
//         style={{
//           background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.15), transparent 40%)`,
//         }}
//       />

//       {/* Content */}
//       <div className="relative">

//         {/* Icon */}
//         <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#FFF8E1] group-hover:scale-110 transition-transform">
//           <Icon className="w-7 h-7 text-[#D4AF37]" />
//         </div>

//         {/* Title */}
//         <h3 className="mt-6 text-xl font-semibold text-gray-900">
//           {product.title}
//         </h3>

//         {/* Description */}
//         <p className="mt-3 text-gray-600 leading-relaxed">
//           {product.description}
//         </p>

//         {/* CTA */}
//         <button className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37] hover:text-yellow-600 transition">
//           Learn more
//           <span className="ml-2 transition-transform group-hover:translate-x-1">
//             →
//           </span>
//         </button>

//       </div>

//     </motion.div>
//   );
// }




"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChartBarIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const PRODUCTS = [
  {
    title: "Go-to-Market Platform",
    description:
      "Accelerate your launch strategy with automation, powerful analytics, and smart insights.",
    icon: ChartBarIcon,
    image: "/image1.avif",
  },
  {
    title: "Lead Enrichment",
    description:
      "Enhance your pipeline with verified and enriched data that improves targeting and conversions.",
    icon: UserGroupIcon,
    image: "/image2.avif",
  },
  {
    title: "Multi-Channel Outreach",
    description:
      "Reach prospects through email, social media, and multiple engagement channels seamlessly.",
    icon: PaperAirplaneIcon,
    image: "/image3.avif",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

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
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Powerful Products for
            <span className="block text-[#D4AF37] font-semibold">
              Modern Teams
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Everything you need to launch faster, reach customers smarter,
            and scale your growth with confidence.
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {PRODUCTS.map((product, index) => (
            <SpotlightCard key={index} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SPOTLIGHT CARD ---------------- */

type Product = {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
};

function SpotlightCard({ product }: { product: Product }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const Icon = product.icon;

  return (
    <motion.div
      variants={card}
      whileHover={{ y: -10 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="group relative rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.15), transparent 40%)`,
        }}
      />

      {/* Product Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-8 relative">
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#FFF8E1] group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-[#D4AF37]" />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-xl font-semibold text-gray-900">
          {product.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {/* CTA */}
        <button className="mt-6 inline-flex items-center text-sm font-semibold text-[#D4AF37] hover:text-yellow-600 transition">
          Learn more
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            
          </span>
        </button>
      </div>
    </motion.div>
  );
}





