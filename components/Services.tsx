"use client";

import { motion, Variants } from "framer-motion";
import { Anchor, Ship, Box, Compass, Briefcase, Ruler } from "lucide-react";

export default function Services() {
  // UPDATED: Added unique, highly professional descriptions for each service
  const services = [
    { 
      title: "Ship Chartering Services", 
      icon: <Ship size={36} strokeWidth={1.5} />,
      description: "Connecting cargo with the right vessels through expert voyage and time chartering solutions tailored to your global logistics needs."
    },
    { 
      title: "Marine Consultancy", 
      icon: <Compass size={36} strokeWidth={1.5} />,
      description: "Providing strategic maritime advice, risk assessment, and operational guidance to optimize your fleet and navigate complex regulations."
    },
    { 
      title: "Cargo Planning & Stowage Factor", 
      icon: <Box size={36} strokeWidth={1.5} />,
      description: "Meticulous calculation of volume-to-weight ratios to prevent dead freight, maximize commercial yield, and ensure structural stability."
    },
    { 
      title: "Freight & Chartering Advisory", 
      icon: <Briefcase size={36} strokeWidth={1.5} />,
      description: "Data-driven insights and market analysis to help you secure competitive freight rates and make highly informed chartering decisions."
    },
    { 
      title: "Commercial & Technical Mgmt", 
      icon: <Anchor size={36} strokeWidth={1.5} />,
      description: "End-to-end vessel management ensuring optimal performance, strict compliance, and cost-effective daily maritime operations."
    },
    { 
      title: "Maritime Project Support", 
      icon: <Ruler size={36} strokeWidth={1.5} />,
      description: "Specialized engineering and logistical support for complex heavy-lift, breakbulk, and demanding offshore maritime projects."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
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
              className="bg-white group p-8 sm:p-10 lg:p-12 hover:bg-prideDark transition-all duration-500 relative overflow-hidden"
            >
              {/* Orange Hover Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-prideOrange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* UPDATED: Flex container to put Icon and Title side-by-side */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-prideDark group-hover:text-prideOrange transition-colors duration-500 shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-prideDark group-hover:text-white transition-colors duration-500 uppercase tracking-tighter leading-tight">
                  {service.title}
                </h3>
              </div>
              
              {/* UPDATED: Darkened base text, brightened hover text, increased font size, mapped dynamic description */}
              <p className="text-gray-600 group-hover:text-gray-300 font-normal text-sm lg:text-base leading-relaxed transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}