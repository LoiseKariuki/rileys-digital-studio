'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

type FilterKey =
  | 'All'
  | 'Web Apps'
  | 'Mobile Apps'
  | 'Logos'
  | 'Landing Pages';

interface Project {
  id: number;
  name: string;
  category: FilterKey;
  image: string;
  alt: string;
  url: string;
  duration: string;
  type: string;
  client: string;
  goal: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Cake Shop Website",
    category: 'Landing Pages',
    image: "/project1.webp",
    alt: "Modern Cake Shop Website design",
    url: "https://cakes-by-terry.vercel.app/",
    duration: "1 Month",
    type: "Landing Page",
    client: "Baker",
    goal: "Increase online cake orders"
  },
  {
    id: 2,
    name: "Flower Shop Website",
    category: 'Landing Pages',
    image: "/project2.webp",
    alt: "Flower Website design",
    url: "https://bounty-blooms.vercel.app/",
    duration: "1 Month",
    type: "Landing Page",
    client: "Flower Shop",
    goal: "Showcase products online"
  },
  {
    id: 3,
    name: "Accommodation Website",
    category: 'Landing Pages',
    image: "/project3.webp",
    alt: "Accommodation Website design",
    url: "https://mombasa-nest-homes.onrender.com/",
    duration: "1 Month",
    type: "Landing Page",
    client: "Accommodation services",
    goal: "Provide booking information"
  },

  {
    id: 4,
    name: "Whoovers",
    category: 'Web Apps',
    image: "/whoovers.webp",
    alt: "Whoovers Web Application",
    url: "#",
    duration: "In Development",
    type: "Web App",
    client: "Businesses",
    goal: "Business workflow management"
  },

  {
    id: 5,
    name: "Mombasa Nest Homes App",
    category: 'Mobile Apps',
    image: "/MNH.webp",
    alt: "Mombasa Nest Homes Mobile App",
    url: "#",
    duration: "In Development",
    type: "Mobile App",
    client: "Accommodation services",
    goal: "Mobile booking and management"
  },
  {
    id: 6,
    name: "Expenses Tracker",
    category: 'Mobile Apps',
    image: "/expenses.webp",
    alt: "MPESA Expenses Tracking Mobile App",
    url: "#",
    duration: "In Development",
    type: "Mobile App",
    client: "Personal Finance",
    goal: "Track expenses via MPESA",
  },

  {
    id: 7,
    name: "My Logo",
    category: 'Logos',
    image: "/logoh.webp",
    alt: "My logo design",
    url: "#",
    duration: "1 Day",
    type: "Logo",
    client: "Riley's Studio",
    goal: "Brand identity",
  },
  {
    id: 8,
    name: "Atlas Careers",
    category: 'Logos',
    image: "/atlas.webp",
    alt: "Atlas Careers Logo",
    url: "#",
    duration: "1 Day",
    type: "Logo",
    client: "Atlas Careers",
    goal: "Brand identity",
  },
  {
    id: 9,
    name: "Mombasa Nest Homes",
    category: 'Logos',
    image: "/MNH.webp",
    alt: "Mombasa Nest Homes Logo",
    url: "#",
    duration: "1 Day",
    type: "Logo",
    client: "Mombasa Nest Homes",
    goal: "Brand identity",
  },
  {
    id: 10,
    name: "ABS Timber Mart",
    category: 'Logos',
    image: "/ABS.webp",
    alt: "ABS Timber Mart Logo",
    url: "#",
    duration: "1 Day",
    type: "Logo",
    client: "ABS Timber Mart",
    goal: "Brand identity",
  },
  {
    id: 11,
    name: "Kawaida Timbermart",
    category: 'Logos',
    image: "/Kawaida.webp",
    alt: "Kawaida Timbermart Logo",
    url: "#",
    duration: "1 Day",
    type: "Logo",
    client: "Kawaida Timbermart",
    goal: "Brand identity",
  },
  {
    id: 12,
    name: "Expenses Logo",
    category: 'Logos',
    image: "/expenses.webp",
    alt: "Expenses Logo",
    url: "#",
    duration: "1 Day",
    type: "Logo",
    client: "Expenses Tracker",
    goal: "Brand identity",
  },
  {
    id: 13,
    name: "Whoovers Logo",
    category: 'Logos',
    image: "/whoovers.webp",
    alt: "Whoovers Logo",
    url: "#",
    duration: "1 Day",
    type: "Logo",
    client: "Whoovers",
    goal: "Brand identity",
  },
];

