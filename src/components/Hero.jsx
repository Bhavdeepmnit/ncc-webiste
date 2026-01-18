import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import hero5 from '../assets/hero5.png';
import hero6 from '../assets/hero6.png';

const images = [hero1, hero2, hero3, hero4, hero5, hero6];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Slower interval for a smoother feel
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-6rem)] min-h-[600px] overflow-hidden bg-mnit-blue">
      {/* Background Image Slider */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="NCC Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Faded Blue Overlay */}
      <div className="absolute inset-0 bg-mnit-blue/30 mix-blend-multiply z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-mnit-blue via-transparent to-transparent z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-end items-start text-left px-4 sm:px-6 lg:px-12 pb-12 md:pb-24 lg:pb-32 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
            National Cadet Corps <br />
            <span className="text-mnit-gold inline-block mt-2">MNIT Jaipur</span>
          </h1>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl leading-relaxed font-light">
            Empowering youth with <span className="font-semibold text-white">Discipline</span>, <span className="font-semibold text-white">Leadership</span>, and a spirit of <span className="font-semibold text-white">Service</span>. 
            Join us to serve the nation with pride and honor.
          </p>
        </motion.div>


      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex ? "bg-mnit-gold w-12" : "bg-white/40 w-4 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
