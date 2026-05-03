"use client";

import { motion } from "framer-motion";
import LogoCloud from "@/components/ui/logo-cloud-2";

const sponsorTiers = [
  {
    tier: "Platinum",
    color: "#E5E4E2",
    sponsors: [
      { name: "NVIDIA", role: "GPU Infrastructure Partner" },
      { name: "OpenAI", role: "AI Platform Sponsor" },
    ],
  },
  {
    tier: "Gold",
    color: "#F59E0B",
    sponsors: [
      { name: "GitHub", role: "Developer Tools" },
      { name: "Vercel", role: "Deployment Partner" },
      { name: "Supabase", role: "Backend Sponsor" },
    ],
  },
  {
    tier: "Silver",
    color: "#94A3B8",
    sponsors: [
      { name: "Turso", role: "Database Sponsor" },
      { name: "Clerk", role: "Auth Provider" },
      { name: "Claude AI", role: "AI Sponsor" },
    ],
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-white/50 mb-6">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Backed by the Best</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-white/45 px-2">World-class companies powering the future of innovation.</p>
        </motion.div>

        {/* Logo Cloud */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="mb-12 sm:mb-20">
          <LogoCloud />
        </motion.div>

        {/* Tiers */}
        <div className="space-y-8 sm:space-y-10">
          {sponsorTiers.map((tier, tierIdx) => (
            <motion.div key={tier.tier} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: tierIdx * 0.1, duration: 0.6 }}>
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ background: tier.color }} />
                <h3 className="text-sm sm:text-lg font-bold font-mono tracking-wider uppercase" style={{ color: tier.color }}>{tier.tier} Sponsors</h3>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {tier.sponsors.map((sponsor, sIdx) => (
                  <motion.div key={sponsor.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: sIdx * 0.08, duration: 0.4 }} className="group relative p-4 sm:p-6 rounded-xl glass hover:bg-white/[0.06] transition-all duration-500">
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${tier.color}08, transparent 70%)` }} />
                    <div className="relative flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-sm sm:text-lg font-bold border transition-all duration-300 group-hover:scale-110 shrink-0" style={{ borderColor: `${tier.color}30`, background: `${tier.color}10`, color: tier.color }}>
                        {sponsor.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-white truncate">{sponsor.name}</h4>
                        <p className="text-[10px] sm:text-xs text-white/35 font-mono truncate">{sponsor.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-10 sm:mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full glass text-xs sm:text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-300">
            <span>Interested in sponsoring?</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
