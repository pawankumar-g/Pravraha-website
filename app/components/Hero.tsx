"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "PravRaha  Your End-to-End GTM Platform",
    desc: "From first prospect to final signature.",
    image: "/image.webp",
  },
  {
    title: "The Engine Behind Your Next Enterprise Deal",
    desc: "Identify, enrich, and engage your ideal buyers.",
    image: "/hero1.jpg",
  },
  {
    title: "Sell Your Products and Services with Confidence",
    desc: "Deploy, monitor, and scale AI-powered SaaS products with built-in intelligence, automation, and security.",
    image: "/backui.png",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[89vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {slide.title}
              </h1>

              <p className="mt-6 text-lg text-gray-300">
                {slide.desc}
              </p>

              {/* CTA */}
              <div className="mt-8 flex gap-4">
                <button className="bg-[#F5D76E] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                  Book a Demo
                </button>
                <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === current ? "bg-[#D4AF37] scale-110" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}