"use client";

import { Linkedin, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmailClick = () => {
    const email = "loisewkariukii@gmail.com";
    const subject = encodeURIComponent("Hello from Website Footer");
    const body = encodeURIComponent("Hi Loise, I want to get in touch regarding...");

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const link = isMobile
      ? `mailto:${email}?subject=${subject}&body=${body}`
      : `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(link, "_blank");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+254799025633";
    const message = encodeURIComponent(
      "Hello, I’m interested in your services and have a project I’d like to work on. Could we discuss details?"
    );
    const url = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-[#1F3A5F] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo + Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image src="/logo.png" alt="Logo" fill className="object-contain" />
              </div>
              <div className="text-white font-semibold text-lg leading-tight">
                Riley's Digital Studio
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">Crafting solutions that matter.</p>

            {/* Social Media */}
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/loise-kariuki-91625b236/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                style={{ backgroundColor: "#0077B5" }}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/_perfect.sushi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@_loise.kariuki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#010101" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path d="M35.99 13.03c-2.37 0-4.54-.9-6.2-2.36v12.36c0 5.35-4.34 9.69-9.69 9.69-5.35 0-9.69-4.34-9.69-9.69s4.34-9.69 9.69-9.69c1.41 0 2.75.34 3.95.94v4.35c-1.2-.63-2.55-.97-3.95-.97-3.93 0-7.13 3.2-7.13 7.13s3.2 7.13 7.13 7.13 7.13-3.2 7.13-7.13V6h4.77c.01 1.42.59 2.77 1.58 3.77.99.99 2.34 1.57 3.76 1.57V13.03z" />
                </svg>
              </a>
              <button
                onClick={handleEmailClick}
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#D44638" }}
              >
                <Mail className="w-5 h-5 text-white" />
              </button>
              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.149-.671.15s-.771.966-.946 1.164c-.174.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.671-1.612-.92-2.206-.242-.579-.487-.5-.671-.51-.174-.008-.372-.01-.571-.01s-.52.074-.793.372c-.273.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.174-1.413-.074-.123-.272-.198-.571-.347z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 2.113.556 4.08 1.523 5.778L2 22l4.42-1.456C7.92 21.444 9.887 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </button>
            </div>

            <div className="text-gray-200 space-y-1">
              <p>
                Call:{" "}
                <a href="tel:+254799025633" className="hover:text-[#8FAFC8]">
                  +254 799 025 633
                </a>
              </p>
              <p>
                Call:{" "}
                <a href="tel:+254738867197" className="hover:text-[#8FAFC8]">
                  +254 738 867 197
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#8FAFC8]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-[#8FAFC8]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-[#8FAFC8]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-[#8FAFC8]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-[#8FAFC8]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Riley's Digital Studio. All rights
              reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-[#8FAFC8]">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-[#8FAFC8]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;