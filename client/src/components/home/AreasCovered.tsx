import { MapPin } from "lucide-react";

const AreasCovered = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900">Areas I Cover</h2>
          <p className="mt-2 text-lg text-gray-600">
            Serving students throughout Poole and Parkstone
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - area boxes */}
          <div className="md:w-1/2 flex flex-col space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="w-5 h-5 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                <MapPin className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Poole</h3>
                <p className="text-sm text-gray-600">Including Westbourne and Branksome</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="w-5 h-5 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                <MapPin className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Parkstone</h3>
                <p className="text-sm text-gray-600">Both Upper and Lower Parkstone areas</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="w-5 h-5 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                <MapPin className="text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Surrounding Areas</h3>
                <p className="text-sm text-gray-600">Canford Heath, Creekmoor and Oakdale</p>
              </div>
            </div>
          </div>
          
          {/* Right column - map */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 h-[300px] md:h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40450.06929781998!2d-2.0452457592959494!3d50.72029008551104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873a1c718dcb013%3A0x4930578204eb3733!2sPoole%2C%20UK!5e0!3m2!1sen!2sus!4v1713859939978!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Poole and Parkstone area"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasCovered;
