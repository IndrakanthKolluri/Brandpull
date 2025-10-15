import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import ThreeBackground from "./ThreeBackground";
import logo from "../assets/3 (1).png";

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
    <footer className="text-background py-16 lg:py-20 relative overflow-hidden gradient-bg-5 animated-gradient">
      {/* Three.js Background */}
      <ThreeBackground variant="geometry">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        {/* Minimal floating elements */}
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-orange-400/10 rounded-full floating-element animate-float-3d"></div>
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-blue-400/10 rounded-lg floating-element animate-float-3d" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-green-500/20 rounded-full floating-element animate-float-3d" style={{ animationDelay: "1s" }}></div>
      </ThreeBackground>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight mb-6">
              <span className="block text-black">Let's create</span>
              <span className="block text-[hsl(var(--color-orange))]">something</span>
              <span className="block text-[hsl(var(--color-blue))]">amazing</span>
            </h2>
            <p className="text-xl mb-8 leading-relaxed text-black">
              Ready to transform your digital presence? Let's talk.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-12 text-black">
              {/* Our Office */}
              <div className="flex items-start gap-3 flex-1">
                <MapPin className="w-5 h-5 text-[hsl(var(--color-orange))] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-base font-bold mb-1">Our Office</div>
                  <p className="text-sm leading-relaxed">
                    123 Business District, Tech Park<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-center gap-3 flex-1">
                <Phone className="w-5 h-5 text-[hsl(var(--color-blue))] flex-shrink-0" />
                <div>
                  <div className="text-base font-bold mb-1">Call Us</div>
                  <a href="tel:+919876543210" className="text-sm hover:text-[hsl(var(--color-orange))] transition-colors">+91 98765 43210</a>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-center gap-3 flex-1">
                <Mail className="w-5 h-5 text-[hsl(var(--color-purple))] flex-shrink-0" />
                <div>
                  <div className="text-base font-bold mb-1">Email Us</div>
                  <a href="mailto:hello@brandpull.com" className="text-sm hover:text-[hsl(var(--color-orange))] transition-colors">hello@brandpull.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl text-black font-heading font-black mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <button onClick={() => scrollToSection(link.id)} className="text-sm text-black hover:text-[hsl(var(--color-orange))] transition-colors hover:translate-x-1 inline-block transform">{link.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-heading text-black font-black mb-4">Follow Us</h3>
              <div className="space-y-2">
                {socialMedia.map((social, idx) => (
                  <a key={idx} href={social.href} aria-label={social.label} className="flex items-center gap-2 text-sm text-black hover:text-background transition-colors group">
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: `hsl(${social.color})` }} />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-background/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <img src={logo} alt="BrandPull Logo" className="h-10 w-auto" />
            <p className="text-black">© {new Date().getFullYear()} BrandPull. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-black hover:text-background transition-colors">Privacy</a>
              <a href="#" className="text-black hover:text-background transition-colors">Terms</a>
              <a href="#" className="text-black hover:text-background transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
