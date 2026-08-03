"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full py-20 lg:py-32 px-4 md:px-8 bg-white max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Imagery & Vision Box */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px]"
        >
          {/* Bold Orange Accent Background - Hidden on mobile, visible on desktop */}
          <div className="absolute top-8 -left-8 w-full h-full bg-prideOrange z-0 hidden lg:block"></div>
          
          <div className="absolute inset-0 z-10 bg-prideGray shadow-2xl">
            {/* UPDATED IMAGE TAG HERE */}
            <img 
              src="/download.jpeg" 
              alt="Pride Marine Vessel"
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </div>

          {/* Fully Responsive Overlap Box: Centered on mobile, shifted right on desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[90%] md:translate-x-0 md:left-auto md:-right-10 md:-bottom-10 lg:w-5/6 z-20 bg-prideDark text-white p-6 sm:p-8 lg:p-10 shadow-2xl border-t-4 border-prideOrange"
          >
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-prideOrange uppercase tracking-widest">Vision &amp; Mission</h3>
            <ul className="text-xs sm:text-sm text-gray-300 space-y-2 lg:space-y-3 font-light leading-relaxed">
              <li>&bull; Provide professional and dependable marine service</li>
              <li>&bull; Maintain highest standards of safety &amp; compliance</li>
              <li>&bull; Build long-term relationships via operational excellence</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pl-0 lg:pl-10 mt-20 lg:mt-0"
        >
          <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-prideOrange"
            ></motion.div>
            <span className="text-prideOrange font-bold tracking-widest uppercase text-[10px] sm:text-xs">Who We Are</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 lg:mb-8 text-prideDark leading-[1.1] tracking-tighter uppercase">
            Operational <br/>Excellence
          </h2>
          
          <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed font-light">
            Pride Marine Services LLP provides specialized services across our <strong className="text-prideDark font-bold">3 Core Service Pillars</strong>: Vessel Chartering, Commercial Vessel Management, and Maritime Consultancy.
          </p>
          <p className="text-base lg:text-lg text-gray-600 mb-10 lg:mb-12 leading-relaxed font-light">
            We combine the operational flexibility of a partnership with a transparent legal and governance framework, ensuring accountability for our global clients.
          </p>
          
          <div className="grid grid-cols-2 gap-6 lg:gap-8 pt-8 lg:pt-10 border-t border-gray-200">
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform cursor-default">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-prideDark mb-1 lg:mb-2 tracking-tighter">20<span className="text-prideOrange">+</span></h3>
              <p className="font-bold text-gray-500 uppercase text-[10px] sm:text-xs tracking-widest">Years Experience</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform cursor-default">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-prideDark mb-1 lg:mb-2 tracking-tighter">3</h3>
              <p className="font-bold text-gray-500 uppercase text-[10px] sm:text-xs tracking-widest">Core Pillars</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}