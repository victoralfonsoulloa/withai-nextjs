const cards = [
  {
    label: "Engineering",
    title: "Harness the latest agents",
    body: "Securely harness Claude Code and other state of the art agents to do work for your firm.",
    illustration: "/illustrations/engineering.png",
  },
  {
    label: "Workflows",
    title: "Encode your firm's processes",
    body: "The way your team builds a thesis, runs a screen, prepares for earnings – drilled into your AI.",
    illustration: "/illustrations/workflows.png",
  },
  {
    label: "Research",
    title: "Automated research",
    body: "Daily coverage of every name on your watchlist. Your docs update with prints, guidance and filings the moment they cross.",
    illustration: "/illustrations/research.png",
  },
  {
    label: "Security",
    title: "Hedge-fund-grade infrastructure",
    body: "Tenant isolation. No training on your data. Controls treated as a design constraint from day one — not a compliance afterthought.",
    illustration: "/illustrations/security.png",
  },
  {
    label: "Data",
    title: "Organize your data",
    body: "Agents that maintain your file structure, enforce your ontology, and keep the archive queryable — without anyone playing librarian.",
    illustration: "/illustrations/data.png",
  },
  {
    label: "Enablement",
    title: "Training & governance",
    body: "Seminars, playbooks, and direct support — so AI gets used well across the firm, not just by the people who already love it.",
    illustration: "/illustrations/enablement.png",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="shrink-0 bg-[#f0eee6] px-[10px] min-[980px]:px-16">
      <div className="flex flex-col items-center gap-10 border-t border-r border-l border-[rgba(36,36,36,0.1)] px-4 py-[52px] min-[980px]:px-8">
        <h2 className="max-w-[720px] text-center font-serif text-[36px] leading-[1.2] tracking-[-1.08px] text-[#242424] md:text-[48px] md:tracking-[-1.44px]">
          Build a bespoke AI system for your Fund
        </h2>

        <div className="grid w-full grid-cols-1 border-t border-l border-dashed border-[rgba(36,36,36,0.1)] min-[640px]:grid-cols-2 min-[961px]:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col justify-between border-r border-b border-dashed border-[rgba(36,36,36,0.1)] bg-[#f5f4ee] px-4 py-6 lg:px-8"
            >
              <div className="mb-6 flex flex-col">
                <span className="mb-3 font-mono text-[12px] tracking-[0.6px] text-[#525252] uppercase">
                  {card.label}
                </span>
                <h3 className="mb-4 font-serif text-[24px] leading-[1.4] tracking-[-0.72px] text-[#242424]">
                  {card.title}
                </h3>
                <p className="font-sans text-[16px] leading-[1.5] font-normal text-[#525252]">
                  {card.body}
                </p>
              </div>
              <img src={card.illustration} alt={card.label} className="h-auto w-full shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
