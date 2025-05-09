
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-eqwablue-deepBlue to-blue-900 relative overflow-hidden">
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
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Water Solutions?
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Whether you're in defense, healthcare, or environmental management, our team is ready to help you implement the perfect Methylene Blue water technology for your needs.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              asChild
              size="lg" 
              className="bg-white text-eqwablue-deepBlue hover:bg-eqwablue-aqua hover:text-white font-semibold px-10 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              <Link to="/contact" className="flex items-center">
                Contact Our Experts <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
