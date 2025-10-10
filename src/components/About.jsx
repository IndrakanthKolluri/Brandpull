import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 lg:py-48 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-none mb-8">
            <span className="block text-foreground">We don't just</span>
            <span className="block">
              <span className="text-[hsl(var(--color-orange))]">build</span>
              <span className="text-foreground"> solutions.</span>
            </span>
            <span className="block text-foreground">We build</span>
            <span className="block text-[hsl(var(--color-blue))]">relationships</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative overflow-hidden">
              <img
                src={aboutImage}
                alt="Our creative team"
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[hsl(var(--color-orange))] opacity-20 blur-3xl animate-float"></div>
          </div>

          {/* Text Content */}
          <div className="animate-slide-in-right space-y-8">
            <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed animate-fade-in-up">
              At BrandPull, we're not your typical IT services company. We're a
              creative lab that experiments with bold ideas to solve your toughest
              business challenges.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              With over 15 years of experience and 500+ successful projects, we've
              helped businesses transform their digital presence. From startups to
              enterprises, our comprehensive IT solutions drive real growth.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              We believe in pushing boundaries, challenging conventions, and
              delivering results that matter. Our methods might be unexpected, but
              they're always effective.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div>
                <div className="text-5xl font-heading font-black text-[hsl(var(--color-blue))] mb-2">500+</div>
                <div className="text-lg text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-5xl font-heading font-black text-[hsl(var(--color-orange))] mb-2">250+</div>
                <div className="text-lg text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-5xl font-heading font-black text-[hsl(var(--color-purple))] mb-2">15+</div>
                <div className="text-lg text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-heading font-black text-[hsl(var(--color-green))] mb-2">50+</div>
                <div className="text-lg text-muted-foreground">Expert Team</div>
              </div>
            </div>

            <button className="group inline-flex items-center gap-3 text-xl font-bold text-foreground hover:text-[hsl(var(--color-orange))] transition-colors mt-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              Learn More About Us
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
