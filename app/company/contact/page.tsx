"use client";

import { useState } from "react";
import { Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does PravRaha offer?",
      answer:
        "PravRaha is a full-stack B2B lead generation platform offering four core services: ICP-based account targeting, B2B contact data enrichment (verified emails, mobile numbers, intent signals, technographic data), SDR-led multichannel outreach (cold email, LinkedIn, phone), and B2B appointment setting. Together, these services take a growth-stage B2B SaaS company from prospect list to booked meetings without needing to build or manage an in-house SDR function.",
    },
    {
      question: "How can I get a consultation?",
      answer:
        "You can schedule a consultation by filling out the contact form or sending us an email at support@pravraha.com",
    },
    {
      question: "Where are your offices located?",
      answer:
        "We are located in Scottsdale, Arizona, USA and Ranchi, Jharkhand, India.",
    },
    {
      question: "What makes your lead generation different?",
      answer: (
        <div className="space-y-4 text-gray-600">
          <p className="font-semibold text-gray-800">
            Five things separate PravRaha from every other B2B lead generation tool or agency:
          </p>

          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong>We execute the outreach for you.</strong>
              <br />
              Most data platforms give you a contact list and leave the rest to your team.
              PravRaha’s trained SDR team runs the full outreach — cold email, LinkedIn, and phone on your behalf.
            </li>

            <li>
              <strong>We use real buying signals, not just contact data.</strong>
              <br />
              Our prospecting is timed to intent triggers such as job changes, funding rounds, hiring signals, and tech stack shifts,
              so we reach prospects when they are actually in-market.
            </li>

            <li>
              <strong>We cover the entire GTM motion.</strong>
              <br />
              From ICP definition and contact sourcing to multi-layer enrichment, personalised sequences,
              meeting booking, and pre-call briefs — one partner, one process, no gaps.
            </li>

            <li>
              <strong>We measure success by meetings booked, not emails sent.</strong>
              <br />
              We don’t rely on vanity metrics. Every campaign is tracked using open rates,
              reply rates, and qualified meetings delivered.
            </li>

            <li>
              <strong>We operate with full transparency.</strong>
              <br />
              Weekly reporting shows every account targeted, every sequence running,
              and every result — with no black box and no guesswork.
            </li>
          </ol>
        </div>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-[#f7f7f7] text-gray-800">
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200"></div>

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Accelerate Your Growth with
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#c8a46a] mt-4">
            Targeted Lead Generation
          </h2>

          <div className="w-16 h-1 bg-[#c8a46a] mx-auto mt-4 rounded"></div>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Whether you have a question, need a consultation, or want to
            discuss a project, our team is ready to help.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <div className="w-16 h-1 bg-[#c8a46a] mx-auto mt-3 rounded"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border flex flex-col">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#c8a46a]/10 text-[#c8a46a] mb-6">
                <Mail size={28} />
              </div>

              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-500 mt-2 flex-grow">
                General inquiries & support
              </p>

              <a
                href="mailto:support@pravraha.com"
                className="mt-4 font-medium text-[#c8a46a] hover:underline block"
              >
                support@pravraha.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border flex flex-col">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#6c8486]/10 text-[#6c8486] mb-6">
                <Phone size={28} />
              </div>

              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-500 mt-2 flex-grow">
                Customer support
              </p>

              <a
                href="tel:+15551234567"
                className="mt-4 font-medium text-[#6c8486] hover:underline block"
              >
                xxxxxxxxxx
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="w-16 h-1 bg-[#c8a46a] mx-auto mt-3 mb-12 rounded"></div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-[#c8a46a] bg-white shadow-md"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="font-medium text-lg">{faq.question}</span>

                  {openIndex === index ? (
                    <ChevronUp className="text-[#c8a46a]" />
                  ) : (
                    <ChevronDown className="text-gray-500" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600">
                    <div className="w-10 h-1 bg-[#c8a46a] mb-4 rounded"></div>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}

