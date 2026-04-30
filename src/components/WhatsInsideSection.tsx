"use client";

import { useEffect, useRef, useState } from "react";

const STICKY_TOP = 80; // px from viewport top where first card sticks
const STACK_GAP = 12;  // px of previous card that peeks below the next

const pillars = [
  {
    index: "I",
    title: "The product",
    body: "An automated research and position-monitoring platform that watches your book, surfaces what changed, and encodes the workflows your team already runs.",
  },
  {
    index: "II",
    title: "The infrastructure",
    body: "Hedge-fund-grade security, native integrations across your stack, and the latest coding agents — Claude Code among them — operating where your data already lives.",
  },
  {
    index: "III",
    title: "The partnership",
    body: "Training, governance, and a team that stays close to the work — keeping your firm at the cutting edge of what's available to asset managers, quarter after quarter.",
  },
];

const capabilities = [
  {
    label: "Research",
    title: "Automated research & position monitoring",
    body: "Daily coverage of every name on your watchlist. Models update with prints, guidance, and filings the moment they cross.",
  },
  {
    label: "Workflows",
    title: "Encode your firm's processes",
    body: "The way your team builds a thesis, runs a screen, prepares for earnings — turned into automations that execute on demand.",
  },
  {
    label: "Data",
    title: "Automated data organization",
    body: "Agents that maintain your file structure, enforce your ontology, and keep the archive queryable — without anyone playing librarian.",
  },
  {
    label: "Integrations",
    title: "Native, end-to-end",
    body: "Bloomberg, Excel, Outlook, your dealer portals, your archive — connected once, governed properly, kept in sync.",
  },
  {
    label: "Engineering",
    title: "Latest coding agents, harnessed",
    body: "Claude Code and the frontier engineering models, used the way our engineers use them — building what your firm needs, fast.",
  },
  {
    label: "Security",
    title: "Hedge-fund-grade infrastructure",
    body: "Tenant isolation. No training on your data. Controls treated as a design constraint from day one — not a compliance afterthought.",
  },
  {
    label: "Enablement",
    title: "Training & governance",
    body: "Seminars, playbooks, and direct support — so AI gets used well across the firm, not just by the people who already love it.",
  },
  {
    label: "Partnership",
    title: "Continuous, not project-based",
    body: "The frontier moves every quarter. We move with it — and bring you forward, so the system you have a year from now is better than the one you start with.",
  },
];

function Badge({ label, className = "self-start" }: { label: string; className?: string }) {
  return (
    <div className={`border border-[rgba(36,36,36,0.1)] rounded-[24px] flex items-center gap-2.5 px-[15px] py-[10px] shrink-0 ${className}`}>
      <span className="relative flex size-2.5 shrink-0">
        <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 animate-ping" />
        <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
      </span>
      <span className="font-mono text-[12px] text-[rgba(26,26,24,0.77)] uppercase tracking-[0.6px]">
        {label}
      </span>
    </div>
  );
}

function SpotlightCell({ children, className }: { children: React.ReactNode; className: string }) {
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
      className={`relative overflow-hidden ${className}`}
      style={{
        outline: "1px dashed",
        outlineOffset: "-1px",
        outlineColor: spotlight ? "rgba(36,36,36,0.4)" : "transparent",
        transition: "outline-color 300ms",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: spotlight ? 1 : 0,
          background: spotlight
            ? `radial-gradient(circle 220px at ${spotlight.x}px ${spotlight.y}px, rgba(252,179,68,0.18) 0%, rgba(252,179,68,0.04) 50%, transparent 70%)`
            : undefined,
        }}
      />
      {children}
    </div>
  );
}

function CapabilityCell({ cap, borders, halfWidth }: {
  cap: (typeof capabilities)[number];
  borders: string;
  halfWidth?: boolean;
}) {
  return (
    <SpotlightCell className={["bg-[#f5f4ee] px-8 py-6 flex flex-col gap-4", halfWidth ? "w-1/2" : "flex-1", borders].join(" ")}>
      <div className="flex flex-col gap-3 relative z-10">
        <span className="font-mono text-[12px] text-[#525252] uppercase tracking-[0.6px]">{cap.label}</span>
        <h3 className="font-serif text-[24px] text-[#242424] leading-[1.4] tracking-[-0.72px]">{cap.title}</h3>
      </div>
      <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5] relative z-10">{cap.body}</p>
    </SpotlightCell>
  );
}

