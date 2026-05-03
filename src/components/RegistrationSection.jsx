"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const STEPS = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Experience" },
  { id: 3, title: "Team & Tracks" },
];

const TRACKS = [
  { id: "ai", label: "AI/ML Innovation" },
  { id: "web3", label: "Web3 & DeFi" },
  { id: "climate", label: "Climate Tech" },
  { id: "health", label: "Health Tech" },
  { id: "open", label: "Open Innovation" },
  { id: "design", label: "Best Design" },
];

const EXPERIENCE_LEVELS = ["Beginner", "Intermediate", "Advanced", "Expert"];

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function generateId() {
  return "VLX-" + Math.random().toString(36).substring(2, 8).toUpperCase();
}

const GIF_CODING = "/gif-coding.gif";
const GIF_TECH = "/gif-tech.gif";

/* ─── ID CARD COMPONENT ─── */
function IdCard({ form, participantId, cardRef }) {
  const trackLabel = TRACKS.find((t) => t.id === form.track)?.label || "Open";
  const initial = form.fullName?.trim()?.[0]?.toUpperCase() || "V";

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-[600px] mx-auto rounded-2xl overflow-hidden select-none"
      style={{
        aspectRatio: "16 / 9",
        background: "linear-gradient(145deg, #080c14 0%, #0c1220 35%, #0f172a 70%, #0a1628 100%)",
      }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow accents */}
      <div className="absolute -top-24 right-10 w-56 h-56 rounded-full bg-[#3B82F6]/10 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-44 h-44 rounded-full bg-[#3B82F6]/6 blur-[60px] pointer-events-none" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent 5%, #3B82F6 30%, #60A5FA 50%, #3B82F6 70%, transparent 95%)" }}
      />
      {/* Left accent line */}
      <div className="absolute top-0 left-0 w-[2px] h-full"
        style={{ background: "linear-gradient(180deg, #3B82F6 0%, transparent 40%)" }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-5 sm:p-6 md:p-7">

        {/* TOP: Brand + ID */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#3B82F6] flex items-center justify-center">
              <span className="text-white font-bold text-xs">V</span>
            </div>
            <div className="leading-none">
              <span className="text-white font-bold text-xs tracking-tight block">VELOX 2026</span>
              <span className="text-white/20 text-[8px] font-mono tracking-[0.2em] uppercase">Hackathon Participant</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[7px] font-mono text-white/20 uppercase tracking-widest block mb-0.5">ID</span>
            <span className="text-xs font-mono font-bold text-[#3B82F6] tracking-wide">{participantId}</span>
          </div>
        </div>

        {/* CENTER: Avatar + Name + GIFs */}
        <div className="flex items-center gap-4 sm:gap-5 py-1">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1d4ed8] flex items-center justify-center shrink-0 ring-2 ring-white/5">
            <span className="text-white font-bold text-lg sm:text-xl">{initial}</span>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight truncate leading-tight">
              {form.fullName || "Your Name"}
            </h3>
            <p className="text-[10px] sm:text-xs text-white/30 font-mono truncate mt-0.5">
              {form.github ? `github.com/${form.github.replace("@", "")}` : form.email || "email@example.com"}
            </p>
          </div>
          <img src={GIF_TECH} alt="" className="w-20 h-20 sm:w-16 sm:h- rounded-xl object-cover shrink-0 hidden sm:block" />        </div>

        {/* BOTTOM: Details + Date */}
        <div className="flex items-end justify-between">
          <div className="flex gap-5 sm:gap-8">
            {[
              { label: "Track", value: trackLabel },
              { label: "Level", value: form.experience || "—" },
              { label: "Mode", value: form.teamPref === "team" ? "Team" : "Solo" },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-[7px] sm:text-[8px] font-mono text-white/20 uppercase tracking-[0.15em] block">{item.label}</span>
                <span className="text-[10px] sm:text-xs font-semibold text-white/70 block mt-0.5">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="px-2.5 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06]">
              <span className="text-[8px] font-mono text-white/35 block text-center leading-tight">JUL 15–17</span>
              <span className="text-[7px] font-mono text-white/20 block text-center">2026</span>
            </div>
            <div className="w-10 h-10 rounded-md bg-white/[0.03] border border-white/[0.06] p-1.5 hidden sm:block">
              <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-[1px]">
                {[1, 0, 1, 0, 1, 0, 1, 0, 1].map((on, i) => (
                  <div key={i} className={`rounded-[1px] ${on ? "bg-white/20" : "bg-transparent"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function RegistrationSection() {
  const [step, setStep] = useState(1);
  const [showCard, setShowCard] = useState(false);
  const [participantId] = useState(() => generateId());
  const [errors, setErrors] = useState({});
  const cardRef = useRef(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    github: "",
    experience: "",
    skills: "",
    bio: "",
    teamPref: "solo",
    track: "",
    agree: false,
  });

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!form.fullName.trim()) newErrors.fullName = "Name is required";
      if (!form.email.trim()) newErrors.email = "Email is required";
      else if (!validateEmail(form.email)) newErrors.email = "Invalid email";
    }
    if (step === 2) {
      if (!form.experience) newErrors.experience = "Select your experience level";
    }
    if (step === 3) {
      if (!form.track) newErrors.track = "Select a track";
      if (!form.agree) newErrors.agree = "You must agree to the Code of Conduct";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => { if (validateStep()) setStep((s) => Math.min(s + 1, 3)); };
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const handleSubmit = () => { if (validateStep()) setShowCard(true); };

  const getCardCanvas = useCallback(async () => {
    if (!cardRef.current) return null;
    const { default: html2canvas } = await import("html2canvas");
    return html2canvas(cardRef.current, {
      backgroundColor: "#0a0f1a",
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });
  }, []);

  const downloadCard = useCallback(async () => {
    try {
      const canvas = await getCardCanvas();
      if (!canvas) return;
      const link = document.createElement("a");
      link.download = `VELOX-2026-${participantId}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch {
      alert("Download not available. Take a screenshot of your ID card to share!");
    }
  }, [participantId, getCardCanvas]);

  const shareCard = useCallback(async () => {
    try {
      const canvas = await getCardCanvas();
      if (!canvas) return;
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], `VELOX-2026-${participantId}.png`, { type: "image/png" });
        const shareData = {
          title: "VELOX 2026 — I'm In!",
          text: `I just registered for VELOX 2026!\n\nParticipant ID: ${participantId}\nTrack: ${TRACKS.find(t => t.id === form.track)?.label || "Open"}\n\n#VELOX2026 #Hackathon #BuildInPublic`,
          files: [file],
        };
        if (navigator.canShare && navigator.canShare(shareData)) {
          await navigator.share(shareData);
        } else if (navigator.share) {
          await navigator.share({ title: shareData.title, text: shareData.text });
        } else {
          // Fallback: download the image
          const link = document.createElement("a");
          link.download = file.name;
          link.href = URL.createObjectURL(blob);
          link.click();
          URL.revokeObjectURL(link.href);
        }
      }, "image/png");
    } catch {
      // Final fallback: copy text
      const text = `I just registered for VELOX 2026! Participant ID: ${participantId} | Track: ${TRACKS.find(t => t.id === form.track)?.label || "Open"} | #VELOX2026 #Hackathon`;
      navigator.clipboard.writeText(text);
      alert("Share text copied to clipboard!");
    }
  }, [participantId, form.track, getCardCanvas]);

  return (
    <section id="register" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 radial-glow-bottom pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-white/50 mb-6">
            Join the Arena
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Register Now
            </span>
          </h2>
          <p className="text-sm sm:text-base text-white/45 px-2">Secure your spot at VELOX 2026.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showCard ? (
            <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}>
              {/* Step Indicators */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
                {STEPS.map((s, i) => (
                  <div key={s.id} className="flex items-center gap-1.5 sm:gap-2">
                    <button
                      onClick={() => { if (s.id < step) setStep(s.id); }}
                      className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300 cursor-pointer ${step === s.id
                        ? "bg-[#3B82F6] text-white"
                        : step > s.id
                          ? "bg-white/10 text-white/70"
                          : "bg-white/5 text-white/30"
                        }`}
                    >
                      <span className="font-mono">{String(s.id).padStart(2, "0")}</span>
                      <span className="hidden sm:inline">{s.title}</span>
                    </button>
                    {i < STEPS.length - 1 && (
                      <div className={`w-5 sm:w-8 h-px transition-colors duration-300 ${step > s.id ? "bg-[#3B82F6]" : "bg-white/10"}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl glass-strong"
              >
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">Personal Information</h3>
                      <div className="space-y-4 sm:space-y-5">
                        <div>
                          <label className="block text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider mb-1.5 sm:mb-2">Full Name *</label>
                          <Input placeholder="John Doe" value={form.fullName} onChange={(e) => updateField("fullName", e.target.value)} className={`bg-white/5 border-white/10 text-white placeholder:text-white/20 ${errors.fullName ? "border-red-500/50" : ""}`} />
                          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                        </div>
                        <div>
                          <label className="block text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider mb-1.5 sm:mb-2">Email Address *</label>
                          <Input type="email" placeholder="john@example.com" value={form.email} onChange={(e) => updateField("email", e.target.value)} className={`bg-white/5 border-white/10 text-white placeholder:text-white/20 ${errors.email ? "border-red-500/50" : ""}`} />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider mb-1.5 sm:mb-2">GitHub Username</label>
                          <Input placeholder="johndoe" value={form.github} onChange={(e) => updateField("github", e.target.value)} className="bg-white/5 border-white/10 text-white placeholder:text-white/20" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">Your Experience</h3>
                      <div className="space-y-4 sm:space-y-5">
                        <div>
                          <label className="block text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider mb-2 sm:mb-3">Experience Level *</label>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {EXPERIENCE_LEVELS.map((lvl) => (
                              <button key={lvl} onClick={() => updateField("experience", lvl)} className={`p-2.5 sm:p-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border ${form.experience === lvl ? "bg-[#3B82F6]/20 border-[#3B82F6]/50 text-white" : "bg-white/3 border-white/8 text-white/50 hover:bg-white/5 hover:border-white/15"}`}>
                                {lvl}
                              </button>
                            ))}
                          </div>
                          {errors.experience && <p className="text-red-400 text-xs mt-1">{errors.experience}</p>}
                        </div>
                        <div>
                          <label className="block text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider mb-1.5 sm:mb-2">Key Skills</label>
                          <Input placeholder="React, Python, ML, Design..." value={form.skills} onChange={(e) => updateField("skills", e.target.value)} className="bg-white/5 border-white/10 text-white placeholder:text-white/20" />
                        </div>
                        <div>
                          <label className="block text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider mb-1.5 sm:mb-2">Short Bio</label>
                          <textarea placeholder="Tell us about yourself..." value={form.bio} onChange={(e) => updateField("bio", e.target.value)} rows={3} className="w-full rounded-lg bg-white/5 border border-white/10 text-white text-xs sm:text-sm px-3 py-2 placeholder:text-white/20 focus:border-[#3B82F6]/50 focus:outline-none resize-none" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6">Team & Track</h3>
                      <div className="space-y-4 sm:space-y-5">
                        <div>
                          <label className="block text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider mb-2 sm:mb-3">Team Preference</label>
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            {[{ id: "solo", label: "Solo" }, { id: "team", label: "Find a Team" }].map((opt) => (
                              <button key={opt.id} onClick={() => updateField("teamPref", opt.id)} className={`p-2.5 sm:p-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border flex items-center justify-center gap-2 ${form.teamPref === opt.id ? "bg-[#3B82F6]/20 border-[#3B82F6]/50 text-white" : "bg-white/3 border-white/8 text-white/50 hover:bg-white/5"}`}>
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-wider mb-2 sm:mb-3">Choose Your Track *</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                            {TRACKS.map((t) => (
                              <button key={t.id} onClick={() => updateField("track", t.id)} className={`p-2.5 sm:p-3 rounded-xl text-xs sm:text-sm transition-all duration-300 cursor-pointer border text-left ${form.track === t.id ? "border-[#3B82F6]/50 bg-[#3B82F6]/10 text-white" : "bg-white/3 border-white/8 text-white/50 hover:bg-white/5"}`}>
                                <span className="text-[11px] sm:text-xs font-medium">{t.label}</span>
                              </button>
                            ))}
                          </div>
                          {errors.track && <p className="text-red-400 text-xs mt-1">{errors.track}</p>}
                        </div>
                        <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
                          <input type="checkbox" checked={form.agree} onChange={(e) => updateField("agree", e.target.checked)} className="mt-1 accent-[#3B82F6]" />
                          <span className="text-[10px] sm:text-xs text-white/40">I agree to the Code of Conduct and Terms of Participation. *</span>
                        </label>
                        {errors.agree && <p className="text-red-400 text-xs">{errors.agree}</p>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Nav Buttons */}
                <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5">
                  {step > 1 ? (
                    <button onClick={prevStep} className="px-4 sm:px-5 py-2 text-xs sm:text-sm text-white/50 hover:text-white transition-colors cursor-pointer">
                      ← Back
                    </button>
                  ) : <div />}
                  {step < 3 ? (
                    <Button onClick={nextStep} className="bg-[#3B82F6] text-white border-0 hover:bg-[#3B82F6]/90 px-6 sm:px-8 text-xs sm:text-sm">
                      Continue →
                    </Button>
                  ) : (
                    <Button onClick={handleSubmit} className="bg-[#3B82F6] text-white border-0 hover:bg-[#3B82F6]/90 px-6 sm:px-8 text-xs sm:text-sm">
                      Submit Registration
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* ─── ID CARD VIEW ─── */
            <motion.div
              key="card"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Success message */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/20 border border-[#3B82F6]/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">You're In!</h3>
                <p className="text-sm text-white/45">Your VELOX 2026 participant card is ready. Share it on social media!</p>
              </div>

              {/* The ID Card */}
              <IdCard form={form} participantId={participantId} cardRef={cardRef} />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  onClick={downloadCard}
                  className="bg-[#3B82F6] text-white border-0 hover:bg-[#3B82F6]/90 px-6 text-sm w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Card
                </Button>
                <Button
                  onClick={shareCard}
                  variant="outline"
                  className="border-white/10 text-white/70 hover:text-white hover:bg-white/5 px-6 text-sm w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share on Social
                </Button>
              </div>

              {/* Edit button */}
              <div className="text-center">
                <button
                  onClick={() => { setShowCard(false); setStep(1); }}
                  className="text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer"
                >
                  ← Edit registration details
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
