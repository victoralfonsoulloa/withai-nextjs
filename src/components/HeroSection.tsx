import DotGrid from "@/components/DotGrid";

export default function HeroSection() {
  return (
    <section className="bg-[#f0eee6] px-[10px] min-[980px]:px-16 shrink-0">
      <div className="border-l border-r border-[rgba(36,36,36,0.1)] px-4 py-[42px] min-[980px]:px-8 min-[980px]:py-[102px] flex flex-col items-center justify-center gap-8 relative overflow-hidden">
        <DotGrid variant="light" />

        {/* Amber radial glow */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(252,179,68,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="flex flex-col items-center gap-4 relative z-10 w-full">
          <div className="bg-white border border-[rgba(36,36,36,0.1)] rounded-[24px] flex items-center gap-2.5 px-[15px] py-[10px]">
            <span className="relative flex size-[10px] shrink-0">
              <span className="absolute inline-flex size-full rounded-full bg-[hsla(36,97%,63%,1)] opacity-75 animate-ping" />
              <span className="relative inline-flex size-[10px] rounded-full bg-[hsla(36,97%,63%,1)]" />
            </span>
            <span className="font-mono text-[10px] md:text-[12px] text-[rgba(26,26,24,0.77)] uppercase tracking-[0.5px] md:tracking-[0.6px]">
              AI infrastructure for independent funds
            </span>
          </div>

          <h1 className="font-serif text-[40px] md:text-[56px] text-[#242424] text-center tracking-[-1.2px] md:tracking-[-1.68px] leading-[1.2] md:max-w-[811px]">
            AI for asset managers, built with you
          </h1>
        </div>

        <p className="font-sans font-normal text-[16px] md:text-[18px] text-[#525252] text-center leading-[1.5] relative z-10">
          Security, infrastructure, and white-glove service for harnessing agents
        </p>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 relative z-10 w-full md:w-auto">
          <a
            href="https://cal.com/imj-mcinnis/video-call?duration=30"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fcb344] border border-[#fcb344] text-[#242424] px-6 py-3 rounded-[10px] font-sans font-medium text-[16px] text-center shadow-[0px_3px_6.25px_rgba(0,0,0,0.11)] hover:brightness-105 active:scale-[0.97] active:brightness-95 touch-manipulation transition-all duration-150"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
