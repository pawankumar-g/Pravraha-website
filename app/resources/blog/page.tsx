"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/app/components/Footer";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All Articles");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    "All Articles",
    "Sales Strategy",
    "Technology",
    "Quality Engineering",
    "AI & Modernization",
    "B2B Marketing",
  ];

  const blogs = [
    {
      title: "Why Data-Driven Lead Generation is the Future of B2B Sales",
      desc: "Discover how analytics, automation, and insights drive smarter growth.",
      img: "/image1.jpg",
      category: "Sales Strategy",
    },
    {
      title: "How Tech Services Are Powering Digital Transformation",
      desc: "Technology is reshaping businesses and enabling scalability.",
      img: "/image2.jpg",
      category: "Technology",
    },
    {
      title: "Quality Without Compromise in Modern Engineering",
      desc: "Automation testing ensures stable and scalable systems.",
      img: "/products3.avif",
      category: "Quality Engineering",
    },
    {
      title: "AI-Driven Application Development for Enterprise Growth",
      desc: "AI accelerates innovation, speed, and efficiency.",
      img: "/image4.jpg",
      category: "AI & Modernization",
    },
    {
      title: "Top B2B Marketing Trends You Should Know",
      desc: "Stay ahead with the latest strategies in digital marketing.",
      img: "/image3.jpg",
      category: "B2B Marketing",
    },
    {
      title: "Scaling SaaS with Smart Engineering",
      desc: "Build scalable and resilient SaaS platforms efficiently.",
      img: "/image2.jpg",
      category: "Technology",
    },
    {
      title: "Customer Experience in the Age of Automation",
      desc: "Enhance engagement using smart automation strategies.",
      img: "/products3.avif",
      category: "B2B Marketing",
    },
    {
      title: "AI Trends Transforming Enterprises in 2026",
      desc: "Explore how AI is reshaping business ecosystems.",
      img: "/products4.avif",
      category: "AI & Modernization",
    },
  ];

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) &&
      (activeCat === "All Articles" || b.category === activeCat)
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* HERO */}
      <section
        className="relative text-white py-32 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/backui.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold tracking-tight">
            Insights & <span className="text-yellow-400">Innovation</span>
          </h1>
          <p className="mt-5 text-gray-200 max-w-2xl mx-auto text-lg">
            Explore expert insights, strategies, and industry trends shaping the future.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="flex-grow max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-10">
        
        {/* BLOG GRID */}
        <div className="lg:col-span-3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.slice(0, visibleCount).map((blog, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="relative">
                  <Image
                    src={blog.img}
                    alt="blog"
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                  {/* CATEGORY TAG */}
                  <span className="absolute top-3 left-3 bg-[#6F898B] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {blog.category}
                  </span>
                </div>

                <div className="p-5">
                  

                  <h3 className="text-lg font-semibold mb-2 leading-snug group-hover:text-[#6F898B] transition text-gray-900">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {blog.desc}
                  </p>

                  <button className="text-sm font-medium text-[#6F898B] hover:underline">
                    Read Article →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* LOAD MORE */}
          {visibleCount < filteredBlogs.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount(visibleCount + 2)}
                className="px-6 py-3 bg-[#F5D76E]  text-white font-semibold rounded-xl shadow hover:bg-[#5f7a7c] transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          
          {/* SEARCH */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h3 className="font-semibold mb-4 text-lg text-gray-900">
              Search Articles
            </h3>

            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#6F898B]"
            />
          </div>

          {/* CATEGORIES */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <h3 className="font-semibold mb-5 text-lg text-gray-900">
              Categories
            </h3>

            <div className="flex flex-col gap-3">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCat(cat)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition ${
                    activeCat === cat
                      ? "bg-[#6F898B] text-white shadow-md"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0a2a4a] to-[#123b63] py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-200 mb-8">
            Let’s help you generate leads, scale operations, and accelerate growth.
          </p>

          <button className="bg-[#6F898B] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5f7a7c] transition">
            Get Started
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}