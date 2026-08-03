"use client";

import { motion } from "framer-motion";
import { Anchor, Ship, Box, Compass, Briefcase, Ruler } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Ship Chartering Services", icon: <Ship size={40} strokeWidth={1} /> },
    { title: "Marine Consultancy", icon: <Compass size={40} strokeWidth={1} /> },
    { title: "Cargo Planning & Stowage Factor", icon: <Box size={40} strokeWidth={1} /> },
    { title: "Freight & Chartering Advisory", icon: <Briefcase size={40} strokeWidth={1} /> },
    { title: "Commercial & Technical Mgmt", icon: <Anchor size={40} strokeWidth={1} /> },
    { title: "Maritime Project Support", icon: <Ruler size={40} strokeWidth={1} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-20 lg:py-32 px-4 bg-prideGray">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-prideOrange font-bold tracking-widest uppercase text-[10px] lg:text-xs mb-3 lg:mb-4 block">What We Do</span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-prideDark uppercase tracking-tighter">Our Services</h2>
        </motion.div>

        {/* Flawless Responsive Grid Borders via gap-[1px] Trick */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200 border border-gray-200 shadow-xl"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white group p-8 sm:p-10 lg:p-14 hover:bg-prideDark transition-all duration-500 relative overflow-hidden"
            >
              {/* Orange Hover Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-prideOrange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="text-prideDark mb-6 lg:mb-8 group-hover:text-prideOrange transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-prideDark mb-3 lg:mb-4 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter">
                {service.title}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-400 font-light text-xs lg:text-sm leading-relaxed">
                Delivering precise, dependable solutions to ensure safe operations and maximum operational efficiency globally.
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}