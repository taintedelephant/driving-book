import { Link } from "wouter";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900">Our Driving Lessons</h2>
          <p className="mt-2 text-lg text-gray-600">Choose the right package for your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">Beginner Lessons</h3>
              <p className="text-gray-600 mb-4">
                Perfect for those just starting their driving journey with no prior experience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Car controls & basic maneuvers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Building confidence in quiet areas</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Foundational driving skills</span>
                </li>
              </ul>
              <p className="text-xl font-bold mb-4">
                From £32 <span className="text-sm font-normal text-gray-500">per hour</span>
              </p>
              <Link href="/booking">
                <a className="block text-center bg-primary text-white px-4 py-2 rounded font-medium hover:bg-opacity-90 transition">
                  Book Now
                </a>
              </Link>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transform scale-105 relative z-10">
            <div className="bg-primary text-white text-center text-sm py-1">Most Popular</div>
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
                <a className="block text-center bg-secondary text-white px-4 py-2 rounded font-medium hover:bg-opacity-90 transition">
                  Book Now
                </a>
              </Link>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <div className="p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">Test Preparation</h3>
              <p className="text-gray-600 mb-4">
                For learners who need to refine their skills before taking the practical test.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Mock tests with detailed feedback</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Focus on test routes & maneuvers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Tackling test-day nerves</span>
                </li>
              </ul>
              <p className="text-xl font-bold mb-4">
                From £35 <span className="text-sm font-normal text-gray-500">per hour</span>
              </p>
              <Link href="/booking">
                <a className="block text-center bg-primary text-white px-4 py-2 rounded font-medium hover:bg-opacity-90 transition">
                  Book Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
