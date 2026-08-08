"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Database, ArrowRight } from "lucide-react";

export default function Fleet() {
  return (
    <section className="w-full py-12 lg:py-16 px-4 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between bg-[#0a0a0a] border-l-4 border-prideOrange p-6 sm:p-8 lg:px-12 lg:py-10 shadow-2xl"
        >
          {/* Left Side: Text Content */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Database className="text-prideOrange" size={18} />
              <span className="text-prideOrange font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                Maritime Intelligence
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-3">
              Stowage Factor
            </h2>
            
            {/* FIXED: Made it big, bold, white, and fully visible */}
            <p className="text-white font-bold text-lg sm:text-xl tracking-wide">
              Check your stowage factor.
            </p>
          </div>

          {/* Right Side: Button */}
          <div className="flex-shrink-0">
            <Link 
              href="/stowage-factor"
              className="group flex items-center justify-center gap-3 bg-prideOrange text-white px-8 py-4 font-extrabold text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto"
            >
              Open Database 
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}