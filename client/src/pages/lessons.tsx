import { Link } from "wouter";
import { Check, Car, Shield, Award } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";
import Head from "@/components/layout/Head";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

const LessonsPage = () => {
  const { data: lessonTypes, isLoading } = useQuery({
    queryKey: ['/api/lesson-types'],
  });

  return (
    <>
      <Head 
        title="Driving Lessons - Calm Driving School" 
        description="Explore our range of driving lessons, from beginner to advanced. Professional instruction with patient, qualified driving instructors."
      />
      
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Our Driving Lessons</h1>
          <p className="text-white text-opacity-90 max-w-3xl mx-auto text-lg">
            Tailored instruction to help you become a safe, confident driver - no matter your experience level
          </p>
        </div>
      </section>
      
      {/* Lesson Types */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">Choose Your Lesson Type</h2>
            <p className="mt-2 text-lg text-gray-600">Flexible options to fit your needs and learning journey</p>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-6">
                  <Skeleton className="h-8 w-48 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-6" />
                  <div className="space-y-3 mb-6">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="flex items-start">
                        <Skeleton className="h-5 w-5 mt-1 mr-2" />
                        <Skeleton className="h-4 w-full" />
                      </div>
                    ))}
                  </div>
                  <Skeleton className="h-6 w-32 mb-4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lessonTypes?.map((type: any) => (
                <div key={type.id} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-2xl font-heading font-semibold mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {getFeaturesByLessonType(type.name).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-1 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xl font-bold mb-4">
                    £{(type.price / 100).toFixed(2)} 
                    <span className="text-sm font-normal text-gray-500 ml-1">
                      {type.name === "Intensive Course" ? `for ${type.duration / 60} hours` : "per hour"}
                    </span>
                  </p>
                  <Link href="/booking">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">How It Works</h2>
            <p className="mt-2 text-lg text-gray-600">Your journey to becoming a confident driver</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Book Online</h3>
              <p className="text-gray-600">
                Choose your lesson type, preferred dates, and payment method through our easy online booking system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Meet Your Instructor</h3>
              <p className="text-gray-600">
                Your instructor will arrive at the agreed location in a dual-controlled car ready for your lesson.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Learn & Practice</h3>
              <p className="text-gray-600">
                Receive personalized instruction and practice driving in a supportive, patient environment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Pass Your Test</h3>
              <p className="text-gray-600">
                Build your skills until you're ready to take your test with confidence and become a licensed driver.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What's Included */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">What's Included</h2>
            <p className="mt-2 text-lg text-gray-600">Everything you get with every Calm Driving lesson</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Qualified Instruction</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>DVSA approved driving instructors</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Regular instructor training updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Patient, supportive teaching approach</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Car className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Modern Vehicles</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Dual-controlled cars for safety</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Regularly serviced and maintained</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Easy to drive models for learners</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Award className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Learning Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Lesson feedback and progress tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Theory test support and guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mt-1 mr-2" />
                  <span>Mock test preparation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

// Helper function to get features based on lesson type
const getFeaturesByLessonType = (typeName: string) => {
  switch (typeName) {
    case "Beginner Lesson":
      return [
        "Car controls & basic maneuvers",
        "Building confidence in quiet areas",
        "Foundational driving skills",
        "Understanding road markings and signs"
      ];
    case "Refresher Lesson":
      return [
        "For drivers with previous experience",
        "Focus on areas needing improvement",
        "Building confidence on busier roads",
        "Refining driving techniques"
      ];
    case "Test Preparation":
      return [
        "Mock tests with detailed feedback",
        "Focus on test routes & maneuvers",
        "Tackling test-day nerves",
        "Last-minute refinements to technique"
      ];
    case "Intensive Course":
      return [
        "20 or 30 hour packages available",
        "Fast-track to test standard",
        "Comprehensive coverage of all skills",
        "Practical test can be included"
      ];
    default:
      return [
        "Professional instruction",
        "Dual-controlled vehicle",
        "Personalized learning plan",
        "Regular progress feedback"
      ];
  }
};

export default LessonsPage;
