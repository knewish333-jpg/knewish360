"use client"

import { Zap, Home, Sun, Wrench, BoxIcon, Shield, CheckCircle, ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useContactModal } from "@/components/contact-modal"

const services = [
  {
    icon: BoxIcon,
    title: "Office Relocation",
    description: "Seamless office moving with minimal downtime and professional handling of all equipment.",
    features: ["Zero Downtime", "Equipment Safety", "Professional Team"],
  },
  {
    icon: Home,
    title: "Home Relocation",
    description: "Complete residential moving services with care for your belongings and peace of mind.",
    features: ["Careful Handling", "Timely Delivery", "Dedicated Team"],
  },
  {
    icon: Sun,
    title: "Solar Installation",
    description: "Professional solar panel installation for sustainable energy solutions.",
    features: ["Expert Installation", "Long Warranty", "Energy Efficient"],
  },
  {
    icon: Wrench,
    title: "Home Renovation",
    description: "Transform your space with expert renovation services and quality craftsmanship.",
    features: ["Quality Materials", "Skilled Craftsmen", "Modern Designs"],
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Safe and reliable electrical installation, repair, and maintenance services.",
    features: ["Safety Certified", "24/7 Support", "Expert Technicians"],
  },
  {
    icon: Shield,
    title: "AC Repair & Maintenance",
    description: "Expert cooling system repair, maintenance, and installation for your comfort.",
    features: ["Quick Service", "Professional Care", "Preventive Maintenance"],
  },
]

export default function Services() {
  const { ref, isVisible } = useIntersectionObserver()
  const { openModal } = useContactModal()

  return (
    <section
      ref={ref}
      id="services"
      className={`py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-24 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 bg-muted/40 px-4 py-2 rounded-full border border-border mb-6">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">What We Offer</span>
          </div>
          <h2 className="text-section-title text-foreground mb-8">Premium Services</h2>
          <p className="text-lead max-w-3xl mx-auto text-xl">
            Comprehensive solutions for all your relocation, renovation, and maintenance needs with uncompromising
            quality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`group relative bg-card border border-border rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-125 transition-transform duration-500 shadow-xl group-hover:shadow-2xl">
                    <IconComponent className="w-12 h-12 text-primary-foreground" />
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base mb-6">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={openModal}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-yellow-500 text-primary-foreground py-4 rounded-2xl font-heading font-black text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 uppercase tracking-wide shadow-lg"
                  >
                    Learn More & Book
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-18 py-7 rounded-3xl hover:shadow-2xl transition-all duration-300 hover:scale-110 font-heading font-black text-2xl uppercase tracking-widest shadow-2xl hover:from-primary/90 hover:to-accent"
          >
            Explore All Services
            <ArrowRight size={28} />
          </a>
        </div>
      </div>
    </section>
  )
}
