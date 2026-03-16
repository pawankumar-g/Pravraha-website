"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Business technology"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-white">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  Transform Your Business
  <span className="text-[#D4AF37]"> With Technology</span>
</h1>


          <p className="mt-6 text-lg text-gray-200 max-w-xl">
            Harness advanced digital solutions and strategic consulting to
            optimize workflows, integrate modern platforms, and achieve
            scalable growth for your organization.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
  href="/quick-call"
  className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#C19A2B] transition"
>
  Quick Call →
</a>


            <a
              href="/services"
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Explore Services
            </a>

          </div>

        </div>

        {/* Right Cards */}
        <div className="hidden lg:flex flex-col gap-6">

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 text-white">
            <h3 className="text-2xl font-bold">250+</h3>
            <p className="text-gray-200">Successful Projects Delivered</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 text-white ml-12">
            <h3 className="text-2xl font-bold">120+</h3>
            <p className="text-gray-200">Global Clients</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 text-white">
            <h3 className="text-2xl font-bold">10+ Years</h3>
            <p className="text-gray-200">Technology Expertise</p>
          </div>

        </div>

      </div>

    </section>
  );
}