"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Zap, Home, Sun, Wrench, BoxIcon, Shield, Hammer, Lightbulb } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useContactModal } from "@/components/contact-modal"

const allServices = [
  {
    icon: BoxIcon,
    title: "Office Relocation",
    description: "Seamless office moving with minimal downtime and professional handling of all equipment.",
    details:
      "We specialize in corporate relocations with minimal business disruption. Our team ensures all office equipment, furniture, and sensitive documents are safely transported and set up at your new location.",
    color: "from-blue-500 to-cyan-500",
    features: ["Equipment handling", "Minimal downtime", "Professional team", "Secure transport"],
  },
  {
    icon: Home,
    title: "Home Relocation",
    description: "Complete residential moving services with care for your belongings and peace of mind.",
    details:
      "From packing to unpacking, we handle every aspect of your residential move with utmost care. Our experienced team ensures your belongings arrive safely and on time.",
    color: "from-cyan-500 to-teal-500",
    features: ["Packing services", "Safe transport", "Unpacking", "Careful handling"],
  },
  {
    icon: Sun,
    title: "Solar Panel Installation",
    description: "Professional solar panel installation for sustainable energy solutions.",
    details:
      "Harness the power of renewable energy with our expert solar installation services. We handle everything from assessment to installation and maintenance.",
    color: "from-teal-500 to-green-500",
    features: ["Site assessment", "Professional installation", "Maintenance", "Warranty support"],
  },
  {
    icon: Wrench,
    title: "Home Renovation",
    description: "Transform your space with expert renovation services and quality craftsmanship.",
    details:
      "Complete home renovation services including kitchen remodeling, bathroom updates, flooring, and more. We bring your vision to life with professional craftsmanship.",
    color: "from-teal-500 to-blue-500",
    features: ["Design consultation", "Quality materials", "Expert craftsmanship", "Timeline adherence"],
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "Safe and reliable electrical installation, repair, and maintenance services.",
    details:
      "Licensed electricians providing comprehensive electrical services for homes and offices. From wiring to panel upgrades, we ensure safety and compliance.",
    color: "from-amber-500 to-orange-500",
    features: ["Licensed electricians", "Safety certified", "Maintenance plans", "24/7 support"],
  },
  {
    icon: Shield,
    title: "AC Repair & Maintenance",
    description: "Expert cooling system repair, maintenance, and installation for your comfort.",
    details:
      "Professional AC services including installation, repair, and regular maintenance to keep your cooling systems running efficiently throughout the year.",
    color: "from-blue-500 to-cyan-500",
    features: ["Installation", "Repair services", "Regular maintenance", "Emergency support"],
  },
  {
    icon: Hammer,
    title: "Interior Designing",
    description: "Creative and functional interior design solutions tailored to your style.",
    details:
      "Transform your space with our expert interior design team. We create beautiful, functional spaces that reflect your personality and lifestyle.",
    color: "from-purple-500 to-pink-500",
    features: ["Space planning", "Color consultation", "Furniture selection", "3D visualization"],
  },
  {
    icon: Lightbulb,
    title: "Lighting Solutions",
    description: "Modern lighting installations for enhanced ambiance and energy efficiency.",
    details:
      "Professional lighting design and installation for both residential and commercial spaces. We offer energy-efficient solutions that enhance aesthetics and functionality.",
    color: "from-yellow-500 to-amber-500",
    features: ["LED installation", "Smart lighting", "Design consultation", "Energy saving"],
  },
]

function ServiceCard({ service, index, isVisible, openModal }) {
  const IconComponent = service.icon

  return (
    <div
      className={`group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
      }}
    >
      {/* Header with icon */}
      <div className={`bg-gradient-to-br ${service.color} p-8 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
        <div className="relative flex items-center justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">{service.title}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
          </div>
          <IconComponent className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform duration-500 flex-shrink-0 ml-4" />
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <p className="text-muted-foreground mb-6 leading-relaxed text-base">{service.details}</p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-heading font-semibold text-foreground mb-4 text-lg">Key Features:</h4>
          <div className="grid grid-cols-2 gap-3">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                <span className="text-sm text-muted-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={openModal}
          className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 rounded-xl hover:from-primary/90 hover:to-yellow-500 transition-all duration-300 hover:shadow-lg hover:scale-105 inline-block text-center font-heading font-black text-lg uppercase tracking-wide shadow-md"
        >
          Book Consultation
        </button>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const { ref, isVisible } = useIntersectionObserver()
  const { openModal } = useContactModal()

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div
            ref={ref}
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-hero text-foreground mb-6">All Our Services</h1>
            <p className="text-lead max-w-4xl mx-auto mb-8">
              From home making to shifting, Knewish360 stays with the client at every step of their journey.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent mx-auto"></div>
          </div>

          {/* Company Objective */}
          <div className="bg-card border border-primary/20 rounded-xl p-8 sm:p-12 mb-20 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">Our Commitment</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <span className="text-primary font-heading font-bold text-xl">
                "From home making to shifting, this company stays with the client."
              </span>{" "}
              At Knewish360, we believe that every project is more than just a service—it's a partnership. Whether
              you're moving to a new home, renovating your space, or installing sustainable solutions, we're committed
              to being with you at every step, ensuring excellence and peace of mind throughout the entire journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} isVisible={isVisible} openModal={openModal} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h3 className="text-section-title text-foreground mb-6">Ready to Get Started?</h3>
            <p className="text-lead max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and let's discuss how Knewish360 can help with your next project.
            </p>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-14 py-6 rounded-2xl hover:from-primary/90 hover:to-yellow-500 transition-all duration-300 hover:shadow-lg hover:scale-110 font-heading font-black text-xl inline-block uppercase tracking-wide shadow-lg"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
