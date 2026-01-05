"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, MessageCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useContactModal } from "@/components/contact-modal";

const portfolioItems = [
  {
    id: 1,
    image: "/images/one.jpeg",
    title: "Modern Interior Renovation",
    category: "Home Renovation",
  },
  {
    id: 2,
    image: "/images/two.jpeg",
    title: "Office Relocation Project",
    category: "Office Relocation",
  },
  {
    id: 3,
    image: "/images/three.jpeg",
    title: "Residential Moving Service",
    category: "Home Relocation",
  },
  {
    id: 4,
    image: "/images/four.jpeg",
    title: "Kitchen Renovation Excellence",
    category: "Home Renovation",
  },
  {
    id: 5,
    image: "/images/five.jpeg",
    title: "Complete Space Transformation",
    category: "Home Renovation",
  },
  {
    id: 6,
    image: "/images/six.jpeg",
    title: "Premium Interior Design",
    category: "Home Renovation",
  },
  {
    id: 7,
    image: "/images/seven.jpeg",
    title: "Luxury Home Renovation",
    category: "Home Renovation",
  },
];

export default function Portfolio() {
  const { ref, isVisible } = useIntersectionObserver();
  const { openModal } = useContactModal();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="portfolio"
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-muted/20 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-section-title text-foreground mb-6">
            Our Portfolio
          </h2>
          <p className="text-lead max-w-3xl mx-auto text-xl">
            Showcasing exceptional projects and satisfied clients across various
            services
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-accent text-sm font-bold mb-2 uppercase tracking-wider">
                    {item.category}
                  </p>
                  <h3 className="text-white text-2xl font-bold mb-6">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-white gap-2 group-hover:gap-4 transition-all duration-300">
                    <span className="text-sm font-semibold">View Project</span>
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-primary-foreground px-16 py-7 rounded-3xl font-heading font-black text-2xl uppercase tracking-widest hover:shadow-2xl transition-all duration-300 hover:scale-110 shadow-2xl hover:from-primary/90 hover:to-yellow-500"
          >
            <MessageCircle size={28} />
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
