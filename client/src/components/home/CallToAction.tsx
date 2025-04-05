import { Link } from "wouter";

const CallToAction = () => {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-4">
          Ready to Start Your Driving Journey?
        </h2>
        <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8">
          Book your driving lesson today and take the first step towards becoming a confident, safe driver.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link href="/booking">
            <a className="bg-white text-primary px-8 py-3 rounded font-medium hover:bg-opacity-90 transition">
              Book a Lesson
            </a>
          </Link>
          <Link href="/contact">
            <a className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-opacity-90 transition">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
