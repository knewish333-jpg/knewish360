import { useState } from "react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";
import work7 from "@/assets/work-7.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const workImages = [
  { src: work1, alt: "Home relocation packing", title: "Home Packing & Moving" },
  { src: work2, alt: "Office furniture moving", title: "Office Relocation" },
  { src: work3, alt: "Residential moving service", title: "Residential Moving" },
  { src: work4, alt: "Living room setup", title: "Complete Home Setup" },
  { src: work5, alt: "Office renovation", title: "Office Renovation" },
  { src: work6, alt: "Kitchen packing service", title: "Kitchen Relocation" },
  { src: work7, alt: "Full house moving", title: "Full House Moving" },
];

const OurWorkSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? workImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === workImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="work" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(174_72%_45%/0.03),transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4 md:mb-6">
            Projects We're <span className="text-primary">Proud Of</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-4 md:px-0">
            Take a look at some of our recent relocation and renovation projects.
            Every project is handled with care and professionalism.
          </p>
        </div>

        {/* Image Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {workImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-full min-h-[250px] md:min-h-[400px]" : "h-32 sm:h-40 md:h-48 lg:h-56"
                }`}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-foreground font-semibold text-xs md:text-sm lg:text-base">
                  {image.title}
                </h3>
              </div>
              {/* View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] md:max-w-4xl bg-background/95 backdrop-blur-xl border-border p-2 md:p-0">
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 md:top-4 md:right-4 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-background/50 flex items-center justify-center text-foreground hover:bg-background transition-colors"
          >
            <X size={18} />
          </button>

          {selectedImage !== null && (
            <div className="relative">
              <img
                src={workImages[selectedImage].src}
                alt={workImages[selectedImage].alt}
                className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg"
              />

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/50 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/50 flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <ChevronRight size={20} />
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-background to-transparent">
                <h3 className="text-foreground font-semibold text-base md:text-lg">
                  {workImages[selectedImage].title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {selectedImage + 1} / {workImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default OurWorkSection;
