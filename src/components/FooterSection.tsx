import DotGrid from "@/components/DotGrid";

const LOGO = "https://www.figma.com/api/mcp/asset/faa1b867-fd5f-4efb-a1a2-54776c204868";
const ICON_X = "https://www.figma.com/api/mcp/asset/d895aa94-7c5c-43bb-8fe0-b6d183bab946";
const ICON_LINKEDIN = "https://www.figma.com/api/mcp/asset/f75d2d3a-5762-4857-a822-9918f6bfc4b8";
const ICON_YOUTUBE = "https://www.figma.com/api/mcp/asset/5f3609e5-5989-4634-8989-d97cf4caad3f";

export default function FooterSection() {
  return (
    <section className="bg-[#f0eee6] px-[10px] min-[980px]:px-16 shrink-0">
      <div className="relative bg-[#242424] border-t border-l border-r border-[rgba(36,36,36,0.1)] px-8 pt-[52px] pb-[31px] flex flex-col gap-10 overflow-hidden">
        <DotGrid variant="dark" />

        {/* CTA row */}
        <div className="flex items-end justify-between relative z-10">
          {/* Left: badge + headline */}
          <div className="flex flex-col gap-3 max-w-[706px]">
            <div className="bg-white border border-[rgba(36,36,36,0.1)] rounded-[24px] flex items-center gap-2.5 px-[15px] py-[10px] self-start">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
              </span>
              <span className="font-mono text-[12px] text-[rgba(26,26,24,0.77)] uppercase tracking-[0.6px] whitespace-nowrap">
                AI infrastructure for independent funds
              </span>
            </div>
            <h2 className="font-serif text-[56px] text-white leading-[1.2] tracking-[-1.68px]">
              If you want to see what your firm looks like one year in the future
            </h2>
          </div>

          {/* Right: CTA button */}
          <div className="flex flex-col gap-4 items-center shrink-0 w-[321px]">
            <a
              href="https://cal.com/imj-mcinnis/video-call?duration=30"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#fcb344] border border-[#fcb344] rounded-[10px] px-6 py-3 font-sans font-medium text-[16px] text-[#242424] leading-[1.5] text-center transition-all duration-100 ease-out
                shadow-[0px_4px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)]
                hover:-translate-y-1 hover:shadow-[0px_6px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)]
                active:translate-y-0.5 active:shadow-[0px_1px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)]"
            >
              Book a consultation
            </a>
            <span className="font-mono text-[12px] text-white uppercase tracking-[0.6px]">
              30 minutes · with Ian
            </span>
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex items-center justify-between">
            <img src={LOGO} alt="WithAI" className="size-[43px] object-contain shrink-0" />
            <div className="flex items-center gap-3">
              <a href="#" className="relative size-6 shrink-0 overflow-hidden block">
                <img src={ICON_X} alt="X (Twitter)" className="absolute inset-0 size-full object-contain" />
              </a>
              <a href="#" className="relative size-6 shrink-0 overflow-hidden block">
                <img src={ICON_LINKEDIN} alt="LinkedIn" className="absolute inset-0 size-full object-contain" />
              </a>
              <a href="#" className="relative size-6 shrink-0 overflow-hidden block">
                <img src={ICON_YOUTUBE} alt="YouTube" className="absolute inset-0 size-full object-contain" />
              </a>
            </div>
          </div>

          <div className="h-px w-full bg-white opacity-20" />

          <div className="flex items-center justify-between">
            <span className="font-sans text-[14px] text-white leading-normal">
              © 2026 WithAI. All rights reserved.
            </span>
            <div className="flex gap-6">
              <a href="#" className="font-sans text-[14px] text-white leading-normal underline">Privacy Policy</a>
              <a href="#" className="font-sans text-[14px] text-white leading-normal underline">Terms of Service</a>
              <a href="#" className="font-sans text-[14px] text-white leading-normal underline">Cookies Settings</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
