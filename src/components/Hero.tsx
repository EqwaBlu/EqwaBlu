
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        heroRef.current.style.setProperty('--x-offset', `${x * 20}px`);
        heroRef.current.style.setProperty('--y-offset', `${y * 20}px`);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }}
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 0.1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(0, 51, 102, 0.9), rgba(0, 183, 194, 0.8))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dynamic particles/bubbles background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={bubbleVariants}
            initial="hidden"
            animate="visible"
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Wave pattern overlay */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-40 bg-wave-pattern bg-repeat-x animate-wave"
        style={{ backgroundSize: "100% 100%" }}
      />
      
      {/* Hero content */}
      <motion.div 
        className="container mx-auto px-4 z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
          style={{
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            transform: "translateY(var(--y-offset, 0)) translateX(var(--x-offset, 0))",
            transition: "transform 0.1s ease-out",
          }}
          variants={itemVariants}
        >
          Powered by Blue.<br/>
          <span className="text-eqwablue-aqua">Driven by Science.</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12"
          variants={itemVariants}
        >
          Advanced Methylene Blue water solutions for defense, health, and environmental recovery.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          variants={itemVariants}
        >
          <Button 
            asChild
            size="lg" 
            className="bg-eqwablue-aqua hover:bg-white hover:text-eqwablue-deepBlue text-eqwablue-deepBlue font-semibold px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link to="/solutions" className="flex items-center">
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-eqwablue-deepBlue font-semibold px-8 rounded-lg transition-all duration-300"
          >
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
