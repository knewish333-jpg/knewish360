"use client"

import Image from "next/image"
import { MessageCircle, ArrowRight } from "lucide-react"
import { useContactModal } from "@/components/contact-modal"

export default function Hero() {
  const { openModal } = useContactModal()

  return (
    <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-muted/40 px-4 py-2 rounded-full border border-border">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  Welcome to Excellence
                </span>
              </div>

              <h1 className="text-hero text-foreground leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent font-black">Space</span>
              </h1>

              <p className="text-lg leading-relaxed text-muted-foreground font-medium max-w-lg">
                From home making to shifting, <span className="font-bold text-foreground">Knewish360</span> stays with
                the client every step. Complete relocation, renovation, and maintenance solutions crafted with
                excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-16 py-8 rounded-3xl font-heading font-black text-xl uppercase tracking-widest shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:from-primary/90 to-primary/70 group"
              >
                <MessageCircle size={32} className="group-hover:scale-125 transition-transform" />
                Book Free Consultation
              </button>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-3 border-3 border-primary text-primary px-16 py-8 rounded-3xl font-heading font-black text-xl uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-2xl hover:scale-110 shadow-lg"
              >
                View Portfolio
                <ArrowRight size={32} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border">
              {[
                { number: "500+", label: "Projects" },
                { number: "10+", label: "Years" },
                { number: "100%", label: "Satisfied" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <p className="text-5xl sm:text-6xl font-heading font-black bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-3 font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <div className="aspect-square relative">
                <Image
                  src="/images/whatsapp-20image-202025-10-26-20at-2005.jpeg"
                  alt="Modern renovation work"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
