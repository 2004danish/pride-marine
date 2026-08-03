import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "800", "900"] });

export default function ContactPage() {
  return (
    <main className={`flex min-h-screen flex-col bg-white text-[#111111] overflow-x-hidden ${inter.className}`}>
      <Navbar />
      
      {/* Premium Inner Page Header */}
      <div className="relative w-full pt-48 pb-24 bg-black flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#111111]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-1 bg-prideOrange mb-6"></div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
            Global Headquarters
          </p>
        </div>
      </div>

      {/* Contact Content Section */}
      <section className="w-full py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Side - Deep Black Contact Info Card */}
          <div className="bg-black text-white p-10 md:p-14 shadow-2xl border-t-4 border-prideOrange">
            <h3 className="text-2xl font-black mb-12 uppercase tracking-widest text-prideOrange">Get In Touch</h3>
            
            <div className="space-y-12 font-light text-gray-300">
              <div>
                <h4 className="text-white font-extrabold uppercase tracking-widest text-xs mb-3">Address</h4>
                <p className="leading-relaxed text-sm md:text-base">
                  203/1, Rayson Arcade, Plot No. 139, Sector-8, <br/>
                  Above HDFC Bank, Oslo Road, <br/>
                  Gandhidham - 370201, Kutch, Gujarat.
                </p>
              </div>
              <div>
                <h4 className="text-white font-extrabold uppercase tracking-widest text-xs mb-3">Phone</h4>
                <p className="tracking-wider text-sm md:text-base">9687684442 | 9825225143</p>
              </div>
              <div>
                <h4 className="text-white font-extrabold uppercase tracking-widest text-xs mb-3">Email</h4>
                <p className="tracking-wider text-sm leading-relaxed">
                  GEN@PRIDEMARINE.IN<br/>
                  OFFICE.PRIDEMARINE@GMAIL.COM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Clean, Minimalist Form */}
          <div className="flex flex-col justify-center">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-prideOrange transition-colors bg-transparent text-black font-medium" placeholder="John" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-prideOrange transition-colors bg-transparent text-black font-medium" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col">
                <label className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-prideOrange transition-colors bg-transparent text-black font-medium" placeholder="john@company.com" />
              </div>
              
              <div className="flex flex-col">
                <label className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-prideOrange transition-colors bg-transparent resize-none text-black font-medium" placeholder="How can we assist you?"></textarea>
              </div>
              
              <button type="button" className="bg-black text-white px-10 py-5 font-extrabold text-sm tracking-[0.2em] uppercase hover:bg-prideOrange transition-all duration-300 w-full mt-4">
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