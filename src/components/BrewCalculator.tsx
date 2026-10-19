"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BREW_GUIDES } from "@/data/mockData";
import { Play, Pause, RotateCcw, Flame, Droplets, Scale, Clock, Sparkles, ChevronRight } from "lucide-react";

export default function BrewCalculator({ compact = false }: { compact?: boolean }) {
  const [selectedMethodId, setSelectedMethodId] = useState("v60");
  const selectedMethod = BREW_GUIDES.find((m) => m.id === selectedMethodId) || BREW_GUIDES[0];

  const [coffeeDose, setCoffeeDose] = useState(selectedMethod.defaultDoseGrams);
  const [ratio, setRatio] = useState(selectedMethod.defaultRatioNumber);

  // Sync defaults when method changes
  useEffect(() => {
    setCoffeeDose(selectedMethod.defaultDoseGrams);
    setRatio(selectedMethod.defaultRatioNumber);
  }, [selectedMethod]);

  // Calculations
  const totalWaterGrams = Math.round(coffeeDose * ratio);
  const bloomWaterGrams = selectedMethodId === "espresso" ? 0 : Math.round(coffeeDose * 3);

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isTimerRunning && interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(0);
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full bg-[#fdfbf7] rounded-3xl border border-[#eee4d5] shadow-xl overflow-hidden transition-all">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-[#2c1b12] to-[#1e130c] text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ea9d60] mb-1">
              <Flame className="w-4 h-4 text-[#dc7e36]" />
              Specialty Coffee Lab
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Precision Extraction & Ratio Calculator
            </h2>
            <p className="text-xs sm:text-sm text-[#c7b29a] mt-1">
              Dial in exact gram weights, water temperature, and extraction times for single-origin lots.
            </p>
          </div>

          {/* Quick Timer Pill */}
          <div className="bg-[#120b07]/80 border border-[#472c1c] rounded-2xl px-5 py-3 flex items-center gap-4 self-start sm:self-auto shadow-inner">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-semibold text-[#c7b29a] tracking-wider flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#ea9d60]" />
                Brew Timer
              </span>
              <span className="font-mono text-2xl font-bold text-white tracking-wider">
                {formatTimer(timerSeconds)}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`p-2.5 rounded-xl text-white transition-colors ${
                  isTimerRunning ? "bg-amber-600 hover:bg-amber-500" : "bg-[#c26926] hover:bg-[#dc7e36]"
                }`}
                title={isTimerRunning ? "Pause timer" : "Start timer"}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={resetTimer}
                className="p-2.5 rounded-xl bg-[#332014] hover:bg-[#472c1c] text-[#c7b29a] hover:text-white transition-colors"
                title="Reset timer"
              >
                <RotateCcw className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Method Selector Tabs */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {BREW_GUIDES.map((method) => {
            const isSelected = method.id === selectedMethodId;
            return (
              <motion.button
                key={method.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMethodId(method.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-[#c26926] text-white shadow-md shadow-[#c26926]/40"
                    : "bg-[#332014]/60 text-[#c7b29a] hover:bg-[#332014] hover:text-white"
                }`}
              >
                <span>{method.name}</span>
                {isSelected && <Sparkles className="w-3.5 h-3.5" />}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Main Calculator Content */}
      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Coffee Dose Slider */}
          <div className="bg-[#f7f2ea]/70 rounded-2xl p-5 border border-[#eee4d5] transition-all">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-[#26180f] flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#c26926]" />
                Coffee Dose (Ground Beans)
              </label>
              <div className="flex items-center gap-1.5 bg-white border border-[#e2d3be] px-3 py-1 rounded-xl shadow-xs">
                <input
                  type="number"
                  min="7"
                  max="100"
                  step="0.5"
                  value={coffeeDose}
                  onChange={(e) => setCoffeeDose(Number(e.target.value) || 0)}
                  className="w-14 text-right font-mono font-bold text-[#1e130c] focus:outline-none"
                />
                <span className="text-xs font-semibold text-[#7b5540]">grams</span>
              </div>
            </div>

            <input
              type="range"
              min="8"
              max={selectedMethodId === "espresso" ? 24 : 60}
              step="0.5"
              value={coffeeDose}
              onChange={(e) => setCoffeeDose(Number(e.target.value))}
              className="w-full accent-[#c26926] cursor-pointer"
            />

            <div className="flex justify-between text-[11px] text-[#7b5540] mt-1 font-mono">
              <span>{selectedMethodId === "espresso" ? "Single (10g)" : "Single Cup (12g)"}</span>
              <span>{selectedMethodId === "espresso" ? "Double (18g)" : "Standard (15-20g)"}</span>
              <span>{selectedMethodId === "espresso" ? "Triple (22g)" : "Carafe (30-45g)"}</span>
            </div>
          </div>

          {/* Brew Ratio Slider */}
          <div className="bg-[#f7f2ea]/70 rounded-2xl p-5 border border-[#eee4d5] transition-all">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold text-[#26180f] flex items-center gap-2">
                <Droplets className="w-4 h-4 text-[#c26926]" />
                Brew Ratio (Coffee to Water)
              </label>
              <div className="bg-[#1e130c] text-white px-3 py-1 rounded-xl font-mono text-xs font-bold">
                1 : {ratio}
              </div>
            </div>

            <input
              type="range"
              min={selectedMethodId === "espresso" ? 1.5 : 12}
              max={selectedMethodId === "espresso" ? 3.0 : 18}
              step={selectedMethodId === "espresso" ? 0.1 : 0.5}
              value={ratio}
              onChange={(e) => setRatio(Number(e.target.value))}
              className="w-full accent-[#c26926] cursor-pointer"
            />

            {/* Quick preset buttons with smooth scale */}
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-[#7b5540]">Presets:</span>
              {selectedMethodId === "espresso" ? (
                <>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setRatio(1.5)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                      ratio === 1.5 ? "bg-[#c26926] text-white border-[#c26926]" : "bg-white text-[#472c1c] border-[#e2d3be]"
                    }`}
                  >
                    1:1.5 Ristretto
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setRatio(2.0)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                      ratio === 2.0 ? "bg-[#c26926] text-white border-[#c26926]" : "bg-white text-[#472c1c] border-[#e2d3be]"
                    }`}
                  >
                    1:2.0 Modern Normale
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setRatio(2.5)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                      ratio === 2.5 ? "bg-[#c26926] text-white border-[#c26926]" : "bg-white text-[#472c1c] border-[#e2d3be]"
                    }`}
                  >
                    1:2.5 Lungo
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setRatio(15)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                      ratio === 15 ? "bg-[#c26926] text-white border-[#c26926]" : "bg-white text-[#472c1c] border-[#e2d3be]"
                    }`}
                  >
                    1:15 Rich
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setRatio(16)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                      ratio === 16 ? "bg-[#c26926] text-white border-[#c26926]" : "bg-white text-[#472c1c] border-[#e2d3be]"
                    }`}
                  >
                    1:16 Golden Cup
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setRatio(17)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-colors ${
                      ratio === 17 ? "bg-[#c26926] text-white border-[#c26926]" : "bg-white text-[#472c1c] border-[#e2d3be]"
                    }`}
                  >
                    1:17 Delicate & Floral
                  </motion.button>
                </>
              )}
            </div>
          </div>

          {/* Key Parameters Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-white rounded-xl border border-[#eee4d5] hover:border-[#c26926] transition-colors">
              <span className="text-[10px] uppercase font-bold text-[#7b5540]">Grind Profile</span>
              <p className="text-xs font-semibold text-[#1e130c] mt-0.5">{selectedMethod.grindSize}</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-[#eee4d5] hover:border-[#c26926] transition-colors">
              <span className="text-[10px] uppercase font-bold text-[#7b5540]">Water Temp</span>
              <p className="text-xs font-semibold text-[#1e130c] mt-0.5">{selectedMethod.waterTemp}</p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-[#eee4d5] hover:border-[#c26926] transition-colors col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-bold text-[#7b5540]">Target Drawdown</span>
              <p className="text-xs font-semibold text-[#1e130c] mt-0.5">{selectedMethod.brewTime}</p>
            </div>
          </div>

          {/* Barista Tip Note */}
          <div className="p-4 bg-[#fae8d8]/60 rounded-xl border border-[#ea9d60]/40 text-xs text-[#623f29] flex items-start gap-3">
            <div className="p-1 rounded bg-[#c26926] text-white mt-0.5 shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-[#332014]">Barista Dial-In Tip: </span>
              {selectedMethod.notes}
            </div>
          </div>
        </div>

        {/* Right Column: Calculated Yield & Pour Plan */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#2c1b12] to-[#1e130c] rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ea9d60]">
              Target Output Recipe
            </span>

            {/* Total Water Target Big Number with motion transition */}
            <div className="mt-4 p-5 bg-[#120b07]/80 rounded-2xl border border-[#472c1c] text-center">
              <span className="text-xs text-[#c7b29a] font-medium block">
                {selectedMethodId === "espresso" ? "Total Espresso Liquid Yield" : "Total Brew Water Required"}
              </span>
              <div className="mt-1 flex items-baseline justify-center gap-1.5">
                <motion.span
                  key={totalWaterGrams}
                  initial={{ scale: 0.9, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-5xl font-black text-[#ea9d60] tracking-tight"
                >
                  {totalWaterGrams}
                </motion.span>
                <span className="text-lg font-semibold text-[#c7b29a]">grams</span>
              </div>
              {bloomWaterGrams > 0 && (
                <div className="mt-2 text-xs text-[#c7b29a] border-t border-[#332014] pt-2 flex justify-between">
                  <span>Bloom Water (3x):</span>
                  <span className="font-mono font-bold text-[#fae8d8]">{bloomWaterGrams}g</span>
                </div>
              )}
            </div>

            {/* Step-by-Step Pour Milestones */}
            <div className="mt-6">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#c7b29a] mb-3">
                Pour Sequence & Milestones
              </h4>
              <div className="space-y-3">
                {selectedMethod.steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="p-3 bg-[#332014]/60 hover:bg-[#332014] rounded-xl border border-[#472c1c] text-xs transition-colors flex items-start gap-3"
                  >
                    <span className="font-mono text-[#ea9d60] font-bold shrink-0 bg-[#1e130c] px-2 py-0.5 rounded border border-[#472c1c]">
                      {step.time}
                    </span>
                    <div className="flex-1">
                      <p className="text-[#f7f2ea] leading-relaxed">{step.action}</p>
                      {step.waterTargetGrams && (
                        <span className="inline-block mt-1 font-mono text-[11px] font-semibold text-[#ea9d60]">
                          Scale reading: {step.waterTargetGrams}g
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#332014] flex items-center justify-between text-xs text-[#c7b29a]">
            <span>Optimal TDS: 1.25% - 1.45%</span>
            <span className="text-[#ea9d60] flex items-center gap-1 font-medium">
              SCA Golden Cup Standard <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
