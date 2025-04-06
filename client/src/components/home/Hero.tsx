import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
      <div
        className="h-72 md:h-[500px] w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/nice-road.jpg')",
        }}
      ></div>
    </section>
  );
};

export default Hero;
