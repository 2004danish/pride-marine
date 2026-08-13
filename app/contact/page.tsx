"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600", "800", "900"] });

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // Controls the Thank You screen

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(e.currentTarget);
    
    // Web3Forms configuration
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
    
    // Combine First and Last name for the email
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    formData.append("name", `${firstName} ${lastName}`);
    
    // Set a custom subject line based on their inquiry choice
    const inquiryType = formData.get("inquiryType");
    formData.append("subject", `New Website Inquiry: ${inquiryType} from ${firstName}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        // Show the Thank You screen
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset(); // Clear form in the background
        
        // After 5 seconds, hide the Thank You screen and reset
        setTimeout(() => {
          setIsSuccess(false);
          setStatus("");
        }, 5000);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  }

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
          <p className="text-white font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm">
            Global Headquarters
          </p>
        </div>
      </div>

      {/* Contact Content Section */}
      <section className="w-full py-16 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Side - Deep Black Contact Info Card */}
          <div className="bg-black text-white p-8 sm:p-10 md:p-14 shadow-2xl border-t-4 border-prideOrange w-full h-fit overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-black mb-8 md:mb-12 uppercase tracking-widest text-prideOrange">Get In Touch</h3>
            
            <div className="space-y-10 md:space-y-12 font-light text-white">
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
                {/* REMOVED FIRST NUMBER */}
                <p className="tracking-wider text-xs sm:text-sm md:text-base">9825225143</p>
              </div>
              <div className="w-full">
                <h4 className="text-white font-extrabold uppercase tracking-widest text-[10px] sm:text-xs mb-2 sm:mb-3">Email</h4>
                <div className="flex flex-col space-y-1 tracking-wider text-xs sm:text-sm md:text-base leading-relaxed overflow-hidden">
                  {/* CHANGED TO LOWERCASE */}
                  <span className="break-all hover:text-prideOrange transition-colors cursor-pointer">gen@pridemarine.in</span>
                  <span className="break-all hover:text-prideOrange transition-colors cursor-pointer">office.pridemarine@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Dynamic Form Area */}
          <div className="flex flex-col justify-center min-h-[600px]">
            {isSuccess ? (
              /* --- ANIMATED THANK YOU SCREEN --- */
              <div className="flex flex-col items-center justify-center text-center p-10 bg-white border-2 border-green-500 h-full shadow-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
                
                {/* Radar Ping Icon Animation */}
                <div className="relative flex justify-center items-center w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-75"></div>
                  <svg className="relative w-20 h-20 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                
                {/* Glowing Pulse Text Animation */}
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-800 mb-4 animate-pulse">
                  Thank You
                </h3>
                
                <p className="text-gray-600 font-semibold text-lg max-w-md">
                  Your inquiry has been successfully sent to the Pride Marine team. We will be in touch with you shortly.
                </p>
              </div>
            ) : (
              /* --- CONTACT FORM --- */
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 w-full overflow-hidden animate-in fade-in duration-500">
                
                {/* Web3Forms Spam Protection (Honeypot) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="flex flex-col">
                    <label className="text-xs sm:text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-3">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      className="w-full border-2 border-gray-200 bg-gray-50 px-4 py-3 sm:py-4 text-gray-900 font-semibold text-base sm:text-lg focus:outline-none focus:border-prideOrange focus:bg-white transition-all rounded-none placeholder-gray-400" 
                      placeholder="John" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs sm:text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-3">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      className="w-full border-2 border-gray-200 bg-gray-50 px-4 py-3 sm:py-4 text-gray-900 font-semibold text-base sm:text-lg focus:outline-none focus:border-prideOrange focus:bg-white transition-all rounded-none placeholder-gray-400" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="flex flex-col">
                    <label className="text-xs sm:text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-3">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full border-2 border-gray-200 bg-gray-50 px-4 py-3 sm:py-4 text-gray-900 font-semibold text-base sm:text-lg focus:outline-none focus:border-prideOrange focus:bg-white transition-all rounded-none placeholder-gray-400" 
                      placeholder="john@company.com" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-xs sm:text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-3">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full border-2 border-gray-200 bg-gray-50 px-4 py-3 sm:py-4 text-gray-900 font-semibold text-base sm:text-lg focus:outline-none focus:border-prideOrange focus:bg-white transition-all rounded-none placeholder-gray-400" 
                      placeholder="+91 XXXXX XXXXX" 
                    />
                  </div>
                </div>

                {/* Inquiry Type Dropdown */}
                <div className="flex flex-col">
                  <label className="text-xs sm:text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-3">Nature of Inquiry *</label>
                  <select 
                    name="inquiryType" 
                    required
                    defaultValue=""
                    className="w-full border-2 border-gray-200 bg-gray-50 px-4 py-3 sm:py-4 text-gray-900 font-semibold text-base sm:text-lg focus:outline-none focus:border-prideOrange focus:bg-white transition-all rounded-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select an option...</option>
                    <option value="Vessel Chartering">Vessel Chartering</option>
                    <option value="Commercial Management">Commercial Management</option>
                    <option value="Maritime Consultancy">Maritime Consultancy</option>
                    <option value="Stowage Factor Data">Stowage Factor Data</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-xs sm:text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-3">Message *</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    className="w-full border-2 border-gray-200 bg-gray-50 px-4 py-3 sm:py-4 text-gray-900 font-semibold text-base sm:text-lg focus:outline-none focus:border-prideOrange focus:bg-white transition-all rounded-none placeholder-gray-400 resize-none" 
                    placeholder="How can we assist you with your cargo or vessel needs?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-3 bg-black text-white px-8 sm:px-10 py-4 sm:py-5 font-extrabold text-sm sm:text-base tracking-[0.2em] uppercase hover:bg-prideOrange transition-all duration-300 w-full mt-4 rounded-none shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Error Status Message (Only shows if something fails) */}
                {status && !isSuccess && (
                  <div className="p-4 font-bold text-center mt-4 border-2 border-red-500 text-red-700 bg-red-50">
                    {status}
                  </div>
                )}

              </form>
            )}
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}