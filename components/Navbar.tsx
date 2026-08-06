"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add a subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-4" : "bg-white py-6 md:py-8"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Logo - UPDATED: All text is now equal size and weight */}
        <Link href="/" className="flex items-center gap-1.5 z-50 whitespace-nowrap shrink-0">
          <span className="text-xl sm:text-2xl lg:text-3xl font-black text-prideDark tracking-tighter uppercase">Pride</span>
          <span className="text-xl sm:text-2xl lg:text-3xl font-black text-prideOrange tracking-tighter uppercase">Marine</span>
          <span className="text-xl sm:text-2xl lg:text-3xl font-black text-prideDark tracking-tighter uppercase hidden md:block">
            Services LLP
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.name}>
                <Link 
                  href={link.href}
                  className={`text-sm lg:text-base font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isActive 
                      ? "text-prideOrange" 
                      : "text-gray-900 hover:text-prideOrange"
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-prideDark focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-10 z-40">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-black uppercase tracking-widest ${
                  isActive ? "text-prideOrange" : "text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}