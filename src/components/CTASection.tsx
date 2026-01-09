import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 326-2020407",
    href: "tel:+9232632020407",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 326-2020407",
    href: "https://wa.me/9232632020407",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@knewish360.com",
    href: "mailto:hello@knewish360.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    href: "https://maps.google.com/?q=Karachi,Pakistan",
  },
];

const GOOGLE_FORM_URL = "https://forms.google.com/your-form-url";

const CTASection = () => {
  const openGoogleForm = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(174_72%_45%/0.08),transparent_50%)]" />
      <div className="absolute top-1/2 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 md:mb-6">
              Ready to Start Your
              <span className="text-primary"> Project?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
              Fill out our quick form and our team will get back to you within
              24 hours with a free consultation and quote.
            </p>

            {/* Contact Info - Mobile Optimized Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 p-3 md:p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xs text-muted-foreground">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium text-xs md:text-sm group-hover:text-primary transition-colors duration-300 break-all sm:break-normal">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="p-4 md:p-6 bg-card rounded-lg border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center animate-glow-pulse">
                  <ArrowRight className="text-primary" size={24} />
                </div>
                <div className="text-left">
                  <div className="text-foreground font-semibold">
                    Free Consultation
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Get a detailed quote at no cost
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="bg-card p-6 md:p-10 rounded-lg border border-border text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
              <ExternalLink className="text-primary" size={32} />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
              Request a Quote
            </h3>
            <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
              Click the button below to fill out our quick form. We'll review
              your requirements and get back to you with a customized solution.
            </p>

            <Button
              onClick={openGoogleForm}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 md:py-6 text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
            >
              Fill Out the Form
              <ExternalLink
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </Button>

            <p className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground">
              ✓ Free Quote &nbsp; ✓ No Obligation &nbsp; ✓ 24hr Response
            </p>

            {/* Alternative Contact */}
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Prefer to talk directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+923211234567">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto border-border hover:border-primary hover:text-primary"
                  >
                    <Phone size={16} className="mr-2" />
                    Call Now
                  </Button>
                </a>
                <a
                  href="https://wa.me/923211234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto border-border hover:border-primary hover:text-primary"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
