"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export default function FAQ() {
  const { ref, isVisible } = useIntersectionObserver()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does a typical office relocation take?",
      answer:
        "Most office relocations take 2-5 days depending on the size of your office and the complexity of the move. We work around your schedule to minimize disruption to your business operations.",
    },
    {
      question: "Do you provide a warranty on renovation work?",
      answer:
        "Yes, we provide a comprehensive 2-year warranty on all renovation work, including materials and labor. This gives you complete peace of mind about the quality of our work.",
    },
    {
      question: "What is the process for solar panel installation?",
      answer:
        "Our solar installation process includes site survey, design consultation, installation, and system testing. We also help you understand maintenance and provide ongoing support. The entire process typically takes 1-2 weeks.",
    },
    {
      question: "Are your electricians licensed and insured?",
      answer:
        "Absolutely. All our electricians are fully licensed, certified, and insured. We comply with all local electrical codes and safety regulations to ensure your complete safety.",
    },
    {
      question: "How often should AC maintenance be performed?",
      answer:
        "We recommend AC maintenance at least twice a year - before summer and before winter. Regular maintenance ensures optimal performance, extends the lifespan of your unit, and helps prevent costly repairs.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we offer 24/7 emergency services for AC repair, electrical issues, and other urgent needs. Our rapid response team is always ready to help. Charges may apply for after-hours service.",
    },
  ]

  return (
    <section
      ref={ref}
      id="faq"
      className={`py-28 px-4 sm:px-6 lg:px-8 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-section-title text-foreground mb-6">Frequently Asked Questions</h2>
          <p className="text-lead text-xl max-w-2xl mx-auto">
            Find answers to common questions about our services. Don't see what you're looking for? Contact us via
            WhatsApp for instant support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-8 hover:bg-muted/50 transition-colors duration-200 group"
              >
                <h3 className="text-xl font-bold text-foreground text-left group-hover:text-primary transition-colors duration-300">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={28}
                  className={`flex-shrink-0 text-primary transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8 animate-slide-down">
                  <div className="border-t-2 border-border pt-8">
                    <p className="text-muted-foreground leading-relaxed text-lg font-medium">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`p-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-3xl text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
          }`}
        >
          <p className="text-foreground mb-6 text-2xl font-heading font-black uppercase tracking-wider">
            Still have questions? We're here to help!
          </p>
          <a
            href="https://wa.me/923004627820?text=Hello%20Knewish360%2C%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-primary-foreground px-16 py-7 rounded-3xl font-heading font-black text-2xl uppercase tracking-widest hover:shadow-2xl transition-all duration-300 hover:scale-110 shadow-2xl hover:from-primary/90 hover:to-yellow-500"
          >
            <MessageCircle size={28} />
            Chat on WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  )
}
