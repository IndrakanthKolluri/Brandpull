import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Smooth scroll to section function
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: element, offsetY: 80 },
      ease: "power2.inOut"
    });
  }
};

export default function ScrollAnimations() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Register sections for scroll animations
    const sections = sectionsRef.current;

    sections.forEach((section, index) => {
      if (!section) return;

      // GSAP ScrollTrigger for connected animations
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 100,
          rotationX: -15,
          transformOrigin: 'center bottom'
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: 1
          }
        }
      );

      // GSAP for complex animations
      const elements = section.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right');
      elements.forEach((el, elIndex) => {
        let initialTransform = { y: 50, x: 0 };
        if (el.classList.contains('animate-on-scroll-left')) {
          initialTransform = { y: 0, x: -50 };
        } else if (el.classList.contains('animate-on-scroll-right')) {
          initialTransform = { y: 0, x: 50 };
        }

        gsap.set(el, {
          ...initialTransform,
          opacity: 0,
          scale: 0.9,
          rotationX: -10
        });

        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => gsap.to(el, {
            ...initialTransform,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 1,
            ease: "power2.out"
          })
        });
      });

      // 3D parallax effect
      const parallaxElements = section.querySelectorAll('.parallax-3d');
      parallaxElements.forEach((el) => {
        gsap.to(el, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    });

    // Connected section transitions
    sections.forEach((section, index) => {
      if (index < sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "bottom center",
          end: "bottom center+=100",
          onEnter: () => {
            const nextSection = sections[index + 1];
            if (nextSection) {
              gsap.to(nextSection, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
              });
            }
          },
          onLeaveBack: () => {
            gsap.to(section, {
              y: -20,
              opacity: 0.7,
              duration: 0.8,
              ease: "power2.out"
            });
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Function to register sections
  const registerSection = (section) => {
    if (section && !sectionsRef.current.includes(section)) {
      sectionsRef.current.push(section);
    }
  };

  return { registerSection };
}
