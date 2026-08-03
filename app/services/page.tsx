import Navbar from "../../components/Navbar";
import ServicesComponent from "../../components/Services";
import StowageFactor from "../../components/StowageFactor";
import Footer from "../../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "800", "900"] });

export default function ServicesPage() {
  return (
    <main className={`flex min-h-screen flex-col bg-white text-[#111111] overflow-x-hidden ${inter.className}`}>
      <Navbar />
      
      {/* Premium Inner Page Header */}
      <div className="relative w-full pt-48 pb-24 bg-black flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#111111]"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-1 bg-prideOrange mb-6"></div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4 drop-shadow-lg">
            Our Expertise
          </h1>
          <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
            Smart. Fast. Safe.
          </p>
        </div>
      </div>

      {/* Page Content */}
      <ServicesComponent />
      <StowageFactor />
      
      <Footer />
    </main>
  );
}