"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CtaSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`w-full bg-gradient-to-r from-[#0f172a] to-[#020617] py-20 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Inner card with plain background */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your B2B Lead Generation with PravRaha
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            Smart and Scalable Designed for teams that want results.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition">
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
}
