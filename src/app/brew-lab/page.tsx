"use client";

import { motion } from "framer-motion";
import BrewCalculator from "@/components/BrewCalculator";
import { Droplets, Sparkles, AlertCircle, CheckCircle2, Sliders, Compass } from "lucide-react";

export default function BrewLabPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16"
    >
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#fae8d8] text-[#9e531e] border border-[#e2d3be] mb-3 animate-float">
          <Sparkles className="w-3.5 h-3.5" />
          Sensory Science & Extraction Lab
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1e130c] tracking-tight">
          Specialty Coffee Brew Lab
        </h1>
        <p className="text-xs sm:text-base text-[#7b5540] mt-3 leading-relaxed">
          The open-source extraction toolkit for professional baristas. Calculate precise brew ratios, troubleshoot shot channeling, and optimize water mineral hardness.
        </p>
      </div>

      {/* Main Interactive Brew Calculator */}
      <section>
        <BrewCalculator />
      </section>

      {/* Dial-in Troubleshooter Matrix */}
      <section id="dial-in" className="scroll-mt-24">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9e531e] mb-1">
            <Compass className="w-4 h-4 text-[#c26926]" />
            Troubleshooter Guide
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e130c]">
            The Espresso & Pour-Over Dial-In Compass
          </h2>
          <p className="text-xs sm:text-sm text-[#7b5540] mt-1">
            Diagnose taste defects instantly and calibrate your grinder with scientific precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Under-extracted */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="p-6 rounded-2xl bg-white border-2 border-amber-200/80 shadow-xs hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  Under-Extracted
                </span>
                <AlertCircle className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1e130c]">
                Sour, Sharp, Salty & Thin
              </h3>
              <p className="text-xs text-[#7b5540] mt-1 leading-relaxed">
                Water flowed through too quickly or channels opened. Only the initial high-acid compounds dissolved before sweetness could extract.
              </p>

              <div className="mt-5 space-y-2 border-t border-[#eee4d5] pt-4 text-xs">
                <p className="font-bold text-[#26180f]">How to correct:</p>
                <ul className="space-y-1.5 text-[#623f29]">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c26926] font-bold">1.</span>
                    <span><strong>Grind Finer:</strong> Increases surface area & contact resistance.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c26926] font-bold">2.</span>
                    <span><strong>Increase Ratio:</strong> Extract more liquid (e.g. 18g in → 40g out).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c26926] font-bold">3.</span>
                    <span><strong>Raise Water Temp:</strong> Increase kettle from 91°C to 94°C.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#eee4d5] text-[11px] font-mono text-amber-800 bg-amber-50/70 p-2 rounded-lg">
              Yield: &lt; 18% Extraction TDS
            </div>
          </motion.div>

          {/* Sweet Spot */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-emerald-50/60 to-white border-2 border-emerald-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  The Sweet Spot
                </span>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1e130c]">
                Sweet, Juicy & Transparent
              </h3>
              <p className="text-xs text-[#7b5540] mt-1 leading-relaxed">
                Perfect equilibrium between bright organic acids, caramelizing sugars, and delicate origin floral notes. Silky body and pleasant lingering finish.
              </p>

              <div className="mt-5 space-y-2 border-t border-[#eee4d5] pt-4 text-xs">
                <p className="font-bold text-[#26180f]">Standard parameters:</p>
                <ul className="space-y-1.5 text-[#623f29]">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Ratio:</strong> 1:2.0 for Espresso, 1:16 for Pour-Over.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Extraction:</strong> 20% - 22% EY with zero astringency.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span><strong>Bed:</strong> Perfectly flat, no cratering or channeling.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#eee4d5] text-[11px] font-mono text-emerald-900 bg-emerald-100/60 p-2 rounded-lg">
              Yield: 19% - 22% Golden Cup TDS
            </div>
          </motion.div>

          {/* Over-extracted */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="p-6 rounded-2xl bg-white border-2 border-rose-200/80 shadow-xs hover:shadow-xl hover:shadow-rose-500/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full">
                  Over-Extracted
                </span>
                <AlertCircle className="w-5 h-5 text-rose-500" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1e130c]">
                Bitter, Dry, Hollow & Astringent
              </h3>
              <p className="text-xs text-[#7b5540] mt-1 leading-relaxed">
                Water remained in contact too long or excessive heat burned the solubles. Heavy polyphenols and bitter cellulose fibers dominated the cup.
              </p>

              <div className="mt-5 space-y-2 border-t border-[#eee4d5] pt-4 text-xs">
                <p className="font-bold text-[#26180f]">How to correct:</p>
                <ul className="space-y-1.5 text-[#623f29]">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c26926] font-bold">1.</span>
                    <span><strong>Grind Coarser:</strong> Reduces contact time and speeds drawdown.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c26926] font-bold">2.</span>
                    <span><strong>Shorten Ratio:</strong> Cut shot sooner (e.g. 18g in → 34g out).</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c26926] font-bold">3.</span>
                    <span><strong>Lower Water Temp:</strong> Drop kettle temp from 95°C to 92°C.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#eee4d5] text-[11px] font-mono text-rose-900 bg-rose-50/70 p-2 rounded-lg">
              Yield: &gt; 23% Over-extracted TDS
            </div>
          </motion.div>
        </div>
      </section>

      {/* Water Chemistry & Grind Size */}
      <section id="water" className="grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-mt-24">
        {/* Water Chemistry */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="p-8 rounded-3xl bg-[#1e130c] text-white shadow-xl hover:border-[#c26926]/40 border border-[#332014] transition-colors"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ea9d60] mb-2">
            <Droplets className="w-4 h-4 text-[#c26926]" />
            Water Mineral Physics
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Water is 98.5% of Your Cup
          </h3>
          <p className="text-xs sm:text-sm text-[#c7b29a] mt-2 leading-relaxed">
            Distilled or tap water kills specialty coffee flavor. Water requires precise mineral hardness ions to bond with flavor compounds:
          </p>

          <div className="mt-6 space-y-3">
            <div className="p-3.5 rounded-xl bg-[#2c1b12] border border-[#472c1c] text-xs">
              <span className="font-bold text-[#ea9d60]">Magnesium (Mg²⁺):</span>
              <p className="text-[#c7b29a] mt-0.5">
                Strongly bonds with oxygen-heavy flavor compounds, extracting rich sugars and bright fruit notes.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#2c1b12] border border-[#472c1c] text-xs">
              <span className="font-bold text-[#ea9d60]">Calcium (Ca²⁺):</span>
              <p className="text-[#c7b29a] mt-0.5">
                Enhances body and mouthfeel, balancing heavier chocolate and nutty profiles.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#2c1b12] border border-[#472c1c] text-xs">
              <span className="font-bold text-[#ea9d60]">Bicarbonate (Alkalinity Buffer):</span>
              <p className="text-[#c7b29a] mt-0.5">
                Keeps pH stable (~7.0). Too little causes sharp vinegar acidity; too much neutralizes pleasant fruit brightness.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#332014] flex items-center justify-between text-xs text-[#ea9d60]">
            <span>Target TDS: 120 - 150 ppm</span>
            <span>Target Buffer: 40 - 50 ppm CaCO₃</span>
          </div>
        </motion.div>

        {/* Grind Distribution Chart */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="p-8 rounded-3xl bg-white border border-[#eee4d5] shadow-xs hover:shadow-xl hover:border-[#c26926]/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9e531e] mb-2">
              <Sliders className="w-4 h-4 text-[#c26926]" />
              Micron Spectrum
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1e130c]">
              Grind Size Reference
            </h3>
            <p className="text-xs sm:text-sm text-[#7b5540] mt-2 leading-relaxed">
              Calibrate your burr grinder according to brew method and immersion time:
            </p>

            <div className="mt-6 space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#f7f2ea]">
                <div>
                  <span className="font-bold text-[#1e130c]">Espresso (200 - 400 μm)</span>
                  <p className="text-[11px] text-[#7b5540]">Fine powder with subtle grit. High 9-bar pressure.</p>
                </div>
                <span className="font-mono text-xs font-bold text-[#9e531e]">Fine</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#f7f2ea]">
                <div>
                  <span className="font-bold text-[#1e130c]">AeroPress & V60 (400 - 700 μm)</span>
                  <p className="text-[11px] text-[#7b5540]">Table salt to fine sea salt. 2.5 - 3 min brew.</p>
                </div>
                <span className="font-mono text-xs font-bold text-[#9e531e]">Medium-Fine</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#f7f2ea]">
                <div>
                  <span className="font-bold text-[#1e130c]">Chemex & Batch Brew (700 - 900 μm)</span>
                  <p className="text-[11px] text-[#7b5540]">Kosher salt texture. Allows clean flow through thick paper.</p>
                </div>
                <span className="font-mono text-xs font-bold text-[#9e531e]">Medium-Coarse</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#f7f2ea]">
                <div>
                  <span className="font-bold text-[#1e130c]">French Press & Cold Brew (900 - 1200 μm)</span>
                  <p className="text-[11px] text-[#7b5540]">Rough sea salt. Extended 4-16 hr immersion.</p>
                </div>
                <span className="font-mono text-xs font-bold text-[#9e531e]">Coarse</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#eee4d5] text-xs text-[#7b5540] flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#c26926]" />
            Tip: Align grinder burrs with dry-erase marker check to eliminate boulders and fines.
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
