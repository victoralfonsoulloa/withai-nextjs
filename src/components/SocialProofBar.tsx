import Image from "next/image";

const YC_LOGO = "/logos/yc-logo.svg";

const backers = [
  { photo: YC_LOGO, name: "Y Combinator", role: "Batch F26", isExternal: true },
  {
    photo: "/avatars/greg-jensen.png",
    name: "Greg Jensen",
    role: "Co-CIO, Bridgewater",
    isExternal: false,
  },
  {
    photo: "/avatars/karen-karniol.png",
    name: "Karen Karniol-Tambour",
    role: "Co-CIO, Bridgewater",
    isExternal: false,
  },
];

function QuoteIcon() {
  return (
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 15V9.375C0 6.875 0.604167 4.76042 1.8125 3.03125C3.02083 1.26042 4.71875 0.0416667 6.90625 0L7.5 1.25C6.35417 1.54167 5.42708 2.17708 4.71875 3.15625C4.04167 4.09375 3.67708 5.15625 3.625 6.34375H6.25V15H0ZM10.625 15V9.375C10.625 6.875 11.2292 4.76042 12.4375 3.03125C13.6458 1.26042 15.3438 0.0416667 17.5312 0L18.125 1.25C16.9792 1.54167 16.0521 2.17708 15.3438 3.15625C14.6667 4.09375 14.3021 5.15625 14.25 6.34375H16.875V15H10.625Z"
        fill="#FCB344"
      />
    </svg>
  );
}

export default function SocialProofBar() {
  return (
    <section className="shrink-0 bg-background px-[10px] min-[980px]:px-16">
      <div className="flex flex-col border border-border bg-background-2 py-5 min-[1442px]:flex-row min-[1442px]:items-center md:px-8 md:py-6">
        {/* Testimonial — always on top */}
        <div className="flex items-start gap-2.5 px-6 min-[1442px]:max-w-[440px] min-[1442px]:shrink-0 md:px-0">
          <div className="flex flex-col items-start gap-2">
            <QuoteIcon />
            <p className="font-sans text-[14px] leading-[1.5] font-normal text-ink">
              We used to spend 80% of our time gathering information and 20% acting on it. WithAI
              has flipped those percentages.
            </p>
            <div className="flex items-center gap-1">
              <span className="font-sans text-[14px] leading-[1.5] font-normal text-[#1a1a18]">
                Scott Hobart
              </span>
              <span className="font-sans text-[12px] leading-[1.1] font-medium text-grey-muted">
                ·
              </span>
              <span className="font-sans text-[12px] leading-[1.1] font-medium text-grey-muted">
                CIO, Mercator Partners
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal divider (mobile + tablet) */}
        <div className="my-5 h-px w-full bg-border min-[1442px]:hidden" />

        {/* Vertical divider (desktop only) */}
        <div className="mx-8 hidden h-[34px] w-px shrink-0 bg-border min-[1442px]:block" />

        {/* Backed by — always below quote */}
        <div className="flex flex-col px-6 min-[920px]:flex-row min-[920px]:items-center min-[920px]:gap-6 min-[1442px]:flex-1 md:px-0">
          <span className="mb-3 shrink-0 text-center font-mono text-[12px] tracking-[0.6px] whitespace-nowrap text-grey-muted uppercase min-[920px]:mb-0 min-[920px]:text-left">
            Backed by
          </span>

          {/* Backers list */}
          <div className="flex flex-col min-[920px]:flex-1 min-[920px]:flex-row min-[920px]:items-center min-[920px]:gap-6">
            {backers.map((backer, i) => (
              <div
                key={backer.name}
                className={`min-[920px]:flex-1 ${i < backers.length - 1 ? "min-[920px]:border-r min-[920px]:border-border" : ""}`}
              >
                {i > 0 && <div className="my-3 h-px w-full bg-border min-[920px]:hidden" />}
                <div className="flex flex-col items-center gap-1 min-[920px]:flex-row min-[920px]:gap-3">
                  <div className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-white">
                    <Image src={backer.photo} alt={backer.name} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col items-center text-center min-[920px]:items-start min-[920px]:text-left">
                    <span className="font-sans text-[14px] leading-[1.5] font-normal text-[#1a1a18]">
                      {backer.name}
                    </span>
                    <span className="font-sans text-[12px] leading-[1.1] font-medium text-grey-muted">
                      {backer.role}
                    </span>
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
