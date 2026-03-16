"use client";
import Image from "next/image";

const services = [
  {
    title: "Technology Services",
    description:
      "Cloud & Technology Solutions and Application Development to modernize, build, and scale.",
    image: "/image1.avif",
    link: "/services/technology",
  },
  {
    title: "B2B Lead Generation",
    description:
      "Lead generation & B2B contact data with programs across ABM, SDR, and digital.",
    image: "/image2.avif",
    link: "/services/b2b",
  },
  {
    title: "Staffing",
    description:
      "Dedicated resources and flexible staffing models to extend your in-house teams.",
    image: "/image3.avif",
    link: "/services/staffing",
  },
];

export default function Services() {
  return (
    <section className="px-8 py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl overflow-hidden flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 flex-grow">{service.description}</p>
              <a
                href={service.link}
                className="mt-6 inline-block rounded-full bg-amber-500 px-5 py-2 text-black font-semibold hover:bg-amber-600 transition-colors"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
