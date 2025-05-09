
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Shield, Droplets, Users } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudyProps {
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  icon: React.FC<{ className?: string }>;
  bgColor: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  category,
  description,
  challenge,
  solution,
  result,
  icon: Icon,
  bgColor
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className={`${bgColor} p-6 flex justify-between items-start`}>
          <div>
            <Badge variant="outline" className="bg-white/20 text-white border-none mb-3">
              {category}
            </Badge>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/80">{description}</p>
          </div>
          <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-1">The Challenge</h4>
              <p className="text-gray-600">{challenge}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Our Solution</h4>
              <p className="text-gray-600">{solution}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">The Result</h4>
              <p className="text-gray-600">{result}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const UseCases: React.FC = () => {
  useEffect(() => {
    document.title = "Use Cases | EqwaBlue - Advanced Methylene Blue Water Solutions";
  }, []);
  
  // Define case studies data
  const caseStudies = [
    {
      title: "Military Deployment Water Security",
      category: "Defense",
      description: "Tactical water purification for special forces operations",
      challenge: "A special forces unit needed reliable water purification in remote desert locations with compromised water sources and no infrastructure support.",
      solution: "Deployed EqwaBlue Shield™ tactical kits with concentrated Methylene Blue formula, providing rapid purification in field conditions.",
      result: "Successful 30-day operation with zero waterborne illness incidents and 90% reduction in water transport logistics requirements.",
      icon: Shield,
      bgColor: "bg-gradient-to-r from-eqwablue-deepBlue to-blue-800"
    },
    {
      title: "Hurricane Relief Response",
      category: "Disaster Response",
      description: "Emergency water solutions for hurricane victims",
      challenge: "After a Category 4 hurricane, a coastal community lost access to clean water when treatment facilities were damaged and contamination was widespread.",
      solution: "Deployed EqwaBlue Sentinel™ community stations, treating 10,000 gallons daily in the affected area.",
      result: "Provided safe drinking water to 5,000 residents within 24 hours of deployment, preventing potential disease outbreaks.",
      icon: Droplets,
      bgColor: "bg-gradient-to-r from-blue-700 to-cyan-600"
    },
    {
      title: "Rural Village Water Access",
      category: "Humanitarian",
      description: "Sustainable clean water for underserved communities",
      challenge: "A remote village of 2,000 people relied on contaminated river water, leading to chronic illness and high child mortality rates.",
      solution: "Installed EqwaBlue Clear™ community filtration systems with MB technology, with local maintenance training.",
      result: "85% reduction in waterborne illness within 6 months, with complete system sustainability through local management.",
      icon: Users,
      bgColor: "bg-gradient-to-r from-emerald-700 to-emerald-500"
    },
    {
      title: "Industrial Waste Remediation",
      category: "Environmental",
      description: "Treating industrial contamination in groundwater",
      challenge: "Manufacturing facility with groundwater contaminated by industrial chemicals affecting surrounding communities.",
      solution: "Implemented EqwaBlue Flux™ industrial-scale MB treatment system to neutralize specific contaminants before they reached water table.",
      result: "Successful remediation with 99.2% contaminant reduction, ensuring local water safety and avoiding EPA penalties.",
      icon: Building,
      bgColor: "bg-gradient-to-r from-amber-600 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-eqwablue-deepBlue mb-6">Use Cases</h1>
            <p className="text-lg text-gray-700">
              Discover how EqwaBlue's Methylene Blue solutions are solving water challenges across 
              defense, disaster response, humanitarian, and environmental sectors around the world.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudy
                key={index}
                title={study.title}
                category={study.category}
                description={study.description}
                challenge={study.challenge}
                solution={study.solution}
                result={study.result}
                icon={study.icon}
                bgColor={study.bgColor}
              />
            ))}
          </div>
          
          <div className="mt-20 bg-slate-50 rounded-xl p-8 border border-slate-100">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-center text-eqwablue-deepBlue mb-8">Client Testimonials</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <p className="italic text-gray-600 mb-4">
                    "EqwaBlue's technology was game-changing for our overseas deployment. The compact kits provided reliable water purification in conditions where traditional methods failed us."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-eqwablue-deepBlue flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Major J. Dawson</p>
                      <p className="text-sm text-gray-500">US Army Special Operations</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <p className="italic text-gray-600 mb-4">
                    "After the hurricane devastated our water infrastructure, EqwaBlue's rapid response team provided clean water within hours. Their technology was essential to our community's recovery."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-eqwablue-aqua flex items-center justify-center text-white font-bold">
                      EM
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Elena Morales</p>
                      <p className="text-sm text-gray-500">Emergency Management Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
