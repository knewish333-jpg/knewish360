"use client"

import { Star, MessageCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver()

  const testimonials = [
    {
      name: "Faham",
      role: "Home Owner",
      content:
        "ASSALAMUALAAIKUM Faham kia Haat Hain? Or hari yi thank you so much o kapil service o understanding builtat acha kaami kar k kararaha that usse buhat ziada acha kaami kar k kararaha. Everything done like a breeze. Please contact knewish-360",
      rating: 5,
      isUrdu: true,
    },
    {
      name: "Faham Bhai",
      role: "Satisfied Client",
      content: "Thank you sooo much Faham bhai. You really made in life such a hectic task done like a breeze",
      rating: 5,
    },
    {
      name: "Faham",
      role: "Home Shifting Client",
      content: "Thanks Faham your help with Knewish360 home shifting made things simple for me.",
      rating: 5,
    },
    {
      name: "Ahmad Hassan",
      role: "Business Owner",
      company: "Tech Solutions",
      content:
        "Knewish360 handled our entire office relocation seamlessly. Their attention to detail and professionalism was outstanding. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <section
      ref={ref}
      id="testimonials"
      className={`py-28 px-4 sm:px-6 lg:px-8 bg-muted/10 transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-section-title text-foreground mb-6">What Our Clients Say</h2>
          <p className="text-lead max-w-3xl mx-auto text-xl">
            Real feedback from our valued clients who have transformed their spaces with Knewish360.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-card border-2 border-border rounded-2xl p-10 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Rating */}
              <div className="flex gap-2 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p
                className={`text-muted-foreground mb-8 leading-relaxed text-lg font-medium ${
                  testimonial.isUrdu ? "text-base italic" : ""
                }`}
              >
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-8 border-t-2 border-border">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  {testimonial.company && (
                    <p className="text-xs text-primary font-bold uppercase">{testimonial.company}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 p-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl border border-primary/20 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
          }`}
        >
          <div className="text-center">
            <p className="text-5xl font-heading font-bold text-primary mb-3">500+</p>
            <p className="text-muted-foreground font-semibold text-lg">Projects Completed</p>
          </div>
          <div className="text-center border-l-2 border-r-2 border-primary/20">
            <p className="text-5xl font-heading font-bold text-primary mb-3">4.9★</p>
            <p className="text-muted-foreground font-semibold text-lg">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-heading font-bold text-primary mb-3">2k+</p>
            <p className="text-muted-foreground font-semibold text-lg">Happy Clients</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/923004627820?text=Hello%20Knewish360%2C%20I%20would%20like%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-14 py-6 rounded-2xl font-bold text-lg uppercase tracking-widest hover:shadow-2xl transition-all duration-300 hover:scale-110 shadow-2xl"
          >
            <MessageCircle size={24} />
            Join Our Happy Clients
          </a>
        </div>
      </div>
    </section>
  )
}
