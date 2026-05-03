"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1,200+", label: "Hackers" },
  { value: "48h", label: "Non-Stop" },
  { value: "₹150K+", label: "In Prizes" },
  { value: "200+", label: "Mentors" },
  { value: "50+", label: "Sponsors" },
  { value: "6", label: "Tracks" },
];

const features = [
  {
    title: "Build Something Extraordinary",
    description:
      "Turn your wildest ideas into working prototypes in just 48 hours. No limits on tech stack, creativity, or ambition.",
  },
  {
    title: "Global Community",
    description:
      "Connect with brilliant minds from across India. Form cross-functional teams and build lasting professional relationships.",
  },
  {
    title: "Learn From the Best",
    description:
      "Access exclusive workshops, fireside chats, and 1:1 mentorship from industry leaders at top tech companies.",
  },
  {
    title: "Launch Your Career",
    description:
      "Top performers get fast-tracked for interviews, incubation programs, and venture capital introductions.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

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
            About the Event
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Where Innovation <br/>Meets Ambition</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/50 leading-relaxed px-2">
            VELOX 2026 is not just a hackathon — it's a launchpad for the next
            generation of builders, dreamers, and innovators.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16 sm:mb-20 md:mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeInUp}
              className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl glass text-center hover:bg-white/[0.07] transition-all duration-500 cursor-default"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#3B82F6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="block text-xl sm:text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs font-mono tracking-wider text-white/40 uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={fadeInUp}
              className="group relative p-5 sm:p-8 rounded-xl sm:rounded-2xl glass hover:bg-white/[0.06] transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#3B82F6]/5 via-transparent to-[#3B82F6]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                {/* Number indicator instead of emoji */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5 border border-white/10 flex items-center justify-center text-xs sm:text-sm font-mono font-bold text-[#3B82F6] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-white mb-2 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/45 leading-relaxed text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
