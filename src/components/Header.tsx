"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
      className="fixed top-0 right-0 left-0 z-50 flex h-[69px] items-center justify-center border-b border-black/10 transition-transform duration-300 ease-in-out"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        backgroundColor: "rgba(240, 238, 230, 0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="flex w-full max-w-[90rem] items-center justify-between px-[10px] min-[980px]:px-16">
        <Image src="/logos/withai-logo.svg" alt="WithAI" width={43} height={43} />
        <a
          href="https://cal.com/imj-mcinnis/video-call?duration=30"
          target="_blank"
          rel="noopener noreferrer"
          className="touch-manipulation rounded-[10px] border border-ink px-5 py-2 font-sans text-[16px] font-medium text-ink transition-all duration-150 hover:bg-background-2 active:scale-[0.97] active:bg-[#e8e6de]"
        >
          Book a consultation
        </a>
      </div>
    </header>
  );
}
