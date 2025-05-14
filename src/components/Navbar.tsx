
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-telecom-primary">KS TelecomServ</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-telecom-primary font-medium">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-telecom-primary font-medium">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-telecom-primary font-medium">Services</Link>
            <Link to="/team" className="text-gray-600 hover:text-telecom-primary font-medium">Team</Link>
            <Link to="/contact" className="text-gray-600 hover:text-telecom-primary font-medium">Contact</Link>
            <Button className="bg-telecom-primary hover:bg-telecom-secondary">
              <Link to="/contact" className="text-white">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-telecom-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-telecom-primary font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-telecom-primary font-medium" onClick={toggleMenu}>About</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-600 hover:text-telecom-primary font-medium" onClick={toggleMenu}>Services</Link>
            <Link to="/team" className="block px-3 py-2 text-gray-600 hover:text-telecom-primary font-medium" onClick={toggleMenu}>Team</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-telecom-primary font-medium" onClick={toggleMenu}>Contact</Link>
            <Button className="w-full mt-3 bg-telecom-primary hover:bg-telecom-secondary">
              <Link to="/contact" className="text-white" onClick={toggleMenu}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
