"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Modern Office Relocation",
    category: "Relocation",
    image: "/office-relocation-service.jpg",
  },
  {
    id: 2,
    title: "Solar Panel Installation",
    category: "Solar",
    image: "/solar-panel-installation-rooftop.jpg",
  },
  {
    id: 3,
    title: "Home Renovation Complete",
    category: "Renovation",
    image: "/modern-home-renovation-kitchen.jpg",
  },
  {
    id: 4,
    title: "Electrical Wiring System",
    category: "Electrical",
    image: "/professional-electrical-installation.jpg",
  },
  {
    id: 5,
    title: "AC Installation & Setup",
    category: "AC Services",
    image: "/air-conditioning-unit-installation.jpg",
  },
  {
    id: 6,
    title: "Residential Renovation",
    category: "Renovation",
    image: "/luxury-home-renovation-interior.jpg",
  },
  {
    id: 7,
    title: "Commercial Solar Array",
    category: "Solar",
    image: "/commercial-building-solar-panels.jpg",
  },
  {
    id: 8,
    title: "Smart Home Electrical",
    category: "Electrical",
    image: "/smart-home-electrical-system.png",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const handleImageClick = (item: (typeof galleryItems)[0]) => {
    setSelectedImage(item)
    setCurrentIndex(galleryItems.indexOf(item))
  }

  return (
    <>
      <section id="gallery-section" className="w-full py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 text-balance">Our Work Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest projects and completed work across all service categories
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleImageClick(item)}
              >
                <div className="relative h-72 overflow-hidden bg-muted border border-border/50 group-hover:border-primary/30 transition-all duration-300">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                  />

                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm font-medium">{item.category}</p>
                  </div>

                  {/* View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-primary/95 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 shadow-xl">
                      <span className="text-white font-bold text-2xl">+</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-300 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-200 z-10 hover:scale-110"
              aria-label="Close gallery"
            >
              <X size={36} />
            </button>

            <div className="relative rounded-2xl overflow-hidden bg-muted mb-6 shadow-2xl">
              <img
                src={galleryItems[currentIndex].image || "/placeholder.svg"}
                alt={galleryItems[currentIndex].title}
                className="w-full h-auto rounded-2xl animate-in fade-in duration-300"
              />
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{galleryItems[currentIndex].title}</h3>
              <p className="text-muted-foreground">{galleryItems[currentIndex].category}</p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handlePrev}
                className="p-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>

              <div className="flex-1 flex items-center justify-center gap-2 overflow-x-auto">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all duration-300 flex-shrink-0 ${
                      index === currentIndex ? "bg-primary w-8 h-2" : "bg-muted/50 w-2 h-2"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
