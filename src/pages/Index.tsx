
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Wifi, Cloud, Shield, Server, Headset } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Network Infrastructure",
      description: "State-of-the-art network design, implementation, and management for your business.",
      icon: <Server size={32} />
    },
    {
      title: "VoIP Solutions",
      description: "Cost-effective voice communication solutions with advanced features.",
      icon: <Phone size={32} />
    },
    {
      title: "Internet Services",
      description: "High-speed, reliable internet connectivity for businesses and individuals.",
      icon: <Wifi size={32} />
    },
    {
      title: "Cloud Services",
      description: "Secure cloud solutions for storage, backup, and application hosting.",
      icon: <Cloud size={32} />
    },
    {
      title: "Security Solutions",
      description: "Comprehensive security services to protect your network and data.",
      icon: <Shield size={32} />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support for all your telecommunication needs.",
      icon: <Headset size={32} />
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title="Innovative Telecom Solutions for the Digital Age"
          subtitle="KS TelecomServ provides cutting-edge telecommunication services to businesses and individuals, ensuring reliable connectivity and communication."
          buttonText="Get Started"
          buttonLink="/contact"
          imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        />
        
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-telecom-dark mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of telecommunication services to meet your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-telecom-primary hover:bg-telecom-secondary">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-telecom-dark mb-6">Why Choose KS TelecomServ?</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-telecom-primary/10 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-telecom-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Expertise</h3>
                      <p className="text-gray-600">Our team consists of industry experts with years of experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-telecom-primary/10 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-telecom-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Reliability</h3>
                      <p className="text-gray-600">We provide dependable services with minimal downtime.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-telecom-primary/10 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-telecom-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Cutting-edge Technology</h3>
                      <p className="text-gray-600">We use the latest technologies to deliver superior services.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-telecom-primary/10 p-2 rounded-full mr-4">
                      <svg className="w-5 h-5 text-telecom-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Customer-centric Approach</h3>
                      <p className="text-gray-600">We prioritize your needs and provide tailored solutions.</p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-6 bg-telecom-primary hover:bg-telecom-secondary">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                  alt="Telecom Technology"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-telecom-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Telecommunication Experience?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your needs and discover how we can help you achieve reliable, cutting-edge telecommunication solutions.
            </p>
            <Button variant="outline" size="lg" className="bg-white text-telecom-primary hover:bg-gray-100">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
