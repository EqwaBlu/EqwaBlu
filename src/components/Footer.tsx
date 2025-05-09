
import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-eqwablue-deepBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/79e5e0d0-2085-4cf4-89f5-93195b5fa831.png" 
                alt="EqwaBlu Logo" 
                className="h-10" 
              />
              <span className="font-bold text-xl text-white">
                EqwaBlu
              </span>
            </Link>
            <p className="text-eqwablue-silver mb-4">
              Advanced Methylene Blue Water Solutions for defense, health, and environmental recovery.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons would go here */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Solutions", "Technology", "Use Cases", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-eqwablue-silver hover:text-eqwablue-aqua transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {[
                "EqwaBlue Shield™", 
                "EqwaBlue Clear™", 
                "EqwaBlue Sentinel™", 
                "EqwaBlue Flux™"
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="/solutions"
                    className="text-eqwablue-silver hover:text-eqwablue-aqua transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-eqwablue-aqua flex-shrink-0" />
                <span className="text-eqwablue-silver">
                  India, Asia<br/>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-eqwablue-aqua flex-shrink-0" />
                <span className="text-eqwablue-silver">TBD</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-eqwablue-aqua flex-shrink-0" />
                <span className="text-eqwablue-silver">eqwablu@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-eqwablue-silver/20 my-8" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-eqwablue-silver">
          <p>© {currentYear} EqwaBlu. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-eqwablue-aqua">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-eqwablue-aqua">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
