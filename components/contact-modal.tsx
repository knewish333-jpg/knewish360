"use client";

import { useState, createContext, useContext, type ReactNode } from "react";
import { X, MessageCircle, Phone, MapPin, Globe } from "lucide-react";

interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(
  undefined
);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return context;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const contactDetails = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+92 332 8283539",
      link: "https://wa.me/923004627820?text=Hello%20Knewish360%2C%20I%20would%20like%20to%20book%20a%20consultation",
      color: "bg-green-500",
    },
    {
      icon: Phone,
      title: "Phone Call",
      value: "+92 332 8283539",
      link: "tel:+923004627820",
      color: "bg-primary",
    },
    {
      icon: Globe,
      title: "Email",
      value: "info@knewish360.com",
      link: "mailto:info@knewish360.com",
      color: "bg-blue-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      color: "bg-orange-500",
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-background border-3 border-primary rounded-3xl shadow-2xl max-w-2xl w-full pointer-events-auto animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="relative flex items-center justify-between">
              <div>
                <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary-foreground mb-2">
                  Knewish360
                </h2>
                <p className="text-primary-foreground/90 text-lg font-bold">
                  Get In Touch With Us
                </p>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-3 hover:bg-white/20 rounded-full transition-colors duration-300"
              >
                <X size={28} className="text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-12">
            <p className="text-foreground mb-10 text-lg leading-relaxed font-medium">
              Contact our expert team at Knewish360. We're available 24/7 to
              help with your relocation, renovation, and service needs.
            </p>

            {/* Contact Options Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {contactDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <div
                    key={index}
                    className={`${detail.color} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 group cursor-pointer`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold opacity-90 mb-1 uppercase tracking-wide">
                          {detail.title}
                        </p>
                        <p className="text-lg font-black">{detail.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/923004627820?text=Hello%20Knewish360%2C%20I%20would%20like%20to%20book%20a%20free%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-6 rounded-2xl font-heading font-black text-2xl uppercase tracking-widest hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
            >
              <MessageCircle size={28} />
              Chat on WhatsApp Now
            </a>

            {/* Company Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground text-sm leading-relaxed">
                <span className="font-bold text-foreground">
                  From home making to shifting, Knewish360 stays with you
                </span>
                <br />
                Your trusted partner for relocation, renovation, and maintenance
                services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
