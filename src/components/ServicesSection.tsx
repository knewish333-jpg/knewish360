import { useNavigate } from "react-router-dom";
import { Truck, Sun, Home, Zap, Wind, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Relocation Services",
    description:
      "Seamless home and office relocations with professional packing, transport, and setup.",
    features: ["Packing & Unpacking", "Secure Transport", "Office Setup"],
  },
  {
    icon: Sun,
    title: "Solar Panels Cleaning Services",
    description:
      "Expert solar panel cleaning to maximize efficiency and energy output.",
    features: ["Site Assessment", "Panel Cleaning", "Grid Connection"],
  },
  {
    icon: Home,
    title: "Home Renovations",
    description:
      "Transform your space with our comprehensive renovation services.",
    features: ["Interior Design", "Kitchen & Bath", "Full Remodeling"],
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description:
      "Complete electrical solutions for residential and commercial properties.",
    features: ["Wiring & Rewiring", "Panel Upgrades", "Safety Inspections"],
  },
  {
    icon: Wind,
    title: "AC Repair",
    description:
      "Keep your space comfortable year-round with our HVAC services.",
    features: ["AC Installation", "Regular Maintenance", "Emergency Repairs"],
  },
  {
    icon: Wrench,
    title: "General Maintenance",
    description:
      "Comprehensive property maintenance services for your home or office.",
    features: ["Plumbing", "Carpentry", "Painting"],
  },
];

interface ServicesSectionProps {
  onGetQuote: () => void;
}

const ServicesSection = ({ onGetQuote }: ServicesSectionProps) => {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(174_72%_45%/0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 md:mb-6">
            360° Solutions for Every Need
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-4 md:px-0">
            We provide comprehensive services designed to make your life easier.
            From moving to maintenance, we handle it all.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-5 md:p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                  <service.icon className="text-primary" size={24} />
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
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <button
                  onClick={onGetQuote}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium group/link"
                >
                  Get Quote
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-16 text-center">
          <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
            We offer 9 different services to meet all your needs!
          </p>
          <Button
            onClick={() => navigate("/services")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            View All Services
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
