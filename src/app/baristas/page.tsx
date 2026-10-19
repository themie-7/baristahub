"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TOP_BARISTAS } from "@/data/mockData";
import BaristaCard from "@/components/BaristaCard";
import { Users, Search, PlusCircle, Sparkles, CheckCircle2, X } from "lucide-react";

export default function BaristasPage() {
  const [search, setSearch] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("All");
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joined, setJoined] = useState(false);

  const filtered = TOP_BARISTAS.filter((b) => {
    if (availabilityFilter !== "All" && b.availability !== availabilityFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      const match =
        b.name.toLowerCase().includes(q) ||
        b.title.toLowerCase().includes(q) ||
        b.location.toLowerCase().includes(q) ||
        b.equipmentMastery.some((e) => e.toLowerCase().includes(q)) ||
        b.certifications.some((c) => c.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16"
    >
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#eee4d5]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#fae8d8] text-[#9e531e] border border-[#e2d3be] mb-2 animate-float">
            <Sparkles className="w-3.5 h-3.5" />
            Vetted Barista Network
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1e130c] tracking-tight">
            Specialty Barista Talent Directory
          </h1>
          <p className="text-xs sm:text-sm text-[#7b5540] mt-1 max-w-xl">
            Hire pre-screened baristas for emergency shift coverage, festival pop-ups, espresso bar consulting, or permanent lead roles.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowJoinModal(true)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#c26926] hover:bg-[#dc7e36] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md self-start md:self-auto shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Join as a Barista (Free)</span>
        </motion.button>
      </div>

      {/* Filter / Search Bar */}
      <div className="mt-8 bg-white p-4 sm:p-5 rounded-2xl border border-[#eee4d5] shadow-xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-[#c26926] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by barista name, machine (e.g. Slayer), or certification..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e2d3be] bg-[#fcf9f4] text-xs sm:text-sm text-[#1e130c] focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {["All", "Available Now", "Weekends Only"].map((status) => (
            <motion.button
              key={status}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAvailabilityFilter(status)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                availabilityFilter === status
                  ? "bg-[#1e130c] text-white"
                  : "bg-[#f7f2ea] text-[#623f29] hover:bg-[#eee4d5]"
              }`}
            >
              {status}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="mt-6 flex items-center justify-between text-xs text-[#7b5540]">
        <span>
          Showing <strong className="text-[#1e130c]">{filtered.length}</strong> certified coffee professionals
        </span>
        <span className="text-emerald-700 font-medium">● 100% verified credentials</span>
      </div>

      {/* Baristas Grid */}
      <motion.div layout className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((barista) => (
            <motion.div
              key={barista.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <BaristaCard barista={barista} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Join as Barista Modal with AnimatePresence */}
      <AnimatePresence>
        {showJoinModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowJoinModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#fdfbf7] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#eee4d5] shadow-2xl relative my-8 z-10"
            >
              <button
                onClick={() => setShowJoinModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#7b5540] hover:bg-[#eee4d5] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!joined ? (
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#9e531e] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Barista Pass Membership
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1e130c] mt-1">
                    Create Your Barista Profile
                  </h3>
                  <p className="text-xs text-[#7b5540] mt-1">
                    Set your desired hourly rate, choose which machines you love dialing in, and receive immediate shift invitations.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setJoined(true);
                    }}
                    className="mt-6 space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Kai Lindqvist"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#332014] mb-1">
                          Desired Hourly Rate
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. $28/hr"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#332014] mb-1">
                          Availability
                        </label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all">
                          <option>Available Now (Full-time & Shifts)</option>
                          <option>Weekends & Urgent Gigs Only</option>
                          <option>Consulting & Pop-ups Only</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Certifications (SCA, Q-Grader, Food Safety)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. SCA Barista Skills Intermediate"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Favorite Espresso Machines & Grinders
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. La Marzocco Linea PB, Slayer 3G, EK43"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Short Bio & Philosophy
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Share your coffee experience and what you bring to the bar..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setShowJoinModal(false)}
                        className="px-4 py-2.5 text-xs font-semibold text-[#7b5540] hover:text-[#1e130c] transition-colors"
                      >
                        Cancel
                      </button>
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-[#c26926] hover:bg-[#dc7e36] text-white text-xs font-semibold shadow-md transition-colors"
                      >
                        Publish My Portfolio
                      </motion.button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1e130c]">
                    Welcome to BaristaHub!
                  </h3>
                  <p className="text-xs text-[#7b5540] mt-2 max-w-sm mx-auto">
                    Your profile has been created and verified. You will receive SMS & email notifications when cafes in your radius post urgent shifts matching your hourly rate.
                  </p>
                  <button
                    onClick={() => {
                      setShowJoinModal(false);
                      setJoined(false);
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-[#26180f] text-white text-xs font-semibold hover:bg-[#c26926] transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
