"use client"

import { useState } from "react"
import Image from "next/image"

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const portfolioItems = [
    {
      title: "Residential Relocation",
      category: "Moving",
      image: "/images/one.jpeg",
      description: "Professional household relocation with furniture moving",
    },
    {
      title: "Office Renovation",
      category: "Renovation",
      image: "/images/two.jpeg",
      description: "Complete office space renovation and setup",
    },
    {
      title: "Kitchen Relocation",
      category: "Moving",
      image: "/images/three.jpeg",
      description: "Safe and efficient kitchen equipment relocation",
    },
    {
      title: "Furniture Moving",
      category: "Moving",
      image: "/images/four.jpeg",
      description: "Professional furniture handling and placement",
    },
    {
      title: "Room Setup",
      category: "Renovation",
      image: "/images/five.jpeg",
      description: "Complete room arrangement and organization",
    },
    {
      title: "Team Coordination",
      category: "Moving",
      image: "/images/six.jpeg",
      description: "Expert team managing complex relocations",
    },
    {
      title: "Space Organization",
      category: "Renovation",
      image: "/images/seven.jpeg",
      description: "Strategic space planning and item placement",
    },
  ]

  return (
    <section
      id="portfolio-section"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16 fade-in">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-sm font-semibold text-primary">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground">Featured Projects & Portfolio</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl">
            Showcasing our expertise in professional relocation and renovation services across Karachi
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className="group relative overflow-hidden rounded-xl bg-muted cursor-pointer fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">{item.category}</p>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
                <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                  View Project
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh] fade-in" onClick={(e) => e.stopPropagation()}>
              <Image
                src={portfolioItems[selectedImage].image || "/placeholder.svg"}
                alt={portfolioItems[selectedImage].title}
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-xl"
                sizes="100vw"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                <p className="text-sm text-primary font-semibold uppercase">{portfolioItems[selectedImage].category}</p>
                <h3 className="text-2xl font-bold mt-2">{portfolioItems[selectedImage].title}</h3>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300"
              >
                ✕
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => setSelectedImage((prev) => (prev === 0 ? portfolioItems.length - 1 : prev! - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300"
              >
                ←
              </button>
              <button
                onClick={() => setSelectedImage((prev) => (prev === portfolioItems.length - 1 ? 0 : prev! + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
