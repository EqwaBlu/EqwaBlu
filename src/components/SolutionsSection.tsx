
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Droplets, Building, FlaskConical } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, icon, color }) => {
  return (
    <Card className="scroll-animation border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className={`h-2 ${color}`}></div>
      <CardHeader>
        <div className={`p-3 rounded-full ${color.replace("bg-", "bg-opacity-10 text-")} w-fit mb-4`}>
          {icon}
        </div>
        <CardTitle className="text-xl text-eqwablue-deepBlue">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          asChild
          variant="outline" 
          className="w-full border-eqwablue-deepBlue text-eqwablue-deepBlue hover:bg-eqwablue-deepBlue hover:text-white"
        >
          <Link to="/solutions">Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const SolutionsSection: React.FC = () => {
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
  
  const solutions = [
    {
      title: "EqwaBlue Shield™",
      description: "Tactical MB water purification kit designed for military operations and emergency responders.",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-eqwablue-deepBlue",
    },
    {
      title: "EqwaBlue Clear™",
      description: "Premium bottled water enhanced with optimal Methylene Blue concentration for daily consumption.",
      icon: <Droplets className="h-6 w-6" />,
      color: "bg-eqwablue-aqua",
    },
    {
      title: "EqwaBlue Sentinel™",
      description: "Community water station providing clean water solutions for villages and remote locations.",
      icon: <Building className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      title: "EqwaBlue Flux™",
      description: "Industrial additive for large-scale water treatment facilities and environmental remediation.",
      icon: <FlaskConical className="h-6 w-6" />,
      color: "bg-cyan-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-eqwablue-deepBlue mb-4 scroll-animation">
            Key Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto scroll-animation">
            Our Methylene Blue technologies deliver clean water across defense, health, and environmental applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              color={solution.color}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center scroll-animation">
          <Button 
            asChild
            size="lg"
            className="bg-eqwablue-deepBlue hover:bg-eqwablue-aqua text-white font-semibold px-8 rounded-lg"
          >
            <Link to="/solutions">
              View All Solutions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
