import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-prideDark text-white pt-16 lg:pt-24 pb-8 lg:pb-12 px-6 mt-auto border-t-4 border-prideOrange">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 border-b border-gray-700 pb-12 lg:pb-16 mb-6 lg:mb-8">
        
        {/* Brand Info */}
        <div>
          <div className="flex flex-col mb-4 lg:mb-6">
            <span className="text-3xl lg:text-4xl font-black tracking-tighter text-white leading-none">
              PRIDE <span className="text-prideOrange">MARINE</span>
            </span>
            <span className="text-sm lg:text-base font-bold tracking-[0.2em] text-gray-300 uppercase mt-2">
              Services LLP
            </span>
          </div>
          {/* FIXED: Changed from font-light to font-normal, increased size */}
          <p className="text-gray-200 text-base lg:text-lg leading-relaxed font-normal">
            Smart Maritime Solutions. Trusted Partnerships. Providing specialized services across vessel chartering, commercial management, and maritime consultancy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          {/* FIXED: Bumped header weight to font-black */}
          <h4 className="text-lg lg:text-xl font-black text-white mb-6 uppercase tracking-widest">Navigation</h4>
          {/* FIXED: Changed from font-light to font-medium, increased size */}
          <ul className="space-y-4 text-gray-200 text-base lg:text-lg font-medium">
            <li><Link href="/" className="hover:text-prideOrange transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-prideOrange transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-prideOrange transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-prideOrange transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          {/* FIXED: Bumped header weight to font-black */}
          <h4 className="text-lg lg:text-xl font-black text-white mb-6 uppercase tracking-widest">Contact Us</h4>
          {/* FIXED: Changed from font-light to font-medium, increased size */}
          <ul className="space-y-5 text-gray-200 text-base lg:text-lg font-medium">
            <li className="flex items-start gap-4">
              <span className="text-prideOrange font-black tracking-widest">A:</span>
              <span className="leading-relaxed">203/1, Rayson Arcade, Plot No. 139, Sector-8, Above HDFC Bank, Oslo Road, Gandhidham - 370201, Kutch, Gujarat.</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-prideOrange font-black tracking-widest">P:</span>
              <span className="tracking-widest">9687684442 | 9825225143</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-prideOrange font-black tracking-widest">E:</span>
              <div className="flex flex-col space-y-1 overflow-hidden tracking-wider text-sm lg:text-base">
                <span className="break-all hover:text-prideOrange transition-colors cursor-pointer">GEN@PRIDEMARINE.IN</span>
                <span className="break-all hover:text-prideOrange transition-colors cursor-pointer">OFFICE.PRIDEMARINE@GMAIL.COM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium tracking-wide gap-4 md:gap-0 text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} Pride Marine Services LLP. All rights reserved.</p>
        <div className="space-x-6 uppercase font-bold text-gray-300">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}