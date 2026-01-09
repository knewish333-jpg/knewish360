import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

interface FooterProps {
  onGetQuote: () => void;
}

const Footer = ({ onGetQuote }: FooterProps) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "FAQs", href: "#faqs" },
  ];

  const services = [
    "Relocation Services",
    "Solar Panels Cleaning Services",
    "Home Renovations",
    "Electrical Services",
    "AC Repair",
    "General Maintenance",
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>

      <div className="container mx-auto px-4 md:px-6 pt-16 md:pt-20 pb-8 md:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Logo size="md" />
            </div>
            <p className="text-muted-foreground mt-3 md:mt-4 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">
              Your trusted partner for comprehensive home and office solutions
              in Karachi, Pakistan.
            </p>

            {/* Contact Quick Links */}
            <div className="flex flex-col gap-2">
              <a
                href="tel:+923211234567"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start"
              >
                <Phone size={14} />
                +92 326-2020407
              </a>
              <a
                href="mailto:hello@knewish360.com"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors justify-center md:justify-start"
              >
                <Mail size={14} />
                hello@knewish360.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-foreground font-semibold mb-4 md:mb-6 text-sm md:text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs md:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs md:text-sm"
                >
                  All Services
                </button>
              </li>
              <li>
                <button
                  onClick={onGetQuote}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xs md:text-sm"
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-foreground font-semibold mb-4 md:mb-6 text-sm md:text-base">
              Services
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate("/services")}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <h4 className="text-foreground font-semibold mb-4 md:mb-6 text-sm md:text-base">
              Contact Info
            </h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="text-muted-foreground">
                <span className="text-foreground block">Location:</span>
                <a
                  href="https://maps.google.com/?q=Karachi,Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <MapPin size={12} />
                  Karachi, Pakistan
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="text-foreground block">Email:</span>
                <a
                  href="mailto:hello@knewish360.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@knewish360.com
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="text-foreground block">Phone:</span>
                <a
                  href="tel:+923211234567"
                  className="hover:text-primary transition-colors"
                >
                  +92 326-2020407
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="text-foreground block">WhatsApp:</span>
                <a
                  href="https://wa.me/923211234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +92 326-2020407
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="text-foreground block">Hours:</span>
                Mon - Sat: 9AM - 8PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-muted-foreground text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Knewish360. All rights reserved. |
            Karachi, Pakistan
          </p>
          <button
            onClick={onGetQuote}
            className="text-primary hover:text-primary/80 transition-colors text-xs md:text-sm font-medium"
          >
            Contact Us →
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
