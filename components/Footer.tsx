import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-prideDark text-white pt-16 lg:pt-24 pb-8 lg:pb-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 border-b border-gray-800 pb-12 lg:pb-16 mb-6 lg:mb-8">
        
        {/* Brand Info */}
        <div>
          {/* UPDATED: Larger logo and pure white "Services LLP" */}
          <div className="flex flex-col mb-4 lg:mb-6">
            <span className="text-3xl font-extrabold tracking-tighter text-white leading-none">
              PRIDE <span className="text-prideOrange">MARINE</span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] text-white uppercase mt-2">
              Services LLP
            </span>
          </div>
          {/* UPDATED: Text bumped to sm/base and changed to white */}
          <p className="text-white text-sm lg:text-base leading-relaxed font-light">
            Smart Maritime Solutions. Trusted Partnerships. Providing specialized services across vessel chartering, commercial management, and maritime consultancy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          {/* UPDATED: Heading size increased */}
          <h4 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6 uppercase tracking-widest">Navigation</h4>
          {/* UPDATED: Links bumped to sm/base and changed to white */}
          <ul className="space-y-3 lg:space-y-4 text-white text-sm lg:text-base font-light">
            <li><Link href="/" className="hover:text-prideOrange transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-prideOrange transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-prideOrange transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-prideOrange transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          {/* UPDATED: Heading size increased */}
          <h4 className="text-lg lg:text-xl font-bold text-white mb-4 lg:mb-6 uppercase tracking-widest">Contact Us</h4>
          {/* UPDATED: Contact info bumped to sm/base and changed to white */}
          <ul className="space-y-4 lg:space-y-5 text-white text-sm lg:text-base font-light">
            <li className="flex items-start gap-3 lg:gap-4">
              <span className="text-prideOrange font-bold tracking-widest">A:</span>
              <span className="leading-relaxed">203/1, Rayson Arcade, Plot No. 139, Sector-8, Above HDFC Bank, Oslo Road, Gandhidham - 370201, Kutch, Gujarat.</span>
            </li>
            <li className="flex items-center gap-3 lg:gap-4">
              <span className="text-prideOrange font-bold tracking-widest">P:</span>
              <span>9687684442 | 9825225143</span>
            </li>
            <li className="flex items-start gap-3 lg:gap-4">
              <span className="text-prideOrange font-bold tracking-widest">E:</span>
              <div className="flex flex-col space-y-1 overflow-hidden">
                <span className="break-all hover:text-prideOrange transition-colors cursor-pointer">GEN@PRIDEMARINE.IN</span>
                <span className="break-all hover:text-prideOrange transition-colors cursor-pointer">OFFICE.PRIDEMARINE@GMAIL.COM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      {/* UPDATED: Copyright bumped from 10px up to xs/sm, and changed to bright gray/white */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs lg:text-sm text-gray-100 font-light tracking-wide gap-4 md:gap-0 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Pride Marine Services LLP. All rights reserved.</p>
        <div className="space-x-4 lg:space-x-6 uppercase font-medium">
          <Link href="#" className="hover:text-prideOrange transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-prideOrange transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}