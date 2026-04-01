"use client";

import React, { useState } from "react";
import { Mail, Phone, User, Building2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

type Errors = { [key: string]: string };

export default function ContactSection() {
  const locations = [
    { address: "Arizona, USA" },
    { address: "HEC Colony, Sector 3, Dhurwa, Ranchi, Jharkhand 834004" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    requirements: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [apiError, setApiError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear error while typing
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors: Errors = {};
    const { name, company, email, mobile, requirements } = formData;

    if (!name.trim()) newErrors.name = "Full name is required";
    if (!company.trim()) newErrors.company = "Company name is required";

    if (!email.trim()) newErrors.email = "Work email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email.trim()))
      newErrors.email = "Enter a valid email";

    if (!mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^[0-9]{8,15}$/.test(mobile.trim()))
      newErrors.mobile = "Enter valid mobile number";

    if (!requirements.trim())
      newErrors.requirements = "Please describe your requirements";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});
      setApiError("");
      setSuccessMsg("");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          mobile: formData.mobile.trim(),
          requirements: formData.requirements.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data?.message || "Something went wrong");

      setSuccessMsg(" Thanks Our team will contact you very soon.");
      setFormData({
        name: "",
        company: "",
        email: "",
        mobile: "",
        requirements: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setApiError(err.message);
      } else {
        setApiError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
    id="contact"
    className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#111827] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* LEFT SIDE */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#D4AF37]">Contact Us</h2>

          {locations.map((location, i) => (
            <div key={i} className="flex items-start gap-3">
              <MapPin className="text-[#D4AF37]" size={22} />
              <p className="text-gray-300">{location.address}</p>
            </div>
          ))}
        </motion.div>

        {/* FORM */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-10">
            <h3 className="text-2xl font-semibold mb-4 text-[#D4AF37]">
              Your Personalized Strategy Call
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              
              {/* Name */}
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={18}/>
                  <input
                    required
                    name="name"
                    placeholder="Full name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 p-2 rounded bg-white/10 border border-white/20"
                  />
                </div>
                {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
              </div>

              {/* Company */}
              <div>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 text-gray-400" size={18}/>
                  <input
                    required
                    name="company"
                    placeholder="Company name*"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-10 p-2 rounded bg-white/10 border border-white/20"
                  />
                </div>
                {errors.company && <p className="text-red-400 text-sm">{errors.company}</p>}
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={18}/>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Work email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 p-2 rounded bg-white/10 border border-white/20"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
              </div>

              {/* Mobile */}
              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={18}/>
                  <input
                    required
                    type="tel"
                    name="mobile"
                    placeholder="Mobile number*"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full pl-10 p-2 rounded bg-white/10 border border-white/20"
                  />
                </div>
                {errors.mobile && <p className="text-red-400 text-sm">{errors.mobile}</p>}
              </div>

              {/* Requirements */}
              <div>
                <textarea
                  required
                  name="requirements"
                  rows={4}
                  placeholder="Briefly describe your requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-white/10 border border-white/20"
                />
                {errors.requirements && (
                  <p className="text-red-400 text-sm">{errors.requirements}</p>
                )}
              </div>

              {successMsg && <p className="text-green-400">{successMsg}</p>}
              {apiError && <p className="text-red-400">{apiError}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#F5D76E] py-3 font-semibold text-black hover:bg-[#c19b2e] disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Schedule a Consultant"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}