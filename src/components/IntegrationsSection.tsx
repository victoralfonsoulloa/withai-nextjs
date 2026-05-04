"use client";

import { useEffect, useRef, useState } from "react";

const LOGOS = {
  axioma: "/integrations/axioma.svg",
  barra: "/integrations/barra.svg",
  daloopa: "/integrations/daloopa.svg",
  spGlobal: "/integrations/sp-global.svg",
  factset: "/integrations/factset.svg",
  bloomberg: "/integrations/bloomberg.svg",
  pitchbook: "/integrations/pitchbook.svg",
  enfusion: "/integrations/enfusion.svg",
  flextrade: "/integrations/flex-trade.svg",
  openbb: "/integrations/openbb.svg",
  nasdaq: "/integrations/nasdaq.svg",
  datalink: "/integrations/datalink.svg",
  ravenpack: "/integrations/ravenpack.svg",
  arcesium: "/integrations/arcesium.svg",
  alphasense: "/integrations/alphasense.svg",
  omegaPoint: "/integrations/omega-point.svg",
  image106: "/integrations/perplexity.svg",
  aws: "/integrations/aws.svg",
  azure: "/integrations/azure.svg",
  gcp: "/integrations/google-cloud.png",
  snowflake: "/integrations/snowflake.svg",
  databricks: "/integrations/databricks.svg",
  powerbi: "/integrations/power-bi.svg",
  tableau: "/integrations/tableu.svg",
  microsoft365: "/integrations/microsoft.svg",
  slack: "/integrations/slack.svg",
  linear: "/integrations/linear.svg",
  anthropic: "/integrations/anthropic.svg",
};

const rows = [
  {
    category: "I — Risk Analytics",
    title: "The exposure.",
    description: "Factor risk, scenario analysis, attribution.",
    logos: [
      { name: "Axioma by SimCorp", src: LOGOS.axioma },
      { name: "Barra by MSCI", src: LOGOS.barra },
    ],
  },
  {
    category: "II — Research & Market Data",
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
    category: "III — Portfolio Analytics & Operations",
    title: "The book.",
    description: "Positions, P&L, execution, and middle-office.",
    logos: [
      { name: "Enfusion", src: LOGOS.enfusion },
      { name: "FlexTrade", src: LOGOS.flextrade },
      { name: "OpenBB", src: LOGOS.openbb },
      { name: "Nasdaq", src: LOGOS.nasdaq },
      { name: "Datalink", src: LOGOS.datalink },
      { name: "RavenPack", src: LOGOS.ravenpack },
      { name: "Arcesium", src: LOGOS.arcesium },
      { name: "AlphaSense", src: LOGOS.alphasense },
      { name: "Omega Point", src: LOGOS.omegaPoint },
      { name: "image 106", src: LOGOS.image106 },
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
  logosContainerClass = "flex flex-wrap gap-4 relative z-10 min-[980px]:flex-nowrap min-[980px]:shrink-0",
  textMinWidthClass = "",
}: {
  row: (typeof rows)[number];
  borderClass: string;
  isScrollActive: boolean;
  rowRef: (el: HTMLDivElement | null) => void;
  logosContainerClass?: string;
  textMinWidthClass?: string;
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
      className={`relative flex flex-col gap-6 p-5 min-[980px]:flex-row min-[980px]:items-center min-[980px]:justify-between min-[980px]:px-8 min-[980px]:py-6 ${borderClass}`}
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
      <div className={`flex flex-col gap-4 relative z-10 ${textMinWidthClass}`}>
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
      <div className={logosContainerClass}>
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
    <section className="bg-[#f0eee6] px-[10px] min-[980px]:px-16 shrink-0">
      <div className="border-t border-l border-r border-[rgba(36,36,36,0.1)] px-4 min-[980px]:px-8 py-[52px] flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center min-[980px]:flex-row min-[980px]:items-end min-[980px]:justify-between min-[980px]:text-left">
          <h2 className="font-serif text-[36px] min-[980px]:text-[48px] text-[#242424] leading-[1.2] tracking-[-1.08px] min-[980px]:tracking-[-1.44px]">
            Integrate everything
          </h2>
          <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5] min-[980px]:w-[374px] min-[980px]:shrink-0">
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
              logosContainerClass={
                i === 2
                  ? "flex flex-wrap gap-4 relative z-10 max-w-[624px]"
                  : "flex flex-wrap gap-4 relative z-10 min-[980px]:flex-nowrap min-[980px]:shrink-0"
              }
              textMinWidthClass={i === 2 ? "min-w-[330px]" : ""}
            />
          ))}
        </div>

        {/* Footer */}
        <p className="font-sans font-normal text-[14px] min-[980px]:text-[16px] text-[#525252] leading-[1.5] text-center">
          <span className="font-semibold text-[#242424]">Don&apos;t see something?</span>{" "}
          If your firm runs on it, we&apos;ll connect to it. Custom integrations are part of the partnership, not a line item.
        </p>
      </div>
    </section>
  );
}
