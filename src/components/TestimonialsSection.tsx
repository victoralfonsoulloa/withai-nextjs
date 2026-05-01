"use client";

import { useRef, useState } from "react";

const PHOTOS = {
  scottHobart: "https://www.figma.com/api/mcp/asset/c9e8e4c0-468e-4349-9228-6ff7b520a7a4",
  martinFransson: "https://www.figma.com/api/mcp/asset/ba1c9912-3468-467a-bfff-90fd6d8d4ade",
};

const testimonials = [
  {
    quote:
      "We used to spend 80% of our time gathering information and 20% acting on it. WithAI has flipped those percentages.",
    name: "Scott Hobart",
    role: "Chief Investment Officer",
    photo: PHOTOS.scottHobart,
  },
  {
    quote:
      "WithAI eliminates the need to search every 'haystack' as the 'needles' are floated to the top and organized by importance, impact, and relevance for the portfolio.",
    name: "Martin Fransson, PhD",
    role: "Head of Primary Research",
    photo: PHOTOS.martinFransson,
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
      className="relative flex-1 flex flex-col gap-6 p-8 bg-[#f5f4ee] overflow-hidden border-t border-l border-b border-dashed border-[rgba(36,36,36,0.1)]"
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

      {/* Author */}
      <div className="flex flex-col gap-4 min-[980px]:flex-row min-[980px]:items-center relative z-10">
        <div className="size-12 rounded-full overflow-hidden bg-white shrink-0">
          <img src={testimonial.photo} alt={testimonial.name} className="size-full object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-serif text-[18px] text-[#242424] leading-[1.4] tracking-[-0.54px]">
            {testimonial.name}
          </span>
          <span className="font-mono text-[12px] text-[#525252] uppercase tracking-[0.6px]">
            {testimonial.role}
          </span>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="font-serif text-[18px] min-[980px]:text-[32px] text-[#242424] leading-[1.4] min-[980px]:leading-[1.3] tracking-[-0.54px] min-[980px]:tracking-[-0.96px] relative z-10">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f0eee6] px-[10px] min-[980px]:px-16 shrink-0">
      <div className="border-t border-l border-r border-[rgba(36,36,36,0.1)] px-4 min-[980px]:px-8 py-[42px] min-[980px]:py-[58px] flex flex-col gap-8 min-[980px]:gap-10 items-center">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center">
          <h2 className="font-serif text-[36px] min-[980px]:text-[48px] text-[#242424] text-center leading-[1.2] tracking-[-1.08px] min-[980px]:tracking-[-1.44px]">
            The work, in their words.
          </h2>
          <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5] text-center max-w-[546px]">
            Mercator Partners has been running on WithAI since day one. Their CIO and Head of
            Primary Research on what changed.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col min-[980px]:flex-row items-stretch w-full">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
