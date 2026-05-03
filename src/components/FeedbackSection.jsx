"use client";

import { motion } from "framer-motion";
import { RatingInteraction } from "@/components/ui/emoji-rating";

export default function FeedbackSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Section tag */}
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-white/50">
            We'd Love Your Feedback
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              How's Your Experience?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/45 text-center max-w-md">
            Your feedback helps us make VELOX even better. Rate your experience so far.
          </p>

          {/* Emoji Rating Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 sm:p-10 rounded-2xl glass-strong"
          >
            <RatingInteraction />
          </motion.div>

          {/* Decorative divider */}
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
