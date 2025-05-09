
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title="About KS TelecomServ"
          subtitle="Learn about our journey, mission, and the team behind our innovative telecommunication solutions."
          buttonText="Meet Our Team"
          buttonLink="/team"
          imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        />
        
        {/* Company Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-telecom-dark mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2025, KS TelecomServ has been at the forefront of the telecommunications industry, providing innovative solutions to businesses and individuals.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Starting as a small team of telecommunication enthusiasts, we have grown into a leading provider of comprehensive telecom services, serving clients across the country.
                </p>
                <p className="text-lg text-gray-600">
                  Our journey has been marked by a commitment to excellence, technological advancement, and customer satisfaction. Today, we continue to push the boundaries of what's possible in the telecommunications field.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                  alt="KS TelecomServ Office"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission and Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-telecom-dark mb-4">Our Mission & Vision</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-telecom-primary mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide reliable, innovative, and cost-effective telecommunication solutions that connect people and businesses seamlessly, enabling them to thrive in the digital age.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-telecom-primary mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading telecommunication service provider known for technical excellence, innovative solutions, and exceptional customer service, setting the standard for the industry.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-telecom-dark mb-4">Our Core Values</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-telecom-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-telecom-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-telecom-dark mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We constantly seek innovative solutions to meet the evolving needs of our clients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-telecom-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-telecom-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-telecom-dark mb-2">Reliability</h3>
                <p className="text-gray-600">
                  We deliver dependable services that our clients can count on, day in and day out.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-telecom-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-telecom-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-telecom-dark mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical business practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-telecom-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-telecom-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-telecom-dark mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in all aspects of our business, from service delivery to customer support.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-telecom-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're looking for telecommunication services or want to be part of our team, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/contact"
                className="inline-block bg-white text-telecom-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/team"
                className="inline-block border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-telecom-primary transition-colors"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
