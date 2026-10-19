"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Barista } from "@/data/mockData";
import { Star, Award, MapPin, Cpu, Coffee, Calendar, CheckCircle2, X, Sparkles } from "lucide-react";

export default function BaristaCard({ barista }: { barista: Barista }) {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [invited, setInvited] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
        className="bg-white rounded-2xl border border-[#eee4d5] hover:border-[#c26926] p-6 transition-colors shadow-xs hover:shadow-xl hover:shadow-[#1e130c]/8 flex flex-col justify-between group relative"
      >
        <div>
          {/* Top Profile Header */}
          <div className="flex items-start gap-4">
            <div className="relative">
              {/* Avatar with zoom effect */}
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#fae8d8] border-2 border-[#e2d3be] shadow-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={barista.avatar}
                  alt={barista.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              {/* Availability Indicator */}
              <span
                className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                  barista.availability === "Available Now"
                    ? "bg-emerald-500"
                    : barista.availability === "Weekends Only"
                    ? "bg-amber-500"
                    : "bg-zinc-400"
                }`}
                title={barista.availability}
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-[#1e130c] group-hover:text-[#c26926] transition-colors">
                  {barista.name}
                </h3>
                <span className="font-mono text-xs font-bold text-[#9e531e] bg-[#fae8d8] px-2 py-0.5 rounded-md">
                  {barista.hourlyRate}
                </span>
              </div>
              <p className="text-xs text-[#7b5540] font-medium line-clamp-1 mt-0.5">
                {barista.title}
              </p>
              <div className="flex items-center gap-2 mt-1.5 text-xs text-[#623f29]">
                <span className="flex items-center gap-1 font-semibold text-[#1e130c]">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  {barista.rating}
                  <span className="text-[#7b5540] font-normal">({barista.reviewCount})</span>
                </span>
                <span className="text-[#eee4d5]">•</span>
                <span className="flex items-center gap-0.5 text-[#7b5540]">
                  <MapPin className="w-3 h-3 text-[#c26926]" />
                  {barista.location}
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-3.5 text-xs text-[#7b5540] line-clamp-2 leading-relaxed">
            {barista.bio}
          </p>

          {/* Certifications badges */}
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {barista.certifications.map((cert, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[10px] font-semibold bg-[#f7f2ea] text-[#472c1c] border border-[#e2d3be] px-2 py-0.5 rounded-full"
              >
                <Award className="w-3 h-3 text-[#c26926]" />
                {cert}
              </span>
            ))}
          </div>

          {/* Gear mastery & Origin */}
          <div className="mt-4 pt-3 border-t border-[#eee4d5] space-y-1.5 text-[11px]">
            <div className="flex items-center gap-1.5 text-[#472c1c]">
              <Cpu className="w-3.5 h-3.5 text-[#c26926] shrink-0" />
              <span className="font-medium">Mastery:</span>
              <span className="text-[#7b5540] truncate">{barista.equipmentMastery.join(" • ")}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#472c1c]">
              <Coffee className="w-3.5 h-3.5 text-[#9e531e] shrink-0" />
              <span className="font-medium">Favorite Cup:</span>
              <span className="text-[#7b5540] truncate">{barista.favoriteOrigin}</span>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-5 pt-4 border-t border-[#eee4d5] flex items-center justify-between">
          <span
            className={`text-[11px] font-medium flex items-center gap-1.5 ${
              barista.availability === "Available Now" ? "text-emerald-700" : "text-[#7b5540]"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                barista.availability === "Available Now" ? "bg-emerald-500 animate-pulse" : "bg-zinc-400"
              }`}
            />
            {barista.availability}
          </span>

          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowInviteModal(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-[#26180f] text-white hover:bg-[#c26926] transition-colors shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{invited ? "Invited ✓" : "Book Shift"}</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Invite Modal with AnimatePresence */}
      <AnimatePresence>
        {showInviteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInviteModal(false)}
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
                onClick={() => setShowInviteModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#7b5540] hover:bg-[#eee4d5] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!invited ? (
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#9e531e] flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Café Booking Request
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1e130c] mt-1">
                    Invite {barista.name}
                  </h3>
                  <p className="text-xs text-[#7b5540] mt-1">
                    Base rate: <span className="font-semibold text-[#1e130c]">{barista.hourlyRate}</span> • Response rate: 98%
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setInvited(true);
                    }}
                    className="mt-6 space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Café / Roastery Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Ritual & Roast Coffee Co."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#332014] mb-1">
                          Shift Date
                        </label>
                        <input
                          required
                          type="date"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#332014] mb-1">
                          Hours Needed
                        </label>
                        <select className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all">
                          <option>Morning Rush (6:30 AM - 1:00 PM)</option>
                          <option>Full Shift (7:00 AM - 3:30 PM)</option>
                          <option>Afternoon / Close (12:00 PM - 6:30 PM)</option>
                          <option>Weekend Festival / Event</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Espresso Machine on Bar
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. La Marzocco Linea PB + Mahlkönig E65S"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setShowInviteModal(false)}
                        className="px-4 py-2.5 text-xs font-semibold text-[#7b5540] hover:text-[#1e130c] transition-colors"
                      >
                        Cancel
                      </button>
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-[#c26926] hover:bg-[#dc7e36] text-white text-xs font-semibold shadow-md transition-colors"
                      >
                        Send Shift Offer
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
                    Invitation Sent!
                  </h3>
                  <p className="text-xs text-[#7b5540] mt-2 max-w-sm mx-auto">
                    {barista.name} has been notified via the BaristaHub App and SMS. You will receive an alert once they accept the shift.
                  </p>
                  <button
                    onClick={() => {
                      setShowInviteModal(false);
                      setInvited(false);
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
    </>
  );
}
