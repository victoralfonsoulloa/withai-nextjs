"use client";

import { useRef, useState } from "react";

const points = [
  {
    index: "I",
    title: "A team working with you. Not another SaaS subscription.",
    body: "You get engineers and analysts inside your operation — learning how your firm thinks, and staying close enough to fix what doesn't work.",
    borderClass: "border-t border-l border-b border-dashed border-[rgba(36,36,36,0.1)]",
  },
  {
    index: "II",
    title: "The best models, let loose on your existing work.",
    body: "Frontier models, conditioned on your memos, models, and taxonomies. The product reshapes itself around you — not the other way around.",
    borderClass: "border-t border-l border-b border-dashed border-[rgba(36,36,36,0.1)]",
  },
  {
    index: "III",
    title: "Secure by posture. Not by checkbox.",
    body: "Tenant isolation, no training on your data, Treated as a design constraint from day one — not a compliance afterthought.",
    borderClass: "border border-dashed border-[rgba(36,36,36,0.1)]",
  },
];

function SpotlightCard({
  point,
  isLast = false,
}: {
  point: (typeof points)[number];
  isLast?: boolean;
}) {
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
      className={`relative flex flex-col gap-4 overflow-hidden bg-[#f5f4ee] px-8 py-6 ${point.borderClass} ${isLast ? "min-[980px]:col-span-2 min-[1161px]:col-span-1" : ""}`}
      style={{
        outline: "1px dashed",
        outlineOffset: "-1px",
        outlineColor: spotlight ? "rgba(36,36,36,0.35)" : "transparent",
        transition: "outline-color 300ms",
      }}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight ? 1 : 0,
          background: spotlight
            ? `radial-gradient(circle 220px at ${spotlight.x}px ${spotlight.y}px, rgba(252,179,68,0.15) 0%, transparent 70%)`
            : undefined,
        }}
      />

      <div className="relative z-10 flex flex-col gap-3">
        <span className="font-mono text-[12px] tracking-[0.6px] text-[#525252] uppercase">
          {point.index}
        </span>
        <h3 className="font-serif text-[18px] leading-[1.4] tracking-[-0.54px] text-[#242424] min-[980px]:text-[24px] min-[980px]:tracking-[-0.72px]">
          {point.title}
        </h3>
      </div>
      <p className="relative z-10 font-sans text-[16px] leading-[1.5] font-normal text-[#525252]">
        {point.body}
      </p>
    </div>
  );
}

export default function DifferentSection() {
  return (
    <section className="shrink-0 bg-[#f0eee6] px-[10px] min-[980px]:px-16">
      <div className="flex flex-col items-center gap-10 border-t border-r border-l border-[rgba(36,36,36,0.1)] px-4 py-[42px] min-[980px]:px-8 min-[980px]:py-[58px]">
        {/* Header */}
        <h2 className="max-w-[800px] text-center font-serif text-[36px] leading-[1.2] tracking-[-1.08px] text-[#242424] min-[980px]:text-[48px] min-[980px]:tracking-[-1.44px]">
          Three things, plainly stated.
        </h2>

        {/* Three columns */}
        <div className="flex w-full flex-col min-[980px]:grid min-[980px]:grid-cols-2 min-[1161px]:grid-cols-3">
          {points.map((point, i) => (
            <SpotlightCard key={point.index} point={point} isLast={i === points.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
