import DotGrid from "@/components/DotGrid";

export default function HeroSection() {
  return (
    <section className="shrink-0 bg-background px-[10px] min-[980px]:px-16">
      <div className="relative flex flex-col items-center justify-center gap-8 overflow-hidden border-r border-l border-border px-4 py-[42px] min-[980px]:px-8 min-[980px]:py-[102px]">
        <DotGrid variant="light" />

        {/* Amber radial glow */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(252,179,68,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex w-full flex-col items-center gap-4">
          <div className="flex items-center gap-2.5 rounded-[24px] border border-border bg-white px-[15px] py-[10px]">
            <span className="relative flex size-[10px] shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-[10px] rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.5px] text-[rgba(26,26,24,0.77)] uppercase md:text-[12px] md:tracking-[0.6px]">
              AI infrastructure for independent funds
            </span>
          </div>

          <h1 className="text-center font-serif text-[40px] leading-[1.2] tracking-[-1.2px] text-ink md:max-w-[811px] md:text-[56px] md:tracking-[-1.68px]">
            AI for asset managers, built with you
          </h1>
        </div>

        <p className="relative z-10 text-center font-sans text-[16px] leading-[1.5] font-normal text-grey md:text-[18px]">
          Security, infrastructure, and white-glove service for harnessing agents
        </p>

        <div className="relative z-10 flex w-full flex-col items-stretch gap-4 md:w-auto md:flex-row md:items-center">
          <a
            href="https://cal.com/imj-mcinnis/video-call?duration=30"
            target="_blank"
            rel="noopener noreferrer"
            className="touch-manipulation rounded-[10px] border border-primary bg-primary px-6 py-3 text-center font-sans text-[16px] font-medium text-ink shadow-[0px_3px_6.25px_rgba(0,0,0,0.11)] transition-all duration-150 hover:brightness-105 active:scale-[0.97] active:brightness-95"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}
