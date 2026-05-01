"use client";

import { useEffect, useRef, useState } from "react";

const LOGO = "https://www.figma.com/api/mcp/asset/ed3221b6-9616-4032-b2d3-b168358139fb";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const heroThreshold = useRef(0);

  useEffect(() => {
    heroThreshold.current = window.innerHeight * 0.6;

    const onScroll = () => {
      const y = window.scrollY;
      const prev = lastScrollY.current;

      if (y < heroThreshold.current) {
        setVisible(true);
      } else if (y > prev) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[69px] flex items-center justify-center border-b border-black/10 transition-transform duration-300 ease-in-out"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        backgroundColor: "rgba(240, 238, 230, 0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center justify-between w-full max-w-[90rem] px-[10px] min-[980px]:px-16">
        <img src={LOGO} alt="WithAI" className="size-[43px]" />
        <a
          href="https://cal.com/imj-mcinnis/video-call?duration=30"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#242424] px-5 py-2 rounded-[10px] text-[16px] font-medium font-sans text-[#242424] hover:bg-[#f5f4ee] active:bg-[#e8e6de] active:scale-[0.97] touch-manipulation transition-all duration-150"
        >
          Book a consultation
        </a>
      </div>
    </header>
  );
}
