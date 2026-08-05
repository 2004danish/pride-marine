"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Inter } from "next/font/google";
import { Search } from "lucide-react";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "800", "900"] });

// Meticulously extracted from PDF
const stowageData = [
  { cargo: "ALUMINA", bulk: "37-42", bagged: "-", baled: "-" },
  { cargo: "ALUMINA SILICA", bulk: "25", bagged: "-", baled: "-" },
  { cargo: "ALUMINUM DROSS", bulk: "29", bagged: "-", baled: "-" },
  { cargo: "ALUMINUM FERROSILICON POWDER", bulk: "25", bagged: "-", baled: "-" },
  { cargo: "ALUMINUM INGOTS", bulk: "31", bagged: "-", baled: "-" },
  { cargo: "ALUMINUM NITRATE", bulk: "21", bagged: "-", baled: "-" },
  { cargo: "ALUMINUM ORE", bulk: "28", bagged: "-", baled: "-" },
  { cargo: "ALUMINUM SILICON POWDER", bulk: "25", bagged: "-", baled: "-" },
  { cargo: "ALUNITE", bulk: "25", bagged: "-", baled: "-" },
  { cargo: "AMMONIUM BICARBONATE", bulk: "-", bagged: "49", baled: "-" },
  { cargo: "AMMONIUM CHLORIDE", bulk: "-", bagged: "47", baled: "-" },
  { cargo: "AMMONIUM NITRATE FERTILIZER", bulk: "30-35", bagged: "44-50", baled: "-" },
  { cargo: "AMMONIUM SULPHATE", bulk: "34-38", bagged: "43-47", baled: "-" },
  { cargo: "ANHYDROUS BORAX", bulk: "27-29", bagged: "-", baled: "-" },
  { cargo: "ANTHRACITE", bulk: "40-47", bagged: "-", baled: "-" },
  { cargo: "ANTIMONY ORES/RESIDUE", bulk: "13", bagged: "-", baled: "-" },
  { cargo: "APATITE CONCENTRATE", bulk: "19-20", bagged: "-", baled: "-" },
  { cargo: "ARGENITE", bulk: "25", bagged: "-", baled: "-" },
  { cargo: "ASBESTOS ORE", bulk: "-", bagged: "55-75", baled: "-" },
  { cargo: "ATTAPULGITE (RAW)", bulk: "45-50", bagged: "-", baled: "-" },
  { cargo: "ATTAPULGITE (HYDRATED)", bulk: "70-75", bagged: "-", baled: "-" },
  { cargo: "BALL STONE", bulk: "27", bagged: "34", baled: "-" },
  { cargo: "BARITE BARYTES", bulk: "15-25", bagged: "16-21", baled: "-" },
  { cargo: "BARLEY", bulk: "53-56", bagged: "58-60", baled: "-" },
  { cargo: "BASIC SLAG", bulk: "27-29", bagged: "30-32", baled: "-" },
  { cargo: "BAUXITE", bulk: "27-32", bagged: "-", baled: "-" },
  { cargo: "BEANS", bulk: "50-55", bagged: "55-60", baled: "-" },
  { cargo: "BEET PULP", bulk: "56", bagged: "-", baled: "-" },
  { cargo: "BENTONITE", bulk: "40", bagged: "-", baled: "-" },
  { cargo: "BLENDE", bulk: "19", bagged: "-", baled: "-" },
  { cargo: "BONES MEAL", bulk: "-", bagged: "80", baled: "-" },
  { cargo: "BORAX-ANHYDROUS BORAX", bulk: "27-29", bagged: "-", baled: "-" },
  { cargo: "BORAX-CALCINED RASORITE", bulk: "27-29", bagged: "-", baled: "-" },
  { cargo: "BORAX-COLEMANITE", bulk: "22-23", bagged: "-", baled: "-" },
  { cargo: "BORAX-RASORITE 46 (PENTAHYDRITE CRUDE)", bulk: "36-38", bagged: "-", baled: "-" },
  { cargo: "BORAX-TINCAL", bulk: "36-38", bagged: "41-44", baled: "-" },
  { cargo: "BORAX-ULEXITE", bulk: "36-38", bagged: "-", baled: "-" },
  { cargo: "BORIC ACID", bulk: "-", bagged: "50", baled: "-" },
  { cargo: "BORNITE", bulk: "16", bagged: "-", baled: "-" },
  { cargo: "BROAN BEAN", bulk: "53", bagged: "-", baled: "-" },
  { cargo: "BROWN MANGANESE", bulk: "18", bagged: "-", baled: "-" },
  { cargo: "BUCKWHEAT", bulk: "61", bagged: "71", baled: "-" },
  { cargo: "CALCINED PYRITE", bulk: "16", bagged: "-", baled: "-" },
  { cargo: "CALCINED RASORITE", bulk: "27-29", bagged: "-", baled: "-" },
  { cargo: "CALCIUM AMMONIUM NITRATE", bulk: "30-35", bagged: "44-50", baled: "-" },
  { cargo: "CALCIUM CARBONATE PRECIPTATED", bulk: "-", bagged: "47", baled: "-" },
  { cargo: "CALCIUM HYDRATE (LIME)", bulk: "27", bagged: "40-42", baled: "-" },
  { cargo: "CALCIUM NITRATE FERTILIZER", bulk: "32-40", bagged: "-", baled: "-" },
  { cargo: "CALCIUM PHOSPHATE", bulk: "25", bagged: "-", baled: "-" },
  { cargo: "CANDLE", bulk: "-", bagged: "56", baled: "-" },
  { cargo: "CARBORUNDUM", bulk: "20", bagged: "-", baled: "-" },
  { cargo: "CASTOR BEANS", bulk: "-", bagged: "78", baled: "-" },
  { cargo: "CASHEW NUTS", bulk: "-", bagged: "75", baled: "-" },
  { cargo: "CELESTITE", bulk: "19-21", bagged: "-", baled: "-" },
  { cargo: "CEMENT", bulk: "22-27", bagged: "23-28", baled: "-" },
  { cargo: "CEMENT CLINKER", bulk: "25-30", bagged: "-", baled: "-" },
  { cargo: "CERARGYRITE", bulk: "25", bagged: "-", baled: "-" },
  { cargo: "CERUSSITE", bulk: "16", bagged: "-", baled: "-" },
  { cargo: "CHALCOCITE", bulk: "16", bagged: "-", baled: "-" },
  { cargo: "CHALCOPYRITE", bulk: "16", bagged: "-", baled: "-" },
  { cargo: "CHALK", bulk: "35-40", bagged: "-", baled: "-" },
  { cargo: "CHARCOAL", bulk: "95", bagged: "-", baled: "-" },
  { cargo: "CHINA CLAY (KAOLIN)", bulk: "35-45", bagged: "40-45", baled: "-" },
  { cargo: "CHROME PELLETS", bulk: "21", bagged: "-", baled: "-" },
  { cargo: "CHROMIC IRON ORE", bulk: "14", bagged: "-", baled: "-" },
  { cargo: "CHROMIUM ORE", bulk: "14", bagged: "-", baled: "-" },
  { cargo: "CHRYSOLITE (OLIVINE)", bulk: "21-23", bagged: "-", baled: "-" },
  { cargo: "CITRUS PULP PELLETS", bulk: "55-58", bagged: "-", baled: "-" },
  { cargo: "CLAY", bulk: "29-41", bagged: "-", baled: "-" },
  { cargo: "COAL", bulk: "38-50", bagged: "-", baled: "-" },
  { cargo: "COAL BRIQUETTES", bulk: "54-60", bagged: "-", baled: "-" },
  { cargo: "COAL SLURRY", bulk: "38", bagged: "-", baled: "-" },
  { cargo: "COAL TAR", bulk: "49-52", bagged: "-", baled: "-" },
  { cargo: "COBALT GLANCE", bulk: "18", bagged: "-", baled: "-" },
  { cargo: "COBALT ORE", bulk: "18", bagged: "-", baled: "-" },
  { cargo: "COCOA", bulk: "-", bagged: "80", baled: "-" },
  { cargo: "COFFEE", bulk: "-", bagged: "60-70", baled: "-" },
  { cargo: "COIR", bulk: "-", bagged: "-", baled: "90-130" },
  { cargo: "COKE", bulk: "60-100", bagged: "-", baled: "-" },
  { cargo: "COKE BREEZE", bulk: "50-65", bagged: "-", baled: "-" },
  { cargo: "COKE-FOUNDRY COKE", bulk: "80-90", bagged: "-", baled: "-" },
  { cargo: "COKE-FURNACE COKE", bulk: "70-80", bagged: "-", baled: "-" },
  { cargo: "COLEMANITE", bulk: "22-23", bagged: "-", baled: "-" },
  { cargo: "COPPER CONCENTRATE", bulk: "14-18", bagged: "22-28", baled: "-" },
  { cargo: "COPPER GRANULES", bulk: "8-9", bagged: "-", baled: "-" },
  { cargo: "COPPER MATTE", bulk: "14-19", bagged: "18-20", baled: "-" },
  { cargo: "COPPER ORE", bulk: "15-20", bagged: "-", baled: "-" },
  { cargo: "COPPER PYRITES", bulk: "20-22", bagged: "-", baled: "-" },
  { cargo: "COPPER SLAG", bulk: "35-40", bagged: "-", baled: "-" },
  { cargo: "COPRA", bulk: "75", bagged: "85", baled: "-" },
  { cargo: "COPRA CAKE", bulk: "60", bagged: "65", baled: "-" },
  { cargo: "COPRA CHIPS", bulk: "100", bagged: "-", baled: "-" },
  { cargo: "COPRA EXPELLERS", bulk: "60", bagged: "65", baled: "-" },
  { cargo: "COPRA MEAL", bulk: "60", bagged: "70", baled: "-" },
  { cargo: "CORN (MAIZE)", bulk: "47-52", bagged: "52-56", baled: "-" },
  { cargo: "CORUNDUM", bulk: "35-40", bagged: "40-45", baled: "-" },
  { cargo: "COTTON", bulk: "-", bagged: "-", baled: "60-130" },
  { cargo: "COTTON SEEDS", bulk: "-", bagged: "90-100", baled: "-" },
  { cargo: "COTTONSEEDS CAKE", bulk: "55-65", bagged: "-", baled: "-" },
  { cargo: "COTTONSEEDS EXPELLERS", bulk: "60-65", bagged: "-", baled: "-" },
  { cargo: "COVELLITE", bulk: "16", bagged: "-", baled: "-" },
  { cargo: "CRYOLITE", bulk: "25", bagged: "-", baled: "-" },
  { cargo: "DEAD MAGNESITE", bulk: "29", bagged: "47", baled: "-" },
  { cargo: "DI-AMMONIUM PHOSPHATE (DAP)", bulk: "41-45", bagged: "45-47", baled: "-" },
  { cargo: "DI-CALCIUM PHOSPHATE", bulk: "55-60", bagged: "-", baled: "-" },
  { cargo: "DIRECT REDUCED IRON", bulk: "18", bagged: "-", baled: "-" },
  { cargo: "DOLOMITE", bulk: "20-23", bagged: "-", baled: "-" },
  { cargo: "DRY COPRA", bulk: "71", bagged: "-", baled: "-" },
  { cargo: "EMERY", bulk: "18-20", bagged: "20-30", baled: "-" },
  { cargo: "ESPARTO", bulk: "-", bagged: "-", baled: "130-170" },
  { cargo: "FEED WHEAT", bulk: "46-48", bagged: "-", baled: "-" },
  { cargo: "FELDSPAR", bulk: "22-30", bagged: "27-35", baled: "-" },
  { cargo: "FERROCHROME", bulk: "8", bagged: "-", baled: "-" },
  { cargo: "FERROMANGANESE", bulk: "8", bagged: "-", baled: "-" },
  { cargo: "FERROSILICON", bulk: "21", bagged: "-", baled: "-" },
  { cargo: "FISH MEAL", bulk: "47", bagged: "71", baled: "-" },
  { cargo: "FLAX", bulk: "-", bagged: "-", baled: "100-155" },
  { cargo: "FLY ASH", bulk: "44", bagged: "-", baled: "-" },
  { cargo: "GROUNDNUTS", bulk: "60-110", bagged: "65-90", baled: "-" },
  { cargo: "GYPSUM", bulk: "27-40", bagged: "40-45", baled: "-" },
  { cargo: "HAY", bulk: "-", bagged: "-", baled: "125-350" },
  { cargo: "HEMP", bulk: "-", bagged: "-", baled: "90-110" },
  { cargo: "ILMENITE", bulk: "11-15", bagged: "-", baled: "-" },
  { cargo: "IRON ORE", bulk: "19", bagged: "-", baled: "-" },
  { cargo: "IRON ORE PELLETS", bulk: "14", bagged: "-", baled: "-" },
  { cargo: "JUTE", bulk: "-", bagged: "100-105", baled: "65" },
  { cargo: "KAOLIN (CHINA CLAY)", bulk: "35-45", bagged: "40-45", baled: "-" },
  { cargo: "LEAD ORE", bulk: "13-14", bagged: "16", baled: "-" },
  { cargo: "LIMESTONE", bulk: "24-30", bagged: "-", baled: "-" },
  { cargo: "MANGANESE ORE", bulk: "18", bagged: "-", baled: "-" },
  { cargo: "OATS CLIPPED", bulk: "48-62", bagged: "64-72", baled: "-" },
  { cargo: "PEANUTS", bulk: "116", bagged: "-", baled: "-" },
  { cargo: "PETROLEUM COKE", bulk: "40-60", bagged: "-", baled: "-" },
  { cargo: "PHOSPHATE ROCK", bulk: "28-35", bagged: "45-50", baled: "-" },
  { cargo: "PIG IRON", bulk: "14", bagged: "-", baled: "-" },
  { cargo: "POTASH", bulk: "33-36", bagged: "35-37", baled: "-" },
  { cargo: "RICE-PADDY (ROUGH)", bulk: "56-60", bagged: "64-67", baled: "-" },
  { cargo: "RICE -BROWN (CLEAN)", bulk: "45-50", bagged: "53-55", baled: "-" },
  { cargo: "RUBBER", bulk: "-", bagged: "-", baled: "65-70" },
  { cargo: "SALT", bulk: "30-40", bagged: "-", baled: "-" },
  { cargo: "SCRAP METAL", bulk: "50-65", bagged: "-", baled: "40-50" },
  { cargo: "SOYABEANS", bulk: "48-52", bagged: "55-58", baled: "-" },
  { cargo: "STEEL SCRAP", bulk: "50-65", bagged: "-", baled: "40-50" },
  { cargo: "SUGAR", bulk: "40-43", bagged: "48-53", baled: "-" },
  { cargo: "SULPHUR", bulk: "28-32", bagged: "35-40", baled: "-" },
  { cargo: "TEA (in chests)", bulk: "-", bagged: "-", baled: "70-150" },
  { cargo: "TOBACCO (in cases)", bulk: "-", bagged: "-", baled: "120-140" },
  { cargo: "UREA", bulk: "45-55", bagged: "55-65", baled: "-" },
  { cargo: "WHEAT", bulk: "44-49", bagged: "47-52", baled: "-" },
  { cargo: "WOODCHIPS", bulk: "99", bagged: "-", baled: "-" }
];

