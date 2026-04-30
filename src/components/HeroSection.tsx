import DotGrid from "@/components/DotGrid";

export default function HeroSection() {
  return (
    <section className="bg-[#f0eee6] px-16 shrink-0">
      <div className="border-l border-r border-[rgba(36,36,36,0.1)] px-8 py-[102px] flex flex-col items-center justify-center gap-8 relative overflow-hidden">
        <DotGrid variant="light" />

        {/* Amber radial glow — punches through dots in the center */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(252,179,68,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="flex flex-col items-center gap-4 relative z-10">
          <div className="bg-white border border-[rgba(36,36,36,0.1)] rounded-[24px] flex items-center gap-2.5 px-[15px] py-[10px] shrink-0">
            <span className="relative flex size-[10px] shrink-0">
              <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex size-[10px] rounded-full bg-green-500" />
            </span>
            <span className="font-mono text-[12px] text-[rgba(26,26,24,0.77)] uppercase tracking-[0.6px]">
              AI infrastructure for independent funds
            </span>
          </div>

          <h1 className="font-serif text-[56px] text-[#242424] text-center tracking-[-1.68px] leading-[1.2] max-w-[811px]">
            AI for asset managers, built with you
          </h1>
        </div>

        <p className="font-sans font-normal text-[18px] text-[#525252] text-center leading-[1.5] relative z-10">
          Security, infrastructure, and white-glove service for harnessing agents
        </p>

        <div className="flex items-center gap-4 relative z-10">
          <a
            href="#"
            className="bg-[#fcb344] border border-[#fcb344] text-[#242424] px-6 py-3 rounded-[10px] font-sans font-medium text-[16px] shadow-[0px_3px_6.25px_rgba(0,0,0,0.11)] hover:brightness-105 transition-all duration-150"
          >
            Book a consultation
          </a>
          <a
            href="#"
            className="bg-[#f5f4ee] border border-[#242424] text-[#242424] px-6 py-3 rounded-[10px] font-sans font-medium text-[16px] hover:bg-white transition-colors duration-150"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
