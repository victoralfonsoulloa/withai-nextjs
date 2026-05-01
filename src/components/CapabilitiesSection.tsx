const cards = [
  {
    label: "Engineering",
    title: "Harness the latest agents",
    body: "Securely harness Claude Code and other state of the art agents to do work for your firm.",
    illustration: "/illustrations/engineering.svg",
  },
  {
    label: "Workflows",
    title: "Encode your firm's processes",
    body: "The way your team builds a thesis, runs a screen, prepares for earnings – drilled into your AI.",
    illustration: "/illustrations/workflows.svg",
  },
  {
    label: "Research",
    title: "Automated research",
    body: "Daily coverage of every name on your watchlist. Your docs update with prints, guidance and filings the moment they cross.",
    illustration: "/illustrations/research.svg",
  },
  {
    label: "Security",
    title: "Hedge-fund-grade infrastructure",
    body: "Tenant isolation. No training on your data. Controls treated as a design constraint from day one — not a compliance afterthought.",
    illustration: "/illustrations/security.svg",
  },
  {
    label: "Data",
    title: "Organize your data",
    body: "Agents that maintain your file structure, enforce your ontology, and keep the archive queryable — without anyone playing librarian.",
    illustration: "/illustrations/data.svg",
  },
  {
    label: "Enablement",
    title: "Training & governance",
    body: "Seminars, playbooks, and direct support — so AI gets used well across the firm, not just by the people who already love it.",
    illustration: "/illustrations/enablement.svg",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="bg-[#f0eee6] px-[10px] min-[980px]:px-16 shrink-0">
      <div className="border-t border-l border-r border-[rgba(36,36,36,0.1)] px-4 min-[980px]:px-8 py-[52px] flex flex-col gap-10 items-center">

        <h2 className="font-serif text-[36px] md:text-[48px] text-[#242424] text-center leading-[1.2] tracking-[-1.08px] md:tracking-[-1.44px] max-w-[720px]">
          Build a bespoke AI system for your Fund
        </h2>

        <div className="w-full grid grid-cols-1 min-[640px]:grid-cols-2 min-[961px]:grid-cols-3 border-t border-l border-dashed border-[rgba(36,36,36,0.1)]">
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-[#f5f4ee] flex flex-col justify-between px-4 lg:px-8 py-6 border-b border-r border-dashed border-[rgba(36,36,36,0.1)]"
            >
              <div className="flex flex-col mb-6">
                <span className="font-mono text-[12px] text-[#525252] uppercase tracking-[0.6px] mb-3">
                  {card.label}
                </span>
                <h3 className="font-serif text-[24px] text-[#242424] leading-[1.4] tracking-[-0.72px] mb-4">
                  {card.title}
                </h3>
                <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5]">
                  {card.body}
                </p>
              </div>
              <img
                src={card.illustration}
                alt={card.label}
                className="w-full h-auto shrink-0"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
