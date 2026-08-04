"use client";

import { motion } from "framer-motion";
import Link from "next/link"; 
import { Inter } from "next/font/google";

// Explicitly loading Inter Extra Bold (800) and Black (900) for maximum impact
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "800", "900"] });

export default function Hero() {
  return (
    <section className={`relative w-full h-screen min-h-[600px] flex flex-col justify-center overflow-hidden bg-black ${inter.className}`}>
      
      {/* THE VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/movingship.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic responsive gradient: Covers fully on mobile, shifts left on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 md:via-[#111111]/80 to-transparent w-full md:w-3/4"></div>
        {/* Very subtle overall dim for readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* FULLY RESPONSIVE CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-16">
        <div className="max-w-3xl">
          
          {/* Animated Accent Line & Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-16 h-1 bg-prideOrange"></div>
            <span className="text-prideOrange font-extrabold tracking-[0.2em] md:tracking-[0.25em] uppercase text-[10px] sm:text-xs md:text-sm drop-shadow-md">
              Pride Marine Services LLP
            </span>
          </motion.div>

          {/* Inter Black (900) Headline - Fluid Sizing for All Screens */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-black uppercase tracking-tighter text-white leading-[0.95] mb-6 md:mb-8 flex flex-col drop-shadow-2xl"
          >
            <span>Smart.</span>
            <span className="text-gray-300">Fast.</span>
            <span>Safe.</span>
          </motion.h1>
          
          {/* Animated Subtitle - UPDATED: "Trusted Partnerships" removed */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-xl font-light text-gray-200 max-w-xs sm:max-w-md md:max-w-xl mb-8 md:mb-12 leading-relaxed tracking-wide drop-shadow-lg"
          >
            Smart Maritime Solutions. We engineer the future of global trade and logistics.
          </motion.p>
          
          {/* Functional Responsive Routing Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* Routes to the Services page */}
            <Link 
              href="/services" 
              className="bg-prideOrange text-white px-8 md:px-10 py-4 md:py-5 font-extrabold text-xs md:text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-none shadow-xl w-full sm:w-auto text-center"
            >
              Explore Services
            </Link>
            
            {/* Routes to the Contact page */}
            <Link 
              href="/contact" 
              className="bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-8 md:px-10 py-4 md:py-5 font-extrabold text-xs md:text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-none w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}