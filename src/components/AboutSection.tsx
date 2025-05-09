
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image column */}
          <div className="lg:w-1/2 scroll-animation">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-eqwablue-deepBlue to-eqwablue-aqua/80 aspect-square rounded-xl flex items-center justify-center p-10">
                  <img 
                    src="/lovable-uploads/79e5e0d0-2085-4cf4-89f5-93195b5fa831.png" 
                    alt="EqwaBlue Logo" 
                    className="w-full max-w-xs animate-float" 
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-eqwablue-aqua/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-eqwablue-deepBlue/30 rounded-full blur-xl"></div>
            </div>
          </div>
          
          {/* Text column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-eqwablue-deepBlue mb-6 scroll-animation">
              Revolutionary Water Purification Technology
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 scroll-animation">
              EqwaBlue is pioneering the application of Methylene Blue in water treatment, combining cutting-edge science with practical solutions for global water challenges.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 scroll-animation">
              Our innovative technologies provide clean, safe water solutions across defense, healthcare, and environmental sectors—ensuring access to pure water when and where it matters most.
            </p>
            
            <div className="scroll-animation">
              <Button 
                asChild
                className="bg-eqwablue-deepBlue hover:bg-eqwablue-aqua text-white font-semibold px-8 rounded-lg"
              >
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
