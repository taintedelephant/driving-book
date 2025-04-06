import { Link } from "wouter";
import { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "Driving lessons in Poole & Parkstone",
    "Intensive courses to fast track your abilities",
    "Friendly and relaxed driving lessons"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
      <div
        className="h-72 md:h-[500px] w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/nice-road.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1
              className={`text-3xl md:text-5xl font-bold text-white transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {texts[currentTextIndex]}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
