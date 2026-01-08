import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you provide services in?",
    answer:
      "We currently serve all areas of Karachi, Pakistan. Our team is equipped to handle projects of all sizes, from local moves to city-wide installations. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "Getting a quote is easy! Simply fill out our Google Form or call us directly. We'll schedule a free consultation to assess your needs and provide a detailed, transparent quote with no hidden fees. Most quotes are delivered within 24-48 hours.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer:
      "Yes, all our technicians are fully licensed, certified, and insured. We maintain the highest industry standards and regularly update our team's training to ensure quality service and your peace of mind.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "We stand behind our work with comprehensive warranties. Solar Panels Cleaning Servicess come with a 25-year panel warranty and 10-year workmanship guarantee. Electrical and renovation work includes a 2-year warranty. Specific terms may vary by service.",
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "Yes! We offer 24/7 emergency services for electrical issues and AC repairs. Our emergency response team is available around the clock to handle urgent situations. Standard rates apply during business hours, with a small premium for after-hours calls.",
  },
  {
    question: "How long does a typical Solar Panels Cleaning Services take?",
    answer:
      "A residential Solar Panels Cleaning Services typically takes 1-3 days after permits are approved. The entire process from consultation to power-on usually takes 4-8 weeks, depending on permit processing times in your area and system complexity.",
  },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side - Header */}
          <div className="text-center lg:text-left lg:sticky lg:top-32">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 md:mb-6">
              Frequently Asked
              <span className="text-primary"> Questions</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8">
              Find answers to common questions about our services, processes, and
              policies. Can't find what you're looking for? Feel free to reach out!
            </p>

            <div className="p-4 md:p-6 bg-background rounded-lg border border-border text-left">
              <h3 className="text-foreground font-semibold mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our team is here to help. Contact us and we'll get back to you within
                24 hours.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-primary font-medium text-sm hover:underline"
              >
                Contact Support →
              </a>
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-lg px-4 md:px-6 data-[state=open]:border-primary/50 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-foreground hover:text-primary text-left py-4 md:py-5 hover:no-underline text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 md:pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
