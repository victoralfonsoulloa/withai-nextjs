"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "We used to spend 80% of our time gathering information and 20% acting on it. WithAI has flipped those percentages.",
    name: "Scott Hobart",
    role: "Chief Investment Officer",
    photo: "/avatars/scott-hobart.webp",
  },
  {
    quote:
      "WithAI eliminates the need to search every 'haystack' as the 'needles' are floated to the top and organized by importance, impact, and relevance for the portfolio.",
    name: "Martin Fransson, PhD",
    role: "Head of Primary Research",
    photo: "/avatars/martin-fransson.webp",
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
      className="relative flex flex-1 flex-col gap-6 overflow-hidden border-t border-b border-l border-dashed border-border bg-background-2 p-8"
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
            ? `radial-gradient(circle 260px at ${spotlight.x}px ${spotlight.y}px, rgba(252,179,68,0.15) 0%, transparent 70%)`
            : undefined,
        }}
      />

      {/* Author */}
      <div className="relative z-10 flex flex-col gap-4 min-[980px]:flex-row min-[980px]:items-center">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-white">
          <Image src={testimonial.photo} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-serif text-[18px] leading-[1.4] tracking-[-0.54px] text-ink">
            {testimonial.name}
          </span>
          <span className="font-mono text-[12px] tracking-[0.6px] text-grey uppercase">
            {testimonial.role}
          </span>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="relative z-10 font-serif text-[18px] leading-[1.4] tracking-[-0.54px] text-ink min-[980px]:text-[32px] min-[980px]:leading-[1.3] min-[980px]:tracking-[-0.96px]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="shrink-0 bg-background px-[10px] min-[980px]:px-16">
      <div className="flex flex-col items-center gap-8 border-t border-r border-l border-border px-4 py-[42px] min-[980px]:gap-10 min-[980px]:px-8 min-[980px]:py-[58px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-center font-serif text-[36px] leading-[1.2] tracking-[-1.08px] text-ink min-[980px]:text-[48px] min-[980px]:tracking-[-1.44px]">
            The work, in their words.
          </h2>
          <p className="max-w-[546px] text-center font-sans text-[16px] leading-[1.5] font-normal text-grey">
            Mercator Partners has been running on WithAI since day one. Their CIO and Head of
            Primary Research on what changed.
          </p>
        </div>

        {/* Cards */}
        <div className="flex w-full flex-col items-stretch min-[980px]:flex-row">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
