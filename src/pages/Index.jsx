import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import ScrollAnimations from "../components/ScrollAnimations";

const Index = () => {
  const { registerSection } = ScrollAnimations();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div ref={registerSection}>
        <About />
      </div>
      <div ref={registerSection}>
        <Services />
      </div>
      <div ref={registerSection}>
        <Testimonials />
      </div>
      <div ref={registerSection}>
        <Blogs />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
