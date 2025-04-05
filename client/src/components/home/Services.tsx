import { Link } from "wouter";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900">Driving Lessons</h2>
          <p className="mt-2 text-lg text-gray-600">Choose the right package for your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">Beginner & Refresher Lessons</h3>
              <p className="text-gray-600 mb-4">
                Perfect for new drivers or those returning to driving after a break.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Car controls & essential maneuvers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Building confidence at your pace</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Tailored to your experience level</span>
                </li>
              </ul>
              <p className="text-xl font-bold mb-4">
                From £32 <span className="text-sm font-normal text-gray-500">per hour</span>
              </p>
              <Link href="/booking">
                <div className="block text-center bg-primary text-white px-4 py-2 rounded font-medium hover:bg-opacity-90 transition cursor-pointer">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">Intensive Course</h3>
              <p className="text-gray-600 mb-4">
                Accelerate your learning with concentrated lessons to get test-ready quickly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>20 or 30 hour packages available</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Fast-track to test standard</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Practical test can be included</span>
                </li>
              </ul>
              <p className="text-xl font-bold mb-4">
                From £560 <span className="text-sm font-normal text-gray-500">for 20 hours</span>
              </p>
              <Link href="/booking">
                <div className="block text-center bg-primary text-white px-4 py-2 rounded font-medium hover:bg-opacity-90 transition cursor-pointer">
                  Book Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
