import { Link } from "react-router-dom";
import {
  Truck,
  Sun,
  Home,
  Zap,
  Wind,
  Wrench,
  PaintBucket,
  Droplets,
  Shield,
  ArrowLeft,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import QuoteModal from "@/components/QuoteModal";
import Logo from "@/components/Logo";

const allServices = [
  {
    icon: Truck,
    title: "Relocation Services",
    description:
      "Seamless home and office relocations with professional packing, transport, and setup services. We handle everything from small apartments to large corporate offices.",
    features: [
      "Packing & Unpacking",
      "Secure Transport",
      "Office Setup",
      "Furniture Assembly",
      "Insurance Coverage",
    ],
  },
  {
    icon: Sun,
    title: "Solar Panel Cleaning Services",
    description:
      "Harness the power of the sun with our expert solar panel cleaning and maintenance services. Reduce your electricity bills and carbon footprint.",
    features: [
      "Site Assessment",
      "Panel Cleaning",
      "Grid Connection",
      "Maintenance Plans",
      "Net Metering Setup",
    ],
  },
  {
    icon: Home,
    title: "Home Renovations",
    description:
      "Transform your space with our comprehensive renovation services from design to execution. We bring your vision to life with quality craftsmanship.",
    features: [
      "Interior Design",
      "Kitchen & Bath",
      "Full Remodeling",
      "Flooring & Tiling",
      "Custom Cabinetry",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description:
      "Complete electrical solutions for residential and commercial properties with certified experts. Safety and quality are our top priorities.",
    features: [
      "Wiring & Rewiring",
      "Panel Upgrades",
      "Safety Inspections",
      "LED Installation",
      "Emergency Repairs",
    ],
  },
  {
    icon: Wind,
    title: "AC Repair & Maintenance",
    description:
      "Keep your space comfortable year-round with our HVAC repair and maintenance services. We service all major brands and models.",
    features: [
      "AC Installation",
      "Regular Maintenance",
      "Emergency Repairs",
      "Gas Refilling",
      "Duct Cleaning",
    ],
  },
  {
    icon: Wrench,
    title: "General Maintenance",
    description:
      "Comprehensive property maintenance services to keep your home or office in perfect condition. One call for all your maintenance needs.",
    features: [
      "Plumbing",
      "Carpentry",
      "Door/Window Repairs",
      "Lock Installation",
      "General Fixes",
    ],
  },
  {
    icon: PaintBucket,
    title: "Painting Services",
    description:
      "Professional interior and exterior painting services to give your space a fresh new look. We use premium quality paints and finishes.",
    features: [
      "Interior Painting",
      "Exterior Painting",
      "Wall Texturing",
      "Waterproofing",
      "Color Consultation",
    ],
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description:
      "Expert plumbing solutions for all your water system needs. From leak repairs to complete bathroom installations.",
    features: [
      "Leak Repairs",
      "Pipe Installation",
      "Water Heater",
      "Bathroom Fitting",
      "Drainage Solutions",
    ],
  },
  {
    icon: Shield,
    title: "Security Systems",
    description:
      "Protect your home and business with our comprehensive security system cleaning and monitoring services.",
    features: [
      "CCTV Installation",
      "Alarm Systems",
      "Access Control",
      "Intercom Systems",
      "Remote Monitoring",
    ],
  },
];

const ServicesPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/">
              <Logo size="sm" />
            </Link>

            <div className="flex items-center gap-2 md:gap-4">
              <Link to="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border hover:bg-secondary text-xs md:text-sm"
                >
                  <ArrowLeft className="mr-1 md:mr-2" size={16} />
                  <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </Link>
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs md:text-sm"
              >
                <Phone className="mr-1 md:mr-2" size={16} />
                <span className="hidden sm:inline">Get a Quote</span>
                <span className="sm:hidden">Quote</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(174_72%_45%/0.08),transparent_50%)]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-xs md:text-sm uppercase tracking-wider">
              All Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-4 md:mb-6">
              Our Complete Range of
              <span className="text-primary"> Services</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl px-4 md:px-0">
              From relocation to renovation, we offer 360° solutions for all
              your home and office needs. Professional service, guaranteed
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {allServices.map((service, index) => (
              <div
                key={index}
                className="group relative p-5 md:p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                    <service.icon className="text-primary" size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 md:mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-xs md:text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    onClick={() => setIsQuoteModalOpen(true)}
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Can't find exactly what you're looking for? Contact us and we'll
            create a custom package tailored to your specific needs.
          </p>
          <Button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg"
          >
            Contact Us Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center mb-4">
            <Logo size="sm" />
          </div>
          <p className="text-muted-foreground text-xs md:text-sm">
            © {new Date().getFullYear()} Knewish360. All rights reserved. |
            Karachi, Pakistan
          </p>
        </div>
      </footer>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </main>
  );
};

export default ServicesPage;
