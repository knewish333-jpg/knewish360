"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactBanner from "@/components/contact-banner"
import { Zap, Home, Sun, Wrench, Truck, Settings, CheckCircle } from "lucide-react"

const allServices = [
  {
    icon: Truck,
    title: "Office & Home Relocation",
    color: "from-primary to-blue-600",
    description: "We provide seamless moving and relocation services for residential and commercial properties.",
    features: [
      "Professional packing and unpacking",
      "Safe transportation of valuables",
      "Storage solutions available",
      "Local and long-distance moves",
      "Fully insured services",
      "24/7 customer support",
    ],
  },
  {
    icon: Sun,
    title: "Solar Installation",
    color: "from-secondary to-orange-500",
    description: "Transform your energy consumption with our state-of-the-art solar panel installation.",
    features: [
      "Energy audit and consultation",
      "High-efficiency solar panels",
      "Professional installation",
      "Government incentives guidance",
      "Maintenance and monitoring",
      "20+ year warranty",
    ],
  },
  {
    icon: Home,
    title: "Home Renovations",
    color: "from-accent to-yellow-500",
    description: "Complete renovation services to modernize and enhance your living spaces.",
    features: [
      "Interior & exterior renovations",
      "Kitchen and bathroom remodels",
      "Custom design services",
      "Quality material sourcing",
      "Project management",
      "Timeline guarantee",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Services",
    color: "from-blue-500 to-cyan-500",
    description: "Professional electrical installation, repairs, and maintenance for all property types.",
    features: [
      "Residential wiring",
      "Commercial installations",
      "Safety inspections",
      "Smart home automation",
      "Emergency repairs",
      "Licensed electricians",
    ],
  },
  {
    icon: Wrench,
    title: "AC Repair & Maintenance",
    color: "from-purple-500 to-pink-500",
    description: "Expert air conditioning repair, servicing, and maintenance year-round.",
    features: [
      "Preventive maintenance plans",
      "Emergency AC repair",
      "Unit installation",
      "Seasonal servicing",
      "Energy efficiency upgrades",
      "Same-day service available",
    ],
  },
  {
    icon: Settings,
    title: "Additional Services",
    color: "from-slate-500 to-gray-600",
    description: "Comprehensive range of additional services tailored to your specific needs.",
    features: [
      "Plumbing solutions",
      "Roofing services",
      "Pest control",
      "Security systems",
      "Cleaning services",
      "Custom solutions",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="w-full overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in slide-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Knewish 360 Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of professional services designed to meet all your home and business needs.
              From relocation to solar installation, we've got you covered 360°.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="fade-in group" style={{ animationDelay: `${index * 0.08}s` }}>
                  <div className="h-full bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div
                      className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} mb-6 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon size={32} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle size={20} className="text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
                      Contact Us
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ContactBanner />
      <Footer />
    </main>
  )
}
