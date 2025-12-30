"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"
import KnewishLogo from "./logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.getElementById(href.substring(1))
      element?.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-background/95 backdrop-blur-md border-b border-border/30"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex items-center justify-end py-2 text-xs border-b border-border/20">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
            >
              <Phone size={14} />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
              <MapPin size={14} />
              <span>Knewish 360 Service Center</span>
            </a>
          </div>
        </div>

        {/* Main navbar */}
        <div className="py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
            <div className="relative">
              <KnewishLogo />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-black text-lg leading-none text-foreground">Knewish 360</span>
              <span className="text-xs text-muted-foreground font-medium">Complete Service Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="#services-section"
              onClick={(e) => handleSmoothScroll(e, "#services-section")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
            >
              All Services
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            <Link
              href="#gallery-section"
              onClick={(e) => handleSmoothScroll(e, "#gallery-section")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
            >
              Gallery
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            <Link
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            <Link
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, "#testimonials")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </div>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })}
              className="hidden lg:inline-flex px-6 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 text-sm"
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/30 bg-background/98 backdrop-blur-md animate-in slide-in-from-top-4 duration-300">
            <div className="px-4 py-6 space-y-3">
              <Link
                href="#services-section"
                onClick={(e) => handleSmoothScroll(e, "#services-section")}
                className="block px-4 py-2.5 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200 font-medium"
              >
                Services
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200 font-medium"
              >
                All Services
              </Link>
              <Link
                href="#gallery-section"
                onClick={(e) => handleSmoothScroll(e, "#gallery-section")}
                className="block px-4 py-2.5 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200 font-medium"
              >
                Gallery
              </Link>
              <Link
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "#about")}
                className="block px-4 py-2.5 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200 font-medium"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                onClick={(e) => handleSmoothScroll(e, "#testimonials")}
                className="block px-4 py-2.5 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200 font-medium"
              >
                Testimonials
              </Link>
              <button
                onClick={() => {
                  document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
                className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-4"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
