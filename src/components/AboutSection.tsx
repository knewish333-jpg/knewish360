import { CheckCircle2, Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Experts",
    description: "Over 10 years of experience delivering excellence",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Professional staff committed to your satisfaction",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver as promised",
  },
];

const checkpoints = [
  "Licensed and insured professionals",
  "Transparent pricing with no hidden fees",
  "Eco-friendly and sustainable solutions",
  "100% customer satisfaction guarantee",
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-card relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Knewish360
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 md:mb-6">
              Your Trusted Partner for
              <span className="text-primary"> Complete Solutions</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              At Knewish360, we believe in providing comprehensive services that
              cover every aspect of your home and office needs. From seamless
              relocations to energy-efficient Solar Panels Cleaning Servicess,
              from stunning renovations to reliable electrical services — we've
              got you covered.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
              {checkpoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-foreground justify-center sm:justify-start"
                >
                  <CheckCircle2
                    className="text-primary flex-shrink-0"
                    size={18}
                  />
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 p-4 md:p-6 bg-secondary/50 rounded-lg border border-border">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">
                  10+
                </div>
                <div className="text-xs text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">
                  1000+
                </div>
                <div className="text-xs text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">
                  50+
                </div>
                <div className="text-xs text-muted-foreground">
                  Team Members
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-4 md:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
