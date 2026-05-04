import Image from "next/image";
import DotGrid from "@/components/DotGrid";

const YC_LOGO = "/logos/yc-logo.svg";

export default function FooterSection() {
  return (
    <section className="shrink-0 bg-[#f0eee6] px-[10px] min-[980px]:px-16">
      <div className="relative flex flex-col gap-10 overflow-hidden border-t border-r border-l border-[rgba(36,36,36,0.1)] bg-[#f0eee6] px-4 pt-[52px] pb-[31px] min-[980px]:px-8">
        <DotGrid variant="light" />

        {/* CTA row */}
        <div className="relative z-10 flex flex-col items-center gap-4 min-[1241px]:flex-row min-[1241px]:items-end min-[1241px]:justify-between">
          {/* Badge + headline */}
          <div className="flex flex-col items-center gap-3 text-center min-[1241px]:max-w-[706px] min-[1241px]:items-start min-[1241px]:text-left">
            <div className="flex items-center gap-2.5 rounded-[24px] border border-[rgba(36,36,36,0.1)] bg-white px-[15px] py-[10px]">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[hsla(36,97%,63%,1)] opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[hsla(36,97%,63%,1)]" />
              </span>
              <span className="font-mono text-[12px] tracking-[0.6px] whitespace-nowrap text-[rgba(26,26,24,0.77)] uppercase">
                AI infrastructure for independent funds
              </span>
            </div>
            <h2 className="max-w-[662px] font-serif text-[40px] leading-[1.2] tracking-[-1.2px] text-[#242424] min-[1241px]:max-w-none min-[1241px]:text-[56px] min-[1241px]:tracking-[-1.68px]">
              If you want to see what your firm looks like one year in the future
            </h2>
          </div>

          {/* CTA button */}
          <div className="flex shrink-0 flex-col items-center gap-4 min-[1241px]:w-[321px]">
            <a
              href="https://cal.com/imj-mcinnis/video-call?duration=30"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-manipulation rounded-[10px] border border-[#fcb344] bg-[#fcb344] px-6 py-3 text-center font-sans text-[16px] font-medium text-[#242424] shadow-[0px_3px_6.25px_rgba(0,0,0,0.11)] transition-all duration-150 hover:brightness-105 active:scale-[0.97] active:brightness-95 min-[1241px]:w-full"
            >
              Book a consultation
            </a>
            <span className="font-mono text-[12px] tracking-[0.6px] text-[#242424] uppercase">
              30 minutes·with Ian and Ben
            </span>
          </div>
        </div>

        {/* Footer bar */}
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <Image
              src="/logos/withai-logo.svg"
              alt="WithAI"
              width={43}
              height={43}
              className="shrink-0"
            />
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
            <span className="font-sans text-[14px] leading-normal text-[#242424]">
              © 2026 WithAI. All rights reserved.
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[12px] tracking-[0.6px] text-[#7a7870] uppercase">
                Backed by
              </span>
              <div className="relative size-6 shrink-0 overflow-hidden rounded-[3px] bg-white">
                <Image src={YC_LOGO} alt="Y Combinator" fill className="object-cover" />
              </div>
              <span className="font-sans text-[14px] leading-normal text-[#242424]">
                Combinator
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
