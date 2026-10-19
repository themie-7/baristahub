"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Coffee, CheckCircle2, DollarSign, MapPin, Sparkles } from "lucide-react";

export default function PostJobModal({
  isOpen,
  onClose,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    cafeName: "",
    location: "",
    type: "Urgent Shift",
    payRate: "",
    equipment: "",
    roast: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-[#fdfbf7] rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#eee4d5] shadow-2xl relative my-8 z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#7b5540] hover:bg-[#eee4d5] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9e531e] mb-1">
                  <Sparkles className="w-4 h-4 text-[#c26926]" />
                  Café Owner Portal
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1e130c]">
                  Post a Specialty Shift or Job
                </h3>
                <p className="text-xs text-[#7b5540] mt-1">
                  Connect immediately with certified baristas who know how to dial in on your machine.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Role Title
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Lead Barista, Weekend Rush"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Café or Roastery Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Velvet Crema Roasters"
                        value={formData.cafeName}
                        onChange={(e) => setFormData({ ...formData, cafeName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Opening Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      >
                        <option value="Urgent Shift">Urgent Shift (1-2 days)</option>
                        <option value="Full-time">Full-time Permanent</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Event / Pop-up Contract</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Hourly Pay or Salary
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. $26 - $30 / hr"
                        value={formData.payRate}
                        onChange={(e) => setFormData({ ...formData, payRate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Neighborhood / City
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Downtown Arts District"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Espresso Machine & Grinders
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. La Marzocco Linea, Mahlkönig EK43"
                        value={formData.equipment}
                        onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#332014] mb-1">
                        Beans & Roaster Partner
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. House Nordic Light Roast"
                        value={formData.roast}
                        onChange={(e) => setFormData({ ...formData, roast: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#332014] mb-1">
                      Shift Description & Expectations
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Detail expected morning volumes, latte art skills, and bar duties..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e2d3be] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c26926] transition-all"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2.5 text-xs font-semibold text-[#7b5540] hover:text-[#1e130c] transition-colors"
                    >
                      Cancel
                    </button>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-[#c26926] hover:bg-[#dc7e36] text-white text-xs font-semibold shadow-md transition-colors"
                    >
                      Publish Shift to Baristas
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
                  Shift Live on the Network!
                </h3>
                <p className="text-xs text-[#7b5540] mt-2 max-w-md mx-auto">
                  Your opening for <span className="font-semibold text-[#1e130c]">{formData.title || "Specialty Barista"}</span> is now broadcasting to verified baristas in {formData.location || "your area"}.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-[#26180f] text-white text-xs font-semibold hover:bg-[#c26926] transition-colors"
                >
                  Back to Marketplace
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
