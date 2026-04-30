"use client";

import { useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "We used to spend 80% of our time gathering information and 20% acting on it. WithAI has flipped those percentages.",
    name: "Scott Hobart",
    role: "Chief Investment Officer",
    borderClass: "border-t border-l border-b border-dashed border-[rgba(36,36,36,0.1)]",
  },
  {
    quote:
      "WithAI eliminates the need to search every 'haystack' — it surfaces the needle before you knew you needed to look.",
    name: "Martin Fransson, PhD",
    role: "Head of Primary Research",
    borderClass: "border border-dashed border-[rgba(36,36,36,0.1)]",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight(null)}
      className={`relative flex-1 flex flex-col justify-between gap-8 px-8 py-6 bg-[#f5f4ee] overflow-hidden ${testimonial.borderClass}`}
      style={{
        outline: "1px dashed",
        outlineOffset: "-1px",
        outlineColor: spotlight ? "rgba(36,36,36,0.35)" : "transparent",
        transition: "outline-color 300ms",
      }}
    >
      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: spotlight ? 1 : 0,
          background: spotlight
            ? `radial-gradient(circle 260px at ${spotlight.x}px ${spotlight.y}px, rgba(252,179,68,0.15) 0%, transparent 70%)`
            : undefined,
        }}
      />

      {/* Quote */}
      <blockquote className="font-serif text-[32px] text-[#242424] leading-[1.35] tracking-[-0.96px] relative z-10">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="size-12 rounded-full bg-white shrink-0" />
        <div className="flex flex-col gap-1">
          <span className="font-serif text-[18px] text-[#242424] leading-[1.2] tracking-[-0.54px]">
            {testimonial.name}
          </span>
          <span className="font-mono text-[12px] text-[#525252] uppercase tracking-[0.6px]">
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f0eee6] px-16 shrink-0">
      <div className="border-t border-l border-r border-[rgba(36,36,36,0.1)] px-8 py-[58px] flex flex-col gap-10 items-center">
        {/* Header */}
        <div className="flex flex-col gap-2.5 items-center">
          <div className="border border-[rgba(36,36,36,0.1)] rounded-[24px] flex items-center gap-2.5 px-[15px] py-[10px] self-center">
            <span className="relative flex size-2.5 shrink-0">
              <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
            </span>
            <span className="font-mono text-[12px] text-[rgba(26,26,24,0.77)] uppercase tracking-[0.6px]">
              testimonials
            </span>
          </div>
          <h2 className="font-serif text-[48px] text-[#242424] text-center leading-[1.2] tracking-[-1.44px] mt-1">
            The work, in their words.
          </h2>
          <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5] text-center max-w-[560px] mt-1">
            Mercator Partners has been running on WithAI since day one. Their CIO and Head of
            Primary Research on what changed.
          </p>
        </div>

        {/* Cards */}
        <div className="flex items-stretch w-full">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
