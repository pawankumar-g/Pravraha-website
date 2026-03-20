"use client";
import { useState } from "react";
import { Mail, Phone, User, Building2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const locations = [
    {
      address: "Arizona, USA",
    },
    {
      address:
        "HEC Colony, Sector 3, Dhurwa, Ranchi, Jharkhand 834004",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    requirements: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobile.trim())
      newErrors.mobile = "Mobile number is required";

    if (!formData.requirements.trim())
      newErrors.requirements = "Please describe your requirements";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] text-white py-20 px-6">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">

        {/* Left Side */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#D4AF37]">
            Contact Us
          </h2>

          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <MapPin className="text-[#D4AF37] mt-1" size={22} />
              <p className="text-gray-300 leading-relaxed">
                {location.address}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10">
            <h3 className="text-2xl font-semibold mb-2 text-[#D4AF37]">
              Get in Touch
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white"
                />
              </div>

              <div className="relative">
                <Building2 className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  name="company"
                  placeholder="Company name*"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-10 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Work email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full pl-10 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white"
                />
              </div>

              <textarea
                name="requirements"
                rows={4}
                placeholder="Briefly describe your requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-[#F5D76E] px-6 py-3 font-semibold text-black hover:bg-[#c19b2e] transition"
              >
                Schedule a Consultant
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}