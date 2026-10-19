"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURED_JOBS } from "@/data/mockData";
import JobCard from "@/components/JobCard";
import PostJobModal from "@/components/PostJobModal";
import { Briefcase, Search, PlusCircle, Sparkles, Cpu } from "lucide-react";

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedEquipment, setSelectedEquipment] = useState<string>("All");
  const [postJobOpen, setPostJobOpen] = useState(false);

  const equipmentList = ["All", "La Marzocco", "Slayer", "Synesso", "V60", "Mahlkönig"];

  const filtered = FEATURED_JOBS.filter((job) => {
    if (selectedType !== "All" && job.type !== selectedType) return false;
    if (selectedEquipment !== "All") {
      const hasEquip = job.equipment.some((e) =>
        e.toLowerCase().includes(selectedEquipment.toLowerCase())
      );
      if (!hasEquip) return false;
    }
    if (search) {
      const q = search.toLowerCase();
      const match =
        job.title.toLowerCase().includes(q) ||
        job.cafeName.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.equipment.some((e) => e.toLowerCase().includes(q));
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
            Specialty Coffee Job Board
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1e130c] tracking-tight">
            Find Shifts & Roastery Careers
          </h1>
          <p className="text-xs sm:text-sm text-[#7b5540] mt-1 max-w-xl">
            Browse verified barista positions, high-paying weekend rush coverage, and head roaster opportunities.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setPostJobOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#c26926] hover:bg-[#dc7e36] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md self-start md:self-auto shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Post an Opening ($0 Free Beta)</span>
        </motion.button>
      </div>

      {/* Filter / Search Bar */}
      <div className="mt-8 bg-white p-4 sm:p-5 rounded-2xl border border-[#eee4d5] shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-[#c26926] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by title, café name, or neighborhood..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e2d3be] bg-[#fcf9f4] text-xs sm:text-sm text-[#1e130c] focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {["All", "Urgent Shift", "Full-time", "Part-time"].map((type) => (
              <motion.button
                key={type}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedType === type
                    ? "bg-[#1e130c] text-white"
                    : "bg-[#f7f2ea] text-[#623f29] hover:bg-[#eee4d5]"
                }`}
              >
                {type}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Machine Gear Filter */}
        <div className="flex items-center gap-2 pt-2 border-t border-[#eee4d5] overflow-x-auto text-xs text-[#7b5540]">
          <span className="font-semibold text-[#1e130c] flex items-center gap-1 shrink-0">
            <Cpu className="w-3.5 h-3.5 text-[#c26926]" />
            Machine Gear:
          </span>
          {equipmentList.map((eq) => (
            <motion.button
              key={eq}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedEquipment(eq)}
              className={`px-2.5 py-1 rounded-lg border transition-colors whitespace-nowrap ${
                selectedEquipment === eq
                  ? "bg-[#fae8d8] text-[#9e531e] border-[#c26926] font-semibold"
                  : "bg-white text-[#7b5540] border-[#eee4d5] hover:bg-[#f7f2ea]"
              }`}
            >
              {eq}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-6 flex items-center justify-between text-xs text-[#7b5540]">
        <span>
          Showing <strong className="text-[#1e130c]">{filtered.length}</strong> specialty coffee roles
        </span>
        <span className="text-emerald-700 font-medium">● Updated hourly</span>
      </div>

      {/* Job Grid with AnimatePresence & Layout */}
      <motion.div layout className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filtered.map((job) => (
            <motion.div
              key={job.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#e2d3be] mt-6"
        >
          <Briefcase className="w-10 h-10 text-[#c7b29a] mx-auto mb-3" />
          <h3 className="font-serif text-lg font-bold text-[#1e130c]">No jobs matched your filter</h3>
          <p className="text-xs text-[#7b5540] mt-1">Try resetting the machine gear or keyword filters.</p>
          <button
            onClick={() => {
              setSearch("");
              setSelectedType("All");
              setSelectedEquipment("All");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-[#26180f] text-white text-xs font-semibold hover:bg-[#c26926] transition-colors"
          >
            Clear Filters
          </button>
        </motion.div>
      )}

      {/* Post Job Modal */}
      <PostJobModal isOpen={postJobOpen} onClose={() => setPostJobOpen(false)} />
    </motion.div>
  );
}
