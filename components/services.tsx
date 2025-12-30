"use client"

const services = [
  {
    title: "Office & Home Relocation",
    description: "Seamless moving and relocation services with professional handling of all your belongings.",
    color: "from-blue-500 to-blue-600",
    accent: "bg-blue-500/10",
    svgContent: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="50" height="50" rx="3" fill="currentColor" opacity="0.3" className="animate-pulse" />
        <rect
          x="50"
          y="15"
          width="40"
          height="55"
          rx="3"
          fill="currentColor"
          opacity="0.5"
          className="animate-bounce"
          style={{ animationDelay: "0.1s" }}
        />
        <path d="M 25 45 L 35 45 M 25 55 L 35 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M 60 35 L 75 35 M 60 50 L 75 50"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <circle
          cx="45"
          cy="75"
          r="4"
          fill="currentColor"
          className="animate-bounce"
          style={{ animationDelay: "0.2s" }}
        />
      </svg>
    ),
  },
  {
    title: "Solar Installation",
    description: "Transform your energy with state-of-the-art solar panel installation for homes and businesses.",
    color: "from-orange-500 to-orange-600",
    accent: "bg-orange-500/10",
    svgContent: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="30"
          r="12"
          fill="currentColor"
          className="animate-spin"
          style={{ animationDuration: "4s" }}
        />
        <line x1="50" y1="50" x2="50" y2="75" stroke="currentColor" strokeWidth="3" />
        <rect x="35" y="60" width="30" height="20" rx="2" fill="currentColor" opacity="0.5" className="animate-pulse" />
        <line x1="40" y1="65" x2="40" y2="75" stroke="white" strokeWidth="1.5" opacity="0.7" />
        <line x1="50" y1="65" x2="50" y2="75" stroke="white" strokeWidth="1.5" opacity="0.7" />
        <line x1="60" y1="65" x2="60" y2="75" stroke="white" strokeWidth="1.5" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Home Renovations",
    description: "Complete renovation services to modernize and enhance your living spaces.",
    color: "from-amber-500 to-amber-600",
    accent: "bg-amber-500/10",
    svgContent: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 20 80 L 20 30 L 50 15 L 80 30 L 80 80" stroke="currentColor" strokeWidth="2.5" />
        <rect x="35" y="40" width="15" height="20" fill="currentColor" opacity="0.4" className="animate-pulse" />
        <rect
          x="55"
          y="45"
          width="12"
          height="15"
          fill="currentColor"
          opacity="0.4"
          className="animate-pulse"
          style={{ animationDelay: "0.2s" }}
        />
        <path
          d="M 30 70 L 45 70 M 55 70 L 70 70"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-bounce"
          style={{ animationDelay: "0.1s" }}
        />
      </svg>
    ),
  },
  {
    title: "Electrical Services",
    description:
      "Professional electrical installation, repairs, and maintenance for residential and commercial properties.",
    color: "from-cyan-500 to-cyan-600",
    accent: "bg-cyan-500/10",
    svgContent: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 50 20 L 50 40 L 35 50 L 50 60 L 50 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="50" r="8" fill="currentColor" className="animate-pulse" />
        <circle
          cx="35"
          cy="50"
          r="5"
          fill="currentColor"
          opacity="0.5"
          className="animate-bounce"
          style={{ animationDelay: "0.2s" }}
        />
        <circle
          cx="65"
          cy="50"
          r="5"
          fill="currentColor"
          opacity="0.5"
          className="animate-bounce"
          style={{ animationDelay: "0.1s" }}
        />
      </svg>
    ),
  },
  {
    title: "AC Repair & Maintenance",
    description: "Expert air conditioning repair, servicing, and maintenance to keep your space comfortable.",
    color: "from-purple-500 to-purple-600",
    accent: "bg-purple-500/10",
    svgContent: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="25" width="70" height="35" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <line x1="20" y1="35" x2="80" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <circle
          cx="30"
          cy="42"
          r="4"
          fill="currentColor"
          className="animate-spin"
          style={{ animationDuration: "2s" }}
        />
        <circle
          cx="50"
          cy="42"
          r="4"
          fill="currentColor"
          className="animate-spin"
          style={{ animationDuration: "2.3s" }}
        />
        <circle
          cx="70"
          cy="42"
          r="4"
          fill="currentColor"
          className="animate-spin"
          style={{ animationDuration: "2.1s" }}
        />
        <path
          d="M 25 65 Q 25 75 35 75 T 65 75 T 75 65"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        />
      </svg>
    ),
  },
  {
    title: "And More",
    description: "Comprehensive range of additional services tailored to your specific needs.",
    color: "from-slate-500 to-slate-600",
    accent: "bg-slate-500/10",
    svgContent: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="currentColor"
          strokeWidth="2.5"
          opacity="0.5"
          className="animate-spin"
          style={{ animationDuration: "4s" }}
        />
        <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.3" className="animate-pulse" />
        <path
          d="M 45 45 L 55 55 M 55 45 L 45 55"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-bounce"
          style={{ animationDelay: "0.1s" }}
        />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services-section" className="w-full py-24 bg-gradient-to-b from-background via-background to-muted/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full mb-6 border border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-bold text-primary tracking-wide">OUR SERVICES</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black mb-6 text-balance">Complete Solutions 360°</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive professional services for all your home and business needs. Choose from our full
            range of expert solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-full bg-card border border-border rounded-2xl p-8 transition-all duration-400 hover:shadow-2xl hover:border-primary/50 card-hover relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10 space-y-4">
                  {/* Animated SVG Icon */}
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white transition-all duration-400 group-hover:scale-110 group-hover:shadow-lg shadow-md w-16 h-16 items-center justify-center`}
                  >
                    <div className="w-8 h-8 text-white">{service.svgContent}</div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
