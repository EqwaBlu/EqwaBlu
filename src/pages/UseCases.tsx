
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MapPin, Home, Briefcase } from "lucide-react";

const UseCases: React.FC = () => {
  useEffect(() => {
    document.title = "Use Cases | EqwaBlue - Advanced Methylene Blue Water Solutions";
  }, []);

  const useCases = [
    {
      title: "Military & Defense",
      description: "Tactical water purification for field operations, forward operating bases, and naval vessels.",
      icon: <Shield className="h-8 w-8" />,
      quote: "EqwaBlue Shield has become standard issue for our rapid response teams, ensuring access to safe water in any theater of operation.",
      author: "Major J. Williams, Defense Logistics Agency"
    },
    {
      title: "Disaster Relief",
      description: "Emergency water treatment following natural disasters, infrastructure failures, or humanitarian crises.",
      icon: <MapPin className="h-8 w-8" />,
      quote: "After the hurricane, EqwaBlue's portable solutions helped us provide clean drinking water to over 10,000 displaced residents.",
      author: "Sarah Chen, Emergency Relief Coordinator"
    },
    {
      title: "Remote Communities",
      description: "Sustainable water purification stations for villages and communities with limited infrastructure.",
      icon: <Home className="h-8 w-8" />,
      quote: "The EqwaBlue Sentinel station has transformed our village's health outcomes by providing continuous access to clean water.",
      author: "Dr. Nkosi, Rural Health Initiative"
    },
    {
      title: "Industrial Applications",
      description: "Large-scale water treatment for manufacturing facilities, mining operations, and environmental remediation.",
      icon: <Briefcase className="h-8 w-8" />,
      quote: "Implementing EqwaBlue Flux in our treatment protocols has reduced contaminant levels by 98% while cutting operational costs.",
      author: "Eng. Martinez, Environmental Compliance Director"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-eqwablue-deepBlue mb-8">Use Cases</h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            EqwaBlue's Methylene Blue water technologies are deployed across diverse sectors worldwide,
            providing clean water solutions where conventional methods fail.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-eqwablue-deepBlue bg-opacity-10 text-eqwablue-deepBlue">
                      {useCase.icon}
                    </div>
                    <CardTitle className="text-2xl text-eqwablue-deepBlue">{useCase.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg text-gray-600">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <blockquote className="border-l-4 border-eqwablue-aqua pl-4 italic text-gray-600">
                    "{useCase.quote}"
                    <footer className="mt-2 text-sm text-gray-500 not-italic">— {useCase.author}</footer>
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
