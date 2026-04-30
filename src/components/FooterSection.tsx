const LOGO = "https://www.figma.com/api/mcp/asset/04d1c0a5-27e3-4ea2-8ad4-643659cc6ff4";
const ICON_X = "https://www.figma.com/api/mcp/asset/7844d02e-e04a-4432-8f4c-7b6c770a01ee";
const ICON_LINKEDIN = "https://www.figma.com/api/mcp/asset/a5cd7351-7f71-4c60-8617-51801daa0e7a";
const ICON_YOUTUBE = "https://www.figma.com/api/mcp/asset/9b3ef4ea-4e76-4d5b-9a1c-edf4a3f63479";

const BG_LINES_1 = "https://www.figma.com/api/mcp/asset/165f3798-7dd8-474e-8b97-76b6c959f969";
const BG_LINES_2 = "https://www.figma.com/api/mcp/asset/ebcaeb86-60f8-4146-92e7-f59681d5d951";
const BG_LINES_3 = "https://www.figma.com/api/mcp/asset/1b3430ac-df68-4dad-a6c4-36c888cf570b";
const BG_ARCS = "https://www.figma.com/api/mcp/asset/21761d46-8498-4b1a-93e2-c8149b3893ca";

export default function FooterSection() {
  return (
    <section className="bg-[#f0eee6] px-16 shrink-0">
      <div className="relative bg-[#242424] border-t border-l border-r border-[rgba(36,36,36,0.1)] px-8 pt-[52px] pb-[31px] flex flex-col gap-10 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img src={BG_LINES_1} alt="" className="absolute object-cover opacity-50" style={{ left: -72, top: -20, height: 580, width: 562 }} />
          <img src={BG_LINES_2} alt="" className="absolute object-cover opacity-50" style={{ left: 81, top: -32, height: 592, width: 662 }} />
          <img src={BG_LINES_3} alt="" className="absolute object-cover opacity-50" style={{ left: 262, top: 17, height: 552, width: 680 }} />
          <img src={BG_ARCS} alt="" className="absolute object-cover opacity-30" style={{ left: 234, top: -246, height: 815, width: 789 }} />
          <img src={BG_ARCS} alt="" className="absolute object-cover opacity-30" style={{ left: 436, top: -246, height: 815, width: 789 }} />
          <img src={BG_ARCS} alt="" className="absolute object-cover opacity-30" style={{ left: 667, top: -280, height: 815, width: 789 }} />
          <img src={BG_ARCS} alt="" className="absolute object-cover opacity-30" style={{ left: 945, top: -378, height: 815, width: 789 }} />
        </div>

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
            <button
              className="w-full bg-[#fcb344] border border-[#fcb344] rounded-[10px] px-6 py-3 font-sans font-medium text-[16px] text-[#242424] leading-[1.5] cursor-pointer transition-all duration-100 ease-out
                shadow-[0px_4px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)]
                hover:-translate-y-1 hover:shadow-[0px_6px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)]
                active:translate-y-0.5 active:shadow-[0px_1px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)]"
            >
              Book a consultation
            </button>
            <span className="font-mono text-[12px] text-white uppercase tracking-[0.6px]">
              30 minutes · with Ian
            </span>
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex flex-col gap-6 relative z-10">
          {/* Logo + social */}
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

          {/* Divider */}
          <div className="h-px w-full bg-white opacity-20" />

          {/* Credits */}
          <div className="flex items-center justify-between">
            <span className="font-sans text-[14px] text-white leading-[1.5]">
              © 2026 WithAI. All rights reserved.
            </span>
            <div className="flex gap-6">
              <a href="#" className="font-sans text-[14px] text-white leading-[1.5] underline">
                Privacy Policy
              </a>
              <a href="#" className="font-sans text-[14px] text-white leading-[1.5] underline">
                Terms of Service
              </a>
              <a href="#" className="font-sans text-[14px] text-white leading-[1.5] underline">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
