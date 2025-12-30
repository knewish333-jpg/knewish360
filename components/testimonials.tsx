"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Muhammad Hassan",
    company: "UIT University",
    role: "Facilities Manager",
    content:
      "Knewish 360 handled our complete office relocation with exceptional professionalism. The entire process was smooth, on-time, and within budget. Their team showed great attention to detail.",
    rating: 5,
    avatar: "MH",
  },
  {
    name: "Fatima Khan",
    company: "ILMA University",
    role: "Operations Director",
    content:
      "Outstanding electrical and AC maintenance services. Knewish 360 keeps all our facilities running perfectly. Their response time is impressive and their technicians are highly skilled.",
    rating: 5,
    avatar: "FK",
  },
  {
    name: "Arjun Sharma",
    company: "Cosmopolitan Grammar School",
    role: "Principal",
    content:
      "The renovation work at our school was exceptional. Knewish 360 transformed our facilities while ensuring minimal disruption. Great communication and professional execution throughout.",
    rating: 5,
    avatar: "AS",
  },
  {
    name: "Ahmed Malik",
    company: "Gym Flex",
    role: "Owner",
    content:
      "Knewish 360 installed our AC systems and handles all maintenance. Their expertise and reliability have made a huge difference to our gym operations. Highly recommended!",
    rating: 5,
    avatar: "AM",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-5xl sm:text-6xl font-black mb-6 text-balance">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across Karachi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 fade-in card-hover group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed italic text-lg">"{testimonial.content}"</p>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
