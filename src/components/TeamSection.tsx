import Image from "next/image";

const IAN_PHOTO = "/ian.png";
const BEN_PHOTO = "/ben.png";
const LINKEDIN_ICON = "/icons/icon-linkedin-founders.svg";

const founders = [
  {
    name: "Ian",
    role: "Co-founder & CEO",
    bio: "Built and invested with LLM-driven investment systems at Bridgewater Associates. Princeton Mathematics.",
    photo: IAN_PHOTO,
    linkedin: "https://www.linkedin.com/in/imj-mcinnis/",
    borderClass: "border-t border-l border-b border-dashed border-border",
  },
  {
    name: "Ben",
    role: "Co-founder & CTO",
    bio: "Founding researcher and Chief of Staff at Sentient Labs. Princeton Electrical & Computer Engineering.",
    photo: BEN_PHOTO,
    linkedin: "https://www.linkedin.com/in/ben-finch-3a82471b5/",
    borderClass: "border border-dashed border-border",
  },
];

export default function TeamSection() {
  return (
    <section className="shrink-0 bg-background px-[10px] min-[980px]:px-16">
      <div className="flex flex-col gap-10 border-t border-r border-l border-border px-4 py-[42px] min-[980px]:px-8 min-[980px]:py-[58px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center min-[980px]:flex-row min-[980px]:items-end min-[980px]:justify-between min-[980px]:text-left">
          <h2 className="font-serif text-[36px] leading-[1.2] tracking-[-1.08px] text-ink min-[980px]:text-[48px] min-[980px]:tracking-[-1.44px]">
            Two founders. Both close to the work.
          </h2>
          <p className="font-sans text-[16px] leading-[1.5] font-normal text-grey min-[980px]:w-[352px] min-[980px]:shrink-0">
            Multiplier is built by the people who&apos;ll sit across the table from you.
          </p>
        </div>

        {/* Founder cards */}
        <div className="flex flex-col min-[572px]:flex-row min-[572px]:items-stretch">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className={`flex flex-1 flex-col gap-4 px-4 py-5 min-[901px]:p-8 ${founder.borderClass}`}
            >
              {/* Photo */}
              <div className="relative h-[231px] shrink-0 overflow-hidden rounded-[5px] min-[572px]:h-[476px]">
                <Image src={founder.photo} alt={founder.name} fill className="object-cover" />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[12px] tracking-[0.6px] text-grey uppercase">
                    {founder.role}
                  </span>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-serif text-[20px] leading-[1.4] tracking-[-0.6px] text-ink min-[572px]:text-[48px] min-[572px]:leading-[1.2] min-[572px]:tracking-[-1.44px]">
                      {founder.name}
                    </h3>
                    <p className="font-sans text-[16px] leading-[1.5] font-normal text-grey">
                      {founder.bio}
                    </p>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 self-start"
                >
                  <span className="font-sans text-[16px] font-medium text-ink group-hover:underline">
                    Linkedin
                  </span>
                  <div className="relative size-6 shrink-0 overflow-hidden">
                    <Image
                      src={LINKEDIN_ICON}
                      alt=""
                      width={24}
                      height={24}
                      className="object-contain"
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
