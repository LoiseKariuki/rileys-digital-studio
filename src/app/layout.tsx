import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riley's Digital Studio | Web Development & Digital Solutions in Kenya",
  description: "Riley's Digital Studio builds modern websites, digital platforms, and software solutions for businesses in Kenya. Let’s craft solutions that matter for your business.",
  verification: {
    google: "erzQdPTcB7fkejY7SHBV7Qw91gp7P-42GkKTNDHh18o",
  },
  openGraph: {
    title: "Riley's Digital Studio",
    description: "Modern web development and digital solutions in Kenya",
    url: "https://rileys-digital-studio.vercel.app",
    images: ["/logoh.webp"], // optional, replace with a real image if you have one
    siteName: "Riley's Digital Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riley's Digital Studio",
    description: "Modern web development and digital solutions in Kenya",
    images: ["/logoh.webp"], // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}