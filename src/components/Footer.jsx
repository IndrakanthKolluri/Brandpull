import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Blogs", id: "blogs" },
  ];

  const socialMedia = [
    { icon: Facebook, href: "#", label: "Facebook", color: "var(--color-blue)" },
    { icon: Twitter, href: "#", label: "Twitter", color: "var(--color-blue)" },
    { icon: Instagram, href: "#", label: "Instagram", color: "var(--color-pink)" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "var(--color-blue)" },
    { icon: Youtube, href: "#", label: "YouTube", color: "var(--color-orange)" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-tight mb-8">
              <span className="block">Let's create</span>
              <span className="block text-[hsl(var(--color-orange))]">something</span>
              <span className="block text-[hsl(var(--color-blue))]">amazing</span>
            </h2>
            <p className="text-2xl text-background/80 mb-12 leading-relaxed">
              Ready to transform your digital presence? Let's talk.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[hsl(var(--color-orange))] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-lg font-bold mb-1">Our Office</div>
                  <p className="text-background/70 leading-relaxed">
                    123 Business District, Tech Park<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[hsl(var(--color-blue))] flex-shrink-0" />
                <div>
                  <div className="text-lg font-bold mb-1">Call Us</div>
                  <a href="tel:+919876543210" className="text-background/70 hover:text-[hsl(var(--color-orange))] transition-colors text-lg">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[hsl(var(--color-purple))] flex-shrink-0" />
                <div>
                  <div className="text-lg font-bold mb-1">Email Us</div>
                  <a href="mailto:hello@brandpull.com" className="text-background/70 hover:text-[hsl(var(--color-orange))] transition-colors text-lg">hello@brandpull.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-black mb-8">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <button onClick={() => scrollToSection(link.id)} className="text-lg text-background/70 hover:text-[hsl(var(--color-orange))] transition-colors hover:translate-x-2 inline-block transform">{link.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-black mb-8">Follow Us</h3>
              <div className="space-y-4">
                {socialMedia.map((social, idx) => (
                  <a key={idx} href={social.href} aria-label={social.label} className="flex items-center gap-3 text-lg text-background/70 hover:text-background transition-colors group">
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: `hsl(${social.color})` }} />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-3xl font-heading font-black">
              <span className="text-[hsl(var(--color-blue))]">Brand</span>
              <span className="text-[hsl(var(--color-orange))]">Pull</span>
            </div>
            <p className="text-background/60">© {new Date().getFullYear()} BrandPull. All rights reserved.</p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Terms</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
