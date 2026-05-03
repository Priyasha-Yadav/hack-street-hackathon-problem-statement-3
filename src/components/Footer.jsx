"use client";

export default function Footer() {
  const footerLinks = [
    { title: "Event", links: ["About", "Timeline", "Prizes", "Sponsors", "FAQs"] },
    { title: "Resources", links: ["Code of Conduct", "Brand Kit", "API Docs", "Past Events"] },
    { title: "Community", links: ["Discord", "Twitter/X", "LinkedIn", "GitHub"] },
  ];

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#000] to-[#3B82F6] flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">V</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight">VELOX</span>
            </div>
            <p className="text-xs sm:text-sm text-white/35 leading-relaxed mb-4 sm:mb-6 max-w-xs">
              The most electrifying hackathon experience of 2026. Build, innovate, and launch your next big idea.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {["X", "in", "GH", "DC"].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg glass flex items-center justify-center text-white/40 text-[10px] sm:text-xs font-mono hover:text-white hover:bg-white/10 transition-all duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-white/30 mb-3 sm:mb-4">{group.title}</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs sm:text-sm text-white/40 hover:text-white transition-colors duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-white/25 font-mono">© 2026 VELOX Hackathon. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-[10px] sm:text-xs text-white/25 hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] sm:text-xs text-white/25 hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
