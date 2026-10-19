"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Job } from "@/data/mockData";
import { MapPin, Clock, DollarSign, Cpu, Coffee, CheckCircle2, ChevronRight, X } from "lucide-react";

export default function JobCard({ job }: { job: Job }) {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applied, setApplied] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
        className="bg-white rounded-2xl border border-[#eee4d5] hover:border-[#c26926] p-6 transition-colors shadow-xs hover:shadow-xl hover:shadow-[#1e130c]/8 flex flex-col justify-between group relative"
      >
        <div>
          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#fae8d8] border border-[#e2d3be] flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform duration-300">
                {job.cafeLogo}
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1e130c] group-hover:text-[#c26926] transition-colors">
                  {job.title}
                </h3>
                <p className="text-xs font-medium text-[#7b5540]">{job.cafeName}</p>
              </div>
            </div>

            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                job.type === "Urgent Shift"
                  ? "bg-rose-100 text-rose-700 border border-rose-200"
                  : job.type === "Full-time"
                  ? "bg-amber-100 text-[#9e531e] border border-amber-200"
                  : "bg-emerald-100 text-emerald-800 border border-emerald-200"
              }`}
            >
              {job.type}
            </span>
          </div>

          {/* Location & Pay */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#623f29]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#c26926]" />
              {job.location}
            </span>
            <span className="flex items-center gap-1 font-semibold text-[#1e130c] bg-[#fae8d8]/60 px-2 py-0.5 rounded-md">
              <DollarSign className="w-3.5 h-3.5 text-[#9e531e]" />
              {job.payRate}
            </span>
            <span className="flex items-center gap-1 text-[#7b5540]">
              <Clock className="w-3.5 h-3.5" />
              {job.postedAt}
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 text-xs text-[#7b5540] line-clamp-2 leading-relaxed">
            {job.description}
          </p>

          {/* Machine & Beans Equipment Specs */}
          <div className="mt-4 pt-3 border-t border-[#eee4d5] space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] text-[#472c1c]">
              <Cpu className="w-3.5 h-3.5 text-[#c26926] shrink-0" />
              <span className="font-medium">Bar Gear:</span>
              <span className="text-[#7b5540] truncate">{job.equipment.join(" • ")}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#472c1c]">
              <Coffee className="w-3.5 h-3.5 text-[#9e531e] shrink-0" />
              <span className="font-medium">Roast:</span>
              <span className="text-[#7b5540] truncate">{job.beansRoaster}</span>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-5 pt-4 border-t border-[#eee4d5] flex items-center justify-between">
          <span className="text-[11px] text-[#9e531e] font-medium">
            {job.urgency === "Immediate" ? "⚡ Shift needed ASAP" : "Open for applications"}
          </span>
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowApplyModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-[#26180f] text-white hover:bg-[#c26926] transition-colors shadow-xs"
          >
            <span>{applied ? "Applied ✓" : "Quick Apply"}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Quick Apply Modal with AnimatePresence */}
      <AnimatePresence>
        {showApplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowApplyModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#fdfbf7] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#eee4d5] shadow-2xl relative z-10"
            >
              <button
                onClick={() => setShowApplyModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#7b5540] hover:bg-[#eee4d5] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!applied ? (
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#9e531e]">
                    Instant Application
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1e130c] mt-1">
                    Apply for {job.title}
                  </h3>
                  <p className="text-xs text-[#7b5540] mt-1">
                    at <span className="font-semibold text-[#1e130c]">{job.cafeName}</span> • {job.payRate}
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setApplied(true);
                    }}
                    className="mt-6 space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Your Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Jordan Hayes"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#332014] mb-1">
                          Email Address
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="jordan@coffee.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#332014] mb-1">
                          Years of Experience
                        </label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all">
                          <option>1-2 years</option>
                          <option>3-5 years (Proficient)</option>
                          <option>5+ years (Senior / Lead)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Experience with {job.equipment[0]}?
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Yes, dialed in daily on La Marzocco & Mythos grinders"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Instagram / Portfolio / Latte Art Link (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="instagram.com/my_barista_pours"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setShowApplyModal(false)}
                        className="px-4 py-2.5 text-xs font-semibold text-[#7b5540] hover:text-[#1e130c] transition-colors"
                      >
                        Cancel
                      </button>
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-[#c26926] hover:bg-[#dc7e36] text-white text-xs font-semibold shadow-md transition-colors"
                      >
                        Submit Application
                      </motion.button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1e130c]">
                    Application Sent!
                  </h3>
                  <p className="text-xs text-[#7b5540] mt-2 max-w-sm mx-auto">
                    {job.cafeName} has received your profile details and contact information. They typically respond within 2-4 hours for urgent shifts.
                  </p>
                  <button
                    onClick={() => {
                      setShowApplyModal(false);
                      setApplied(false);
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-[#26180f] text-white text-xs font-semibold hover:bg-[#c26926] transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
