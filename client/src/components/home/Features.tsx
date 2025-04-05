import { Shield, Car, GraduationCap } from "lucide-react";

const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-2 text-lg text-gray-600">
            We're dedicated to helping you become a safe, confident driver
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-primary text-xl" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Qualified Instructors</h3>
            <p className="text-gray-600">
              Our DVSA approved instructors have years of experience and excellent pass rates.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <Car className="text-primary text-xl" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Modern Vehicles</h3>
            <p className="text-gray-600">
              Learn in our fleet of well-maintained, dual-controlled cars with the latest safety features.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="text-primary text-xl" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Tailored Learning</h3>
            <p className="text-gray-600">
              We adapt our teaching methods to suit your learning style and help you progress at your own pace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
