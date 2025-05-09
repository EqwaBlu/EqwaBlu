
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | EqwaBlue - Advanced Methylene Blue Water Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-eqwablue-deepBlue mb-8">About EqwaBlue</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              EqwaBlue is pioneering the application of Methylene Blue in water treatment, combining cutting-edge 
              science with practical solutions for global water challenges.
            </p>
            <p className="text-lg mb-6">
              Founded by a team of scientists, engineers, and water quality experts, our mission is to leverage
              the unique properties of Methylene Blue to create innovative technologies that ensure access to
              clean water in both emergency situations and everyday use.
            </p>
            <h2 className="text-2xl font-bold text-eqwablue-deepBlue mt-12 mb-6">Our Mission</h2>
            <p className="text-lg mb-6">
              To revolutionize water purification through advanced Methylene Blue technology, making clean water 
              accessible to everyone, everywhere—from military deployments to remote villages and disaster zones.
            </p>
            <h2 className="text-2xl font-bold text-eqwablue-deepBlue mt-12 mb-6">Our Vision</h2>
            <p className="text-lg mb-6">
              A world where clean, safe drinking water is universally available, supported by sustainable, 
              science-based solutions that adapt to any environment.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