export default function StowageFactorPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = stowageData.filter(item => 
    item.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className={`flex min-h-screen flex-col bg-gray-50 text-prideDark overflow-x-hidden ${inter.className}`}>
      <Navbar />
      
      {/* Light Theme Header Section */}
      <div className="relative w-full pt-40 md:pt-48 pb-16 md:pb-20 bg-white flex flex-col items-center justify-center text-center px-4 border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
          <div className="w-12 md:w-16 h-1 bg-prideOrange mb-4 md:mb-6"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-prideDark mb-4 drop-shadow-sm leading-tight">
            Stowage Factors <br/><span className="text-gray-400">Database</span>
          </h1>
          <p className="text-gray-600 font-normal leading-relaxed text-sm md:text-base">
            Comprehensive guide for accurate stowage calculations (cbft/mt). Use the search bar below to instantly find specific cargo metrics for bulk, bagged, and baled transport.
          </p>
          
          {/* Light Theme Search Bar */}
          <div className="mt-8 md:mt-10 w-full relative shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search for a cargo type (e.g., Wheat, Coal, Cotton)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-300 text-prideDark font-medium px-4 py-4 pl-12 focus:outline-none focus:border-prideOrange focus:ring-1 focus:ring-prideOrange transition-all rounded-none placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Light Theme Data Table Section */}
      <section className="w-full py-12 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-white border border-gray-200 w-full shadow-xl relative rounded-none overflow-hidden">
          
          {/* Top Orange Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-prideOrange z-20"></div>

          <div className="overflow-x-auto w-full scrollbar-hide max-h-[800px] overflow-y-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="sticky top-0 bg-gray-100 shadow-sm z-10 border-b border-gray-200">
                <tr className="text-gray-600 text-[10px] lg:text-xs uppercase tracking-[0.2em]">
                  <th className="px-6 lg:px-10 py-5 lg:py-6 font-bold w-1/2">Cargo Description</th>
                  <th className="px-6 lg:px-8 py-5 lg:py-6 font-bold text-center border-l border-gray-200">Bulk (cbft/mt)</th>
                  <th className="px-6 lg:px-8 py-5 lg:py-6 font-bold text-center border-l border-gray-200">Bagged (cbft/mt)</th>
                  <th className="px-6 lg:px-8 py-5 lg:py-6 font-bold text-center border-l border-gray-200">Baled (cbft/mt)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index} className="bg-white hover:bg-orange-50/40 transition-colors duration-200 group">
                      
                      {/* Cargo Name */}
                      <td className="px-6 lg:px-10 py-4 lg:py-5 text-xs lg:text-sm font-bold text-prideDark group-hover:text-prideOrange transition-colors uppercase">
                        {item.cargo}
                      </td>
                      
                      {/* Bulk */}
                      <td className="px-6 lg:px-8 py-4 lg:py-5 text-center border-l border-gray-100">
                        <span className={`inline-block px-3 py-1 text-xs font-mono font-bold ${item.bulk !== "-" ? "text-prideDark bg-gray-50 border border-gray-200 shadow-sm" : "text-gray-300"}`}>
                          {item.bulk}
                        </span>
                      </td>
                      
                      {/* Bagged */}
                      <td className="px-6 lg:px-8 py-4 lg:py-5 text-center border-l border-gray-100">
                        <span className={`inline-block px-3 py-1 text-xs font-mono font-bold ${item.bagged !== "-" ? "text-prideDark bg-gray-50 border border-gray-200 shadow-sm" : "text-gray-300"}`}>
                          {item.bagged}
                        </span>
                      </td>
                      
                      {/* Baled */}
                      <td className="px-6 lg:px-8 py-4 lg:py-5 text-center border-l border-gray-100">
                        <span className={`inline-block px-3 py-1 text-xs font-mono font-bold ${item.baled !== "-" ? "text-prideDark bg-gray-50 border border-gray-200 shadow-sm" : "text-gray-300"}`}>
                          {item.baled}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-16 text-center text-gray-500 font-light">
                      No cargo matching "<span className="text-prideDark font-medium">{searchTerm}</span>" was found in the database.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Table Footer */}
          <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            <span>Showing {filteredData.length} records</span>
            <span>1 CBM = 35.31 CBFT</span>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}