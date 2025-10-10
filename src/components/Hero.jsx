import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[hsl(var(--color-blue))] rounded-full opacity-10 blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(var(--color-orange))] rounded-full opacity-10 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-[hsl(var(--color-purple))] rounded-full opacity-10 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-fade-in-up mb-12">
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
              We're not your typical IT agency. We're a creative lab that experiments, 
              innovates, and delivers solutions that make a real impact.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full text-lg px-10 py-7 font-bold group"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-foreground rounded-full text-lg px-10 py-7 font-bold hover:bg-foreground hover:text-background"
            >
              Start a Project
            </Button>
          </div>

          {/* Marquee Stats */}
          <div className="mt-24 overflow-hidden">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-16 items-center">
                  <div className="text-center px-8">
                    <div className="text-5xl md:text-6xl font-heading font-black text-[hsl(var(--color-blue))]">
                      500+
                    </div>
                    <div className="text-lg text-muted-foreground font-medium mt-2">Projects</div>
                  </div>
                  {/* <div className="text-6xl text-muted-foreground/20">•</div> */}
                  <div className="text-center px-8">
                    <div className="text-5xl md:text-6xl font-heading font-black text-[hsl(var(--color-orange))]">
                      250+
                    </div>
                    <div className="text-lg text-muted-foreground font-medium mt-2">Happy Clients</div>
                  </div>
                  {/* <div className="text-6xl text-muted-foreground/20">•</div> */}
                  <div className="text-center px-8">
                    <div className="text-5xl md:text-6xl font-heading font-black text-[hsl(var(--color-purple))]">
                      15+
                    </div>
                    <div className="text-lg text-muted-foreground font-medium mt-2">Years</div>
                  </div>
                  {/* <div className="text-6xl text-muted-foreground/20">•</div> */}
                  <div className="text-center px-8">
                    <div className="text-5xl md:text-6xl font-heading font-black text-[hsl(var(--color-green))]">
                      50+
                    </div>
                    <div className="text-lg text-muted-foreground font-medium mt-2">Team Members</div>
                  </div>
                  {/* <div className="text-6xl text-muted-foreground/20">•</div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
