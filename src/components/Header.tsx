"use client";

import { useEffect, useRef, useState } from "react";

const LOGO = "https://www.figma.com/api/mcp/asset/ed3221b6-9616-4032-b2d3-b168358139fb";
const navLinks = ["Company", "Work", "Products", "Resources"];

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
      className="fixed top-0 left-0 right-0 z-50 h-[69px] px-16 flex items-center border-b border-black/10 transition-transform duration-300 ease-in-out"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        backgroundColor: "rgba(240, 238, 230, 0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center justify-between w-full">
        <img src={LOGO} alt="WithAI" className="size-[43px]" />
        <nav className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-2.5 text-[14px] font-medium font-sans text-[#242424] rounded-lg hover:bg-[#f5f4ee] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="border border-[#242424] px-5 py-2 rounded-[10px] text-[16px] font-medium font-sans text-[#242424] hover:bg-[#f5f4ee] transition-colors"
        >
          Book a demo
        </a>
      </div>
    </header>
  );
}
