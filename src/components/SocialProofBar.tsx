const YC_LOGO =
  "https://www.figma.com/api/mcp/asset/8b3c6a98-118e-46d4-bcfd-7ecb66bf2544";
const GREG_PHOTO =
  "https://www.figma.com/api/mcp/asset/dd7a0f06-0683-46cc-96ff-b1f42101017c";
const KAREN_PHOTO =
  "https://www.figma.com/api/mcp/asset/1fa6cf46-d90e-440a-8880-b43a5ec31b01";

const backers = [
  { photo: YC_LOGO, name: "Y Combinator", role: "Batch F26" },
  { photo: GREG_PHOTO, name: "Greg Jensen", role: "Co-CIO, Bridgewater" },
  { photo: KAREN_PHOTO, name: "Karen Karniol-Tambour", role: "Co-CIO, Bridgewater" },
];

function QuoteIcon() {
  return (
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 15V9.375C0 6.875 0.604167 4.76042 1.8125 3.03125C3.02083 1.26042 4.71875 0.0416667 6.90625 0L7.5 1.25C6.35417 1.54167 5.42708 2.17708 4.71875 3.15625C4.04167 4.09375 3.67708 5.15625 3.625 6.34375H6.25V15H0ZM10.625 15V9.375C10.625 6.875 11.2292 4.76042 12.4375 3.03125C13.6458 1.26042 15.3438 0.0416667 17.5312 0L18.125 1.25C16.9792 1.54167 16.0521 2.17708 15.3438 3.15625C14.6667 4.09375 14.3021 5.15625 14.25 6.34375H16.875V15H10.625Z" fill="#FCB344"/>
    </svg>
  );
}

export default function SocialProofBar() {
  return (
    <section className="bg-[#f0eee6] px-[10px] min-[980px]:px-16 shrink-0">
      <div className="bg-[#f5f4ee] border border-[rgba(36,36,36,0.1)] py-5 md:px-8 md:py-6 flex flex-col min-[1442px]:flex-row min-[1442px]:items-center">

        {/* Testimonial — always on top */}
        <div className="flex gap-2.5 items-start px-6 md:px-0 min-[1442px]:max-w-[440px] min-[1442px]:shrink-0">
          <div className="flex flex-col gap-2 items-start">
            <QuoteIcon />
            <p className="font-sans font-normal text-[14px] text-[#242424] leading-[1.5]">
              We used to spend 80% of our time gathering information and 20%
              acting on it. WithAI has flipped those percentages.
            </p>
            <div className="flex gap-1 items-center">
              <span className="font-sans font-normal text-[14px] text-[#1a1a18] leading-[1.5]">Scott Hobart</span>
              <span className="font-sans font-medium text-[12px] text-[#7a7870] leading-[1.1]">·</span>
              <span className="font-sans font-medium text-[12px] text-[#7a7870] leading-[1.1]">CIO, Mercator Partners</span>
            </div>
          </div>
        </div>

        {/* Horizontal divider (mobile + tablet) */}
        <div className="min-[1442px]:hidden w-full h-px bg-[rgba(36,36,36,0.1)] my-5" />

        {/* Vertical divider (desktop only) */}
        <div className="hidden min-[1442px]:block w-px h-[34px] bg-[rgba(36,36,36,0.1)] shrink-0 mx-8" />

        {/* Backed by — always below quote */}
        <div className="flex flex-col min-[920px]:flex-row min-[920px]:items-center min-[920px]:gap-6 min-[1442px]:flex-1 px-6 md:px-0">
          <span className="font-mono text-[12px] text-[#7a7870] uppercase tracking-[0.6px] whitespace-nowrap shrink-0 text-center min-[920px]:text-left mb-3 min-[920px]:mb-0">
            Backed by
          </span>

          {/* Backers list */}
          <div className="flex flex-col min-[920px]:flex-row min-[920px]:items-center min-[920px]:flex-1 min-[920px]:gap-6">
            {backers.map((backer, i) => (
              <div
                key={backer.name}
                className={`min-[920px]:flex-1 ${i < backers.length - 1 ? "min-[920px]:border-r min-[920px]:border-[rgba(36,36,36,0.1)]" : ""}`}
              >
                {i > 0 && (
                  <div className="min-[920px]:hidden w-full h-px bg-[rgba(36,36,36,0.1)] my-3" />
                )}
                <div className="flex flex-col min-[920px]:flex-row items-center gap-1 min-[920px]:gap-3">
                  <div className="bg-white rounded-[3px] size-8 overflow-hidden shrink-0 flex items-center justify-center">
                    <img src={backer.photo} alt={backer.name} className="size-full object-cover" />
                  </div>
                  <div className="flex flex-col items-center min-[920px]:items-start text-center min-[920px]:text-left">
                    <span className="font-sans font-normal text-[14px] text-[#1a1a18] leading-[1.5]">{backer.name}</span>
                    <span className="font-sans font-medium text-[12px] text-[#7a7870] leading-[1.1]">{backer.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
