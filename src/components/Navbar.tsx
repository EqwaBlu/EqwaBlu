
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/79e5e0d0-2085-4cf4-89f5-93195b5fa831.png" 
            alt="EqwaBlue Logo" 
            className="h-12" 
          />
          <span className={`font-bold text-2xl transition-colors duration-300 ${isScrolled ? "text-eqwablue-deepBlue" : "text-white"}`}>
            EqwaBlue
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["About", "Solutions", "Technology", "Use Cases", "Contact"].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className={`font-medium hover:text-eqwablue-aqua transition-colors ${
                isScrolled ? "text-eqwablue-deepBlue" : "text-white"
              }`}
            >
              {item}
            </Link>
          ))}
          <Button className="bg-eqwablue-deepBlue hover:bg-eqwablue-aqua">
            Partner Portal
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden"
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
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {["About", "Solutions", "Technology", "Use Cases", "Contact"].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-eqwablue-deepBlue font-medium py-2 hover:text-eqwablue-aqua"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button className="bg-eqwablue-deepBlue hover:bg-eqwablue-aqua w-full">
              Partner Portal
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
