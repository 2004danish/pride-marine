import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "800", "900"] });

export default function ContactPage() {
  return (
    <main className={`flex min-h-screen flex-col bg-white text-[#111111] overflow-x-hidden ${inter.className}`}>
      <Navbar />
      
      {/* Premium Inner Page Header */}
      <div className="relative w-full pt-40 md:pt-48 pb-20 md:pb-24 bg-black flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#111111]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 md:w-16 h-1 bg-prideOrange mb-4 md:mb-6"></div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-3 md:mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-gray-400 font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm">
            Global Headquarters
          </p>
        </div>
      </div>

      {/* Contact Content Section - FIXED PADDING AND GAPS FOR MOBILE */}
      <section className="w-full py-16 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side - Deep Black Contact Info Card */}
          <div className="bg-black text-white p-8 sm:p-10 md:p-14 shadow-2xl border-t-4 border-prideOrange w-full overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-black mb-8 md:mb-12 uppercase tracking-widest text-prideOrange">Get In Touch</h3>
            
            <div className="space-y-10 md:space-y-12 font-light text-gray-300">
              <div>
                <h4 className="text-white font-extrabold uppercase tracking-widest text-[10px] sm:text-xs mb-2 sm:mb-3">Address</h4>
                <p className="leading-relaxed text-xs sm:text-sm md:text-base">
                  203/1, Rayson Arcade, Plot No. 139, Sector-8, <br className="hidden sm:block"/>
                  Above HDFC Bank, Oslo Road, <br className="hidden sm:block"/>
                  Gandhidham - 370201, Kutch, Gujarat.
                </p>
              </div>
              <div>
                <h4 className="text-white font-extrabold uppercase tracking-widest text-[10px] sm:text-xs mb-2 sm:mb-3">Phone</h4>
                <p className="tracking-wider text-xs sm:text-sm md:text-base">9687684442 | 9825225143</p>
              </div>
              <div className="w-full">
                <h4 className="text-white font-extrabold uppercase tracking-widest text-[10px] sm:text-xs mb-2 sm:mb-3">Email</h4>
                {/* FIXED: Added break-all and flex-col so long emails don't break the screen width */}
                <div className="flex flex-col space-y-1 tracking-wider text-xs sm:text-sm leading-relaxed overflow-hidden">
                  <span className="break-all">GEN@PRIDEMARINE.IN</span>
                  <span className="break-all">OFFICE.PRIDEMARINE@GMAIL.COM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Clean, Minimalist Form */}
          <div className="flex flex-col justify-center">
            <form className="space-y-8 md:space-y-10 w-full overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                <div className="flex flex-col">
                  <label className="text-[10px] sm:text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" className="border-b-2 border-gray-200 py-2 sm:py-3 focus:outline-none focus:border-prideOrange transition-colors bg-transparent text-black font-medium text-sm sm:text-base w-full rounded-none" placeholder="John" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] sm:text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" className="border-b-2 border-gray-200 py-2 sm:py-3 focus:outline-none focus:border-prideOrange transition-colors bg-transparent text-black font-medium text-sm sm:text-base w-full rounded-none" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-[10px] sm:text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="border-b-2 border-gray-200 py-2 sm:py-3 focus:outline-none focus:border-prideOrange transition-colors bg-transparent text-black font-medium text-sm sm:text-base w-full rounded-none" placeholder="john@company.com" />
              </div>
              
              <div className="flex flex-col">
                <label className="text-[10px] sm:text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="border-b-2 border-gray-200 py-2 sm:py-3 focus:outline-none focus:border-prideOrange transition-colors bg-transparent resize-none text-black font-medium text-sm sm:text-base w-full rounded-none" placeholder="How can we assist you?"></textarea>
              </div>
              
              <button type="button" className="bg-black text-white px-8 sm:px-10 py-4 sm:py-5 font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-prideOrange transition-all duration-300 w-full mt-2 sm:mt-4 rounded-none">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}