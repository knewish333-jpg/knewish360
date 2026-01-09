import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_FORM_URL = "https://forms.google.com/your-form-url";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 332 8283539",
    action: "tel:+923328283539",
    actionLabel: "Call",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 326-2020407",
    action: "https://wa.me/923211234567",
    actionLabel: "Chat",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@knewish360.com",
    action: "mailto:info@knewish360.com",
    actionLabel: "Email",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Karachi, Pakistan",
    action: "https://maps.google.com/?q=Karachi,Pakistan",
    actionLabel: "Map",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9AM - 8PM",
    action: null,
    actionLabel: null,
  },
];

const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
  const openGoogleForm = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-[95vw] sm:max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-foreground text-center">
            Get In Touch
          </DialogTitle>
          <p className="text-muted-foreground text-center text-xs md:text-sm mt-2">
            Reach out to us through any of these channels
          </p>
        </DialogHeader>

        {/* Google Form CTA */}
        <Button
          onClick={openGoogleForm}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 md:py-6 text-base md:text-lg mt-4 group"
        >
          Fill Quote Form
          <ExternalLink
            className="ml-2 group-hover:translate-x-1 transition-transform"
            size={18}
          />
        </Button>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              or contact directly
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <contact.icon className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">
                    {contact.label}
                  </div>
                  <div className="text-foreground font-medium text-xs md:text-sm">
                    {contact.value}
                  </div>
                </div>
              </div>
              {contact.action && (
                <a
                  href={contact.action}
                  target={
                    contact.action.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.action.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground text-xs px-3"
                  >
                    {contact.actionLabel}
                  </Button>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 md:p-4 bg-primary/10 rounded-lg border border-primary/20 text-center">
          <p className="text-xs md:text-sm text-foreground">
            <span className="font-semibold text-primary">
              Free Consultation!
            </span>
            <span className="text-muted-foreground ml-1">
              No obligation quote
            </span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;
