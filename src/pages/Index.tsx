
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <SolutionsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
