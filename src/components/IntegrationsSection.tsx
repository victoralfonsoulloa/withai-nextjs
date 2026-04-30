"use client";

import { useEffect, useRef, useState } from "react";

const LOGOS = {
  daloopa: "https://www.figma.com/api/mcp/asset/88427707-83e5-41f4-bfdd-fc5108f5dfc2",
  spGlobal: "https://www.figma.com/api/mcp/asset/6ee1031c-8c51-424a-9f15-f93b1960276f",
  factset: "https://www.figma.com/api/mcp/asset/f3423161-df45-4012-b43f-ff3e3732d57b",
  bloomberg: "https://www.figma.com/api/mcp/asset/4941e5c9-e0d8-45d7-9cf7-b1b9ed081bbe",
  pitchbook: "https://www.figma.com/api/mcp/asset/182d86b0-3441-41df-a756-0a7c3cedb666",
  enfusion: "https://www.figma.com/api/mcp/asset/a3117ac8-caad-4450-a6e4-5165463a739f",
  flextrade: "https://www.figma.com/api/mcp/asset/2db5b6e5-e57b-4668-8ca4-7991cd3b001e",
  hedgeserv: "https://www.figma.com/api/mcp/asset/6ed02320-1dc5-412a-a190-3b526449c6d2",
  msfs: "https://www.figma.com/api/mcp/asset/ea8f1bb7-a988-4669-9604-ff0f9c0e9c58",
  openbb: "https://www.figma.com/api/mcp/asset/e56f0bfc-0ba1-4bf5-95e1-745bf331ba80",
  axioma: "https://www.figma.com/api/mcp/asset/071f5139-330e-409b-b94c-8e29214fda02",
  barra: "https://www.figma.com/api/mcp/asset/db47dd93-df69-4880-9381-d775a3696768",
  aws: "https://www.figma.com/api/mcp/asset/641370e1-f454-423d-8aad-71dbd7f0df17",
  azure: "https://www.figma.com/api/mcp/asset/b80b4412-cccf-4293-bd8d-16a1f1d27fbe",
  gcp: "https://www.figma.com/api/mcp/asset/156598ba-c551-4e47-947e-f461bf01b7e0",
  snowflake: "https://www.figma.com/api/mcp/asset/904f67ee-6c98-4a37-8ba5-99f0b23d5814",
  databricks: "https://www.figma.com/api/mcp/asset/cd86b42e-cabf-4fc2-a247-14155c10396e",
  powerbi: "https://www.figma.com/api/mcp/asset/d70a991b-1450-4dc3-b5dd-d83e1be8b64c",
  tableau: "https://www.figma.com/api/mcp/asset/47307deb-7577-45b9-82e5-084e6602ef2a",
  microsoft365: "https://www.figma.com/api/mcp/asset/f6754276-9375-44fc-826f-4a9a29d557fd",
  slack: "https://www.figma.com/api/mcp/asset/8fa215b6-8053-4260-9217-beff62c56627",
  linear: "https://www.figma.com/api/mcp/asset/efce336d-aca8-478d-b5c2-e69ad758b960",
  anthropic: "https://www.figma.com/api/mcp/asset/289da90d-0494-4765-8799-4a7147ad9966",
};

const rows = [
  {
    category: "I — Research & Market Data",
    title: "The reading list.",
    description: "Terminals, fundamentals, and the deep research stack.",
    logos: [
      { name: "Daloopa", src: LOGOS.daloopa },
      { name: "S&P Global", src: LOGOS.spGlobal },
      { name: "Factset", src: LOGOS.factset },
      { name: "Bloomberg", src: LOGOS.bloomberg },
      { name: "PitchBook", src: LOGOS.pitchbook },
    ],
  },
  {
    category: "II — Portfolio Analytics & Operations",
    title: "The book.",
    description: "Positions, P&L, execution, and middle-office.",
    logos: [
      { name: "Enfusion", src: LOGOS.enfusion },
      { name: "FlexTrade", src: LOGOS.flextrade },
      { name: "Hedgeserv", src: LOGOS.hedgeserv },
      { name: "MSFS", src: LOGOS.msfs },
      { name: "OpenBB", src: LOGOS.openbb },
    ],
  },
  {
    category: "III — Risk Analytics",
    title: "The exposure.",
    description: "Factor risk, scenario analysis, attribution.",
    logos: [
      { name: "Axioma by SimCorp", src: LOGOS.axioma },
      { name: "Barra by MSCI", src: LOGOS.barra },
    ],
  },
  {
    category: "IV — Cloud Platforms",
    title: "The infrastructure.",
    description: "Where compute and storage actually live.",
    logos: [
      { name: "Amazon Web Services", src: LOGOS.aws },
      { name: "Microsoft Azure", src: LOGOS.azure },
      { name: "Google Cloud Platform", src: LOGOS.gcp },
    ],
  },
  {
    category: "V — Data & Business Intelligence",
    title: "The numbers.",
    description: "Warehouses, lakehouses, and what you build on top.",
    logos: [
      { name: "Snowflake", src: LOGOS.snowflake },
      { name: "Databricks", src: LOGOS.databricks },
      { name: "Power BI", src: LOGOS.powerbi },
      { name: "Tableau", src: LOGOS.tableau },
    ],
  },
  {
    category: "VI — Workflow & Intelligence",
    title: "The work itself.",
    description: "Where models, memos, decks, and conversations happen.",
    logos: [
      { name: "Microsoft 365", src: LOGOS.microsoft365 },
      { name: "Slack", src: LOGOS.slack },
      { name: "Linear", src: LOGOS.linear },
      { name: "Anthropic", src: LOGOS.anthropic },
    ],
  },
];

