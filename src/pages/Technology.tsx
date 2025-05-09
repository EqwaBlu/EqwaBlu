
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AtomIcon, FlaskConical, Shield, Info } from "lucide-react";

const Technology: React.FC = () => {
  useEffect(() => {
    document.title = "Technology | EqwaBlue - Advanced Methylene Blue Water Solutions";
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-eqwablue-deepBlue to-blue-800 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* Molecular background pattern */}
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full border-2 border-white/30"
                style={{
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          <motion.div 
            className="container mx-auto px-4 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md">
                <FlaskConical className="h-12 w-12 text-eqwablue-aqua" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-center"
              variants={itemVariants}
            >
              Our Technology
            </motion.h1>
            
            <motion.p 
              className="text-xl max-w-3xl mx-auto text-center text-blue-100"
              variants={itemVariants}
            >
              Discover how EqwaBlue's advanced Methylene Blue technologies are revolutionizing water purification across defense, healthcare, and environmental sectors.
            </motion.p>
          </motion.div>
        </section>

        {/* Technology Content */}
        <section className="container mx-auto px-4 py-16">
          <Tabs defaultValue="what" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-12">
              <TabsTrigger value="what" className="py-3 data-[state=active]:bg-eqwablue-aqua/10">
                <div className="flex flex-col items-center gap-2">
                  <Info className="h-5 w-5" />
                  <span>What is MB?</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="science" className="py-3 data-[state=active]:bg-eqwablue-aqua/10">
                <div className="flex flex-col items-center gap-2">
                  <AtomIcon className="h-5 w-5" />
                  <span>The Science</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="safety" className="py-3 data-[state=active]:bg-eqwablue-aqua/10">
                <div className="flex flex-col items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span>Safety Profile</span>
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="what" className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-eqwablue-deepBlue">What is Methylene Blue?</CardTitle>
                    <CardDescription>An introduction to this remarkable compound</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg">
                      Methylene Blue is a synthetic basic dye with powerful antimicrobial and antioxidant properties. First synthesized in 1876, it has a long history of medical applications including treating malaria, methemoglobinemia, and as a surgical dye.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h3 className="text-lg font-medium mb-3 text-eqwablue-deepBlue">Chemical Properties</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-eqwablue-aqua font-bold">•</span>
                            <span>Molecular Formula: C₁₆H₁₈ClN₃S</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-eqwablue-aqua font-bold">•</span>
                            <span>Appearance: Dark green crystalline powder</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-eqwablue-aqua font-bold">•</span>
                            <span>In solution: Deep blue color</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-eqwablue-aqua font-bold">•</span>
                            <span>Water soluble with powerful oxidation properties</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h3 className="text-lg font-medium mb-3 text-eqwablue-deepBlue">Water Purification Capabilities</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-eqwablue-aqua font-bold">•</span>
                            <span>Neutralizes broad spectrum of pathogens</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-eqwablue-aqua font-bold">•</span>
                            <span>Effective against bacteria, viruses, and parasites</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-eqwablue-aqua font-bold">•</span>
                            <span>Requires minimal contact time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-eqwablue-aqua font-bold">•</span>
                            <span>Maintains efficacy in varied water conditions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <p className="text-lg mt-4">
                      EqwaBlue has pioneered proprietary formulations and delivery mechanisms that maximize Methylene Blue's water purification capabilities while ensuring safety and efficacy across diverse applications.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="science" className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-eqwablue-deepBlue">The Science Behind MB</CardTitle>
                    <CardDescription>How Methylene Blue purifies water at the molecular level</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg">
                      Methylene Blue works through a sophisticated mechanism of action that disrupts pathogen cellular processes through multiple pathways, making it particularly effective for water purification.
                    </p>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl my-8">
                      <h3 className="text-xl font-semibold text-eqwablue-deepBlue mb-4">Mechanism of Action</h3>
                      
                      <ol className="space-y-6">
                        <li className="flex gap-4">
                          <div className="bg-eqwablue-aqua/20 rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-1">
                            <span className="font-semibold text-eqwablue-deepBlue">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-eqwablue-deepBlue">Photodynamic Activation</h4>
                            <p className="text-gray-700 mt-1">
                              When exposed to light, MB generates reactive oxygen species (ROS) that damage pathogens' cellular structures and DNA.
                            </p>
                          </div>
                        </li>
                        
                        <li className="flex gap-4">
                          <div className="bg-eqwablue-aqua/20 rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-1">
                            <span className="font-semibold text-eqwablue-deepBlue">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-eqwablue-deepBlue">Membrane Penetration</h4>
                            <p className="text-gray-700 mt-1">
                              MB's molecular structure allows it to penetrate microbial cell membranes, disrupting cellular integrity from within.
                            </p>
                          </div>
                        </li>
                        
                        <li className="flex gap-4">
                          <div className="bg-eqwablue-aqua/20 rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-1">
                            <span className="font-semibold text-eqwablue-deepBlue">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-eqwablue-deepBlue">Enzyme Inhibition</h4>
                            <p className="text-gray-700 mt-1">
                              MB inhibits critical enzymes required for pathogen metabolism and reproduction, effectively neutralizing them.
                            </p>
                          </div>
                        </li>
                        
                        <li className="flex gap-4">
                          <div className="bg-eqwablue-aqua/20 rounded-full h-8 w-8 flex items-center justify-center shrink-0 mt-1">
                            <span className="font-semibold text-eqwablue-deepBlue">4</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-eqwablue-deepBlue">DNA Intercalation</h4>
                            <p className="text-gray-700 mt-1">
                              MB binds directly to microbial DNA, preventing replication and leading to pathogen death.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h3 className="text-lg font-medium mb-3 text-eqwablue-deepBlue">Scientific Studies & Evidence</h3>
                      <p className="mb-4">
                        EqwaBlue's technology is backed by extensive scientific research demonstrating MB's efficacy:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-eqwablue-aqua font-bold">•</span>
                          <span>99.9% pathogen elimination rate in controlled laboratory tests</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-eqwablue-aqua font-bold">•</span>
                          <span>Effective across pH ranges from 5.5 to 8.5</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-eqwablue-aqua font-bold">•</span>
                          <span>Maintains potency in both clear and turbid water conditions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-eqwablue-aqua font-bold">•</span>
                          <span>Rapid action time: 5-10 minutes for complete purification</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="safety" className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-eqwablue-deepBlue">Safety & Regulatory Profile</CardTitle>
                    <CardDescription>Understanding MB's safety record and approvals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg">
                      Methylene Blue has a well-established safety profile with decades of medical and pharmaceutical use. EqwaBlue's proprietary formulations adhere to the strictest quality and safety standards.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h3 className="text-lg font-medium mb-3 text-eqwablue-deepBlue">Regulatory Status</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-green-100 text-green-600 shrink-0 mt-1">
                              <Shield className="h-4 w-4" />
                            </div>
                            <span>FDA approved for medical applications</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-green-100 text-green-600 shrink-0 mt-1">
                              <Shield className="h-4 w-4" />
                            </div>
                            <span>EPA registered for specific water treatment applications</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-green-100 text-green-600 shrink-0 mt-1">
                              <Shield className="h-4 w-4" />
                            </div>
                            <span>WHO listed as essential medicine</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-green-100 text-green-600 shrink-0 mt-1">
                              <Shield className="h-4 w-4" />
                            </div>
                            <span>Compliant with military specifications for water purification</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-slate-50 p-6 rounded-xl">
                        <h3 className="text-lg font-medium mb-3 text-eqwablue-deepBlue">Safety Profile</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-green-100 text-green-600 shrink-0 mt-1">
                              <Shield className="h-4 w-4" />
                            </div>
                            <span>No significant adverse effects at recommended dosages</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-green-100 text-green-600 shrink-0 mt-1">
                              <Shield className="h-4 w-4" />
                            </div>
                            <span>Non-carcinogenic according to IARC classification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-green-100 text-green-600 shrink-0 mt-1">
                              <Shield className="h-4 w-4" />
                            </div>
                            <span>Biodegradable with minimal environmental impact</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="p-1 rounded-full bg-green-100 text-green-600 shrink-0 mt-1">
                              <Shield className="h-4 w-4" />
                            </div>
                            <span>Extensively studied toxicological profile</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-6">
                      <h3 className="text-lg font-medium mb-3 text-eqwablue-deepBlue flex items-center">
                        <Info className="h-5 w-5 mr-2 text-eqwablue-aqua" /> 
                        EqwaBlue Quality Assurance
                      </h3>
                      <p className="mb-4">
                        All EqwaBlue products undergo rigorous quality control processes:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-eqwablue-aqua font-bold">•</span>
                          <span>ISO 9001:2015 certified manufacturing facilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-eqwablue-aqua font-bold">•</span>
                          <span>Batch testing for purity and efficacy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-eqwablue-aqua font-bold">•</span>
                          <span>Independent laboratory verification of performance claims</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-eqwablue-aqua font-bold">•</span>
                          <span>Continuous monitoring and improvement processes</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
