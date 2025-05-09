
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    document.title = "Contact Us | EqwaBlue - Advanced Methylene Blue Water Solutions";
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        inquiryType: "",
        message: ""
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-eqwablue-deepBlue mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-eqwablue-deepBlue mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type
                  </label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="sales">Sales & Pricing</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="investment">Investment Interest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="w-full min-h-[150px]"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-eqwablue-deepBlue hover:bg-eqwablue-aqua font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-eqwablue-deepBlue mb-6">Our Headquarters</h2>
              
              <div className="mb-8">
                <div className="bg-gray-200 w-full h-64 rounded-lg mb-4">
                  {/* Map placeholder */}
                  <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Map Loading...</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <p className="font-medium">EqwaBlue Technologies, Inc.</p>
                  <p>2500 Water Innovation Drive</p>
                  <p>Boston, MA 02110</p>
                  <p>United States</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-eqwablue-deepBlue">General Inquiries</p>
                  <p>info@eqwablue.com</p>
                </div>
                
                <div>
                  <p className="font-medium text-eqwablue-deepBlue">Sales & Partnerships</p>
                  <p>partnerships@eqwablue.com</p>
                </div>
                
                <div>
                  <p className="font-medium text-eqwablue-deepBlue">Customer Support</p>
                  <p>support@eqwablue.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
