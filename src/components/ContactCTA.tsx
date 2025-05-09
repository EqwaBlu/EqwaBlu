
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-eqwablue-deepBlue to-blue-800 relative overflow-hidden">
      {/* Animated bubbles background */}
      <div className="absolute inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-5"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Water Solutions?
          </h2>
          
          <p className="text-xl text-eqwablue-silver mb-10">
            Whether you're in defense, healthcare, or environmental management, our team is ready to help you implement the perfect Methylene Blue water technology for your needs.
          </p>
          
          <Button 
            asChild
            size="lg" 
            className="bg-white text-eqwablue-deepBlue hover:bg-eqwablue-aqua hover:text-white font-semibold px-10 rounded-lg"
          >
            <Link to="/contact">
              Contact Our Experts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
