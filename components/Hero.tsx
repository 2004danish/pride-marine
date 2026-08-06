"use client";

import { motion } from "framer-motion";
import Link from "next/link"; 
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "800", "900"] });

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
          // FIXED: Removed opacity-90 so the video is fully visible and vibrant
          className="w-full h-full object-cover"
        >
          <source src="/breakbulk.mp4" type="video/mp4" />
        </video>
        
        {/* FIXED: Massively lightened the mobile gradient so the video isn't hidden in blackness */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 md:via-black/70 to-transparent w-full md:w-3/4"></div>
        {/* FIXED: Reduced the universal dark layer from 40% to 20% */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* FULLY RESPONSIVE CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-16">
        <div className="max-w-3xl">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-16 h-1 bg-prideOrange"></div>
            <span className="text-prideOrange font-extrabold tracking-[0.15em] md:tracking-[0.2em] uppercase text-sm sm:text-base md:text-xl drop-shadow-md">
              Pride Marine Services LLP
            </span>
          </motion.div>

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
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl font-medium text-white max-w-sm sm:max-w-lg md:max-w-2xl mb-8 md:mb-12 leading-relaxed tracking-wide drop-shadow-2xl"
          >
            Delivering reliable maritime solutions with precision and expertise. From port operations to global logistics, we connect businesses through efficient, dependable services.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link 
              href="/services" 
              className="bg-prideOrange text-white px-8 md:px-10 py-4 md:py-5 font-extrabold text-xs md:text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-none shadow-xl w-full sm:w-auto text-center"
            >
              Explore Services
            </Link>
            
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