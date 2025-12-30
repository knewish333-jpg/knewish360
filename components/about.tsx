'use client'

export default function About() {
  const stats = [
    { number: "5000+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" }
  ]

  const values = [
    { title: "Professional Excellence", description: "Highly trained and certified technicians" },
    { title: "Customer First", description: "Your satisfaction is our top priority" },
    { title: "Quality Guaranteed", description: "Comprehensive warranties on all services" },
    { title: "Transparent Pricing", description: "No hidden costs or surprise charges" }
  ]

  return (
    <section id="about" className="w-full py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Knewish 360</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Knewish 360 is your comprehensive solution provider for all home and business service needs. We specialize in relocation services, solar panel installation, home renovations, electrical services, and AC maintenance—delivering excellence across every service category.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years in the industry, we've built our reputation on quality workmanship, transparent communication, and unwavering customer satisfaction. Our 360° approach means we handle every aspect of your project with meticulous attention to detail.
            </p>

            <div className="space-y-4">
              {[
                "Licensed and Insured Professionals",
                "Transparent Pricing & No Hidden Costs",
                "Comprehensive Warranty on All Services",
                "Fast Response Times & Emergency Support"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 fade-in" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-card border border-border rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center mb-12 fade-in">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="fade-in text-center" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
