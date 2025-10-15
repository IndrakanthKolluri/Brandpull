import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ThreeBackground from "./ThreeBackground";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden gradient-bg-5 animated-gradient pt-32 pb-24"
    >
      {/* === Three.js 3D Background === */}
      <ThreeBackground variant="mixed">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 floating-element">
          <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-lg transform rotate-45 animate-float-3d"></div>
        </div>

        <div
          className="absolute bottom-20 left-20 w-24 h-24 floating-element"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-full h-full bg-orange-400/20 backdrop-blur-sm rounded-full animate-float-3d"></div>
        </div>

        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 floating-element"
          style={{ animationDelay: "4s" }}
        >
          <div className="w-full h-full bg-purple-400/20 backdrop-blur-sm transform rotate-12 animate-float-3d"></div>
        </div>

        {/* Additional Floating Particles */}
        <div
          className="absolute top-16 right-16 w-12 h-12 bg-red-500/30 rounded-full floating-element animate-float-3d"
          style={{ animationDelay: "1s" }}
        ></div>

        <div
          className="absolute bottom-16 left-16 w-10 h-10 bg-yellow-500/30 rounded-lg floating-element animate-float-3d"
          style={{ animationDelay: "3s" }}
        ></div>

        <div
          className="absolute top-1/3 left-1/3 w-8 h-8 bg-cyan-500/30 rounded-full floating-element animate-float-3d"
          style={{ animationDelay: "5s" }}
        ></div>

        <div
          className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-teal-500/30 rounded-lg floating-element animate-float-3d"
          style={{ animationDelay: "6s" }}
        ></div>
      </ThreeBackground>

      {/* === Content === */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 lg:px-12">
        {/* Heading and Description */}
        <div className="animate-fade-in-up mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black leading-none mb-8">
            <span className="block">We don't just</span>
            <span className="block">
              <span className="text-[hsl(var(--color-blue))]">create</span>
              <span className="text-foreground">. We </span>
              <span className="text-[hsl(var(--color-orange))]">transform</span>
            </span>
          </h1>

          <p
            className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            We're not your typical IT agency. We're a creative lab that
            experiments, innovates, and delivers solutions that make a real
            impact.
          </p>
        </div>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("services")}
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full text-lg px-10 py-7 font-bold group"
            aria-label="Explore Our Work"
          >
            Explore Our Work
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 border-foreground rounded-full text-lg px-10 py-7 font-bold hover:bg-foreground hover:text-background animate-pulse-glow"
            aria-label="Start a Project"
          >
            Start a Project
          </Button>
        </div>

        {/* Marquee Stats */}
        <div className="mt-24 overflow-hidden w-full">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 items-center">
                <div className="text-center px-8">
                  <div className="text-5xl md:text-6xl font-heading font-black text-[hsl(var(--color-blue))]">
                    500+
                  </div>
                  <div className="text-lg text-muted-foreground font-medium mt-2">
                    Projects
                  </div>
                </div>

                <div className="text-center px-8">
                  <div className="text-5xl md:text-6xl font-heading font-black text-[hsl(var(--color-orange))]">
                    250+
                  </div>
                  <div className="text-lg text-muted-foreground font-medium mt-2">
                    Happy Clients
                  </div>
                </div>

                <div className="text-center px-8">
                  <div className="text-5xl md:text-6xl font-heading font-black text-[hsl(var(--color-purple))]">
                    15+
                  </div>
                  <div className="text-lg text-muted-foreground font-medium mt-2">
                    Years
                  </div>
                </div>

                <div className="text-center px-8">
                  <div className="text-5xl md:text-6xl font-heading font-black text-[hsl(var(--color-green))]">
                    50+
                  </div>
                  <div className="text-lg text-muted-foreground font-medium mt-2">
                    Team Members
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

export default Hero;
