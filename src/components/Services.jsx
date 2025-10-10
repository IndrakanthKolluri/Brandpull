import {
  Search,
  Share2,
  Palette,
  Code,
  Camera,
  Building,
} from "lucide-react";

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
    <section id="services" className="py-32 lg:py-48 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
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
              className="group relative bg-background p-10 hover:shadow-2xl transition-all duration-500 animate-fade-in-up hover:-translate-y-2"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 w-2 h-full transition-all duration-500 group-hover:w-full opacity-10"
                style={{ backgroundColor: `hsl(${service.color})` }}
              ></div>

              <div className="relative z-10">
                <service.icon
                  className="w-16 h-16 mb-6 transition-all duration-500"
                  style={{ color: `hsl(${service.color})` }}
                />
                <h3 className="text-3xl font-heading font-black mb-4 text-foreground group-hover:text-[hsl(var(--color-orange))] transition-colors">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                {/* Sub-services */}
                <ul className="space-y-2">
                  {service.subServices.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      className="text-sm text-muted-foreground flex items-center gap-2"
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
