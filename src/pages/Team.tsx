
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TeamMember from "@/components/TeamMember";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Chief Executive Officer",
      bio: "With over 20 years of experience in the telecommunications industry, John leads our company with vision and strategic insight.",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      bio: "Sarah oversees all technical operations, ensuring that we stay at the cutting edge of telecommunication technology.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Michael Chen",
      role: "Head of Network Operations",
      bio: "Michael ensures the reliability and efficiency of our network infrastructure, providing seamless service to our clients.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Service Manager",
      bio: "Emily leads our customer service team, ensuring that all client needs are met with professionalism and care.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "David Wilson",
      role: "Solutions Architect",
      bio: "David designs custom telecommunication solutions that address the unique needs of our enterprise clients.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Lisa Thompson",
      role: "Security Specialist",
      bio: "Lisa ensures that our services and client data are protected with state-of-the-art security measures.",
      imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Robert Anderson",
      role: "Cloud Infrastructure Manager",
      bio: "Robert oversees our cloud services, ensuring reliability, scalability, and optimal performance.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Jennifer Martinez",
      role: "Business Development Manager",
      bio: "Jennifer drives our growth strategy, identifying new opportunities and fostering strategic partnerships.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection 
          title="Meet Our Team"
          subtitle="The dedicated professionals behind KS TelecomServ's success."
          buttonText="Join Our Team"
          buttonLink="/contact"
          imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        />
        
        {/* Leadership Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-telecom-dark mb-4">Our Leadership</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the talented individuals who guide KS TelecomServ with expertise, passion, and vision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.slice(0, 4).map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageUrl={member.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-telecom-dark mb-4">Our Specialists</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated professionals who make our services exceptional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.slice(4).map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageUrl={member.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Company Culture */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-telecom-dark mb-6">Our Culture</h2>
                <p className="text-lg text-gray-600 mb-4">
                  At KS TelecomServ, we foster a culture of innovation, collaboration, and continuous improvement. We believe that our success is built on the talent and dedication of our team members.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We invest in our people through ongoing training, professional development opportunities, and a supportive work environment that encourages growth and creativity.
                </p>
                <p className="text-lg text-gray-600">
                  Our collaborative approach ensures that we leverage the diverse skills and perspectives of our team to deliver the best solutions for our clients.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Team Collaboration"
                    className="rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Office Environment"
                    className="rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Team Meeting"
                    className="rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Team Building"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Our Team */}
        <section className="py-16 bg-telecom-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
                <p className="text-xl mb-4">
                  We're always looking for talented individuals who are passionate about telecommunication and technology to join our growing team.
                </p>
                <p className="text-xl mb-6">
                  If you're enthusiastic, innovative, and customer-focused, we'd love to hear from you.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-telecom-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  View Current Openings
                </a>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Join Our Team"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
