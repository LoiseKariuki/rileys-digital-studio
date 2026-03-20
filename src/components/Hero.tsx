"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScARuWV3g3TksroFER6Z1QtvJLFyXH2vwZm9JYhe0Vh93o5YA/viewform?embedded=true";

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center px-6 py-32 overflow-hidden text-center bg-white">

      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#8FAFC8] opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#3F6C9B] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#8FAFC8] opacity-20"></div>
      </div>

      {/* Logo */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <Image
            src="/logo.png"
            alt="Riley's Digital Studio Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Hero headline */}
      <h1
        className="text-[44px] md:text-[72px] lg:text-[84px] leading-[1.1] font-bold text-[#1F3A5F] tracking-tight"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Riley's Digital Studio
      </h1>

      {/* Slogan */}
      <h2
        className="mt-6 text-[28px] md:text-[36px] font-semibold text-[#3F6C9B]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Crafting Software Solutions That Matter
      </h2>

      {/* Updated Subtext with Inline Links */}
      <p
        className="mt-6 max-w-3xl mx-auto text-[18px] md:text-[20px] font-normal text-[#7A838C] leading-relaxed"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Explore our{" "}
        <Link
          href="/projects"
          className="text-[#0f457f] font-medium hover:underline"
        >
          projects
        </Link>{" "}
        to see what we’ve built, discover our{" "}
        <Link
          href="/#services"
          className="text-[#0f457f] font-medium hover:underline"
        >
          services
        </Link>{" "}
        to learn how we can help your business, or{" "}
        <Link
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0f457f] font-medium hover:underline"
        >
          contact us
        </Link>{" "}
        to get a personalized quote for your project.
      </p>

      {/* CTA Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        {/* Get a Quote - opens Google Form */}
        <Link
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1F3A5F] hover:bg-[#8FAFC8] text-white font-semibold text-[16px] px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Get a Quote
        </Link>

        {/* Our Portfolio */}
        <Link
          href="/projects"
          className="inline-block border border-[#1F3A5F] hover:bg-[#1F3A5F] hover:text-white text-[#1F3A5F] font-semibold text-[16px] px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Our Portfolio
        </Link>
      </div>

    </section>
  );
}