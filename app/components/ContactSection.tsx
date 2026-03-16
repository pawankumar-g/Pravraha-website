"use client";
import { useState } from "react";
import { Mail, Phone, User, Building2, MapPin } from "lucide-react";

export default function ContactSection() {
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
    if (!formData.company.trim()) newErrors.company = "Company name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";

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
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black text-white overflow-hidden py-20 px-6">
      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-[#D4AF37]/20 blur-[120px] rounded-full top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0"></div>

      {/* Centered Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-16">
        
        {/* Left Side */}
        <div className="flex-1 space-y-10">
          <h2 className="text-4xl font-bold text-[#D4AF37]">Contact Us</h2>

          <div className="space-y-2 flex items-start gap-2">
            <MapPin className="text-[#D4AF37]" size={22}/>
            <div>
              <h3 className="text-2xl font-semibold">Headquarter</h3>
              <p className="text-gray-300">Arizona, USA</p>
            </div>
          </div>

          <div className="space-y-2 flex items-start gap-2">
            <MapPin className="text-[#D4AF37]" size={22}/>
            <div>
              <h3 className="text-2xl font-semibold">Delivery Center</h3>
              <p className="text-gray-300">
                HEC Colony, Sector 3, Dhurwa, Ranchi, Jharkhand 834004
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1">
          <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10 transition duration-500 hover:border-[#D4AF37]/40">
            <h3 className="text-2xl font-semibold mb-2 text-[#D4AF37]">
              Get in Touch
            </h3>
            <p className="text-gray-300 mb-8">
              We’d love to hear from you! Fill out the form and we’ll respond soon.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18}/>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-10 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

              {/* Company */}
              <div className="relative">
                <Building2 className="absolute left-3 top-3 text-gray-400" size={18}/>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name*"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-10 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
              {errors.company && <p className="text-red-400 text-sm">{errors.company}</p>}

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18}/>
                <input
                  type="email"
                  name="email"
                  placeholder="Work email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18}/>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full pl-10 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
              {errors.mobile && <p className="text-red-400 text-sm">{errors.mobile}</p>}

              {/* Textarea */}
              <textarea
                name="requirements"
                placeholder="Briefly describe your requirements"
                rows={4}
                value={formData.requirements}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              ></textarea>
              {errors.requirements && (
                <p className="text-red-400 text-sm">{errors.requirements}</p>
              )}

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#D4AF37]/40"
              >
                Schedule a Consultant
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
