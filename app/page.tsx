import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Portfolio from "@/components/portfolio"
import ContactBanner from "@/components/contact-banner"
import About from "@/components/about"
import Clients from "@/components/clients"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Portfolio />
      <ContactBanner />
      <About />
      <Clients />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
