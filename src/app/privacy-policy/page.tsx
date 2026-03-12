"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PrivacyPolicy() {
  const [html2pdf, setHtml2pdf] = useState<any>(null);

  // Dynamically import html2pdf only on client
  useEffect(() => {
    import("html2pdf.js").then((module) => {
      setHtml2pdf(() => module.default);
    });
  }, []);

  const downloadPDF = () => {
    if (!html2pdf) return; // wait until dynamic import is ready

    const element = document.getElementById("privacy-content");
    if (!element) return;

    const opt: any = {
      margin: [0.7, 0.7, 1, 0.7],
      filename: "privacy-policy-rileys-digital-studio.pdf",
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
            `Riley's Digital Studio • Privacy Policy`,
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
        <div
          id="privacy-content"
          style={{ color: "#1F3A5F", backgroundColor: "#ffffff" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/logo.png"
              alt="Riley's Digital Studio"
              className="w-14 h-14 object-contain"
            />
            <div>
              <h1 style={{ color: "#1F3A5F" }} className="text-3xl font-bold">
                Privacy Policy
              </h1>
              <p style={{ color: "#6B7280" }} className="text-sm">
                Riley's Digital Studio
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <p style={{ color: "#374151" }} className="mb-6">
            This Privacy Policy explains how Riley's Digital Studio collects,
            uses, and protects your personal information when you visit our
            website or interact with our services.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p style={{ color: "#374151" }} className="mb-4">
            When you interact with our website, we may collect the following information:
          </p>
          <ul style={{ color: "#374151" }} className="list-disc ml-6 mb-6 space-y-2">
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Any information you provide when contacting us</li>
          </ul>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            2. How We Use Your Information
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            The information we collect is used to:
          </p>
          <ul style={{ color: "#374151" }} className="list-disc ml-6 mb-6 space-y-2">
            <li>Respond to your inquiries</li>
            <li>Provide requested services</li>
            <li>Improve our website and services</li>
            <li>Communicate project updates or responses</li>
          </ul>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            3. Data Protection
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            We take reasonable security measures to protect your personal
            information. However, no internet transmission is completely secure,
            and we cannot guarantee absolute protection.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            4. Third-Party Services
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            Our website may use third-party tools or services such as analytics,
            hosting providers, or external links. These services may collect
            limited technical data such as browser information or device type.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            5. Cookies
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            Our website may use cookies or similar technologies to improve user
            experience and website performance.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            6. Your Rights
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            You may request access, correction, or deletion of your personal
            information at any time by contacting us.
          </p>

          {/* New Sections */}
          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            8. Children’s Privacy
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. 
            If you believe we have inadvertently collected information from a child, please contact us to request deletion.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            9. Data Retention
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            We retain personal information only for as long as necessary to provide services, comply with legal obligations, 
            resolve disputes, and enforce agreements. When information is no longer needed, it will be securely deleted or anonymized.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            10. Changes to This Privacy Policy
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            Riley's Digital Studio may update this Privacy Policy from time to time. We encourage you to review this page periodically 
            for the latest information on our privacy practices.
          </p>

          <h2 style={{ color: "#1F3A5F" }} className="text-xl font-semibold mt-6 mb-2">
            7. Contact Us
          </h2>
          <p style={{ color: "#374151" }} className="mb-6">
            If you have questions about this Privacy Policy, please contact:
          </p>
          <p style={{ color: "#374151" }}>
            <strong>Riley's Digital Studio</strong>
            <br />
            Email: loisewkariukii@gmail.com
            <br />
            Phone: +254 799 025 633 / +254 738 867 197
            <br />
            Location: Kenya
          </p>

          <p style={{ color: "#374151" }} className="mt-10 text-sm">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </main>
  );
}