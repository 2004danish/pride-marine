"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Fleet() {
  const [showAll, setShowAll] = useState(false);

  // Fully extracted precise data from the provided PDF
  const fleetData = [
    { id: 1, name: "MV GRACE BALI", type: "General Cargo", cargo: "Steel Sheet Piles - U Type", quantity: "6,085 MTS" },
    { id: 2, name: "MV KINGDOM", type: "General Cargo", cargo: "Steel Sheet Piles - U Type", quantity: "1,946 MTS" },
    { id: 3, name: "MV BON VOYAGE", type: "General Cargo", cargo: "Steel Sheet Piles - U Type", quantity: "2,100 MTS" },
    { id: 4, name: "MV GAUTAM AARAV", type: "General Cargo", cargo: "Steel Sheet Piles - U Type", quantity: "2,039 MTS" },
    { id: 5, name: "MV AL HADBAA", type: "General Cargo / Multipurpose", cargo: "Railway Wagons", quantity: "50 NOS" },
    { id: 6, name: "MV SEA TRAIN", type: "Bulk Carrier", cargo: "Wind Mill Blades", quantity: "20,970 CBM" },
    { id: 7, name: "MV BULK KING", type: "Bulk Carrier", cargo: "Cement in Bags", quantity: "48,000 MTS" },
    { id: 8, name: "MV BBC VAASA", type: "Bulk Carrier", cargo: "Gas Turbine + Cable Reel", quantity: "2,500 CBM" },
    { id: 9, name: "MV YANGZE VENUS", type: "General Cargo", cargo: "Quartz Powder", quantity: "11,000 MTS" },
    { id: 10, name: "MV SPECTRUM - V", type: "General Cargo", cargo: "Salt in Bags", quantity: "6,600 MTS" },
    { id: 11, name: "MV SOMNATH", type: "Supramax Bulk Carrier", cargo: "Iron Ore", quantity: "45,000 MTS" },
    { id: 12, name: "MV ADINATH", type: "Bulk Carrier", cargo: "Titaniferous Magnetite Ore Lumps (TFM Ore)", quantity: "3,300 MTS" },
    { id: 13, name: "MV ADINATH", type: "Bulk Carrier", cargo: "Silica Sand", quantity: "6,600 MTS" },
    { id: 14, name: "MV BANGLAR SAMRIDDHI", type: "Bulk Carrier", cargo: "Aggregate", quantity: "32,000 MTS" },
    { id: 15, name: "MV BANGLAR ARJUN", type: "Gear Bulk Carrier", cargo: "Aggregate", quantity: "29,000 MTS" },
    { id: 16, name: "MV PLUTO WITH BARGE", type: "-", cargo: "Steel Coated Pipes", quantity: "1,044 PCS" },
    { id: 17, name: "MV GRENETA", type: "Bulk Carrier", cargo: "Pet Coke", quantity: "5,000 MTS" },
    { id: 18, name: "TUP RC STAR WITH BARGE", type: "-", cargo: "Pipes", quantity: "690 PCS" },
    { id: 19, name: "MV RASHA", type: "Bulk Carrier", cargo: "Bagged Rice", quantity: "26,500 MTS" },
    { id: 20, name: "MV ASHICO VICTORIA", type: "Dry Bulk / Mini Bulkers", cargo: "Iron Ore Fines", quantity: "7,000 MTS" },
    { id: 21, name: "MV CERULEAN", type: "Bulk Carrier", cargo: "Wind Mill Blades", quantity: "37,719 CBM" }
  ];

  // Logic to show either all items or just the first 7
  const displayedFleet = showAll ? fleetData : fleetData.slice(0, 7);

  return (
    <section className="w-full py-20 lg:py-32 px-4 bg-prideDark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 md:flex md:items-end md:justify-between"
        >
          <div>
            <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
              <div className="w-8 lg:w-12 h-0.5 bg-prideOrange"></div>
              <span className="text-prideOrange font-bold tracking-widest uppercase text-[10px] lg:text-xs">Our Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white uppercase tracking-tighter">
              Vessels Chartered <br className="hidden sm:block"/><span className="text-gray-600">&amp; Handled</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-400 max-w-sm md:max-w-md md:text-right font-light leading-relaxed text-sm lg:text-base">
            A proven history of operational excellence across diverse vessel types and specialized cargo requirements.
          </p>
        </motion.div>

        {/* Securely Bounded Responsive Data Table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#161616] border border-gray-800 w-full overflow-hidden"
        >
          <div className="overflow-x-auto w-full scrollbar-hide">
            <table className="w-full text-left border-collapse min-w-[800px] lg:min-w-[900px]">
              <thead>
                <tr className="bg-black text-gray-400 text-[10px] lg:text-xs uppercase tracking-widest border-b border-gray-800">
                  <th className="px-6 lg:px-8 py-5 lg:py-6 font-bold">Sr. No.</th>
                  <th className="px-6 lg:px-8 py-5 lg:py-6 font-bold">Vessel Name</th>
                  <th className="px-6 lg:px-8 py-5 lg:py-6 font-bold">Vessel Type</th>
                  <th className="px-6 lg:px-8 py-5 lg:py-6 font-bold">Cargo</th>
                  <th className="px-6 lg:px-8 py-5 lg:py-6 font-bold text-right">Quantity Handled</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {displayedFleet.map((vessel) => (
                  <tr key={vessel.id} className="hover:bg-white/5 transition-colors duration-300 group">
                    <td className="px-6 lg:px-8 py-5 lg:py-6 text-xs lg:text-sm font-medium text-gray-500 group-hover:text-prideOrange transition-colors">
                      {String(vessel.id).padStart(2, '0')}
                    </td>
                    <td className="px-6 lg:px-8 py-5 lg:py-6 text-xs lg:text-sm font-bold text-white tracking-wide">{vessel.name}</td>
                    <td className="px-6 lg:px-8 py-5 lg:py-6 text-xs lg:text-sm text-gray-400 font-light">{vessel.type}</td>
                    <td className="px-6 lg:px-8 py-5 lg:py-6 text-xs lg:text-sm text-gray-400 font-light">{vessel.cargo}</td>
                    <td className="px-6 lg:px-8 py-5 lg:py-6 text-xs lg:text-sm font-bold text-prideOrange text-right">{vessel.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Interactive Table Footer */}
          <div className="bg-black px-6 lg:px-8 py-4 lg:py-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
             <span className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest font-bold text-center sm:text-left">
               {showAll ? "Displaying all historical operations" : "Displaying recent operations"}
             </span>
             
             {/* Toggle Button for Full List */}
             <button 
               onClick={() => setShowAll(!showAll)}
               className="text-[10px] lg:text-sm font-bold text-white hover:text-prideOrange transition-colors uppercase tracking-widest flex items-center gap-2"
             >
               {showAll ? "Hide Full Fleet Details \u2191" : "Request Full Fleet Details \u2192"}
             </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}