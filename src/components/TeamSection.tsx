const IAN_PHOTO = "/ian.png";
const BEN_PHOTO = "/ben.png";
const LINKEDIN_ICON = "https://www.figma.com/api/mcp/asset/bba17db2-fbc5-42ad-a0fb-50192770ad2a";

const founders = [
  {
    name: "Ian",
    role: "Co-founder & CEO",
    bio: "Built and invested with LLM-driven investment systems at Bridgewater Associates. Princeton Mathematics.",
    photo: IAN_PHOTO,
    linkedin: "#",
    borderClass: "border-t border-l border-b border-dashed border-[rgba(36,36,36,0.1)]",
  },
  {
    name: "Ben",
    role: "Co-founder & CTO",
    bio: "Founding researcher and Chief of Staff at Sentient Labs. Princeton Electrical & Computer Engineering.",
    photo: BEN_PHOTO,
    linkedin: "#",
    borderClass: "border border-dashed border-[rgba(36,36,36,0.1)]",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f0eee6] px-16 shrink-0">
      <div className="border-t border-l border-r border-[rgba(36,36,36,0.1)] px-8 py-[58px] flex flex-col gap-10">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-3">
            <div className="border border-[rgba(36,36,36,0.1)] rounded-[24px] flex items-center gap-2.5 px-[15px] py-[10px] self-start">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
              </span>
              <span className="font-mono text-[12px] text-[rgba(26,26,24,0.77)] uppercase tracking-[0.6px]">
                the team
              </span>
            </div>
            <h2 className="font-serif text-[48px] text-[#242424] leading-[1.2] tracking-[-1.44px]">
              Two founders. Both close to the work.
            </h2>
          </div>
          <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5] w-[352px]">
            Multiplier is built by the people who&apos;ll sit across the table
            from you.
          </p>
        </div>

        {/* Founder cards */}
        <div className="flex items-stretch">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className={`flex-1 flex flex-col gap-4 p-8 ${founder.borderClass}`}
            >
              {/* Photo */}
              <div className="relative h-[476px] rounded-[5px] overflow-hidden shrink-0">
                <img
                  src={founder.photo}
                  alt={founder.name}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[12px] text-[#525252] uppercase tracking-[0.6px]">
                    {founder.role}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-[48px] text-[#242424] leading-[1.2] tracking-[-1.44px]">
                      {founder.name}
                    </h3>
                    <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5]">
                      {founder.bio}
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={founder.linkedin}
                  className="flex items-center gap-2 group self-start"
                >
                  <span className="font-sans font-medium text-[16px] text-[#242424] group-hover:underline">
                    LinkedIn
                  </span>
                  <div className="size-6 overflow-hidden shrink-0 relative">
                    <img
                      src={LINKEDIN_ICON}
                      alt=""
                      className="absolute inset-0 size-full object-contain"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
