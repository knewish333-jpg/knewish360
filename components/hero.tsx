"use client"

import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    servicesSection?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery-section")
    gallerySection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="fade-in space-y-8">
          <div className="inline-block px-5 py-2.5 bg-primary/12 rounded-full border border-primary/30 mb-4 hover:bg-primary/18 transition-colors duration-300">
            <span className="text-primary font-semibold text-sm tracking-wide">
              Your Trusted Service Partner in Karachi
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-balance leading-tight tracking-tight">
            Complete Solutions from
            <span className="gradient-text block"> Knewish 360</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From relocation and solar installation to renovations and electrical services. We deliver excellence in
            every project across all your needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary/70 text-primary-foreground rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={scrollToGallery}
              className="px-8 py-4 border-2 border-primary/40 text-primary rounded-xl font-bold text-lg hover:bg-primary/8 hover:border-primary/60 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <img
              src="/professional-team-working-on-services.jpg"
              alt="Professional Knewish 360 services team"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
