const YC_LOGO =
  "https://www.figma.com/api/mcp/asset/8b3c6a98-118e-46d4-bcfd-7ecb66bf2544";
const GREG_PHOTO =
  "https://www.figma.com/api/mcp/asset/dd7a0f06-0683-46cc-96ff-b1f42101017c";
const KAREN_PHOTO =
  "https://www.figma.com/api/mcp/asset/1fa6cf46-d90e-440a-8880-b43a5ec31b01";

const backers = [
  { photo: YC_LOGO, name: "Y Combinator", role: "Batch F26", border: true },
  { photo: GREG_PHOTO, name: "Greg Jensen", role: "Co-CIO, Bridgewater", border: true },
  { photo: KAREN_PHOTO, name: "Karen Karniol-Tambour", role: "Co-CIO, Bridgewater", border: false },
];

export default function SocialProofBar() {
  return (
    <section className="bg-[#f0eee6] px-16 shrink-0">
      <div className="bg-[#f5f4ee] border border-[rgba(36,36,36,0.1)] px-8 py-6 flex items-center">
        <div className="flex items-center justify-between w-full gap-8">
          {/* Testimonial */}
          <div className="flex gap-2.5 items-start max-w-[440px] shrink-0">
            <div className="flex flex-col gap-2 items-start">
              <p className="font-sans font-normal text-[14px] text-[#242424] leading-[1.5]">
                We used to spend 80% of our time gathering information and 20%
                acting on it. WithAI has flipped those percentages.
              </p>
              <div className="flex gap-1 items-center">
                <span className="font-sans font-normal text-[14px] text-[#1a1a18] leading-[1.5]">
                  Scott Hobart
                </span>
                <span className="font-sans font-medium text-[12px] text-[#7a7870] leading-[1.1]">
                  ·
                </span>
                <span className="font-sans font-medium text-[12px] text-[#7a7870] leading-[1.1]">
                  CIO, Mercator Partners
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-[34px] bg-[rgba(36,36,36,0.1)] shrink-0" />

          {/* Backed by */}
          <div className="flex items-center gap-6 flex-1">
            <span className="font-mono text-[12px] text-[#7a7870] uppercase tracking-[0.6px] whitespace-nowrap shrink-0">
              Backed by
            </span>
            <div className="flex items-center flex-1 gap-0">
              {backers.map((backer) => (
                <div
                  key={backer.name}
                  className={`flex items-center gap-3 flex-1 ${backer.border ? "border-r border-[rgba(36,36,36,0.1)]" : ""} pr-6`}
                >
                  <div className="bg-white rounded-[3px] size-8 overflow-hidden shrink-0 flex items-center justify-center">
                    <img
                      src={backer.photo}
                      alt={backer.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-normal text-[14px] text-[#1a1a18] leading-[1.5]">
                      {backer.name}
                    </span>
                    <span className="font-sans font-medium text-[12px] text-[#7a7870] leading-[1.1]">
                      {backer.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
