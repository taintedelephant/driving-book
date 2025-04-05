import { Car, Users, Award, CheckCircle } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";
import Head from "@/components/layout/Head";

const AboutPage = () => {
  return (
    <>
      <Head 
        title="About Us - Calm Driving School" 
        description="Learn more about Calm Driving School, our experienced instructors, and our approach to driving instruction."
      />
      
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">About Calm Driving School</h1>
          <p className="text-white text-opacity-90 max-w-3xl mx-auto text-lg">
            We're dedicated to providing calm, patient, and effective driving instruction to help you become a confident and safe driver.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Calm Driving School was founded in 2010 with a simple mission: to make learning to drive a positive, stress-free experience. We recognized that many learners feel anxious about driving, and we wanted to create an environment where students could learn at their own pace with patient, understanding instructors.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've helped thousands of students pass their driving tests and become confident, safe drivers. Our instructors are carefully selected not just for their technical expertise, but for their ability to put learners at ease and adapt their teaching methods to suit individual learning styles.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be one of the most respected driving schools in the area, with consistently high pass rates and excellent student feedback.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Driving instructor with student" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">Our Values</h2>
            <p className="mt-2 text-lg text-gray-600">The principles that guide our approach to driving instruction</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Student-Centered</h3>
              <p className="text-gray-600">
                We put our students' needs first, adapting our teaching methods to suit different learning styles and ensuring every lesson is valuable.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Award className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the quality of our instruction to the condition of our vehicles and the service we provide.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Car className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                We prioritize safety above all else, teaching defensive driving techniques and fostering good habits that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-2 text-lg text-gray-600">Answers to common questions about our driving lessons</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">How many lessons will I need?</h3>
              <p className="text-gray-600">
                The number of lessons varies depending on your previous experience and how quickly you learn. On average, a complete beginner might need 40-45 hours of instruction before being ready for the test, but this can vary significantly.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">What if I need to cancel a lesson?</h3>
              <p className="text-gray-600">
                We understand that plans change. We ask for at least 48 hours' notice for cancellations to avoid charges. For emergencies, please contact us as soon as possible.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">Can I use my own car for lessons?</h3>
              <p className="text-gray-600">
                We generally recommend using our dual-controlled cars for lessons, as they provide added safety. However, in some circumstances, we can provide lessons in your own car if it meets certain requirements.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-heading font-semibold mb-2">Do you help with theory test preparation?</h3>
              <p className="text-gray-600">
                Yes, our instructors can provide guidance on theory test preparation as part of your lessons. We can recommend resources and discuss theory topics that are relevant to your practical driving.
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