const filters: FilterKey[] = [
  'All',
  'Web Apps',
  'Mobile Apps',
  'Logos',
  'Landing Pages'
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All');
  const [lightbox, setLightbox] = useState<{
    show: boolean;
    src?: string;
    alt?: string;
    isComingSoon?: boolean;
    projectName?: string;
  }>({ show: false });

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    cardRefs.current.forEach((c) => {
      if (c) observer.observe(c);
    });

    return () => observer.disconnect();
  }, [filtered]);

  const handleCardClick = (project: Project) => {
    if (project.category === 'Logos') {
      setLightbox({ show: true, src: project.image, alt: project.alt });
    } else if (['Web Apps', 'Mobile Apps'].includes(project.category)) {
      setLightbox({ show: true, isComingSoon: true, projectName: project.name });
    }
  };

  return (
    <>
      <section id="projects" className="py-24 md:py-32 px-6 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto">

          <div className="mb-6">
            <Link href="/" className="text-[#1F3A5F] hover:text-[#3F6C9B] font-medium">
              ← Back to Home
            </Link>
          </div>

          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            className="section-reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
          >
            <h2 className="font-display font-bold text-[clamp(2.2rem,5vw,4rem)] tracking-tighter text-gray-900 leading-tight">
              Our Projects
            </h2>

            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full text-[12px] font-bold tracking-wide transition-all duration-300 border ${
                    activeFilter === f
                      ? 'bg-blue-900 text-white border-blue-900 shadow-lg'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-gray-500 hover:text-blue-900'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                ref={(el) => { cardRefs.current[i + 1] = el; }}
                className="section-reveal transition-transform duration-500 hover:scale-105"
              >
                <div
                  onClick={() => handleCardClick(project)}
                  className="group relative block bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-400 cursor-pointer"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image src={project.image} alt={project.alt} fill className="object-cover" />

                    {((['Web Apps','Mobile Apps'].includes(project.category) && project.name !== "Mombasa Nest Homes App") || 
                      ['My Logo','Expenses Logo','Whoovers Logo'].includes(project.name)) && (
                      <div className="absolute top-3 left-3 bg-blue-900 text-white text-[10px] font-bold px-2 py-1 rounded">
                        RILEYS' STUDIO
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-col items-center text-white text-center">
                        {['Web Apps','Mobile Apps'].includes(project.category) ? (
                          <>
                            <span className="font-bold text-sm tracking-widest uppercase px-5 py-2 rounded-full border-2 border-white/70 mb-2">
                              Coming Soon
                            </span>
                            <span className="text-xs opacity-90">
                              Development in Progress
                            </span>
                          </>
                        ) : project.category === "Logos" ? (
                          <span className="font-bold text-sm tracking-widest uppercase px-5 py-2 rounded-full border-2 border-white/70 mb-2">
                            View Logo
                          </span>
                        ) : (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-sm tracking-widest uppercase px-5 py-2 rounded-full border-2 border-white/70 mb-2 hover:bg-white hover:text-blue-900 transition-colors duration-300"
                          >
                            View Project
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                  <div className="p-5">
                    <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{project.name}</h3>

                    <div className="flex gap-2 text-[10px] font-semibold text-gray-700 mb-2">
                      <span className="bg-gray-100 px-2.5 py-1 rounded-full border">🕒 {project.duration}</span>
                      <span className="bg-gray-100 px-2.5 py-1 rounded-full border">🌐 {project.type}</span>
                      <span className="bg-gray-100 px-2.5 py-1 rounded-full border">👤 {project.client}</span>
                    </div>

                    <div className="flex mt-2">
                      <span className="text-[10px] font-semibold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                        🎯 {project.goal}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {lightbox.show && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setLightbox({show:false})}
          >
            <div
              className="relative max-w-[400px] w-full bg-white rounded-xl p-6 text-center shadow-lg"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white bg-[#800020] rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-[#66001a] transition-colors duration-200 border border-white"
                onClick={() => setLightbox({show:false})}
              >
                ×
              </button>

              {lightbox.isComingSoon ? (
                <>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{lightbox.projectName} is under development</h3>
                  <p className="text-lg font-semibold mb-2 text-gray-800">Coming Soon</p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Keep checking the website so you don’t miss out on its release.
                  </p>
                </>
              ) : (
                <Image
                  src={lightbox.src!}
                  alt={lightbox.alt!}
                  width={800}
                  height={800}
                  className="object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}