import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Users, Banknote, Calendar } from "lucide-react";
import Head from "@/components/layout/Head";
import { Button } from "@/components/ui/button";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  experience: z.string().min(10, "Please provide details about your experience"),
});

type FormValues = z.infer<typeof formSchema>;

const BecomeInstructorPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      experience: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real application, we would submit this data to the server
    console.log(data);
    
    // Show success message
    setIsSubmitted(true);
    
    toast({
      title: "Application submitted!",
      description: "We'll contact you soon to discuss the next steps.",
    });
    
    form.reset();
  };

  return (
    <>
      <Head 
        title="Become a Driving Instructor - Calm Driving School" 
        description="Join our team of professional driving instructors. Competitive rates, flexible hours, and continuous training."
      />
      
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Become a Driving Instructor
          </h1>
          <p className="text-white text-opacity-90 max-w-3xl mx-auto text-lg">
            Join our team of professional instructors and help shape the next generation of safe drivers
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                Why Join Calm Driving?
              </h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                      <Banknote className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-heading font-semibold mb-2">Competitive Earnings</h3>
                    <p className="text-gray-600">
                      Earn a competitive income with our fair commission structure. Our instructors typically earn between £30,000-£40,000 per year.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                      <Calendar className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-heading font-semibold mb-2">Flexible Hours</h3>
                    <p className="text-gray-600">
                      Set your own schedule and work hours that suit your lifestyle. Whether you prefer full-time or part-time, we can accommodate your needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                      <Users className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-heading font-semibold mb-2">Supportive Team</h3>
                    <p className="text-gray-600">
                      Join a community of dedicated instructors. We provide ongoing training, regular team meetings, and a supportive network to help you succeed.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-heading font-semibold mb-2">Ready Supply of Students</h3>
                    <p className="text-gray-600">
                      With our established reputation and marketing, we provide a constant stream of students, so you can focus on teaching rather than finding clients.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-heading font-semibold mb-3">Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                    <span>Valid ADI qualification (or PDI working towards qualification)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                    <span>Clean driving license with no more than 6 points</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                    <span>Excellent communication and interpersonal skills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                    <span>Patient, understanding teaching approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                    <span>Reliable, professional attitude</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column - Application Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    Application Received!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in joining Calm Driving School. Our team will review your application and contact you within 2-3 business days to discuss the next steps.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
                  <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Apply to Join Our Team
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and we'll get back to you to discuss the opportunities we have available.
                  </p>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Driving Instruction Experience *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your qualifications, experience, and why you'd like to join our team" 
                                className="min-h-[150px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full">
                        Submit Application
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900">
              What Our Instructors Say
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Hear from the people who make Calm Driving School special
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-6">
                "I joined Calm Driving School after working independently for years. The steady stream of students and admin support means I can focus on what I do best - teaching. My work-life balance has never been better."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Michael Thompson</h4>
                  <p className="text-gray-500 text-sm">Instructor since 2018</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-6">
                "The flexibility is what I value most. As a parent, I can schedule lessons around school runs and family commitments. The team is incredibly supportive, and there's always someone to turn to for advice."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Instructor since 2019</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-6">
                "After qualifying as an ADI, I was concerned about building a client base. Joining Calm Driving removed that worry completely. The ongoing professional development has also helped me become a much better instructor."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-medium">David Wilson</h4>
                  <p className="text-gray-500 text-sm">Instructor since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Apply today and take the first step towards a rewarding career with Calm Driving School.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
          >
            Apply Now
          </Button>
        </div>
      </section>
    </>
  );
};

export default BecomeInstructorPage;
