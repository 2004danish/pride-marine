"use client";

import { motion, Variants } from "framer-motion";

export default function StowageFactor() {
  // Added Variants type here
  const textContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Added Variants type here
  const textItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-20 lg:py-32 px-4 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="pr-0 lg:pr-10"
        >
          <motion.div variants={textItem} className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-prideOrange"
            ></motion.div>
            <span className="text-prideDark font-extrabold tracking-widest uppercase text-[10px] lg:text-xs">Technical Expertise</span>
          </motion.div>
          
          <motion.h2 variants={textItem} className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 lg:mb-8 text-prideDark uppercase tracking-tighter leading-[1.05]">
            Stowage <br/> Factor
          </motion.h2>
          
          <motion.p variants={textItem} className="text-base lg:text-lg text-gray-600 font-light leading-relaxed mb-10 lg:mb-12">
            A critical component of our <strong className="text-prideDark font-extrabold">Optimised Cargo Planning</strong>. We meticulously calculate the stowage factor—the precise ratio of a cargo's volume to its weight—to maximize vessel space and ensure structural stability.
          </motion.p>
          
          <div className="space-y-6 lg:space-y-8">
            <motion.div variants={textItem} className="border-l-4 border-prideOrange pl-5 lg:pl-6 transition-all hover:pl-8 duration-300">
              <h4 className="text-prideDark font-extrabold uppercase tracking-widest text-xs lg:text-sm mb-1 lg:mb-2">Space Optimization</h4>
              <p className="text-xs lg:text-sm text-gray-500 font-medium leading-relaxed">Preventing dead freight by optimizing the cubic capacity of the holds for maximum commercial yield.</p>
            </motion.div>
            
            <motion.div variants={textItem} className="border-l-4 border-gray-200 hover:border-prideDark pl-5 lg:pl-6 transition-all hover:pl-8 duration-300 group">
              <h4 className="text-prideDark font-extrabold uppercase tracking-widest text-xs lg:text-sm mb-1 lg:mb-2">Safety &amp; Stability</h4>
              <p className="text-xs lg:text-sm text-gray-500 group-hover:text-prideDark font-medium leading-relaxed transition-colors">Ensuring payload weight distribution adheres strictly to global safety regulations and hull load limits.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full mt-10 lg:mt-0"
        >
           <div className="relative w-full bg-prideDark p-8 sm:p-10 lg:p-14 flex flex-col justify-center shadow-2xl border-t-4 border-prideOrange overflow-hidden">
             
             <motion.div 
               initial={{ x: -30, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="text-[4.5rem] sm:text-7xl lg:text-8xl font-extrabold text-white/5 tracking-tighter mb-4 absolute -top-4 sm:-top-6 -left-2 sm:-left-4 select-none pointer-events-none"
             >
               SF = V/W
             </motion.div>
             
             <h3 className="text-lg lg:text-xl font-bold text-prideOrange uppercase tracking-widest mb-10 lg:mb-12 mt-6 lg:mt-8 relative z-10">Calculation Metrics</h3>
             
             <div className="space-y-6 lg:space-y-8 relative z-10">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.4 }}
                 className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-gray-800 pb-3 lg:pb-4 group cursor-default"
               >
                 <span className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 sm:mb-0 group-hover:text-gray-300 transition-colors">Metric Standard</span>
                 <span className="text-base lg:text-lg font-bold text-white group-hover:text-prideOrange transition-colors">Cubic Meters (m³) / Metric Ton</span>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-gray-800 pb-3 lg:pb-4 group cursor-default"
               >
                 <span className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 sm:mb-0 group-hover:text-gray-300 transition-colors">Imperial Standard</span>
                 <span className="text-base lg:text-lg font-bold text-white group-hover:text-prideOrange transition-colors">Cubic Feet (ft³) / Long Ton</span>
               </motion.div>
               
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.6 }}
                 className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-gray-800 pb-3 lg:pb-4 group cursor-default"
               >
                 <span className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 sm:mb-0 group-hover:text-white transition-colors">Direct Impact</span>
                 <span className="text-base lg:text-lg font-bold text-prideOrange">Freight Economics &amp; Rates</span>
               </motion.div>
             </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}