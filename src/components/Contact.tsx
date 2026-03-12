"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    otherService: "",
    description: "",
    budget: "",
    otherBudget: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalBudget =
      formData.budget === "other" ? formData.otherBudget : formData.budget;

    const selectedService =
      formData.service === "other" ? formData.otherService : formData.service;

    const subject = encodeURIComponent("New Project Inquiry");

    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Service Interested In:
${selectedService}

Budget:
${finalBudget}

Project Description:
${formData.description}
`);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const emailLink = isMobile
      ? `mailto:loisewkariukii@gmail.com?subject=${subject}&body=${body}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=loisewkariukii@gmail.com&su=${subject}&body=${body}`;

    window.open(emailLink, "_blank");

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "",
        otherService: "",
        description: "",
        budget: "",
        otherBudget: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1F3A5F] mb-4 font-bold">
            Get in Touch
          </h2>
          <p className="text-lg text-[#7A838C] max-w-2xl mx-auto">
            Ready to start your project? Fill out the form below and I'll get back
            to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl text-[#1F3A5F] mb-2 font-semibold">
                  Email Client Opened
                </h3>
                <p className="text-[#7A838C]">
                  Your message has been prepared. Please send it from your email app.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* NAME */}
                <div>
                  <label className="block text-sm text-[#4A525A] mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm text-[#4A525A] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label className="block text-sm text-[#4A525A] mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20"
                  >
                    <option value="">Select a service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Web App Development">Web Application Development</option>
                    <option value="System Maintenance">System Maintenance</option>
                    <option value="Technical Consultation">Technical Consultation</option>
                    <option value="Logo & Brand Design">Logo & Brand Design</option>
                    <option value="Digital Strategy Consulting">Digital Strategy Consulting</option>
                    <option value="Brand Identity & System Support">Brand Identity & System Support</option>
                    <option value="Systems Editing & Optimization">Systems Editing & Optimization</option>
                    <option value="Paid Online Research">Paid Online Research</option>
                    <option value="other">Other</option>
                  </select>

                  {formData.service === "other" && (
                    <input
                      type="text"
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleChange}
                      placeholder="Enter the service you want"
                      className="mt-3 w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20"
                    />
                  )}
                </div>

                {/* DESCRIPTION */}
                <div>
                  <label className="block text-sm text-[#4A525A] mb-2">
                    Project Description *
                  </label>
                  <textarea
                    rows={4}
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20 resize-none"
                  />
                </div>

                {/* BUDGET */}
                <div>
                  <label className="block text-sm text-[#4A525A] mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20"
                  >
                    <option value="">Select budget range</option>
                    <option value="KES 1 - 5,000">KES 1 - 5,000</option>
                    <option value="KES 5,000 - 15,000">KES 5,000 - 15,000</option>
                    <option value="KES 15,000 - 50,000">KES 15,000 - 50,000</option>
                    <option value="KES 50,000 - 150,000">KES 50,000 - 150,000</option>
                    <option value="KES 150,000+">KES 150,000+</option>
                    <option value="other">Other</option>
                  </select>

                  {formData.budget === "other" && (
                    <input
                      type="text"
                      name="otherBudget"
                      value={formData.otherBudget}
                      onChange={handleChange}
                      placeholder="Enter your budget"
                      className="mt-3 w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20"
                    />
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3F6C9B] text-white py-4 rounded-lg hover:bg-[#8FAFC8] transition-all shadow-md flex items-center justify-center space-x-2 group"
                >
                  <span>Submit Request</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-[#1F3A5F] mb-6 font-semibold">
                Let's Build Something Great
              </h3>
              <p className="text-[#4A525A] mb-8 leading-relaxed">
                Whether you're launching a new idea or improving an existing system, I'm here to help turn your ideas into working digital products.
              </p>
            </div>

            <div className="space-y-6">
              {/* EMAIL */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white border rounded-lg flex items-center justify-center flex-shrink-0">
                  <SiGmail className="w-6 h-6 text-[#EA4335]" />
                </div>
                <div>
                  <h4 className="text-[#1F3A5F] mb-1 font-medium">Email Me</h4>
                  <a
                    href="mailto:loisewkariukii@gmail.com"
                    className="text-[#3F6C9B] hover:text-[#8FAFC8]"
                  >
                    loisewkariukii@gmail.com
                  </a>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white border rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-[#1F3A5F] mb-1 font-medium">WhatsApp</h4>
                  <a
                    href={`https://wa.me/254799025633?text=${encodeURIComponent(
                      "Hello, I’m interested in your services and have a project I’d like to work on. Could we discuss details?"
                    )}`}
                    target="_blank"
                    className="text-[#3F6C9B] hover:text-[#8FAFC8]"
                  >
                    +254 799025633
                  </a>
                </div>
              </div>

              {/* BUSINESS HOURS */}
              <div className="bg-gradient-to-br from-[#1F3A5F] to-[#3F6C9B] rounded-2xl p-8 text-white">
                <h4 className="text-xl mb-4 font-semibold">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>6:00 AM - 6:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>6:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}