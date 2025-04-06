import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
      <div
        className="h-96 md:h-[600px] w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/mercedes-c-class.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg bg-white bg-opacity-60 p-6 md:p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
              Start Your Driving Journey Today
            </h1>
           
            <div className="flex flex-row gap-4">
              <Link href="/booking">
                <div className="bg-primary text-white px-6 py-2 rounded font-medium text-center hover:bg-opacity-90 transition inline-block cursor-pointer">
                  Book a Lesson
                </div>
              </Link>
              <a
                href="#services"
                className="bg-white border bg-opacity-70 border-primary text-primary px-6 py-2 rounded font-medium text-center hover:bg-primary hover:text-white transition inline-block"
              >
                My Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
