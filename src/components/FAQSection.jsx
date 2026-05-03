"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Who can participate in VELOX 2026?",
    answer: "VELOX is open to everyone — students, professionals, designers, and entrepreneurs from across India. Whether you're a seasoned developer or just starting out, there's a place for you. All skill levels are welcome.",
  },
  {
    question: "How much does it cost to participate?",
    answer: "VELOX 2026 is completely free to participate in! There are no registration fees, hidden costs, or paywalls. Meals, swag, and cloud credits are provided by our generous sponsors.",
  },
  {
    question: "Can I participate solo or do I need a team?",
    answer: "You can participate either solo or as part of a team of up to 4 members. We have a dedicated team-matching feature during registration and a team formation mixer event before kickoff.",
  },
  {
    question: "What are the judging criteria?",
    answer: "Projects are evaluated on Innovation (25%), Technical Complexity (25%), Impact (25%), and Presentation (25%). Track-specific criteria may apply for specialized awards.",
  },
  {
    question: "What tech stack can I use?",
    answer: "You're free to use any programming language, framework, or tool. We provide sponsor APIs, cloud credits from AWS/GCP/Azure, and pre-configured dev environments.",
  },
  {
    question: "Will there be mentors available?",
    answer: "Yes! We have 200+ industry mentors from top companies. Book 1:1 sessions, attend office hours, or get async help through Discord channels throughout the event.",
  },
  {
    question: "How will prizes be distributed?",
    answer: "Cash prizes via bank transfer within 30 days. Non-cash prizes shipped or activated within 2 weeks. For teams, prize money is split equally unless specified otherwise.",
  },
  {
    question: "Is there a code of conduct?",
    answer: "Absolutely. We're committed to a safe, inclusive experience. All participants must adhere to our Code of Conduct. Violations result in immediate disqualification.",
  },
];

export default function FAQSection() {
  return (
    <section id="faqs" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-white/50 mb-6">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Frequently Asked<br />Questions
            </span>
          </h2>
          <p className="max-w-lg mx-auto text-sm sm:text-base text-white/45 px-2">
            Everything you need to know about VELOX 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 rounded-xl glass overflow-hidden transition-all duration-300 hover:bg-white/[0.06] data-[state=open]:bg-white/[0.06]"
              >
                <AccordionTrigger className="hover:no-underline text-left px-6 py-5 text-white/90 font-medium text-[15px]">
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5 border border-white/10 flex items-center justify-center text-xs font-mono shrink-0 text-[#3B82F6]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-white/50 text-sm leading-relaxed pl-16">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="p-8 rounded-2xl glass text-center">
            <p className="text-white/60 mb-4 text-sm">Still have questions?</p>
            <a
              href="mailto:hello@velox.dev"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3B82F6] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}