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
    specificService: "",
    specificServiceOther: "",       // description when "Other" is chosen in specific service
    otherService: "",               // when main service is "Other"
    description: "",
    budget: "",
    otherBudget: "",                 // (kept for compatibility, but no longer used)
    approximateBudget: "",           // approximate budget when "Not sure yet" is chosen
  });

  // Specific service options for each main service (including "Other")
  const serviceExamples: Record<string, string[]> = {
    "Website Development": [
      "Business Website",
      "Portfolio Website",
      "Landing Page",
      "E-commerce Website",
      "Booking Website",
      "Website Redesign",
      "Other",
    ],
    "Web Application Development": [
      "Booking System",
      "Admin Dashboard",
      "Client Management System",
      "SaaS Platform",
      "Internal Business Tool",
      "Custom Business System",
      "Other",
    ],
    "System Maintenance": [
      "Bug Fixes",
      "System Updates",
      "Security Updates",
      "Database Maintenance",
      "Performance Improvements",
      "Other",
    ],
    "Technical Consultation": [
      "System Architecture Advice",
      "Technology Stack Selection",
      "Project Planning",
      "Code Review",
      "Performance Strategy",
      "Other",
    ],
    "Logo & Brand Design": [
      "Logo Design",
      "Logo Redesign",
      "Full Brand Identity",
      "Brand Color Palette",
      "Typography Selection",
      "Brand Style Guide",
      "Other",
    ],
    "Digital Strategy Consulting": [
      "Digital Transformation Planning",
      "Business Automation Strategy",
      "Online Growth Strategy",
      "Product Validation Strategy",
      "Startup Technology Strategy",
      "Other",
    ],
    "Brand Identity & System Support": [
      "Apply Brand Identity to Website",
      "Create Branded Dashboards",
      "Design Internal System",
      "Maintain UI Consistency",
      "Update Existing Brand Systems",
      "Other",
    ],
    "Systems Editing & Optimization": [
      "Improve Website Performance",
      "Fix System Bugs",
      "Improve UI/UX",
      "Refactor Code",
      "Database Optimization",
      "SEO Optimization",
      "Other",
    ],
    "Paid Online Research": [
      "Market Research",
      "Competitor Analysis",
      "Software / Tool Comparison",
      "Industry Trend Research",
      "Startup Idea Validation",
      "Business Opportunity Research",
      "Other",
    ],
  };

  // Prompts when "Other" is selected in specific service
  const specificServiceOtherPrompts: Record<string, string> = {
    "Website Development": "Please describe the type of website you need.",
    "Web Application Development": "Please describe the web application you need.",
    "System Maintenance": "Please describe the maintenance work you need.",
    "Technical Consultation": "Please describe the consultation you need.",
    "Logo & Brand Design": "Please describe the branding service you need.",
    "Digital Strategy Consulting": "Please describe the strategy help you need.",
    "Brand Identity & System Support": "Please describe the support you need.",
    "Systems Editing & Optimization": "Please describe the system improvements you need.",
    "Paid Online Research": "Please describe the research you need.",
  };

  // Budget ranges for each service – "Not sure yet" is now the last option.
  const serviceBudgets: Record<string, string[]> = {
    "Website Development": [
      "KES 15,000 – 25,000",
      "KES 25,000 – 50,000",
      "KES 50,000 – 100,000",
      "KES 100,000 – 200,000",
      "KES 200,000+",
      "Not sure yet",
    ],
    "Web Application Development": [
      "KES 100,000 – 150,000",
      "KES 150,000 – 300,000",
      "KES 300,000 – 500,000",
      "KES 500,000 – 1,000,000",
      "KES 1,000,000+",
      "Not sure yet",
    ],
    "System Maintenance": [
      "KES 5,000 – 10,000",
      "KES 10,000 – 20,000",
      "KES 20,000 – 50,000",
      "KES 50,000+",
      "Not sure yet",
    ],
    "Technical Consultation": [
      "KES 3,000 – 5,000",
      "KES 5,000 – 10,000",
      "KES 10,000 – 20,000",
      "KES 20,000+",
      "Not sure yet",
    ],
    "Logo & Brand Design": [
      "KES 5,000 – 10,000",
      "KES 10,000 – 20,000",
      "KES 20,000 – 40,000",
      "KES 40,000+",
      "Not sure yet",
    ],
    "Digital Strategy Consulting": [
      "KES 10,000 – 25,000",
      "KES 25,000 – 50,000",
      "KES 50,000 – 100,000",
      "KES 100,000+",
      "Not sure yet",
    ],
    "Brand Identity & System Support": [
      "KES 20,000 – 50,000",
      "KES 50,000 – 100,000",
      "KES 100,000 – 200,000",
      "KES 200,000+",
      "Not sure yet",
    ],
    "Systems Editing & Optimization": [
      "KES 10,000 – 25,000",
      "KES 25,000 – 50,000",
      "KES 50,000 – 100,000",
      "KES 100,000+",
      "Not sure yet",
    ],
    "Paid Online Research": [
      "KES 2,000 – 5,000",
      "KES 5,000 – 10,000",
      "KES 10,000 – 20,000",
      "KES 20,000+",
      "Not sure yet",
    ],
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Determine final service name
    const selectedService =
      formData.service === "other" ? formData.otherService : formData.service;

    // Determine final specific service description
    let finalSpecificService = formData.specificService;
    if (formData.specificService === "Other") {
      finalSpecificService = formData.specificServiceOther || "Other (no description)";
    }

    // Determine final budget string
    let finalBudget = formData.budget;
    if (formData.budget === "Not sure yet") {
      finalBudget = formData.approximateBudget
        ? `Approximate: ${formData.approximateBudget}`
        : "Not sure yet (no amount)";
    }

    const subject = encodeURIComponent("New Project Inquiry");

    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Service Interested In:
${selectedService}

Specific Service:
${finalSpecificService}

Project Description:
${formData.description}

Budget:
${finalBudget}
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
        specificService: "",
        specificServiceOther: "",
        otherService: "",
        description: "",
        budget: "",
        otherBudget: "",
        approximateBudget: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Special reset logic when main service changes
    if (name === "service") {
      setFormData((prev) => ({
        ...prev,
        service: value,
        specificService: "",
        specificServiceOther: "",
        budget: "",
        otherBudget: "",
        approximateBudget: "",
      }));
      return;
    }

    // When specific service changes to/from "Other", clear the description if needed
    if (name === "specificService") {
      setFormData((prev) => ({
        ...prev,
        specificService: value,
        specificServiceOther: value !== "Other" ? "" : prev.specificServiceOther,
      }));
      return;
    }

    // For all other fields
    setFormData((prev) => ({ ...prev, [name]: value }));
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

                {/* MAIN SERVICE */}
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
                    <option value="Web Application Development">Web Application Development</option>
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

                {/* SPECIFIC SERVICE (conditional) */}
                {formData.service &&
                  formData.service !== "other" &&
                  serviceExamples[formData.service] && (
                    <div>
                      <label className="block text-sm text-[#4A525A] mb-2">
                        Specific Service
                      </label>
                      <select
                        name="specificService"
                        value={formData.specificService}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20"
                      >
                        <option value="">Select specific service</option>
                        {serviceExamples[formData.service].map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>

                      {/* If "Other" is selected in specific service, show a text field */}
                      {formData.specificService === "Other" && (
                        <input
                          type="text"
                          name="specificServiceOther"
                          value={formData.specificServiceOther}
                          onChange={handleChange}
                          placeholder={
                            specificServiceOtherPrompts[formData.service] ||
                            "Please describe the service you need."
                          }
                          className="mt-3 w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20"
                        />
                      )}
                    </div>
                  )}

                {/* PROJECT DESCRIPTION */}
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
                {formData.service &&
                  formData.service !== "other" &&
                  serviceBudgets[formData.service] && (
                    <div>
                      <label className="block text-sm text-[#4A525A] mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20"
                      >
                        <option value="">Select budget range</option>
                        {serviceBudgets[formData.service].map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>

                      {/* If "Not sure yet" is selected, ask for approximate budget */}
                      {formData.budget === "Not sure yet" && (
                        <input
                          type="text"
                          name="approximateBudget"
                          value={formData.approximateBudget}
                          onChange={handleChange}
                          placeholder="Please provide an approximate budget you have in mind."
                          className="mt-3 w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-[#3F6C9B] focus:outline-none focus:ring-2 focus:ring-[#3F6C9B]/20"
                        />
                      )}
                    </div>
                  )}

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

          {/* CONTACT INFO (unchanged) */}
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