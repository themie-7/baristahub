"use client";

import Link from "next/link";
import { Coffee, Heart, Send, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1e130c] text-[#f7f2ea] border-t border-[#332014]">
      {/* Top Newsletter Teaser */}
      <div className="border-b border-[#332014]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-[#2c1b12] to-[#3a2418] rounded-2xl p-8 sm:p-10 border border-[#472c1c] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#c26926]/20 text-[#ea9d60] border border-[#c26926]/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                The Morning Dial-In
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Get weekly specialty shifts, origin lots & brew recipes
              </h3>
              <p className="mt-2 text-sm text-[#c7b29a]">
                Join 14,000+ baristas, head roasters, and café owners receiving curated coffee insights every Tuesday morning.
              </p>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full md:w-auto items-center gap-2 max-w-md"
            >
              <input
                type="email"
                placeholder="barista@thirdwave.coffee"
                className="w-full px-4 py-3 rounded-xl bg-[#120b07] border border-[#472c1c] text-sm text-white placeholder-[#7b5540] focus:outline-none focus:ring-2 focus:ring-[#c26926]"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-[#c26926] hover:bg-[#dc7e36] text-white text-sm font-semibold flex items-center gap-2 shadow-lg transition-colors whitespace-nowrap"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#c26926] flex items-center justify-center text-white shadow-md">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Barista<span className="text-[#dc7e36]">Hub</span>
              </span>
            </div>
            <p className="text-sm text-[#c7b29a] leading-relaxed max-w-sm">
              Empowering the third-wave coffee movement. Connecting skilled baristas with passionate café owners, while sharing open-source extraction tools and sensory craft.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#ea9d60]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live: 142 urgent barista shifts open today
            </div>
          </div>

          {/* Col 1 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#ea9d60] mb-4">
              Staffing & Shifts
            </h4>
            <ul className="space-y-2.5 text-sm text-[#c7b29a]">
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Urgent Weekend Shifts
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Head Barista Openings
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Roastery & QC Roles
                </Link>
              </li>
              <li>
                <Link href="/jobs?post=true" className="hover:text-white transition-colors">
                  Post a Café Opening
                </Link>
              </li>
              <li>
                <span className="text-xs text-[#7b5540]">Fair Wage Verified Guarantee</span>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#ea9d60] mb-4">
              Barista Talent
            </h4>
            <ul className="space-y-2.5 text-sm text-[#c7b29a]">
              <li>
                <Link href="/baristas" className="hover:text-white transition-colors">
                  SCA Certified Baristas
                </Link>
              </li>
              <li>
                <Link href="/baristas" className="hover:text-white transition-colors">
                  Latte Art Champions
                </Link>
              </li>
              <li>
                <Link href="/baristas" className="hover:text-white transition-colors">
                  Dial-In & Workflow Pros
                </Link>
              </li>
              <li>
                <Link href="/baristas?join=true" className="hover:text-white transition-colors">
                  Create Barista Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#ea9d60] mb-4">
              Brew Lab & Tools
            </h4>
            <ul className="space-y-2.5 text-sm text-[#c7b29a]">
              <li>
                <Link href="/brew-lab" className="hover:text-white transition-colors">
                  Ratio & Water Calculator
                </Link>
              </li>
              <li>
                <Link href="/brew-lab#dial-in" className="hover:text-white transition-colors">
                  Espresso Dial-In Matrix
                </Link>
              </li>
              <li>
                <Link href="/brew-lab#guides" className="hover:text-white transition-colors">
                  V60 & Aeropress Guides
                </Link>
              </li>
              <li>
                <Link href="/brew-lab#water" className="hover:text-white transition-colors">
                  Water Chemistry (TDS)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#332014] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7b5540] gap-4">
          <p>© 2026 BaristaHub Inc. Built for the artisan coffee community.</p>
          <div className="flex items-center gap-1 text-[#c7b29a]">
            <span>Brewed with</span>
            <Heart className="w-3.5 h-3.5 text-[#c26926] fill-[#c26926]" />
            <span>and Ethiopian single-origins</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
