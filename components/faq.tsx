"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What areas does Knewish 360 serve?",
    answer:
      "Knewish 360 provides services across residential and commercial properties within our service region. We offer both local and long-distance relocation services. Contact us to confirm availability in your area.",
  },
  {
    question: "Are your services insured?",
    answer:
      "Yes, all Knewish 360 services are fully insured. We provide comprehensive coverage for all your belongings and property during our service delivery to ensure complete peace of mind.",
  },
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 2-4 weeks in advance for most services. However, we also offer emergency services and same-day availability for AC repairs and other urgent needs.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Knewish 360 offers free consultations and detailed quotes for all our services. Our team will assess your needs and provide transparent pricing without any hidden charges.",
  },
  {
    question: "What makes Knewish 360 different?",
    answer:
      "Our comprehensive 360° approach means we handle all your needs in one place. We combine professional expertise, cutting-edge technology, customer-centric service, and competitive pricing to deliver exceptional value.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment options and financing plans for larger projects like solar installations and home renovations. Contact our team to discuss options that fit your budget.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "All our services come with warranties. Solar installations include 20+ year warranties, renovations have project guarantees, and all other services include satisfaction guarantees.",
  },
  {
    question: "Can I track my moving service in real-time?",
    answer:
      "Yes, for relocation services, we provide real-time tracking so you can monitor your belongings throughout the moving process. Our transparent approach ensures you're always informed.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="faq" className="w-full py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions about Knewish 360 services</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="fade-in group" style={{ animationDelay: `${index * 0.05}s` }}>
              <button onClick={() => toggleFAQ(index)} className="w-full text-left">
                <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg group-hover:bg-primary/5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={24}
                      className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="bg-muted/50 border border-t-0 border-border rounded-b-lg p-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center fade-in">
          <p className="text-muted-foreground mb-4">Didn't find your answer?</p>
          <button
            onClick={scrollToContact}
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
