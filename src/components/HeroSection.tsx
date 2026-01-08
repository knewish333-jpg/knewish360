import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onGetQuote: () => void;
}

const HeroSection = ({ onGetQuote }: HeroSectionProps) => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Knewish360 Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60 md:to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 md:mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-medium">Your 360° Solution Partner in Karachi</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Complete Home &<br />
            <span className="text-primary">Office Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 opacity-0 animate-fade-in-up px-2 md:px-0" style={{ animationDelay: "0.6s" }}>
            From relocation to renovation, solar installation to electrical services — 
            we handle everything so you can focus on what matters most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button
              onClick={onGetQuote}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              className="px-6 md:px-8 py-5 md:py-6 text-base md:text-lg border-border hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              <Phone className="mr-2" size={18} />
              View Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pt-8 md:pt-16 border-t border-border/50 opacity-0 animate-fade-in-up max-w-lg mx-auto lg:mx-0 lg:max-w-none" style={{ animationDelay: "1s" }}>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Projects</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Satisfaction</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in hidden md:block" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
