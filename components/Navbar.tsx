"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll when mobile menu is open (Native App feel)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Invisible spacer prevents page content from jumping under the fixed header */}
      <div className="h-[85px] w-full shrink-0"></div>
      
      {/* Fixed, frosted-glass header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
          
          {/* UPDATED FULL BRAND LOGO */}
          <Link href="/" onClick={closeMenu} className="flex flex-col relative z-50">
            <span className="text-2xl font-extrabold tracking-tighter text-prideDark leading-none">
              PRIDE <span className="text-prideOrange">MARINE</span>
            </span>
            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-gray-500 uppercase mt-1">
              Services LLP
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="space-x-8 font-medium hidden md:block text-sm tracking-widest uppercase">
            <Link href="/" className="text-prideDark hover:text-prideOrange transition-colors">Home</Link>
            <Link href="/about" className="text-prideDark hover:text-prideOrange transition-colors">About</Link>
            <Link href="/services" className="text-prideDark hover:text-prideOrange transition-colors">Services</Link>
            <Link href="/contact" className="text-prideDark hover:text-prideOrange transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button 
            className="md:hidden relative z-50 text-prideDark p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

        </nav>

        {/* Full Screen Mobile Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 w-full h-screen bg-white z-40 flex flex-col justify-center items-center"
            >
              <div className="flex flex-col items-center space-y-10 text-3xl md:text-4xl font-extrabold tracking-widest uppercase">
                <Link href="/" onClick={closeMenu} className="text-prideDark hover:text-prideOrange transition-colors">Home</Link>
                <Link href="/about" onClick={closeMenu} className="text-prideDark hover:text-prideOrange transition-colors">About</Link>
                <Link href="/services" onClick={closeMenu} className="text-prideDark hover:text-prideOrange transition-colors">Services</Link>
                <Link href="/contact" onClick={closeMenu} className="text-prideDark hover:text-prideOrange transition-colors">Contact</Link>
              </div>
              
              <div className="absolute bottom-16 flex flex-col items-center gap-4">
                <div className="w-12 h-1 bg-prideOrange"></div>
                <span className="text-xs font-bold tracking-widest text-gray-400 uppercase text-center px-4">
                  Pride Marine Services LLP
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>
    </>
  );
}