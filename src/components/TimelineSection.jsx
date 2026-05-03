"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phases = [
  {
    id: "registration",
    phase: "Phase 01",
    title: "Registration & Team Formation",
    date: "June 1 – July 10, 2026",
    color: "#3B82F6",
    details: [
      "Sign up as an individual or team (up to 4 members)",
      "Browse participant profiles and form dream teams",
      "Complete your profile and link your GitHub/Portfolio",
      "Join the Discord community for early networking",
      "Access pre-event learning resources and workshops",
    ],
  },
  {
    id: "kickoff",
    phase: "Phase 02",
    title: "Opening Ceremony & Kickoff",
    date: "July 15, 2026 — 9:00 AM UTC",
    color: "#3B82F6",
    details: [
      "Live-streamed opening ceremony with keynote speakers",
      "Challenge tracks and problem statements revealed",
      "Sponsor API keys and cloud credits distributed",
      "Mentorship matching and team workspace setup",
      "Official 48-hour countdown begins",
    ],
  },
  {
    id: "hacking",
    phase: "Phase 03",
    title: "Hacking Period",
    date: "July 15–17, 2026 — 48 Hours",
    color: "#3B82F6",
    details: [
      "Build, iterate, and innovate on your project",
      "Attend live workshops on AI, Web3, DevOps & more",
      "Book 1:1 mentor sessions for technical guidance",
      "Participate in mini-challenges for bonus prizes",
      "Milestone check-ins at 12h, 24h, and 36h marks",
    ],
  },
  {
    id: "submission",
    phase: "Phase 04",
    title: "Submission & Demos",
    date: "July 17, 2026 — 9:00 AM UTC",
    color: "#3B82F6",
    details: [
      "Submit your project with video demo and documentation",
      "Push final code to GitHub with complete README",
      "Prepare a 3-minute pitch presentation",
      "Projects become publicly visible on the gallery",
      "Community voting opens for People's Choice Award",
    ],
  },
  {
    id: "judging",
    phase: "Phase 05",
    title: "Judging & Awards",
    date: "July 18–19, 2026",
    color: "#3B82F6",
    details: [
      "Expert panel reviews submissions across all tracks",
      "Top 20 teams present live to the judging panel",
      "Winners announced at virtual awards ceremony",
      "Prizes, incubation offers, and certificates distributed",
      "Post-event networking and celebration party",
    ],
  },
];

export default function TimelineSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="timeline" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-white/50 mb-6">
            Event Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              The Journey
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-white/45 px-2">
            Five phases, one incredible experience. Explore each stage of VELOX 2026.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {/* Phase Selector */}
          <div className="lg:w-[380px] shrink-0">
            <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
              {phases.map((phase, idx) => (
                <motion.button
                  key={phase.id}
                  onClick={() => setActivePhase(idx)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className={`
                    snap-start relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl text-left
                    min-w-[200px] sm:min-w-[260px] lg:min-w-0 w-full
                    transition-all duration-500 cursor-pointer group
                    ${
                      activePhase === idx
                        ? "glass-strong bg-white/[0.06]"
                        : "hover:bg-white/[0.03]"
                    }
                  `}
                >
                  {/* Active indicator line */}
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-500 hidden lg:block ${
                      activePhase === idx ? "h-10 opacity-100" : "h-0 opacity-0"
                    }`}
                    style={{ backgroundColor: phase.color }}
                  />

                  {/* Phase number icon */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xs sm:text-sm font-mono font-bold shrink-0 transition-all duration-300 border ${
                      activePhase === idx
                        ? "scale-110 border-white/20"
                        : "border-white/5 group-hover:border-white/10"
                    }`}
                    style={{
                      background:
                        activePhase === idx
                          ? `linear-gradient(135deg, ${phase.color}20, ${phase.color}08)`
                          : "rgba(255,255,255,0.03)",
                      color: activePhase === idx ? phase.color : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <span
                      className="block text-[10px] font-mono tracking-widest uppercase mb-0.5 transition-colors duration-300"
                      style={{
                        color: activePhase === idx ? phase.color : "rgba(255,255,255,0.3)",
                      }}
                    >
                      {phase.phase}
                    </span>
                    <span
                      className={`block text-xs sm:text-sm font-semibold truncate transition-colors duration-300 ${
                        activePhase === idx ? "text-white" : "text-white/50"
                      }`}
                    >
                      {phase.title}
                    </span>
                  </div>

                  {/* Arrow */}
                  <svg
                    className={`w-4 h-4 ml-auto shrink-0 transition-all duration-300 hidden lg:block ${
                      activePhase === idx
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
                    style={{ color: phase.color }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Phase Details */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl glass-strong overflow-hidden h-full"
              >
                {/* Gradient accent top border */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${phases[activePhase].color}, transparent)`,
                  }}
                />

                {/* Decorative glow */}
                <div
                  className="absolute -top-20 -right-20 w-40 sm:w-60 h-40 sm:h-60 rounded-full blur-3xl opacity-10 pointer-events-none"
                  style={{ background: phases[activePhase].color }}
                />

                <div className="relative">
                  <div className="mb-2">
                    <span
                      className="text-xs font-mono tracking-widest uppercase"
                      style={{ color: phases[activePhase].color }}
                    >
                      {phases[activePhase].phase}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
                      {phases[activePhase].title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 mb-6 sm:mb-8">
                    <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span className="text-xs sm:text-sm text-white/40 font-mono">
                      {phases[activePhase].date}
                    </span>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {phases[activePhase].details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3 group"
                      >
                        <div
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] sm:text-xs font-mono font-bold border"
                          style={{
                            borderColor: `${phases[activePhase].color}40`,
                            color: phases[activePhase].color,
                            background: `${phases[activePhase].color}10`,
                          }}
                        >
                          {idx + 1}
                        </div>
                        <span className="text-white/60 text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                          {detail}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 sm:mt-12 flex items-center gap-1.5 sm:gap-2">
          {phases.map((phase, idx) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(idx)}
              className="flex-1 h-1 sm:h-1.5 rounded-full overflow-hidden bg-white/5 cursor-pointer transition-all duration-300 hover:h-2"
            >
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: idx <= activePhase ? "100%" : "0%",
                  background: `linear-gradient(90deg, ${phase.color}, ${phase.color}80)`,
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
