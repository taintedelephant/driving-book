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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 flex items-center md:col-span-1">
            <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-3">
              <MapPin className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Poole</h3>
              <p className="text-sm text-gray-600">Including Westbourne and Branksome</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 flex items-center md:col-span-1">
            <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-3">
              <MapPin className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Parkstone</h3>
              <p className="text-sm text-gray-600">Both Upper and Lower Parkstone areas</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 flex items-center md:col-span-1">
            <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-3">
              <MapPin className="text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Surrounding Areas</h3>
              <p className="text-sm text-gray-600">Canford Heath, Creekmoor and Oakdale</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 aspect-video">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20225.534648909992!2d-1.9852457592959494!3d50.72029008551104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873a1c718dcb013%3A0x4930578204eb3733!2sPoole%2C%20UK!5e0!3m2!1sen!2sus!4v1713859939978!5m2!1sen!2sus" 
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
    </section>
  );
};

export default AreasCovered;
