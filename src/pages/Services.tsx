
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Phone, Wifi, Cloud, Shield, Server, Headset, Network, BarChart, Users, Settings, Globe, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Network Infrastructure",
      description: "Comprehensive network design, implementation, and management services tailored to your business needs. Our team of experts ensures that your network is reliable, secure, and scalable.",
      icon: <Server size={36} />,
      features: ["Network Design", "Implementation", "Maintenance", "Optimization", "Scalability Planning"]
    },
    {
      title: "VoIP Solutions",
      description: "Advanced Voice over IP solutions that provide cost-effective communication with enterprise-grade features. Streamline your business communications with our state-of-the-art VoIP systems.",
      icon: <Phone size={36} />,
      features: ["Cloud PBX", "SIP Trunking", "Video Conferencing", "Unified Communications", "Mobile Integration"]
    },
    {
      title: "Internet Services",
      description: "High-speed, reliable internet connectivity for businesses and individuals. Choose from a range of plans designed to meet different bandwidth and reliability requirements.",
      icon: <Wifi size={36} />,
      features: ["Fiber Optic", "Broadband", "Dedicated Lines", "Wireless Solutions", "Redundant Connectivity"]
    },
    {
      title: "Cloud Services",
      description: "Secure cloud solutions for storage, backup, and application hosting. Leverage the power of cloud computing to enhance your business operations and reduce IT infrastructure costs.",
      icon: <Cloud size={36} />,
      features: ["Cloud Storage", "Backup & Recovery", "Application Hosting", "Desktop as a Service", "Infrastructure as a Service"]
    },
    {
      title: "Security Solutions",
      description: "Comprehensive security services to protect your network and data from evolving threats. Our multi-layered approach ensures maximum protection for your critical business assets.",
      icon: <Shield size={36} />,
      features: ["Network Security", "Endpoint Protection", "Threat Monitoring", "Vulnerability Assessment", "Security Consulting"]
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support for all your telecommunication needs. Our dedicated team is always available to address your concerns and resolve any issues promptly.",
      icon: <Headset size={36} />,
      features: ["Technical Support", "Issue Resolution", "System Monitoring", "Proactive Maintenance", "Regular Updates"]
    },
    {
      title: "Data Management",
      description: "Comprehensive data management solutions to help you store, organize, protect, and utilize your business data efficiently and securely.",
      icon: <Database size={36} />,
      features: ["Data Storage", "Data Protection", "Data Recovery", "Data Analysis", "Compliance Management"]
    },
    {
      title: "Business Analytics",
      description: "Advanced analytics tools and services to help you gain valuable insights from your data and make informed business decisions.",
      icon: <BarChart size={36} />,
      features: ["Data Visualization", "Predictive Analytics", "Business Intelligence", "Custom Reporting", "Performance Metrics"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title="Our Telecommunication Services"
          subtitle="Discover our comprehensive range of telecom solutions designed to meet your business and personal needs."
          buttonText="Contact Us"
          buttonLink="/contact"
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        />
        
        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-telecom-dark mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of telecommunication services to meet diverse needs and requirements.
              </p>
            </div>
            
            <div className="space-y-12">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } md:flex`}
                >
                  <div className="md:w-1/3 bg-telecom-primary/10 p-8 flex items-center justify-center">
                    <div className="text-telecom-primary">
                      {service.icon}
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-telecom-dark mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <h4 className="font-semibold text-lg mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="w-5 h-5 text-telecom-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-telecom-dark mb-4">Custom Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Can't find exactly what you need? We specialize in creating custom telecommunication solutions tailored to your specific requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-telecom-dark mb-4">Tailored to Your Needs</h3>
                  <p className="text-gray-600 mb-4">
                    Every business has unique requirements when it comes to telecommunication. Our team of experts works closely with you to understand your specific needs and challenges.
                  </p>
                  <p className="text-gray-600 mb-4">
                    We then design and implement customized solutions that align perfectly with your business goals, ensuring optimal performance and cost-effectiveness.
                  </p>
                  <Button className="bg-telecom-primary hover:bg-telecom-secondary mt-4">
                    <Link to="/contact">Request a Custom Solution</Link>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-telecom-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-telecom-dark mb-2">Enterprise Solutions</h4>
                    <p className="text-gray-600">Comprehensive telecommunication infrastructure for large organizations with complex needs.</p>
                  </div>
                  
                  <div className="bg-telecom-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-telecom-dark mb-2">SMB Solutions</h4>
                    <p className="text-gray-600">Cost-effective, scalable solutions for small and medium-sized businesses.</p>
                  </div>
                  
                  <div className="bg-telecom-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-telecom-dark mb-2">Industry-specific Solutions</h4>
                    <p className="text-gray-600">Specialized telecommunication services for healthcare, education, retail, and more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-telecom-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Telecommunication Experience?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your telecommunication needs and discover how KS TelecomServ can help you achieve reliable, cutting-edge solutions.
            </p>
            <Button variant="outline" size="lg" className="bg-white text-telecom-primary hover:bg-gray-100">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
