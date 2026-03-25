"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/productlogo1.webp",
  "/productlogo2.png",
  "/productlogo3.webp"
];

export default function LogoMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-100 py-8">
      <motion.div
        className="flex w-max gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center">
            <Image
              src={logo}
              alt="Company Logo"
              width={140}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>

      {/* Gradient fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-100 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-100 to-transparent" />
    </section>
  );
}