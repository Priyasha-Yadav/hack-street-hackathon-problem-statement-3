"use client";

import { motion } from "framer-motion";
import Bucket from "@/components/ui/bucket";

const prizes = [
  {
    rank: "1st",
    title: "Grand Champion",
    amount: "₹50,000",
    color: "#F59E0B",
    perks: [
      "₹50,000 cash prize",
      "1-year AWS credits ($100K)",
      "YC-style incubation program",
      "Meeting with top VCs",
      "Premium hardware package",
    ],
    featured: true,
  },
  {
    rank: "2nd",
    title: "Runner Up",
    amount: "₹25,000",
    color: "#94A3B8",
    perks: [
      "₹25,000 cash prize",
      "6-month cloud credits ($50K)",
      "Startup mentorship program",
      "Featured in tech media",
      "Premium swag kit",
    ],
    featured: false,
  },
  {
    rank: "3rd",
    title: "Second Runner Up",
    amount: "₹15,000",
    color: "#CD7F32",
    perks: [
      "₹15,000 cash prize",
      "3-month cloud credits ($25K)",
      "Online course subscriptions",
      "Community spotlight feature",
      "Premium swag kit",
    ],
    featured: false,
  },
];

const trackPrizes = [
  { track: "AI/ML Innovation", prize: "₹10,000", color: "#3B82F6" },
  { track: "Web3 & DeFi", prize: "₹10,000", color: "#3B82F6" },
  { track: "Climate Tech", prize: "₹10,000", color: "#3B82F6" },
  { track: "Health Tech", prize: "₹10,000", color: "#3B82F6" },
  { track: "People's Choice", prize: "₹5,000", color: "#3B82F6" },
  { track: "Best Design", prize: "₹5,000", color: "#3B82F6" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function PrizesSection() {
  return (
    <section id="prizes" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow-bottom pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-30"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-white/50 mb-6">
            Prize Pool
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#3B82F6]">
              ₹150,000+
            </span>
            <br />
            <span className="text-white/80">In Prizes</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-white/45 px-2 mb-6">
            Compete for massive prizes across 6 tracks. Every great idea deserves recognition.
          </p>
        </motion.div>

        {/* Bucket Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <Bucket />
        </motion.div>

        {/* Main Prize Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.rank}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ${prize.featured ? "md:-mt-4 md:mb-4" : ""
                }`}
            >
              <div className={`relative p-5 sm:p-8 glass h-full rounded-xl sm:rounded-2xl ${prize.featured ? "border-amber-500/20" : ""}`}>
                {prize.featured && (
                  <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
                )}

                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ background: prize.color }} />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full border" style={{ color: prize.color, borderColor: `${prize.color}30`, background: `${prize.color}10` }}>
                      {prize.rank} Place
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{prize.title}</h3>
                  <p className="text-2xl sm:text-3xl font-bold font-mono mb-4 sm:mb-6" style={{ color: prize.color }}>{prize.amount}</p>

                  <ul className="space-y-2 sm:space-y-3">
                    {prize.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 shrink-0" style={{ color: prize.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs sm:text-sm text-white/50">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Track Prizes */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}>
          <h3 className="text-xl sm:text-2xl font-bold text-center text-white mb-6 sm:mb-8">Track Prizes</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {trackPrizes.map((tp, i) => (
              <motion.div key={tp.track} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }} className="group p-4 sm:p-5 rounded-xl glass text-center hover:bg-white/[0.06] transition-all duration-400 cursor-default">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg mx-auto mb-2 sm:mb-3 flex items-center justify-center border group-hover:scale-110 transition-transform duration-300" style={{ borderColor: `${tp.color}30`, background: `${tp.color}10` }}>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ background: tp.color }} />
                </div>
                <span className="block text-xs sm:text-sm font-semibold text-white mb-1 truncate">{tp.track}</span>
                <span className="block text-base sm:text-lg font-bold font-mono" style={{ color: tp.color }}>{tp.prize}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
