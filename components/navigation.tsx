"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-xl z-50 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <a
            href="/"
            className="flex items-center gap-3 animate-fade-in hover:opacity-80 transition-opacity"
          >
            <img
              src="/knewish360-logo.png"
              alt="Knewish360 Logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {[
              { label: "Services", id: "services" },
              { label: "More Services", href: "/services" },
              { label: "Portfolio", id: "portfolio" },
              { label: "About", id: "about" },
              { label: "Testimonials", id: "testimonials" },
              { label: "FAQs", id: "faq" },
              { label: "Contact", id: "contact" },
            ].map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-semibold text-sm uppercase tracking-wider hover:scale-105"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-semibold text-sm uppercase tracking-wider hover:scale-105"
                >
                  {item.label}
                </button>
              )
            )}
            <a
              href="https://wa.me/923004627820?text=Hello%20Knewish360%2C%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-10 py-3 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-110 font-bold uppercase tracking-widest text-sm shadow-lg"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-6 animate-slide-down">
            <div className="flex flex-col gap-4 divide-y divide-border">
              {[
                { label: "Services", id: "services" },
                { label: "More Services", href: "/services" },
                { label: "Portfolio", id: "portfolio" },
                { label: "About", id: "about" },
                { label: "Testimonials", id: "testimonials" },
                { label: "FAQs", id: "faq" },
                { label: "Contact", id: "contact" },
              ].map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors py-3 font-semibold uppercase tracking-wider"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-primary transition-colors text-left py-3 font-semibold uppercase tracking-wider"
                  >
                    {item.label}
                  </button>
                )
              )}
              <a
                href="https://wa.me/923004627820?text=Hello%20Knewish360%2C%20I%20would%20like%20to%20book%20a%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-4 rounded-xl hover:shadow-lg w-full text-center font-bold uppercase tracking-widest mt-4 text-sm"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
