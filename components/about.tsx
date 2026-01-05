"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Check } from "lucide-react";

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-display text-foreground mb-4">
            About Knewish360
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A decade of excellence in transforming spaces and creating lasting
            impressions
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div>
              <h3 className="text-2xl font-display text-foreground mb-3">
                Why Choose Us?
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over a decade of experience, Knewish360 has established
                itself as a trusted partner for comprehensive relocation,
                renovation, and maintenance services. Our team of skilled
                professionals is dedicated to delivering excellence in every
                project.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Expert Team",
                  desc: "Highly trained professionals with years of experience",
                },
                {
                  title: "Quality Guaranteed",
                  desc: "We maintain the highest standards in all our services",
                },
                {
                  title: "24/7 Support",
                  desc: "Always available to address your concerns and needs",
                },
                {
                  title: "Affordable Pricing",
                  desc: "Competitive rates without compromising quality",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check size={16} className="text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-700 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {[
              { stat: "500+", label: "Happy Clients" },
              { stat: "1000+", label: "Projects Completed" },
              { stat: "10+", label: "Years in Business" },
              { stat: "98%", label: "Success Rate" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-muted/50 border border-border rounded-xl p-8 text-center hover:bg-muted hover:border-primary/50 text-green-600 transition-all duration-300"
                style={{
                  transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                }}
              >
                <p className="text-4xl font-display text-primary mb-2">
                  {item.stat}
                </p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`bg-muted/30 rounded-xl p-12 transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-10 opacity-0 scale-95"
          }`}
        >
          <h3 className="text-2xl font-display text-foreground mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We believe in transparency and honest communication with every client.",
              },
              {
                title: "Excellence",
                desc: "Quality is non-negotiable in everything we deliver.",
              },
              {
                title: "Innovation",
                desc: "We stay updated with latest techniques and technologies.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <h4 className="text-xl font-display text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
