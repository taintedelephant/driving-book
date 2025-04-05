import { Link } from "wouter";
import { 
  MapPin, 
  Phone, 
  Mail,
  Facebook, 
  Twitter, 
  Instagram 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">About Calm Driving</h3>
            <p className="text-gray-400 text-sm mb-4">
              I provide professional driving instruction focused on creating safe, confident drivers through patient, personalized teaching.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Driving Lessons */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Driving Lessons</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/lessons">
                  <a className="hover:text-white transition">Beginner Lessons</a>
                </Link>
              </li>
              <li>
                <Link href="/lessons">
                  <a className="hover:text-white transition">Refresher Courses</a>
                </Link>
              </li>
              <li>
                <Link href="/lessons">
                  <a className="hover:text-white transition">Intensive Courses</a>
                </Link>
              </li>
              <li>
                <Link href="/lessons">
                  <a className="hover:text-white transition">Test Preparation</a>
                </Link>
              </li>
              <li>
                <Link href="/lessons">
                  <a className="hover:text-white transition">Pass Plus</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/booking">
                  <a className="hover:text-white transition">Book a Lesson</a>
                </Link>
              </li>
              <li>
                <Link href="/lessons">
                  <a className="hover:text-white transition">Pricing & Packages</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition">FAQs</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="hover:text-white transition">Testimonials</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition">Contact Me</a>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Me</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mt-1 mr-3 text-primary" />
                <span>123 Driving Avenue, Anytown, AN1 2BC</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 mt-1 mr-3 text-primary" />
                <span>07123 456789</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mt-1 mr-3 text-primary" />
                <span>info@calmdriving.co.uk</span>
              </li>
              <li className="flex items-start">
                <svg 
                  className="h-4 w-4 mt-1 mr-3 text-primary"
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Message me on WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Calm Driving Instructor. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
