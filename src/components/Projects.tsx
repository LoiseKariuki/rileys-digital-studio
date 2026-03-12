'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type FilterKey = 'All' | 'Web Apps' | 'Mobile Apps' | 'Logos' | 'Landing Pages';

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
];

const filters: FilterKey[] = ['All', 'Web Apps', 'Mobile Apps', 'Logos', 'Landing Pages'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All');
  const [lightbox, setLightbox] = useState<{show: boolean; src?: string; alt?: string}>({show:false});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    cardRefs.current.forEach((c) => { if (c) observer.observe(c); });

    return () => observer.disconnect();
  }, [filtered]);

  const handleLogoClick = (project: Project) => {
    if (project.category === 'Logos') {
      setLightbox({ show: true, src: project.image, alt: project.alt });
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => { cardRefs.current[i + 1] = el; }}
              className="section-reveal transition-transform duration-500 hover:scale-105"
            >
              <div className="relative block bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-400 cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <Image src={project.image} alt={project.alt} fill className="object-cover" />

                  {/* Badge */}
                  {((["Web Apps","Mobile Apps"].includes(project.category) && project.name !== "Mombasa Nest Homes App") ||
                    ["My Logo","Expenses Logo","Whoovers Logo"].includes(project.name)) && (
                    <div className="absolute top-3 left-3 bg-blue-900 text-white text-[10px] font-bold px-2 py-1 rounded">
                      RILEYS' STUDIO
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex flex-col items-center text-white text-center">
                      {["Web Apps","Mobile Apps"].includes(project.category) ? (
                        <>
                          <span className="font-bold text-sm tracking-widest uppercase px-5 py-2 rounded-full border-2 border-white/70 mb-2">
                            Coming Soon
                          </span>
                          <span className="text-xs opacity-90"> Development in Progress </span>
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

                {/* Info */}
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

        {/* View All Projects Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-900 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.show && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setLightbox({show:false})}
        >
          <div className="relative max-w-[90%] max-h-[90%]" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white bg-[#800020] rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-[#66001a] transition-colors duration-200 border border-white"
              onClick={() => setLightbox({show:false})}
            >
              ×
            </button>
            <Image src={lightbox.src!} alt={lightbox.alt!} width={800} height={800} className="object-contain rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}