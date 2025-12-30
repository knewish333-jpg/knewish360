"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="fade-in">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </div>
              <span className="font-bold text-xl">Knewish 360</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for complete home and business solutions. Professional services spanning relocation,
              solar installation, renovations, electrical work, and AC maintenance.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: MessageCircle, href: "https://wa.me/923000000000" },
              ].map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.icon === MessageCircle ? "_blank" : undefined}
                    rel={social.icon === MessageCircle ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div className="fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {["Relocation", "Solar Installation", "Renovations", "Electrical", "AC Services"].map((item, idx) => (
                <li key={idx}>
                  <a href="/services" className="text-gray-400 hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: "Services", href: "/services" },
                { name: "Home", href: "/" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-gray-400 hover:text-primary transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <Phone size={18} className="text-primary" />
                <span>+1 (234) 567-890</span>
              </a>
              <a
                href="mailto:info@knewish360.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <Mail size={18} className="text-primary" />
                <span>info@knewish360.com</span>
              </a>
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-200"
              >
                <MessageCircle size={18} className="text-primary" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">© 2025 Knewish 360. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
