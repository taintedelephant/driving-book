import { Car, Users, Award, CheckCircle } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";
import Head from "@/components/layout/Head";

const AboutPage = () => {
  return (
    <>
      <Head 
        title="About Me - Calm Driving Instructor" 
        description="Learn more about John Smith, your calm and experienced driving instructor based in [City]. Discover his approach to teaching safe driving skills."
      />
      
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">About Your Instructor</h1>
          <p className="text-white text-opacity-90 max-w-3xl mx-auto text-lg">
            Meet John Smith - providing calm, patient, and effective driving instruction to help you become a confident and safe driver.
          </p>
        </div>
      </section>
      
      {/* Meet Your Instructor */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Meet John Smith</h2>
              <p className="text-gray-600 mb-4">
                Hello, I'm John Smith, a fully qualified DVSA approved driving instructor (ADI) with over 10 years of experience. I started teaching in 2010 with a simple mission: to make learning to drive a positive, stress-free experience. I understand that many learners feel anxious about driving, and I create a calm environment where you can learn at your own pace.
              </p>
              <p className="text-gray-600 mb-4">
                I've helped hundreds of students pass their driving tests and become confident, safe drivers. My teaching approach is flexible and tailored to your individual learning style, ensuring you make steady progress while building your confidence on the road.
              </p>
              <p className="text-gray-600">
                I'm proud to maintain one of the highest pass rates in the area, with excellent feedback from my students. I'm passionate about road safety and enjoy seeing my students develop into skilled, responsible drivers.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="John Smith, driving instructor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* My Teaching Approach */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">My Teaching Approach</h2>
            <p className="mt-2 text-lg text-gray-600">The principles that guide my driving instruction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Student-Centered</h3>
              <p className="text-gray-600">
                I put my students' needs first, adapting my teaching methods to suit your learning style and ensuring every lesson provides value and progress.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Award className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                I strive for excellence in every lesson, maintaining my vehicle to the highest standards and continuously improving my teaching techniques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Car className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                I prioritize safety above all else, teaching defensive driving techniques and fostering good habits that will serve you throughout your driving life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* My Vehicle */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">My Teaching Vehicle</h2>
            <p className="mt-2 text-lg text-gray-600">Learn to drive in a modern, well-maintained car</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Driving instructor's car" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl font-heading font-semibold mb-4">Safe and Comfortable Learning Environment</h3>
              <p className="text-gray-600 mb-4">
                I teach in a modern, [Car Make and Model] equipped with dual controls for your safety. The car is maintained to the highest standards and cleaned regularly to ensure a comfortable learning environment.
              </p>
              <p className="text-gray-600 mb-4">
                The dual controls allow me to assist when needed, giving you the confidence to develop your skills at a comfortable pace. The car is also fuel-efficient and easy to handle, making it perfect for learners.
              </p>
              <p className="text-gray-600">
                With adjustable seating, good visibility, and responsive controls, you'll quickly feel at home behind the wheel as you develop your driving abilities.
              </p>
            </div>
          </div>
        </div>
      </section>
            
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-2 text-lg text-gray-600">Answers to common questions about my driving lessons</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border bg-white border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">How many lessons will I need?</h3>
              <p className="text-gray-600">
                The number of lessons varies depending on your previous experience and how quickly you learn. On average, a complete beginner might need 40-45 hours of instruction before being ready for the test, but this can vary significantly.
              </p>
            </div>
            
            <div className="border bg-white border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">What if I need to cancel a lesson?</h3>
              <p className="text-gray-600">
                I understand that plans change. I ask for at least 48 hours' notice for cancellations to avoid charges. For emergencies, please contact me as soon as possible.
              </p>
            </div>
            
            <div className="border bg-white border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">Can I use my own car for lessons?</h3>
              <p className="text-gray-600">
                I generally recommend using my dual-controlled car for lessons, as it provides added safety. However, in some circumstances, I can provide lessons in your own car if it meets certain requirements.
              </p>
            </div>
            
            <div className="border bg-white border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">Do you help with theory test preparation?</h3>
              <p className="text-gray-600">
                Yes, I provide guidance on theory test preparation as part of your lessons. I can recommend resources and discuss theory topics that are relevant to your practical driving.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default AboutPage;
