
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsSection from "@/components/SolutionsSection";

const Solutions: React.FC = () => {
  useEffect(() => {
    document.title = "Solutions | EqwaBlue - Advanced Methylene Blue Water Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-eqwablue-deepBlue mb-8">Our Solutions</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            EqwaBlue offers comprehensive Methylene Blue water purification solutions tailored to various 
            sectors including defense, healthcare, emergency response, and environmental management.
          </p>
        </section>
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
