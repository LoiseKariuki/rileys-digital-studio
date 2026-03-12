"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TermsOfService() {
  const [html2pdf, setHtml2pdf] = useState<any>(null);

  // Dynamically import html2pdf only on client-side
  useEffect(() => {
    import("html2pdf.js").then((module) => {
      setHtml2pdf(() => module.default);
    });
  }, []);

  const downloadPDF = () => {
    if (!html2pdf) return;

    const element = document.getElementById("tos-content");
    if (!element) return;

    const opt: any = {
      margin: [0.7, 0.7, 1, 0.7],
      filename: "terms-of-service-rileys-digital-studio.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, backgroundColor: "#ffffff" },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    const worker = html2pdf().set(opt).from(element);

    worker
      .toPdf()
      .get("pdf")
      .then((pdf: any) => {
        const totalPages = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFontSize(10);
          pdf.text(
            `Riley's Digital Studio • Terms of Service`,
            pdf.internal.pageSize.getWidth() / 2,
            pdf.internal.pageSize.getHeight() - 0.5,
            { align: "center" }
          );
          pdf.text(
            `Page ${i} of ${totalPages}`,
            pdf.internal.pageSize.getWidth() - 1,
            pdf.internal.pageSize.getHeight() - 0.5
          );
        }
      })
      .then(() => {
        worker.save();
      });
  };

  return (
    <main className="bg-white min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Top Controls */}
        <div className="flex justify-between items-center mb-10">
          <Link
            href="/"
            className="text-[#1F3A5F] hover:text-[#3F6C9B] font-medium"
          >
            ← Back to Home
          </Link>

          <button
            onClick={downloadPDF}
            className="bg-[#1F3A5F] text-white px-5 py-2 rounded-lg hover:bg-[#3F6C9B] transition"
          >
            Download PDF
          </button>
        </div>

        {/* PDF Content */}
        <div id="tos-content" style={{ color: "#1F3A5F", backgroundColor: "#ffffff" }}>
          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/logo.png"
              alt="Riley's Digital Studio"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h1 style={{ color: "#1F3A5F" }} className="text-3xl font-bold">
                Terms of Service
              </h1>
              <p style={{ color: "#6B7280" }} className="text-sm">
                Riley's Digital Studio
              </p>
            </div>
          </div>

          <p style={{ color: "#374151" }} className="mb-6">
            These Terms of Service govern your use of the Riley's Digital Studio
            website and services. By accessing this website, you agree to comply
            with these terms.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            1. Use of Website
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            This website is intended to provide information about our services and
            showcase our work. You agree not to misuse the website or attempt to
            interfere with its normal operation.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            2. Services
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            Riley's Digital Studio offers services including website development,
            software development, system maintenance, and digital consulting.
            Specific project terms may be agreed upon separately with clients.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            3. Intellectual Property
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            All content on this website, including text, designs, graphics,
            branding, and code samples, belongs to Riley's Digital Studio unless
            otherwise stated. Unauthorized use or reproduction is prohibited.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            4. External Links
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            Our website may include links to third-party websites. We are not
            responsible for the content or practices of those external websites.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            5. Limitation of Liability
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            Riley's Digital Studio will not be liable for any damages or losses
            resulting from the use or inability to use this website.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            6. Changes to These Terms
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            We may update these Terms of Service from time to time. Continued use
            of the website indicates acceptance of any changes.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            7. Contact Information
          </h2>
          <p style={{ color: "#374151" }}>
            <strong>Riley's Digital Studio</strong>
            <br />
            Email: loisewkariukii@gmail.com
            <br />
            Phone: +254 799 025 633 / +254 738 867 197
          </p>

          <p style={{ color: "#6B7280" }} className="mt-10 text-sm">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </main>
  );
}