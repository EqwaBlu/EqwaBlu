
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Enhanced mouse movement effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Apply parallax effect to heading
      if (headingRef.current) {
        headingRef.current.style.transform = `translateY(${y * 30}px) translateX(${x * 30}px)`;
      }
      
      // Apply effect to particles
      if (particlesRef.current) {
        const particles = particlesRef.current.children;
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i] as HTMLElement;
          const speed = parseFloat(particle.dataset.speed || "1");
          const xPos = x * 50 * speed;
          const yPos = y * 50 * speed;
          particle.style.transform = `translate(${xPos}px, ${yPos}px)`;
        }
      }
      
      // Apply ripple effect on water background
      const rippleStrength = 5;
      heroRef.current.style.backgroundPosition = `${x * rippleStrength}px ${y * rippleStrength}px`;
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

  // Enhanced bubble animations
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
    }),
    hover: {
      scale: 1.2,
      opacity: 0.2,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(0, 51, 102, 0.9), rgba(0, 183, 194, 0.8))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-position 0.1s ease-out"
      }}
    >
      {/* Dynamic particles/bubbles background with mouse interaction */}
      <div ref={particlesRef} className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => {
          const speed = Math.random() * 0.8 + 0.2;
          return (
            <motion.div
              key={i}
              custom={i}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              data-speed={speed}
              className="absolute rounded-full bg-white cursor-pointer"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
                transition: "transform 0.2s ease-out"
              }}
            />
          );
        })}
      </div>
      
      {/* Animated wave overlay */}
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
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
          style={{
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
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
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              asChild
              size="lg" 
              className="bg-eqwablue-aqua hover:bg-white hover:text-eqwablue-deepBlue text-eqwablue-deepBlue font-semibold px-8 rounded-lg shadow-lg transition-all duration-300"
            >
              <Link to="/solutions" className="flex items-center">
                Explore Solutions <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
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
      </motion.div>

      {/* Mouse cursor spotlight effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial z-0 opacity-30"></div>
    </section>
  );
};

export default Hero;
