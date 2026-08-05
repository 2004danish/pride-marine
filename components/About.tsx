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
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px]"
        >
          {/* Bold Orange Accent Background */}
          <div className="absolute top-8 -left-8 w-full h-full bg-prideOrange z-0 hidden lg:block"></div>
          
          <div className="absolute inset-0 z-10 bg-prideGray shadow-2xl">
            <img 
              src="/newship.png" 
              alt="Pride Marine Vessel Operations"
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </div>

          {/* Fully Responsive Overlap Box (Positioned to reveal hull text) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] md:translate-x-0 md:left-auto md:-right-10 md:-bottom-24 lg:-bottom-28 lg:w-5/6 z-20 bg-prideDark text-white p-6 sm:p-8 lg:p-10 shadow-2xl border-t-4 border-prideOrange"
          >
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-prideOrange uppercase tracking-widest">Vision &amp; Mission</h3>
            <ul className="text-xs sm:text-sm text-gray-100 space-y-2 lg:space-y-3 font-normal leading-relaxed">
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
          className="pl-0 lg:pl-10 mt-24 lg:mt-0"
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
          
          <div className="space-y-5 text-base lg:text-lg text-gray-800 leading-relaxed font-normal mb-10 lg:mb-12">
            <p>
              At Pride Marine Services LLP, we deliver reliable maritime solutions backed by operational expertise and industry insight. From <strong className="text-prideDark font-bold">Vessel Chartering</strong> and <strong className="text-prideDark font-bold">Commercial Vessel Management</strong> to <strong className="text-prideDark font-bold">Maritime Consultancy</strong>, we provide tailored solutions that keep cargo moving efficiently and safely.
            </p>
            <p>
              Our experienced team works closely with shipowners, charterers, operators, and traders to ensure seamless voyage execution, regulatory compliance, and cost-effective operations. Every assignment is managed with precision, transparency, and an unwavering commitment to excellence.
            </p>
            <p>
              Driven by professionalism and long-term partnerships, we continue to support clients across global trade routes with dependable maritime services they can trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-8 lg:pt-10 border-t border-gray-200">
            
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform cursor-default">
              <h3 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-prideDark mb-1 lg:mb-2 tracking-tighter">20<span className="text-prideOrange">+</span></h3>
              <p className="font-bold text-gray-500 uppercase text-[10px] sm:text-[11px] tracking-widest leading-tight">Years Experience</p>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform cursor-default">
              <h3 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-prideDark mb-1 lg:mb-2 tracking-tighter">100<span className="text-prideOrange">+</span></h3>
              <p className="font-bold text-gray-500 uppercase text-[10px] sm:text-[11px] tracking-widest leading-tight">Vessels Handled</p>
            </motion.div>

            {/* UPDATED 3RD STAT: Converted to a clean, professional "500K+" format */}
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform cursor-default">
              <h3 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-prideDark mb-1 lg:mb-2 tracking-tighter">500<span className="text-prideOrange">K+</span></h3>
              <p className="font-bold text-gray-500 uppercase text-[10px] sm:text-[11px] tracking-widest leading-tight">Total DWT Handled</p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}