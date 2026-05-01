const IAN_PHOTO = "/ian.png";
const BEN_PHOTO = "/ben.png";
const LINKEDIN_ICON = "https://www.figma.com/api/mcp/asset/e6ec36af-f3b0-4e1c-832b-b744377138ae";

const founders = [
  {
    name: "Ian",
    role: "Co-founder & CEO",
    bio: "Built and invested with LLM-driven investment systems at Bridgewater Associates. Princeton Mathematics.",
    photo: IAN_PHOTO,
    linkedin: "https://www.linkedin.com/in/imj-mcinnis/",
    borderClass: "border-t border-l border-b border-dashed border-[rgba(36,36,36,0.1)]",
  },
  {
    name: "Ben",
    role: "Co-founder & CTO",
    bio: "Founding researcher and Chief of Staff at Sentient Labs. Princeton Electrical & Computer Engineering.",
    photo: BEN_PHOTO,
    linkedin: "https://www.linkedin.com/in/ben-finch-3a82471b5/",
    borderClass: "border border-dashed border-[rgba(36,36,36,0.1)]",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f0eee6] px-[10px] min-[980px]:px-16 shrink-0">
      <div className="border-t border-l border-r border-[rgba(36,36,36,0.1)] px-8 py-[42px] min-[980px]:py-[58px] flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center min-[980px]:flex-row min-[980px]:items-end min-[980px]:justify-between min-[980px]:text-left">
          <h2 className="font-serif text-[36px] min-[980px]:text-[48px] text-[#242424] leading-[1.2] tracking-[-1.08px] min-[980px]:tracking-[-1.44px]">
            Two founders. Both close to the work.
          </h2>
          <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5] min-[980px]:w-[352px] min-[980px]:shrink-0">
            Multiplier is built by the people who&apos;ll sit across the table
            from you.
          </p>
        </div>

        {/* Founder cards */}
        <div className="flex flex-col min-[572px]:flex-row min-[572px]:items-stretch">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className={`flex-1 flex flex-col gap-4 py-5 px-4 min-[901px]:p-8 ${founder.borderClass}`}
            >
              {/* Photo */}
              <div className="relative h-[231px] min-[572px]:h-[476px] rounded-[5px] overflow-hidden shrink-0">
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
                    <h3 className="font-serif text-[20px] min-[572px]:text-[48px] text-[#242424] leading-[1.4] min-[572px]:leading-[1.2] tracking-[-0.6px] min-[572px]:tracking-[-1.44px]">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group self-start"
                >
                  <span className="font-sans font-medium text-[16px] text-[#242424] group-hover:underline">
                    Linkedin
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
