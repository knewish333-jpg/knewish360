'use client'

import { useState } from 'react'

const beforeAfterProjects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "Home Renovation",
    before: "/old-kitchen-before-renovation.jpg",
    after: "/modern-renovated-kitchen.png",
  },
  {
    id: 2,
    title: "Solar Panel Installation",
    category: "Solar Installation",
    before: "/rooftop-before-solar-panels.jpg",
    after: "/rooftop-with-solar-panels-installed.jpg",
  },
  {
    id: 3,
    title: "Electrical System Upgrade",
    category: "Electrical Services",
    before: "/old-electrical-wiring-system.jpg",
    after: "/modern-electrical-system-upgrade.jpg",
  },
  {
    id: 4,
    title: "AC System Installation",
    category: "AC Services",
    before: "/without-air-conditioning-unit.jpg",
    after: "/with-installed-air-conditioning-unit.jpg",
  },
  {
    id: 5,
    title: "Bathroom Remodel",
    category: "Home Renovation",
    before: "/old-bathroom-before-remodel.jpg",
    after: "/luxurious-bathroom-after-remodel.jpg",
  },
  {
    id: 6,
    title: "Office Space Transformation",
    category: "Home Renovation",
    before: "/empty-office-space-before-renovation.jpg",
    after: "/modern-office-space-after-renovation.jpg",
  },
]

export default function BeforeAfter() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Transformations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the amazing before and after results of our professional work
          </p>
        </div>

        {/* Before-After Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {beforeAfterProjects.map((project, index) => (
            <BeforeAfterCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BeforeAfterCard({ project, index }: { project: typeof beforeAfterProjects[0]; index: number }) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(newPosition, 0), 100))
  }

  return (
    <div
      className="fade-in group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className="relative overflow-hidden rounded-xl shadow-lg cursor-col-resize"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={{ height: '400px' }}
      >
        {/* After Image (Background) */}
        <img
          src={project.after || "/placeholder.svg"}
          alt={`${project.title} - After`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Before Image (Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={project.before || "/placeholder.svg"}
            alt={`${project.title} - Before`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `calc(100% / ${sliderPosition} * 100)` }}
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white transition-colors duration-300 group-hover:bg-secondary"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="flex gap-1">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-sm font-semibold rounded backdrop-blur-sm">
          BEFORE
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded">
          AFTER
        </div>
      </div>

      {/* Project Info */}
      <div className="mt-4 p-4 bg-card border border-border rounded-lg group-hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.category}</p>
      </div>
    </div>
  )
}
