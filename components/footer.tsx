"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="font-bold text-lg">Knewish360</span>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Transforming spaces with professional relocation, renovation, and
              maintenance solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Office Relocation",
                "Home Relocation",
                "Solar Installation",
                "Home Renovation",
                "Electrical Services",
                "AC Repair",
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSmoothScroll("services")}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", id: "about" },
                { label: "Portfolio", id: "portfolio" },
                { label: "Testimonials", id: "testimonials" },
                { label: "FAQs", id: "faq" },
                { label: "Contact", id: "contact" },
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSmoothScroll(item.id)}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold mb-6">Contact Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-secondary-foreground/80 text-sm">WhatsApp</p>
                <a
                  href="https://wa.me/923004627820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                >
                  +92 300 462 7820
                </a>
              </div>
              <div>
                <p className="text-secondary-foreground/80 text-sm">Phone</p>
                <a
                  href="tel:+923004627820"
                  className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                >
                  +92 300 462 7820
                </a>
              </div>
              <div>
                <p className="text-secondary-foreground/80 text-sm">Location</p>
                <p className="text-primary font-medium">Islamabad, Pakistan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 py-8">
          {/* Social Links */}
          <div className="flex items-center justify-between flex-col sm:flex-row gap-6">
            <p className="text-secondary-foreground/80">
              © 2025 Knewish360. All rights reserved.
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/1D3hXWRnc5/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/kne.wish360?igsh=aHF0M3M3YzI2ZDdw",
                },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110"
                  >
                    <IconComponent
                      size={18}
                      className="text-primary group-hover:text-white transition-colors duration-300"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
