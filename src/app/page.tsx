"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURED_JOBS, TOP_BARISTAS } from "@/data/mockData";
import JobCard from "@/components/JobCard";
import BaristaCard from "@/components/BaristaCard";
import BrewCalculator from "@/components/BrewCalculator";
import PostJobModal from "@/components/PostJobModal";
import {
  Coffee,
  Briefcase,
  Users,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  ChevronRight,
  Flame,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const [selectedJobFilter, setSelectedJobFilter] = useState<string>("All");
  const [postJobOpen, setPostJobOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = FEATURED_JOBS.filter((job) => {
    if (selectedJobFilter !== "All" && job.type !== selectedJobFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        job.title.toLowerCase().includes(q) ||
        job.cafeName.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.equipment.some((e) => e.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Smooth Staggered Entrance */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f2ea] via-[#fdfbf7] to-[#fcf9f4] pt-12 pb-20 border-b border-[#eee4d5]">
        {/* Subtle decorative warm pulsating spots */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-[#fae8d8]/50 to-transparent blur-3xl pointer-events-none -z-10 animate-warm-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#fae8d8] text-[#9e531e] border border-[#e2d3be] mb-6 shadow-xs animate-float"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c26926]" />
              The Third-Wave Coffee Ecosystem
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-4xl sm:text-6xl font-extrabold text-[#1e130c] tracking-tight leading-[1.15]"
            >
              Where Artisan Coffee Talent Meets{" "}
              <span className="text-[#c26926] underline decoration-[#fae8d8] decoration-wavy decoration-2">
                Specialty Cafés
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-5 text-base sm:text-lg text-[#623f29] leading-relaxed max-w-2xl mx-auto"
            >
              Find emergency morning shifts, recruit SCA-certified baristas who know your machine, and perfect every extraction with our open-source brew lab.
            </motion.p>

            {/* Quick Search Bar with spring hover */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-8 bg-white p-2.5 sm:p-3 rounded-2xl border border-[#e2d3be] shadow-xl shadow-[#1e130c]/5 flex flex-col sm:flex-row items-center gap-2 max-w-2xl mx-auto transition-all hover:border-[#c26926]/60"
            >
              <div className="flex items-center gap-2 w-full px-3 py-1.5">
                <Search className="w-4 h-4 text-[#c26926] shrink-0" />
                <input
                  type="text"
                  placeholder="Search role, café, or machine (e.g. Slayer, V60)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm text-[#1e130c] placeholder-[#7b5540] focus:outline-none bg-transparent"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Link
                    href="/jobs"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#c26926] hover:bg-[#dc7e36] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
                  >
                    <span>Explore Jobs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-8 border-t border-[#eee4d5]/80"
            >
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="font-serif text-2xl sm:text-3xl font-black text-[#1e130c]">1,840+</p>
                <p className="text-xs text-[#7b5540] mt-0.5">Vetted Baristas</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="font-serif text-2xl sm:text-3xl font-black text-[#1e130c]">520+</p>
                <p className="text-xs text-[#7b5540] mt-0.5">Specialty Roasteries</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="font-serif text-2xl sm:text-3xl font-black text-[#1e130c]">99.4%</p>
                <p className="text-xs text-[#7b5540] mt-0.5">Shift Fill Rate</p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="font-serif text-2xl sm:text-3xl font-black text-[#1e130c]">$26-$38</p>
                <p className="text-xs text-[#7b5540] mt-0.5">Avg Hourly Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Shifts & Jobs Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9e531e] mb-1">
              <Briefcase className="w-4 h-4 text-[#c26926]" />
              Staffing & Gigs
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#1e130c]">
              Urgent Shifts & Lead Openings
            </h2>
            <p className="text-xs sm:text-sm text-[#7b5540] mt-1">
              Guaranteed fair-wage listings from third-wave cafés and progressive roasteries.
            </p>
          </div>

          {/* Filter Pills with animated selection */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {["All", "Urgent Shift", "Full-time", "Part-time"].map((filter) => (
              <motion.button
                key={filter}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedJobFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedJobFilter === filter
                    ? "bg-[#1e130c] text-white shadow-xs"
                    : "bg-[#f7f2ea] text-[#623f29] hover:bg-[#eee4d5]"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredJobs.slice(0, 4).map((job) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Urgent shift banner */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#fae8d8]/40 border border-[#e2d3be] rounded-2xl shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c26926] text-white flex items-center justify-center shrink-0 shadow-md">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#1e130c]">
                Are you a Café Owner facing an unexpected morning absence?
              </p>
              <p className="text-[11px] sm:text-xs text-[#7b5540]">
                Broadcast a rush shift to 500+ local baristas in under 2 minutes.
              </p>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setPostJobOpen(true)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#26180f] hover:bg-[#c26926] text-white text-xs font-semibold transition-colors shrink-0 shadow-xs"
          >
            Post Urgent Shift Now
          </motion.button>
        </motion.div>
      </section>

      {/* Interactive Brew Calculator Showcase */}
      <section className="py-16 bg-[#f7f2ea] border-y border-[#eee4d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#fae8d8] text-[#9e531e] border border-[#e2d3be] mb-3">
              <Flame className="w-3.5 h-3.5 text-[#c26926]" />
              Interactive Tool
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#1e130c]">
              Specialty Coffee Brew Lab
            </h2>
            <p className="text-xs sm:text-sm text-[#7b5540] mt-2">
              Select your brewing gear below. Adjust dose or ratio to instantly calculate exact water yields, bloom weights, and step-by-step pour timings.
            </p>
          </div>

          <BrewCalculator />
        </div>
      </section>

      {/* Top Barista Talent Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9e531e] mb-1">
              <Users className="w-4 h-4 text-[#c26926]" />
              Verified Professionals
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#1e130c]">
              Featured Barista Talent
            </h2>
            <p className="text-xs sm:text-sm text-[#7b5540] mt-1">
              SCA-certified baristas, Q-Graders, and latte art champions ready for shifts and permanent roles.
            </p>
          </div>

          <Link
            href="/baristas"
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#c26926] hover:text-[#9e531e] transition-colors"
          >
            <span>View All Baristas</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOP_BARISTAS.map((barista) => (
            <BaristaCard key={barista.id} barista={barista} />
          ))}
        </div>
      </section>

      {/* Dual Value Proposition Section */}
      <section className="py-16 bg-[#1e130c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Baristas */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#26180f] border border-[#332014] relative overflow-hidden group hover:border-[#c26926] transition-colors shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#c26926]/20 border border-[#c26926]/30 text-[#ea9d60] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                For Baristas & Roasters
              </h3>
              <p className="text-xs sm:text-sm text-[#c7b29a] mt-2 leading-relaxed">
                Take control of your coffee career. Build a digital portfolio showcasing your latte art, machine certifications, and dial-in credentials.
              </p>
              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-[#fae8d8]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ea9d60] shrink-0" />
                  Same-day payouts for urgent shift coverage
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ea9d60] shrink-0" />
                  Direct connection with specialty third-wave cafes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ea9d60] shrink-0" />
                  Free access to brewing algorithms & masterclasses
                </li>
              </ul>
              <div className="mt-8">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link
                    href="/baristas?join=true"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#1e130c] hover:bg-[#fae8d8] text-xs sm:text-sm font-semibold transition-colors shadow-md"
                  >
                    <span>Build Barista Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* For Cafe Owners */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#26180f] border border-[#332014] relative overflow-hidden group hover:border-[#c26926] transition-colors shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#c26926]/20 border border-[#c26926]/30 text-[#ea9d60] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                For Café Owners & Managers
              </h3>
              <p className="text-xs sm:text-sm text-[#c7b29a] mt-2 leading-relaxed">
                Never compromise cup quality because of staffing shortages. Match with baristas pre-screened for your specific machine and roast profile.
              </p>
              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-[#fae8d8]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ea9d60] shrink-0" />
                  Emergency shift fill times under 60 minutes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ea9d60] shrink-0" />
                  Filtered by machine experience (Slayer, La Marzocco, Synesso)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ea9d60] shrink-0" />
                  Zero long-term agency lock-in; transparent pricing
                </li>
              </ul>
              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPostJobOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#c26926] hover:bg-[#dc7e36] text-white text-xs sm:text-sm font-semibold transition-colors shadow-lg"
                >
                  <span>Post Your Café Opening</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Post Job Modal */}
      <PostJobModal isOpen={postJobOpen} onClose={() => setPostJobOpen(false)} />
    </div>
  );
}
