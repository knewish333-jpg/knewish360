"use client"

import { useInView } from "react-intersection-observer"

export default function Clients() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const clients = [
    { name: "UIT University", category: "Educational Institution", delay: "0s" },
    { name: "ILMA University", category: "Educational Institution", delay: "0.1s" },
    { name: "Cosmopolitan Grammar School", category: "Educational Institution", delay: "0.2s" },
    { name: "Gym Flex", category: "Fitness Center", delay: "0.3s" },
    { name: "Nodes Solutions", category: "Technology Company", delay: "0.4s" },
  ]

  return (
    <section id="clients" ref={ref} className="w-full py-24 bg-gradient-to-b from-background to-muted/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-block mb-6">
            <span className="px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide border border-primary/20">
              TRUSTED PARTNERS
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-foreground mb-6 text-balance">Organizations We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proud to have worked with leading organizations across education, fitness, and technology sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              style={{
                animationDelay: client.delay,
              }}
              className={`group relative p-8 bg-card rounded-2xl border border-border card-hover overflow-hidden ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 text-center space-y-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors duration-300 shadow-md">
                  <span className="text-2xl font-black text-primary">{client.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{client.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group hover:border-primary/50 transition-all duration-300">
            <p className="text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
              5+
            </p>
            <p className="text-foreground font-bold text-lg">Organizations Served</p>
          </div>
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 group hover:border-secondary/50 transition-all duration-300">
            <p className="text-5xl font-black text-secondary mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
              100%
            </p>
            <p className="text-foreground font-bold text-lg">Satisfaction Rate</p>
          </div>
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 group hover:border-accent/50 transition-all duration-300">
            <p className="text-5xl font-black text-accent mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
              7+
            </p>
            <p className="text-foreground font-bold text-lg">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
