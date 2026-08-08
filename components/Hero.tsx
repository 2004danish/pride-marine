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
          className="w-full h-full object-cover"
        >
          <source src="/breakbulk.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 md:via-black/70 to-transparent w-full md:w-3/4"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* FULLY RESPONSIVE CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-16">
        <div className="max-w-3xl">
          
          {/* Main Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-8 md:mb-10 drop-shadow-2xl"
          >
            <h1 className="flex flex-col items-start gap-y-2 sm:gap-y-3 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter text-white leading-none">
              
              {/* Row 1 */}
              <span className="flex items-center gap-3 md:gap-5">
                <span className="text-prideOrange font-light text-3xl sm:text-4xl lg:text-5xl opacity-60 tracking-widest mt-1">||</span>
                <span>SMART</span>
                <span className="text-prideOrange font-light text-3xl sm:text-4xl lg:text-5xl opacity-60 tracking-widest mt-1">||</span>
              </span>
              
              {/* Row 2 */}
              <span className="flex items-center gap-3 md:gap-5 text-gray-300">
                <span className="text-prideOrange font-light text-3xl sm:text-4xl lg:text-5xl opacity-60 tracking-widest mt-1">||</span>
                <span>FAST</span>
                <span className="text-prideOrange font-light text-3xl sm:text-4xl lg:text-5xl opacity-60 tracking-widest mt-1">||</span>
              </span>
              
              {/* Row 3 */}
              <span className="flex items-center gap-3 md:gap-5">
                <span className="text-prideOrange font-light text-3xl sm:text-4xl lg:text-5xl opacity-60 tracking-widest mt-1">||</span>
                <span>SAFE</span>
                <span className="text-prideOrange font-light text-3xl sm:text-4xl lg:text-5xl opacity-60 tracking-widest mt-1">||</span>
              </span>
              
            </h1>
          </motion.div>
          
          {/* Subtitle - REFINED: New punchy service description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl font-medium text-white max-w-sm sm:max-w-lg md:max-w-2xl mb-8 md:mb-12 leading-relaxed tracking-widest uppercase drop-shadow-2xl"
          >
            SMART MARITIME SOLUTIONS & CONSULTANCY <br className="hidden sm:block" />
            VESSEL CHARTERING AND COMMERCIAL MANAGEMENT
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