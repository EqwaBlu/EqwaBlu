
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Technology: React.FC = () => {
  useEffect(() => {
    document.title = "Technology | EqwaBlue - Advanced Methylene Blue Water Solutions";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-eqwablue-deepBlue mb-8">Our Technology</h1>
          
          <div className="mb-12">
            <Tabs defaultValue="what-is-mb" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="what-is-mb">What is Methylene Blue?</TabsTrigger>
                <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
                <TabsTrigger value="safety">Safety & Regulation</TabsTrigger>
              </TabsList>
              <TabsContent value="what-is-mb" className="space-y-4">
                <h2 className="text-2xl font-bold text-eqwablue-deepBlue">Methylene Blue: The Science</h2>
                <p className="text-lg">
                  Methylene Blue (MB) is a heterocyclic aromatic chemical compound with the molecular formula C₁₆H₁₈ClN₃S. 
                  Originally developed as a textile dye, it has been used in the medical field for over a century for 
                  various applications including as a treatment for methemoglobinemia, a disorder where blood cannot 
                  carry oxygen effectively.
                </p>
                <p className="text-lg mt-4">
                  In water purification, MB exhibits powerful antimicrobial properties, functioning as a 
                  redox (reduction-oxidation) indicator that can neutralize harmful bacteria, viruses, and certain 
                  chemical contaminants when properly formulated and applied.
                </p>
              </TabsContent>
              <TabsContent value="how-it-works" className="space-y-4">
                <h2 className="text-2xl font-bold text-eqwablue-deepBlue">How MB Purifies Water</h2>
                <p className="text-lg">
                  EqwaBlue's proprietary formulations leverage Methylene Blue's unique molecular properties to create 
                  a multi-stage water purification process:
                </p>
                <ul className="list-disc pl-6 text-lg space-y-2 mt-4">
                  <li>Oxidative action against bacterial cell walls and viral capsids</li>
                  <li>Photodynamic inactivation of pathogens when exposed to light</li>
                  <li>Chemical binding to heavy metals and certain toxins</li>
                  <li>Residual protection against recontamination</li>
                </ul>
              </TabsContent>
              <TabsContent value="safety" className="space-y-4">
                <h2 className="text-2xl font-bold text-eqwablue-deepBlue">Safety & Regulatory Information</h2>
                <p className="text-lg">
                  Methylene Blue has been extensively studied for safety and efficacy in water treatment applications. 
                  At the concentrations used in EqwaBlue products, MB meets or exceeds international safety standards.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-eqwablue-deepBlue">Certifications:</h3>
                  <ul className="list-disc pl-6 text-lg space-y-2 mt-2">
                    <li>FDA approved for select pharmaceutical applications</li>
                    <li>EPA registered for certain water treatment uses</li>
                    <li>NSF/ANSI 60 certification for drinking water treatment</li>
                    <li>WHO approved within specified concentration guidelines</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
