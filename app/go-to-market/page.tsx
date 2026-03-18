import Image from "next/image";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function GoToMarketPage() {
  return (
    <main className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            <span className="text-[#D4AF37]">Go-to-Market</span> Platform
          </h1>

          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            Launch and scale your products with our comprehensive go-to-market solution.
            We help you validate opportunities, position your product effectively, build
            predictable revenue pipelines, and execute strategies that drive real business outcomes.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-md">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/product2.avif"
            alt="Go to market"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>

      </section>

      {/* HIGHLIGHT SECTION */}
      <section className="bg-[#014D4E] text-white py-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-lg leading-relaxed">
Accelerate growth with our end-to-end go-to-market framework. From opportunity validation to market positioning, we help you design scalable revenue engines, optimize customer acquisition, and execute strategies that deliver measurable business impact.          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Everything You Need to Launch Successfully
          </h1>
          <p className="text-gray-800 text-lg">
            Our platform provides all the tools and insights for a successful market entry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border-t-4 border-yellow-400 group">
            <div className="overflow-hidden">
              <Image
                src="/product1.avif"
                alt="Market Research"
                width={600}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-yellow-500 transition">
                Market Research & Analysis
              </h3>
              <p className="text-base text-[#D4AF37] leading-relaxed">
                Comprehensive market analysis to identify opportunities and competitive landscape.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border-t-4 border-yellow-400 group">
            <div className="overflow-hidden">
              <Image
                src="/product2.avif"
                alt="Customer Segmentation"
                width={600}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-yellow-500 transition">
                Customer Segmentation
              </h3>
              <p className="text-base text-[#D4AF37] leading-relaxed">
                Detailed customer personas and segmentation for targeted marketing approaches.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border-t-4 border-yellow-400 group">
            <div className="overflow-hidden">
              <Image
                src="/products3.avif"
                alt="Launch Strategy"
                width={600}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-yellow-500 transition">
                ICP creation and Launch Strategy
              </h3>
              <p className="text-base text-[#D4AF37] leading-relaxed">
                Strategic planning and execution roadmap for successful product launches.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border-t-4 border-yellow-400 group">
            <div className="overflow-hidden">
              <Image
                src="/performs.jpg"
                alt="Performance Tracking"
                width={600}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-yellow-500 transition">
                Performance Tracking and Reporting
              </h3>
              <p className="text-base text-[#D4AF37] leading-relaxed">
                Real-time metrics and KPIs to monitor and optimize your go-to-market success.
              </p>
            </div>
          </div>

         {/* Card 5 (CENTERED, SAME SIZE) */}
{/* Card 5 (CENTERED, SAME SIZE) */}
<div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border-t-4 border-yellow-400 group md:mx-auto">
  <div className="overflow-hidden">
    <Image
      src="/products4.avif"
      alt="Multichannel Outreach"
      width={600}
      height={300}
      className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
    />
  </div>
  <div className="p-6 text-center">
    <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-yellow-500 transition">
      Multichannel Outreach
    </h3>
    <p className="text-base text-[#D4AF37] leading-relaxed">
      Reach your audience across multiple channels with coordinated campaigns that drive engagement and conversions.
    </p>
  </div>
</div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Accelerate Your Growth?
          </h2>

          <p className="text-gray-600 mb-6">
            Start building your go-to-market strategy today and unlock predictable revenue.
          </p>

          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-md">
            Request Demo
          </button>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-20 border-t">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-blue-500">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">1. Research</h3>
              <p className="text-[#D4AF37] text-base">
                Analyze your market and competitors to find opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-purple-500">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">2. Position</h3>
              <p className="text-[#D4AF37] text-base">
                Define your unique value proposition clearly and effectively.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-green-500">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">3. Launch</h3>
              <p className="text-[#D4AF37] text-base">
                Execute campaigns and sales strategies for growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-orange-500">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">4. Optimize</h3>
              <p className="text-[#D4AF37] text-base">
                Track performance and continuously improve results.
              </p>
            </div>

          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />

    </main>
  );
}