
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Droplets, Building, FlaskConical } from "lucide-react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface SolutionCardProps {
  title: string;
  description: string;
  detailedDescription: string[];
  icon: React.ReactNode;
  color: string;
  index: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, detailedDescription, icon, color, index }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
        <div className={`h-2 ${color}`}></div>
        <CardHeader>
          <div className={`p-3 rounded-full ${color.replace("bg-", "bg-opacity-10 text-")} w-fit mb-4`}>
            {icon}
          </div>
          <CardTitle className="text-xl text-eqwablue-deepBlue">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-gray-600 mb-4">{description}</CardDescription>
          <ul className="space-y-2 text-sm text-gray-500">
            {detailedDescription.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`mr-2 text-xs ${color.replace("bg-", "text-")}`}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button 
                asChild
                variant="outline" 
                className={`w-full border-eqwablue-deepBlue text-eqwablue-deepBlue hover:${color.replace("bg-", "bg-")} hover:text-white transition-all duration-300`}
              >
                <Link to="/solutions">Learn More</Link>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{title}</h4>
                  <p className="text-sm">
                    Click to explore complete details about our {title} solution and how it can address your specific needs.
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </CardFooter>
      </Card>
    </motion.div>
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
      detailedDescription: [
        "Military-grade filtration with 99.9% pathogen removal",
        "Compact design weighing under 3lbs for field portability",
        "Rapid deployment in under 60 seconds",
        "Treats up to 500 gallons per cartridge",
        "Built-in contamination indicators"
      ],
      icon: <Shield className="h-6 w-6" />,
      color: "bg-eqwablue-deepBlue",
    },
    {
      title: "EqwaBlue Clear™",
      description: "Premium bottled water enhanced with optimal Methylene Blue concentration for daily consumption.",
      detailedDescription: [
        "Proprietary MB infusion at 0.15ppm concentration",
        "Enhanced cellular oxygenation properties",
        "Glass bottle packaging for zero plastic waste",
        "Available in still and sparkling varieties",
        "Monthly subscription delivery service"
      ],
      icon: <Droplets className="h-6 w-6" />,
      color: "bg-eqwablue-aqua",
    },
    {
      title: "EqwaBlue Sentinel™",
      description: "Community water station providing clean water solutions for villages and remote locations.",
      detailedDescription: [
        "Solar-powered operation for off-grid deployment",
        "Serves up to 500 people per installation",
        "Self-monitoring via satellite connectivity",
        "10-year service life with minimal maintenance",
        "Integrated water storage up to 1,000 gallons"
      ],
      icon: <Building className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      title: "EqwaBlue Flux™",
      description: "Industrial additive for large-scale water treatment facilities and environmental remediation.",
      detailedDescription: [
        "Seamless integration with existing treatment infrastructure",
        "Reduces chemical usage by up to 40%",
        "Improves filtration efficiency by 25-30%",
        "Specially formulated for brackish water treatment",
        "Meets EPA and international regulatory standards"
      ],
      icon: <FlaskConical className="h-6 w-6" />,
      color: "bg-cyan-500",
    },
  ];

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      className="py-20 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={textVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-eqwablue-deepBlue mb-4">
            Key Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Methylene Blue technologies deliver clean water across defense, health, and environmental applications.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              detailedDescription={solution.detailedDescription}
              icon={solution.icon}
              color={solution.color}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          variants={textVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-eqwablue-deepBlue hover:bg-eqwablue-aqua text-white font-semibold px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/solutions">
                View All Solutions
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;
