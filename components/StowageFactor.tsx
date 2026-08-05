"use client";

import { motion } from "framer-motion";

export default function StowageFactor() {
  return (
    <section className="w-full py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Static, with text sizes bumped up exactly one notch */}
        <div className="flex flex-col">
          <h4 className="text-prideDark uppercase tracking-widest text-xs font-bold mb-4">
            Technical Expertise
          </h4>
          
          <h2 className="text-5xl lg:text-7xl font-black text-prideDark uppercase tracking-tighter leading-none mb-6">
            Stowage<br/>Factor
          </h2>
          
          {/* FIXED: Bumped one size up to text-lg lg:text-xl */}
          <p className="text-gray-700 text-lg lg:text-xl font-normal leading-relaxed mb-10">
            A critical component of our <strong className="text-prideDark font-bold">Optimised Cargo Planning</strong>. We meticulously calculate the stowage factor—the precise ratio of a cargo's volume to its weight—to maximize vessel space and ensure structural stability.
          </p>

          <div className="space-y-8 pl-5 border-l-4 border-prideOrange">
            <div>
              <h3 className="text-prideDark font-bold tracking-widest uppercase text-sm mb-2">Space Optimization</h3>
              {/* FIXED: Bumped one size up to text-base md:text-lg */}
              <p className="text-gray-700 font-normal leading-relaxed text-base md:text-lg">
                Preventing dead freight by optimizing the cubic capacity of the holds for maximum commercial yield.
              </p>
            </div>
            <div>
              <h3 className="text-prideDark font-bold tracking-widest uppercase text-sm mb-2">Safety & Stability</h3>
              {/* FIXED: Bumped one size up to text-base md:text-lg */}
              <p className="text-gray-700 font-normal leading-relaxed text-base md:text-lg">
                Ensuring payload weight distribution adheres strictly to global safety regulations and hull load limits.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Box slides in, and the text inside cascades beautifully */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0a0a0a] p-8 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden border-t-4 border-prideOrange"
        >
          {/* Faint Background Watermark fades in */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-6 right-4 text-7xl sm:text-8xl font-black text-white/5 select-none pointer-events-none"
          >
            SF = V/W
          </motion.div>
          
          <div className="relative z-10">
            {/* Title fades in */}
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-prideOrange font-bold tracking-widest uppercase text-base sm:text-lg mb-8 sm:mb-10"
            >
              Calculation Metrics
            </motion.h3>

            <div className="space-y-6">
              {/* Row 1 slides in */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 pb-6 gap-2"
              >
                <span className="text-gray-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Metric Standard</span>
                <span className="text-white font-bold text-sm sm:text-base">Cubic Meters (m³) / Metric Ton</span>
              </motion.div>
              
              {/* Row 2 slides in */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 pb-6 gap-2"
              >
                <span className="text-gray-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Imperial Standard</span>
                <span className="text-white font-bold text-sm sm:text-base">Cubic Feet (ft³) / Long Ton</span>
              </motion.div>

              {/* Row 3 slides in */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-2"
              >
                <span className="text-gray-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Direct Impact</span>
                <span className="text-prideOrange font-bold text-sm sm:text-base">Freight Economics & Rates</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}