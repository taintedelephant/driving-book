import Hero from "@/components/home/Hero";
import AreasCovered from "@/components/home/Features";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import Head from "@/components/layout/Head";

const HomePage = () => {
  return (
    <>
      <Head 
        title="Calm Driving School - Professional Driving Lessons" 
        description="Book professional driving lessons with Calm Driving School. Learn with patient, experienced instructors in a calm and supportive environment."
      />
      <Hero />
      <Services />
      <AreasCovered />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;
