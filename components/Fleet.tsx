"use client";

import { motion } from "framer-motion";

export default function Fleet() {
  const fleetData = [
    { id: 1, name: "MV GRACE BALI", type: "General Cargo", cargo: "Steel Sheet Piles - U Type", quantity: "6,085 MTS" },
    { id: 2, name: "MV KINGDOM", type: "General Cargo", cargo: "Steel Sheet Piles - U Type", quantity: "1,946 MTS" },
    { id: 3, name: "MV BON VOYAGE", type: "General Cargo", cargo: "Steel Sheet Piles - U Type", quantity: "2,100 MTS" },
    { id: 4, name: "MV GAUTAM AARAV", type: "General Cargo", cargo: "Steel Sheet Piles - U Type", quantity: "2,039 MTS" },
    { id: 5, name: "MV AL HADBAA", type: "General Cargo / Multipurpose", cargo: "Railway Wagons", quantity: "50 nos" },
    { id: 6, name: "MV SEA TRAIN", type: "Bulk Carrier", cargo: "Wind mill blades", quantity: "20,970 CBM" },
    { id: 7, name: "MV BULK KING", type: "Bulk Carrier", cargo: "Cement in Bags", quantity: "48,000 MTS" }
  ];

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
                {fleetData.map((vessel, index) => (
                  <tr key={vessel.id} className="hover:bg-white/5 transition-colors duration-300 group">
                    <td className="px-6 lg:px-8 py-5 lg:py-6 text-xs lg:text-sm font-medium text-gray-500 group-hover:text-prideOrange transition-colors">0{vessel.id}</td>
                    <td className="px-6 lg:px-8 py-5 lg:py-6 text-xs lg:text-sm font-bold text-white tracking-wide">{vessel.name}</td>
                    <td className="px-6 lg:px-8 py-5 lg:py-6 text-xs lg:text-sm text-gray-400 font-light">{vessel.type}</td>
                    <td className="px-6 lg:px-8 py-5 lg:py-6 text-xs lg:text-sm text-gray-400 font-light">{vessel.cargo}</td>
                    <td className="px-6 lg:px-8 py-5 lg:py-6 text-xs lg:text-sm font-bold text-prideOrange text-right">{vessel.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Table Footer */}
          <div className="bg-black px-6 lg:px-8 py-4 lg:py-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
             <span className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-widest font-bold text-center sm:text-left">Displaying recent operations</span>
             <button className="text-[10px] lg:text-sm font-bold text-white hover:text-prideOrange transition-colors uppercase tracking-widest">
               Request Full Fleet Details &rarr;
             </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}