function IntegrationRow({
  row,
  borderClass,
  isScrollActive,
  rowRef,
}: {
  row: (typeof rows)[number];
  borderClass: string;
  isScrollActive: boolean;
  rowRef: (el: HTMLDivElement | null) => void;
}) {
  const mouseRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = mouseRef.current!.getBoundingClientRect();
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isHighlighted = isScrollActive || !!spotlight;

  return (
    <div
      ref={(el) => { mouseRef.current = el; rowRef(el); }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight(null)}
      className={`relative flex items-center justify-between px-8 py-6 ${borderClass}`}
      style={{
        backgroundColor: isHighlighted ? "#f5f4ee" : "#f0eee6",
        outline: "1px dashed",
        outlineOffset: "-1px",
        outlineColor: isHighlighted ? "rgba(36,36,36,0.3)" : "transparent",
        transition: "background-color 500ms, outline-color 500ms",
      }}
    >
      {/* Hover spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: spotlight ? 1 : 0,
          background: spotlight
            ? `radial-gradient(circle 300px at ${spotlight.x}px ${spotlight.y}px, rgba(252,179,68,0.1) 0%, transparent 70%)`
            : undefined,
        }}
      />

      {/* Left: text */}
      <div className="flex flex-col gap-4 relative z-10">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[12px] text-[#525252] uppercase tracking-[0.6px]">
            {row.category}
          </span>
          <h3 className="font-serif text-[24px] text-[#242424] leading-[1.4] tracking-[-0.72px]">
            {row.title}
          </h3>
        </div>
        <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5]">
          {row.description}
        </p>
      </div>

      {/* Right: logos */}
      <div className="flex items-center gap-4 relative z-10 shrink-0">
        {row.logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            title={logo.name}
            className="size-12 object-contain shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default function IntegrationsSection() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeRows, setActiveRows] = useState<Set<number>>(new Set());

  // highlight each row as it scrolls into view, progressively
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-row-index"));
          if (entry.isIntersecting) {
            setActiveRows((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px -80px 0px" }
    );

    rowRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.setAttribute("data-row-index", String(i));
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f0eee6] px-16 shrink-0">
      <div className="border-t border-l border-r border-[rgba(36,36,36,0.1)] px-8 py-[52px] flex flex-col gap-10">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-3">
            <div className="border border-[rgba(36,36,36,0.1)] rounded-[24px] flex items-center gap-2.5 px-[15px] py-[10px] self-start">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
              </span>
              <span className="font-mono text-[12px] text-[rgba(26,26,24,0.77)] uppercase tracking-[0.6px]">
                Integrations
              </span>
            </div>
            <h2 className="font-serif text-[48px] text-[#242424] leading-[1.2] tracking-[-1.44px]">
              Twenty-three tools.
              <br />
              One workflow.
            </h2>
          </div>
          <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5] w-[374px]">
            Connected once, governed properly, kept in sync — so the system
            thinks across your stack the way your team already does.
          </p>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          {rows.map((row, i) => (
            <IntegrationRow
              key={row.category}
              row={row}
              isScrollActive={activeRows.has(i)}
              rowRef={(el) => { rowRefs.current[i] = el; }}
              borderClass={[
                "border-dashed border-[rgba(36,36,36,0.1)]",
                "border-t border-l",
                i === rows.length - 1 ? "border-b border-r" : "border-r",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
