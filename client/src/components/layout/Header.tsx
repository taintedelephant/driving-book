import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import logo from "@/assets/images/driving-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between text-xs py-2 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <a href="tel:+447123456789" className="text-gray-600 hover:text-primary transition flex items-center">
              <PhoneCall className="h-3 w-3 mr-1" />
              Call Me
            </a>
            <a href="https://wa.me/447123456789" className="text-gray-600 hover:text-primary transition flex items-center">
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message Me on WhatsApp
            </a>
          </div>
          <div>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition flex items-center"
            >
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Carla's Driving School Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            <Link href="/about">
              <div className={`px-3 py-2 rounded text-sm font-medium transition ${location === '/about' ? 'bg-gray-100' : 'hover:bg-gray-100'} cursor-pointer`}>
                About Me
              </div>
            </Link>
            <Link href="/contact">
              <div className={`px-3 py-2 rounded text-sm font-medium transition ${location === '/contact' ? 'bg-gray-100' : 'hover:bg-gray-100'} cursor-pointer`}>
                Contact
              </div>
            </Link>
            <Link href="/booking">
              <div className="bg-secondary text-white px-4 py-2 rounded text-sm font-medium hover:bg-opacity-90 transition cursor-pointer">
                Book Lessons
              </div>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-1">
              <Link href="/about">
                <div 
                  className={`px-3 py-2 rounded text-sm font-medium transition ${location === '/about' ? 'bg-gray-100' : 'hover:bg-gray-100'} cursor-pointer`}
                  onClick={closeMenu}
                >
                  About Me
                </div>
              </Link>
              <Link href="/contact">
                <div 
                  className={`px-3 py-2 rounded text-sm font-medium transition ${location === '/contact' ? 'bg-gray-100' : 'hover:bg-gray-100'} cursor-pointer`}
                  onClick={closeMenu}
                >
                  Contact
                </div>
              </Link>
              <Link href="/booking">
                <div 
                  className="bg-secondary text-white px-4 py-2 rounded text-sm font-medium hover:bg-opacity-90 transition text-center mt-2 cursor-pointer"
                  onClick={closeMenu}
                >
                  Book Lessons
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
