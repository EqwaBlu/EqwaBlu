
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Technology", path: "/technology" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/79e5e0d0-2085-4cf4-89f5-93195b5fa831.png" 
            alt="EqwaBlue Logo" 
            className="h-12" 
          />
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? "text-eqwablue-deepBlue" : "text-white"
            }`}
          >
            EqwaBlue
          </motion.span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`relative font-medium hover:text-eqwablue-aqua transition-colors group ${
                isScrolled ? "text-eqwablue-deepBlue" : "text-white"
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 bg-eqwablue-aqua w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Button className="bg-eqwablue-deepBlue hover:bg-eqwablue-aqua transition-all duration-300 shadow-lg hover:shadow-eqwablue-aqua/30 font-medium">
            Partner Portal
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden relative z-20"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-eqwablue-deepBlue" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-eqwablue-deepBlue" : "text-white"} />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md py-6 px-6 shadow-lg"
        >
          <div className="flex flex-col space-y-5">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-eqwablue-deepBlue font-medium py-2 hover:text-eqwablue-aqua transition-colors border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-eqwablue-deepBlue hover:bg-eqwablue-aqua w-full mt-4 shadow-md">
              Partner Portal
            </Button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;
