"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; /* npm install lucide-react */
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScARuWV3g3TksroFER6Z1QtvJLFyXH2vwZm9JYhe0Vh93o5YA/viewform?embedded=true";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Riley's Digital Studio Logo"
            width={40}
            height={40}
          />
          <div className="flex flex-col leading-none">
            <span
              className="font-bold text-[15px] text-[#4A525A]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Riley's
            </span>
            <span
              className="font-semibold text-[13px] text-[#3F6C9B] mt-0.5"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Digital Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-[#4A525A] font-medium text-[15px] hover:text-[#1F3A5F] transition-colors duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA Button - opens Google Form in new tab */}
          <Link
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1F3A5F] hover:bg-[#3F6C9B] text-white font-semibold text-[14px] px-6 py-2.5 rounded-full transition-all duration-200"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-50 transition-colors duration-150"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className="text-[#4A525A]" strokeWidth={2} />
          ) : (
            <Menu size={24} className="text-[#4A525A]" strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-0 border-t border-gray-100 bg-white">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[#4A525A] font-medium text-[15px] hover:text-[#1F3A5F] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA Button - opens Google Form */}
            <Link
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#1F3A5F] hover:bg-[#3F6C9B] text-white font-semibold text-[14px] px-6 py-2.5 rounded-full transition-all duration-200 text-center"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}