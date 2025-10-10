import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      content:
        "BrandPull doesn't just deliver projects, they deliver transformation. Our digital presence grew 300% in 6 months. Absolutely exceptional work.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthCo",
      content:
        "Working with BrandPull was a revelation. Their creative approach to social media and content is unlike anything we've experienced. Results speak for themselves.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder",
      company: "StyleHub",
      content:
        "From branding to web development, BrandPull exceeded every expectation. They don't just understand design—they understand business.",
    },
    {
      name: "David Kumar",
      role: "Operations Head",
      company: "RetailPro",
      content:
        "The technical expertise combined with creative thinking makes BrandPull stand out. They're not just a vendor, they're a true partner.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-32 lg:py-48 bg-background relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[hsl(var(--color-purple))] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[hsl(var(--color-orange))] rounded-full opacity-5 blur-3xl"></div>

      <div className="container relative mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-none mb-8">
            <span className="block text-foreground">Don't take our</span>
            <span className="block text-[hsl(var(--color-blue))]">word for it</span>
          </h2>
        </div>

        {/* Testimonial */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <Quote className="w-24 h-24 text-[hsl(var(--color-orange))]/20 mb-8 animate-bounce-subtle" />

            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-12 animate-fade-in">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-heading font-black text-foreground mb-1">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-xl text-muted-foreground">
                  {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="w-14 h-14 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="w-14 h-14 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-16">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-[hsl(var(--color-orange))] w-16"
                      : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
