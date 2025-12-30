"use client"

import { Phone, Mail } from "lucide-react"

export default function CTA() {
  return (
    <section id="contact-section" className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-primary to-secondary rounded-2xl p-8 md:p-16 text-center fade-in relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">Let's Work Together</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-12 leading-relaxed">
              Discover how Knewish 360 can handle your complete service needs with professional expertise and
              dedication. Serving Karachi with pride.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+921234567890"
                className="w-full sm:w-auto px-8 py-4 bg-primary-foreground text-primary rounded-lg font-bold text-lg hover:bg-secondary hover:text-primary-foreground transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Us Now
              </a>
              <a
                href="mailto:info@knewish360.com"
                className="w-full sm:w-auto px-8 py-4 border-2 border-primary-foreground text-primary-foreground rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Send Email
              </a>
            </div>

            <p className="text-sm text-primary-foreground/80 mt-8">Available 24/7 • Karachi-Based • Rapid Response</p>
          </div>
        </div>
      </div>
    </section>
  )
}
