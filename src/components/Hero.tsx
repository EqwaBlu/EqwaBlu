
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        heroRef.current.style.setProperty('--x-offset', `${x * 20}px`);
        heroRef.current.style.setProperty('--y-offset', `${y * 20}px`);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(0, 51, 102, 0.85), rgba(0, 183, 194, 0.7))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dynamic particles/bubbles background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Wave pattern overlay */}
      <div 
        className="absolute bottom-0 left-0 w-full h-40 bg-wave-pattern bg-repeat-x animate-wave"
        style={{ backgroundSize: "100% 100%" }}
      />
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          style={{
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            transform: "translateY(var(--y-offset, 0)) translateX(var(--x-offset, 0))",
            transition: "transform 0.1s ease-out",
          }}
        >
          Powered by Blue.<br/>
          <span className="text-eqwablue-aqua">Driven by Science.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10">
          Advanced Methylene Blue water solutions for defense, health, and environmental recovery.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            asChild
            size="lg" 
            className="bg-eqwablue-aqua hover:bg-white hover:text-eqwablue-deepBlue text-eqwablue-deepBlue font-semibold px-8 rounded-lg"
          >
            <Link to="/solutions">
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-eqwablue-deepBlue font-semibold px-8 rounded-lg"
          >
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
