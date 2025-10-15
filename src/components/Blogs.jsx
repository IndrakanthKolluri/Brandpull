import { ArrowRight } from "lucide-react";
import ThreeBackground from "./ThreeBackground";

const Blogs = () => {
  const blogs = [
    {
      title: "10 Digital Marketing Trends You Can't Ignore",
      category: "Digital Marketing",
      excerpt: "The landscape is changing. Here's what you need to know to stay ahead.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      title: "The Complete Guide to Modern SEO",
      category: "SEO",
      excerpt: "Search is evolving. Learn the strategies that actually work in 2024.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&auto=format&fit=crop",
    },
    {
      title: "Building Brands That Matter",
      category: "Branding",
      excerpt: "Great brands aren't built overnight. Here's how to create lasting impact.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="blogs" className="py-32 lg:py-48 relative overflow-hidden gradient-bg-5 animated-gradient">
      {/* Three.js Background */}
      <ThreeBackground variant="particles">
        {/* Dynamic overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-green-400/20 rounded-full floating-element animate-float-3d"></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-blue-400/20 transform rotate-45 floating-element animate-float-3d" style={{ animationDelay: "3.5s" }}></div>
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-purple-500/30 rounded-full floating-element animate-float-3d" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-orange-500/30 rounded-lg floating-element animate-float-3d" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/2 right-1/3 w-14 h-14 bg-pink-500/30 rounded-full floating-element animate-float-3d" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/3 right-1/2 w-6 h-6 bg-teal-500/30 rounded-lg floating-element animate-float-3d" style={{ animationDelay: "5s" }}></div>
      </ThreeBackground>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-none mb-6 animate-fade-in-up" style={{ animationDelay: "0s" }}>
            <span className="block text-foreground">Latest from</span>
            <span className="block text-[hsl(var(--color-purple))]">the lab</span>
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Insights, trends, and ideas from our creative team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group cursor-pointer animate-fade-in-up hover-lift transform-3d animate-bounce-gentle"
              style={{ animationDelay: `${0.3 + index * 0.2}s` }}
            >
              <div className="relative h-80 overflow-hidden mb-6 rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-foreground text-background px-4 py-2 text-xs font-bold uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-heading font-black mb-4 group-hover:text-[hsl(var(--color-orange))] transition-colors animate-fade-in-up" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                {blog.title}
              </h3>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.2}s` }}>
                {blog.excerpt}
              </p>

              <button className="group/btn inline-flex items-center gap-2 text-lg font-bold text-foreground hover:text-[hsl(var(--color-blue))] transition-colors animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                Read Article
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: `${0.9}s` }}>
          <button className="inline-flex items-center gap-3 text-2xl font-heading font-black text-foreground hover:text-[hsl(var(--color-orange))] transition-colors group">
            View All Articles
            <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