export default function WhatsInsideSection() {
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const update = () => {
      for (let i = 0; i < pillars.length - 1; i++) {
        const inner = innerRefs.current[i];
        const nextWrapper = wrapperRefs.current[i + 1];
        if (!inner || !nextWrapper) continue;

        const nextStickyTop = STICKY_TOP + STACK_GAP * (i + 1);
        const nextCurrentTop = nextWrapper.getBoundingClientRect().top;
        const dist = nextCurrentTop - nextStickyTop;
        const progress = Math.max(0, Math.min(1, 1 - dist / 140));

        inner.style.transform = `scale(${(1 - progress * 0.05).toFixed(4)})`;
        inner.style.filter = `brightness(${(1 - progress * 0.1).toFixed(4)})`;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* — Pillars — */}
      <section className="bg-[#f0eee6] px-16 shrink-0">
        <div className="border-t border-l border-r border-[rgba(36,36,36,0.1)] px-8 py-[52px] flex gap-10">

          {/* Left: heading — self-start so sticky works; stays visible during card stacking */}
          <div className="flex-1 flex flex-col gap-2.5 justify-center sticky top-[80px] self-start">
            <Badge label="what's inside" />
            <h2 className="font-serif text-[48px] text-[#242424] leading-[1.2] tracking-[-1.44px] w-[616px] mt-1">
              Everything an asset manager actually needs from AI
            </h2>
            <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5] mt-1">
              Not a model. Not a chatbot. A working system — engineered,
              integrated, and supported — that lives inside your firm.
            </p>
          </div>

          {/* Right: sticky stacking cards — no padding, section height drives scroll range */}
          <div className="flex-1 flex flex-col">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.index}
                ref={(el) => { wrapperRefs.current[i] = el; }}
                className="sticky"
                style={{ top: STICKY_TOP + STACK_GAP * i, zIndex: i + 1 }}
              >
                <div
                  ref={(el) => { innerRefs.current[i] = el; }}
                  style={{ transformOrigin: "top center", willChange: "transform, filter" }}
                >
                  <SpotlightCell
                    className={[
                      "bg-[#f5f4ee] px-8 py-6 flex flex-col gap-4",
                      "border-t border-l border-dashed border-[rgba(36,36,36,0.1)]",
                      i === pillars.length - 1 ? "border-b border-r" : "",
                    ].join(" ")}
                  >
                    <div className="flex flex-col gap-3 relative z-10">
                      <span className="font-mono text-[12px] text-[#525252] uppercase tracking-[0.6px]">
                        {pillar.index}
                      </span>
                      <h3 className="font-serif text-[24px] text-[#242424] leading-[1.4] tracking-[-0.72px]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5] relative z-10">
                      {pillar.body}
                    </p>
                  </SpotlightCell>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* — Eight ways — */}
      <section className="bg-[#f0eee6] px-16 shrink-0">
        <div className="border-t border-l border-r border-[rgba(36,36,36,0.1)] px-8 py-[52px] flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-2.5 items-center">
            <Badge label="what's inside" className="self-center" />
            <h2 className="font-serif text-[48px] text-[#242424] text-center leading-[1.2] tracking-[-1.44px] w-[616px] mt-1">
              Eight ways it shows up in the work.
            </h2>
          </div>

          <div className="w-full flex flex-col">
            <div className="flex">
              {capabilities.slice(0, 3).map((cap, i) => (
                <CapabilityCell key={cap.label} cap={cap}
                  borders={`border-t border-l border-dashed border-[rgba(36,36,36,0.1)] ${i === 2 ? "border-r" : ""}`}
                />
              ))}
            </div>
            <div className="flex">
              {capabilities.slice(3, 6).map((cap, i) => (
                <CapabilityCell key={cap.label} cap={cap}
                  borders={`border-t border-l border-dashed border-[rgba(36,36,36,0.1)] ${i === 2 ? "border-r" : ""}`}
                />
              ))}
            </div>
            <div className="flex">
              {capabilities.slice(6, 8).map((cap, i) => (
                <CapabilityCell key={cap.label} cap={cap}
                  borders={`border-t border-b border-l border-dashed border-[rgba(36,36,36,0.1)] ${i === 1 ? "border-r" : ""}`}
                  halfWidth
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
