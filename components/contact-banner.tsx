import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactBanner() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Phone */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors duration-300">
              <Phone size={24} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80">Call Now</p>
              <p className="text-lg font-bold">+92 21 XXXX-XXXX</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors duration-300">
              <Mail size={24} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80">Email Us</p>
              <p className="text-lg font-bold">info@knewish360.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors duration-300">
              <MapPin size={24} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80">Visit Us</p>
              <p className="text-lg font-bold">Karachi, Pakistan</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors duration-300">
              <Clock size={24} className="text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80">Hours</p>
              <p className="text-lg font-bold">24/7 Available</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4 group cursor-pointer hover:scale-105 transition-transform duration-300">
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors duration-300">
                <MessageCircle size={24} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-primary-foreground/80">WhatsApp</p>
                <p className="text-lg font-bold">Message Us</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
