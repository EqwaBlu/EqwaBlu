
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

const Index: React.FC = () => {
  // For scroll animation
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
  
  // Mouse position state for cursor effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for custom cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Add scroll animation effect
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

  // Update the document title
  useEffect(() => {
    document.title = "EqwaBlue - Advanced Methylene Blue Water Solutions";
  }, []);

  // Scroll indicator component with enhanced animations
  const ScrollIndicator = () => (
    <motion.div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      style={{ opacity, scale }}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <span className="text-white/70 text-xs uppercase tracking-widest mb-2">Scroll to discover</span>
      <motion.div 
        className="w-1 h-8 bg-white/30 rounded-full overflow-hidden"
        initial={{ opacity: 0.5 }}
        animate={{ 
          opacity: [0.5, 1, 0.5],
          boxShadow: [
            "0 0 0px rgba(255,255,255,0.3)",
            "0 0 10px rgba(255,255,255,0.6)",
            "0 0 0px rgba(255,255,255,0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div 
          className="w-full bg-white"
          animate={{ 
            y: ["0%", "100%", "0%"],
            height: ["0%", "50%", "0%"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ height: "50%" }}
        />
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Custom cursor effect */}
        <motion.div
          className="fixed w-10 h-10 rounded-full border-2 border-eqwablue-aqua pointer-events-none z-50 hidden md:block"
          animate={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001
          }}
          style={{
            mixBlendMode: "difference"
          }}
        />
        
        <section className="relative">
          <Hero />
          <ScrollIndicator />
        </section>
        <AboutSection />
        <SolutionsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
