import Image from "next/image";
import DotGrid from "@/components/DotGrid";

const YC_LOGO = "/logos/yc-logo.svg";

export default function FooterSection() {
  return (
    <section className="bg-[#f0eee6] px-[10px] min-[980px]:px-16 shrink-0">
      <div className="relative bg-[#f0eee6] border-t border-l border-r border-[rgba(36,36,36,0.1)] px-4 min-[980px]:px-8 pt-[52px] pb-[31px] flex flex-col gap-10 overflow-hidden">
        <DotGrid variant="light" />

        {/* CTA row */}
        <div className="flex flex-col items-center gap-4 relative z-10 min-[1241px]:flex-row min-[1241px]:items-end min-[1241px]:justify-between">
          {/* Badge + headline */}
          <div className="flex flex-col gap-3 items-center text-center min-[1241px]:items-start min-[1241px]:text-left min-[1241px]:max-w-[706px]">
            <div className="bg-white border border-[rgba(36,36,36,0.1)] rounded-[24px] flex items-center gap-2.5 px-[15px] py-[10px]">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex size-full rounded-full bg-[hsla(36,97%,63%,1)] opacity-75 animate-ping" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[hsla(36,97%,63%,1)]" />
              </span>
              <span className="font-mono text-[12px] text-[rgba(26,26,24,0.77)] uppercase tracking-[0.6px] whitespace-nowrap">
                AI infrastructure for independent funds
              </span>
            </div>
            <h2 className="font-serif text-[40px] min-[1241px]:text-[56px] text-[#242424] leading-[1.2] tracking-[-1.2px] min-[1241px]:tracking-[-1.68px] max-w-[662px] min-[1241px]:max-w-none">
              If you want to see what your firm looks like one year in the future
            </h2>
          </div>

          {/* CTA button */}
          <div className="flex flex-col gap-4 items-center shrink-0 min-[1241px]:w-[321px]">
            <a
              href="https://cal.com/imj-mcinnis/video-call?duration=30"
              target="_blank"
              rel="noopener noreferrer"
              className="min-[1241px]:w-full bg-[#fcb344] border border-[#fcb344] rounded-[10px] px-6 py-3 font-sans font-medium text-[16px] text-[#242424] leading-[1.5] text-center touch-manipulation transition-all duration-100 ease-out
                shadow-[0px_4px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)]
                hover:-translate-y-1 hover:shadow-[0px_6px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)]
                active:translate-y-0.5 active:shadow-[0px_1px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)]"
            >
              Book a consultation
            </a>
            <span className="font-mono text-[12px] text-[#242424] uppercase tracking-[0.6px]">
              30 minutes·with Ian and Ben
            </span>
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex items-center justify-between">
            <Image src="/logos/withai-logo.svg" alt="WithAI" width={43} height={43} className="shrink-0" />
            <div className="flex items-center gap-3">
              <a href="#" className="block shrink-0">
                <Image src="/icons/icon-x.svg" alt="X (Twitter)" width={24} height={24} />
              </a>
              <a href="#" className="block shrink-0">
                <Image src="/icons/icon-linkedin.svg" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" className="block shrink-0">
                <Image src="/icons/icon-youtube.svg" alt="YouTube" width={24} height={24} />
              </a>
            </div>
          </div>

          <div className="h-px w-full bg-[rgba(36,36,36,0.1)]" />

          <div className="flex flex-col items-center gap-4 min-[1241px]:flex-row min-[1241px]:justify-between">
            <span className="font-sans text-[14px] text-[#242424] leading-normal">
              © 2026 WithAI. All rights reserved.
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[12px] text-[#7a7870] uppercase tracking-[0.6px]">Backed by</span>
              <div className="relative bg-white rounded-[3px] size-6 overflow-hidden shrink-0">
                <Image src={YC_LOGO} alt="Y Combinator" fill className="object-cover" />
              </div>
              <span className="font-sans text-[14px] text-[#242424] leading-normal">Combinator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
