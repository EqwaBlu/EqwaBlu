
import React, { useEffect } from "react";
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

  // Scroll indicator component
  const ScrollIndicator = () => (
    <motion.div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      style={{ opacity, scale }}
    >
      <span className="text-white/70 text-xs uppercase tracking-widest mb-2">Scroll to discover</span>
      <motion.div 
        className="w-1 h-8 bg-white/30 rounded-full overflow-hidden"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
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
