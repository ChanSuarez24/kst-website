
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  imageUrl?: string;
}

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageUrl = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
}: HeroSectionProps) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-telecom-dark leading-tight mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {subtitle}
            </p>
            <Button 
              size="lg" 
              className="bg-telecom-primary hover:bg-telecom-secondary text-white px-8 py-6 text-lg"
            >
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
          <div className="hidden lg:block">
            <img 
              src={imageUrl} 
              alt="KS TelecomServ Hero" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
