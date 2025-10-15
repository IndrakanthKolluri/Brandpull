import {
  Search,
  Share2,
  Palette,
  Code,
  Camera,
  Building,
} from "lucide-react";

import ThreeBackground from "./ThreeBackground";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Digital Marketing",
      description: "SEO, PPC, Local SEO, Lead Gen, Google Ads",
      color: "var(--color-blue)",
      subServices: ["SEO", "PPC", "Local SEO", "Lead Generation", "Google Ads"],
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Management, Marketing, Meta Ads, YouTube",
      color: "var(--color-pink)",
      subServices: ["Social Media Management", "Marketing", "Meta Ads", "YouTube Monetization", "Influencer Marketing"],
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Logo, Posters, Videos, Brand Identity",
      color: "var(--color-purple)",
      subServices: ["Poster Design", "Video Design", "Logo Design", "Brand Identity"],
    },
    {
      icon: Code,
      title: "Web & App Dev",
      description: "Websites, E-commerce, Mobile Apps",
      color: "var(--color-green)",
      subServices: ["Landing Pages", "Portfolios", "E-commerce", "Mobile Apps"],
    },
    {
      icon: Camera,
      title: "Shoots",
      description: "Product, Reels, Advertisement Shoots",
      color: "var(--color-orange)",
      subServices: ["Product Shoots", "Reels Production", "Ad Shoots"],
    },
    {
      icon: Building,
      title: "Brand Registration",
      description: "CA Services, Legal Documentation",
      color: "var(--color-blue)",
      subServices: ["CA Services", "Company Registration", "Trademark", "Legal Docs"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden gradient-bg-5 animated-gradient">
      {/* Three.js Background */}
      <ThreeBackground variant="particles">
        {/* Dynamic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>

        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-orange-400/30 rounded-full floating-element animate-float-3d"></div>
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-blue-400/30 rounded-lg floating-element animate-float-3d" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-10 h-10 bg-green-500/30 rounded-full floating-element animate-float-3d" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/2 right-1/3 w-14 h-14 bg-purple-500/30 rounded-lg floating-element animate-float-3d" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/3 right-1/2 w-6 h-6 bg-pink-500/30 rounded-full floating-element animate-float-3d" style={{ animationDelay: "4s" }}></div>
      </ThreeBackground>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-24">
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-none mb-8 animate-fade-in-up"
            style={{ animationDelay: "0s" }}
          >
            <span className="block text-foreground">What we do</span>
            <span className="block text-[hsl(var(--color-orange))]">really well</span>
          </h2>
          <p
            className="text-2xl md:text-3xl text-muted-foreground max-w-3xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            From strategy to execution, we offer end-to-end solutions that make an impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
  key={idx}
  className="group relative rounded-3xl overflow-hidden bg-background/70 backdrop-blur-lg border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] animate-fade-in-up"
  style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
>
  {/* Loader-style hover gradient bar */}
  <div
    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
    style={{
      background: `linear-gradient(90deg, ${service.color}, ${service.color} 70%, rgba(255,255,255,0.1))`,
    }}
  ></div>

  {/* Content centered */}
  <div className="flex flex-col items-center justify-center text-center p-10 gap-6">
    <service.icon
      className="w-16 h-16 mb-4 transition-transform duration-500 group-hover:scale-110"
      style={{ color: `hsl(${service.color})` }}
    />
    <h3 className="text-3xl font-heading font-black text-foreground transition-colors group-hover:text-[hsl(var(--color-orange))]">
      {service.title}
    </h3>
    <p className="text-lg text-muted-foreground">{service.description}</p>

    {/* Sub-services */}
    <ul className="mt-4 space-y-2">
      {service.subServices.map((sub, subIdx) => (
        <li
          key={subIdx}
          className="text-sm text-muted-foreground flex items-center gap-2 justify-center"
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: `hsl(${service.color})` }}
          ></span>
          {sub}
        </li>
      ))}
    </ul>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
