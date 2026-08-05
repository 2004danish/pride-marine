"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Database, ArrowRight } from "lucide-react";

export default function Fleet() {
  return (
    <section className="w-full py-20 lg:py-32 px-4 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between bg-[#0a0a0a] border border-gray-800 p-8 sm:p-12 lg:p-16 shadow-2xl rounded-none"
        >
          <div className="max-w-2xl mb-10 lg:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-prideOrange" size={24} />
              <span className="text-prideOrange font-bold tracking-[0.2em] uppercase text-[10px] lg:text-xs">
                Maritime Intelligence
              </span>
            </div>
            
            {/* FIXED READABILITY: Changed text-gray-500 to text-white */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[1.05] mb-6">
              Global Stowage <br className="hidden sm:block"/>Factor Database
            </h2>
            
            {/* FIXED READABILITY: Changed from font-light/text-gray-400 to font-normal/text-gray-200 and bumped the size */}
            <p className="text-gray-200 font-normal leading-relaxed text-base md:text-lg mb-8">
              A critical tool for precise cargo planning and maximum vessel yield. Access our comprehensive, interactive database containing accurate stowage factors for over 200 specialized cargo types.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link 
              href="/stowage-factor"
              className="group flex items-center justify-center gap-4 bg-prideOrange text-white px-8 lg:px-12 py-5 lg:py-6 font-extrabold text-xs lg:text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              Open Database 
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}