"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const INITIAL_PATH = "M 0 100 Q 500 100 1000 100";

export default function StringAnimation() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    if (!container || !path) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(path, {
        attr: { d: `M 0 100 Q ${x} ${y} 1000 100` },
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: INITIAL_PATH },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-8 sm:py-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* String container */}
        <div
          ref={containerRef}
          className="w-full cursor-crosshair"
          style={{ height: "200px" }}
        >
          <svg
            width="100%"
            height="200"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              d={INITIAL_PATH}
              stroke="url(#stringGradient)"
              strokeWidth="1.5"
              fill="transparent"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="stringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="15%" stopColor="rgba(59, 130, 246, 0.6)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
                <stop offset="85%" stopColor="rgba(59, 130, 246, 0.6)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
