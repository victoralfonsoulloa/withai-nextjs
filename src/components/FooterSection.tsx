import Image from "next/image";
import DotGrid from "@/components/DotGrid";

const YC_LOGO = "/logos/yc-logo.svg";

export default function FooterSection() {
  return (
    <section className="shrink-0 bg-background px-[10px] min-[980px]:px-16">
      <div className="relative flex flex-col gap-10 overflow-hidden border-t border-r border-l border-border bg-background px-4 pt-[52px] pb-[31px] min-[980px]:px-8">
        <DotGrid variant="light" />

        {/* CTA row */}
        <div className="relative z-10 flex flex-col items-center gap-4 min-[1241px]:flex-row min-[1241px]:items-end min-[1241px]:justify-between">
          {/* Badge + headline */}
          <div className="flex flex-col items-center gap-3 text-center min-[1241px]:max-w-[706px] min-[1241px]:items-start min-[1241px]:text-left">
            <div className="flex items-center gap-2.5 rounded-[24px] border border-border bg-white px-[15px] py-[10px]">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[12px] tracking-[0.6px] whitespace-nowrap text-[rgba(26,26,24,0.77)] uppercase">
                AI infrastructure for independent funds
              </span>
            </div>
            <h2 className="max-w-[662px] font-serif text-[40px] leading-[1.2] tracking-[-1.2px] text-ink min-[1241px]:max-w-none min-[1241px]:text-[56px] min-[1241px]:tracking-[-1.68px]">
              If you want to see what your firm looks like one year in the future
            </h2>
          </div>

          {/* CTA button */}
          <div className="flex shrink-0 flex-col items-center gap-4 min-[1241px]:w-[321px]">
            <a
              href="https://cal.com/imj-mcinnis/video-call?duration=30"
              target="_blank"
              rel="noopener noreferrer"
              className="touch-manipulation rounded-[10px] border border-primary bg-primary px-6 py-3 text-center font-sans text-[16px] leading-[1.5] font-medium text-ink shadow-[0px_4px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)] transition-all duration-100 ease-out hover:-translate-y-1 hover:shadow-[0px_6px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)] active:translate-y-0.5 active:shadow-[0px_1px_0px_#c8901a,inset_0px_4px_6.5px_rgba(255,255,255,0.63)] min-[1241px]:w-full"
            >
              Book a consultation
            </a>
            <span className="font-mono text-[12px] tracking-[0.6px] text-ink uppercase">
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

          <div className="h-px w-full bg-border" />

          <div className="flex flex-col items-center gap-4 min-[1241px]:flex-row min-[1241px]:justify-between">
            <span className="font-sans text-[14px] leading-normal text-ink">
              © 2026 WithAI. All rights reserved.
            </span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[12px] tracking-[0.6px] text-grey-muted uppercase">
                Backed by
              </span>
              <div className="relative size-6 shrink-0 overflow-hidden rounded-[3px] bg-white">
                <Image src={YC_LOGO} alt="Y Combinator" fill className="object-cover" />
              </div>
              <span className="font-sans text-[14px] leading-normal text-ink">Combinator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
