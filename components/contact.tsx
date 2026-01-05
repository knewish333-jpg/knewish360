"use client"

import { MessageCircle, Phone, MapPin, ArrowRight } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useContactModal } from "@/components/contact-modal"

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver()
  const { openModal } = useContactModal()

  return (
    <section
      ref={ref}
      id="contact"
      className={`py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/20 to-background transition-all duration-1000 ${
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
          <h2 className="text-section-title text-foreground mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lead max-w-2xl mx-auto text-xl leading-relaxed">
            Get in touch with our expert team for a personalized consultation and discover how we can help you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: MessageCircle,
              title: "WhatsApp Chat",
              desc: "Get instant response from our team. Available 24/7 for your queries.",
              buttonText: "Chat on WhatsApp",
              bgColor: "#25D366",
            },
            {
              icon: Phone,
              title: "Phone Call",
              desc: "Speak directly with our specialists and discuss your requirements.",
              buttonText: "+92 300 462 7820",
              bgColor: "#0d9488",
            },
            {
              icon: MapPin,
              title: "Visit Us",
              desc: "Come visit our office and meet our team in person.",
              location: "Islamabad, Pakistan",
            },
          ].map((card, index) => {
            const IconComponent = card.icon
            return (
              <div
                key={index}
                className={`group bg-card border-2 border-border rounded-2xl p-10 text-center hover:shadow-2xl hover:border-primary/50 transition-all duration-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="w-20 h-20 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-primary/30 transition-colors duration-300">
                  <IconComponent className="w-10 h-10 text-primary group-hover:scale-125 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed">{card.desc}</p>
                {card.location ? (
                  <p className="font-bold text-foreground text-lg">{card.location}</p>
                ) : (
                  <button
                    onClick={openModal}
                    className={`inline-flex items-center gap-3 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-xl text-base uppercase tracking-wider`}
                    style={{
                      backgroundColor: card.bgColor,
                    }}
                  >
                    <IconComponent size={22} />
                    {card.buttonText}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <div
          className={`bg-gradient-to-r from-primary via-primary/90 to-accent rounded-3xl p-16 text-center transition-all duration-700 shadow-2xl ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
          }`}
        >
          <h3 className="text-5xl sm:text-6xl font-heading font-black text-primary-foreground mb-6 tracking-tight">
            Don't Wait to Get Started
          </h3>
          <p className="text-primary-foreground/95 mb-10 max-w-2xl mx-auto text-xl leading-relaxed font-bold">
            Our expert team is ready to discuss your project and provide a free consultation. Reach out to us today and
            take the first step towards transforming your space.
          </p>
          <button
            onClick={openModal}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-accent to-yellow-500 text-foreground px-18 py-8 rounded-3xl font-heading font-black text-2xl hover:from-yellow-400 hover:to-accent transition-all duration-300 shadow-2xl hover:shadow-2xl hover:scale-110 uppercase tracking-wider"
          >
            <MessageCircle size={32} />
            Book Free Consultation Now
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
