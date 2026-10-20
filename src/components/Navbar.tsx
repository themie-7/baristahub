"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Briefcase, Users, Flame, Menu, X, PlusCircle, Sparkles, LogIn, LogOut } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);

  // Re-check who is logged in whenever the page changes (e.g. right after login)
  useEffect(() => {
    fetch("/api/me")
      .then((res) => (res.ok ? res.json() : { user: null }))
      .then((data) => setUser(data.user))
      .catch(() => setUser(null));
  }, [pathname]);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    setUser(null);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#eee4d5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with gentle motion */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#332014] to-[#1e130c] flex items-center justify-center text-[#fae8d8] shadow-md shadow-[#1e130c]/10 relative"
            >
              <Coffee className="w-6 h-6 text-[#dc7e36]" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1e130c]">
                Barista<span className="text-[#c26926]">Hub</span>
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-[#9e531e]">
                Specialty Coffee Network
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/jobs"
              className="group flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-[#472c1c] hover:text-[#c26926] hover:bg-[#fae8d8]/40 rounded-xl transition-all"
            >
              <Briefcase className="w-4 h-4 text-[#c26926] group-hover:scale-110 transition-transform" />
              <span>Jobs & Shifts</span>
              <span className="text-[10px] bg-[#fae8d8] text-[#9e531e] px-1.5 py-0.5 rounded-full font-semibold group-hover:bg-[#c26926] group-hover:text-white transition-colors">
                Urgent
              </span>
            </Link>

            <Link
              href="/baristas"
              className="group flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-[#472c1c] hover:text-[#c26926] hover:bg-[#fae8d8]/40 rounded-xl transition-all"
            >
              <Users className="w-4 h-4 text-[#c26926] group-hover:scale-110 transition-transform" />
              <span>Barista Talent</span>
            </Link>

            <Link
              href="/brew-lab"
              className="group flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-[#472c1c] hover:text-[#c26926] hover:bg-[#fae8d8]/40 rounded-xl transition-all"
            >
              <Flame className="w-4 h-4 text-[#c26926] group-hover:scale-110 transition-transform" />
              <span>Brew Lab</span>
              <span className="text-[10px] bg-[#1e130c] text-[#f7f2ea] px-1.5 py-0.5 rounded-full font-medium">
                Tools
              </span>
            </Link>
          </nav>

          {/* Right Action Buttons with spring hover */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#472c1c] max-w-[160px] truncate">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#472c1c] hover:text-[#c26926] rounded-xl transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Log out
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#472c1c] hover:text-[#c26926] rounded-xl transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-[#472c1c] hover:text-[#c26926] rounded-xl transition-colors"
                >
                  Sign up
                </Link>
              </>
            )}

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/jobs?post=true"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#26180f] bg-[#eee4d5]/70 hover:bg-[#eee4d5] rounded-xl border border-[#e2d3be] transition-colors shadow-xs"
              >
                <PlusCircle className="w-4 h-4 text-[#9e531e]" />
                Post a Shift
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/baristas?join=true"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#c26926] to-[#9e531e] hover:from-[#dc7e36] hover:to-[#c26926] rounded-xl shadow-md shadow-[#c26926]/20 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Barista Pass
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#332014] hover:bg-[#fae8d8]/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden overflow-hidden py-4 border-t border-[#eee4d5] space-y-2"
            >
              <Link
                href="/jobs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium text-[#332014] hover:bg-[#fae8d8]/50 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-[#c26926]" />
                  Find Jobs & Urgent Shifts
                </span>
                <span className="text-xs bg-[#fae8d8] text-[#9e531e] px-2 py-0.5 rounded-full font-semibold">
                  New
                </span>
              </Link>

              <Link
                href="/baristas"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-medium text-[#332014] hover:bg-[#fae8d8]/50 transition-colors"
              >
                <Users className="w-5 h-5 text-[#c26926]" />
                Barista Talent Directory
              </Link>

              <Link
                href="/brew-lab"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-medium text-[#332014] hover:bg-[#fae8d8]/50 transition-colors"
              >
                <Flame className="w-5 h-5 text-[#c26926]" />
                Brew Lab & Ratio Calculator
              </Link>

              <div className="pt-4 flex flex-col gap-2">
                {user ? (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#472c1c] border border-[#e2d3be] rounded-xl hover:bg-[#fae8d8]/50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Log out ({user.email})
                  </button>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#472c1c] border border-[#e2d3be] rounded-xl hover:bg-[#fae8d8]/50 transition-colors"
                    >
                      <LogIn className="w-4 h-4" />
                      Log in
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#472c1c] border border-[#e2d3be] rounded-xl hover:bg-[#fae8d8]/50 transition-colors"
                    >
                      Sign up
                    </Link>
                  </>
                )}

                <Link
                  href="/jobs?post=true"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#26180f] bg-[#eee4d5] rounded-xl hover:bg-[#e2d3be] transition-colors"
                >
                  <PlusCircle className="w-4 h-4 text-[#9e531e]" />
                  Post a Café Opening / Shift
                </Link>
                <Link
                  href="/baristas?join=true"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#c26926] to-[#9e531e] rounded-xl shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  Join as a Barista
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
