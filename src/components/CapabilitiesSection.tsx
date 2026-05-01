// Illustration assets (Figma MCP — expire after 7 days)
const CLAUDE_LOGO   = "https://www.figma.com/api/mcp/asset/eb54c226-1005-4e08-9f93-14103e1eb1c1";
const GEMINI_LOGO   = "https://www.figma.com/api/mcp/asset/c1218e5a-db42-4f19-99ea-5c2f6c0c3bc4";
const COPILOT_LOGO  = "https://www.figma.com/api/mcp/asset/ef833f75-b660-4d6e-8e28-619dd3927fd0";
const CHATGPT_LOGO  = "https://www.figma.com/api/mcp/asset/23e4a5e1-b4ae-44fb-bedc-64184cff61c3";
const ADD_ICON      = "https://www.figma.com/api/mcp/asset/c51dae55-06e7-43af-96dc-0ce06cfaf380";
const FLOW_ICON_1   = "https://www.figma.com/api/mcp/asset/59cd1301-9c26-4276-a197-bc1af4f4bde7";
const FLOW_ICON_2   = "https://www.figma.com/api/mcp/asset/c801c3ec-ab2c-4aec-8387-86335ee6cc48";
const FLOW_ICON_3   = "https://www.figma.com/api/mcp/asset/93356931-014e-4cb3-85ec-ae7a02a3c07c";
const FLOW_ICON_4   = "https://www.figma.com/api/mcp/asset/f11b3a53-0c6d-4bd1-a56f-595aaa02c648";
const FLOW_ICON_5   = "https://www.figma.com/api/mcp/asset/f3e8e466-8fe1-4868-8bbf-961b2e8d6435";
const CHART_LINE    = "https://www.figma.com/api/mcp/asset/5a4095ba-13fe-45a5-baf3-4829ed96cc03";
const CHART_AREA    = "https://www.figma.com/api/mcp/asset/f538cbc7-4966-4f53-bad2-f513c506fd9f";
const DOT_ICON      = "https://www.figma.com/api/mcp/asset/f4996c80-1135-4a16-9d9b-9836b4893f90";
const LOCK_ICON     = "https://www.figma.com/api/mcp/asset/9da1a090-0244-469e-9999-0b9c8a4aa61f";
const FOLDER_TOP    = "https://www.figma.com/api/mcp/asset/de6a780d-6e63-41f0-88be-5b0716758d87";
const FOLDER_BODY   = "https://www.figma.com/api/mcp/asset/cfb3879a-806f-4b38-8cff-cad75db889e5";
const FOLDER_TAB    = "https://www.figma.com/api/mcp/asset/98a564af-28e5-4432-80cc-f3d88965c65d";
const FOLDER_CORNER = "https://www.figma.com/api/mcp/asset/15a82844-6930-4d5a-b441-31849c5e8b45";
const FOLDER_SM_TOP = "https://www.figma.com/api/mcp/asset/9a1761e4-f249-4fbd-a9d5-24543fa49a72";
const FOLDER_SM_BOD = "https://www.figma.com/api/mcp/asset/1b6be950-d022-4d3a-b7fd-2cd801635afb";
const FOLDER_XS_TOP = "https://www.figma.com/api/mcp/asset/319b18a6-a767-44f8-9253-d2dd5af6559e";
const FOLDER_XS_BOD = "https://www.figma.com/api/mcp/asset/151b7bc9-e07a-4da6-bc9b-37e43a7f9166";
const PERSON_HEAD   = "https://www.figma.com/api/mcp/asset/264ac0ca-f0c5-4ce7-972e-df6e939ad6f7";
const PERSON_BODY   = "https://www.figma.com/api/mcp/asset/42a02985-5f89-4311-908a-be04918bcf12";
const PERSON_CENTER = "https://www.figma.com/api/mcp/asset/5255ba83-700e-45ab-a828-737d9782aa2e";

function IllustrationWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[220px] md:h-[277px] w-full overflow-hidden rounded-b-[10px] shrink-0"
      style={{ background: "linear-gradient(to bottom, rgba(240,238,230,0) 0%, #f0eade 100%)" }}>
      {children}
    </div>
  );
}

function EngineeringIllustration() {
  const ghost = "absolute bg-[#f0eee6] border border-[rgba(36,36,36,0.1)] rounded-full opacity-80 size-[52px]";
  return (
    <IllustrationWrap>
      {/* Ghost circles */}
      <div className={`${ghost} left-[88px] top-[93px]`} />
      <div className={`${ghost} left-[115px] top-[43px]`} />
      <div className={`${ghost} left-[229px] top-[43px]`} />
      <div className={`${ghost} left-[253px] top-[93px]`} />
      <div className={`${ghost} left-[226px] top-[141px]`} />
      <div className={`${ghost} left-[114px] top-[141px]`} />
      {/* Claude icon (amber) */}
      <div className="absolute bg-[#f0eee6] border border-[rgba(36,36,36,0.1)] rounded-full shadow-[0px_3px_12.5px_rgba(0,0,0,0.11)] size-[52px] left-[171px] top-[43px] overflow-hidden flex items-center justify-center">
        <div className="bg-[#fcb344] size-[32px] rounded-full" style={{ maskImage: `url('${CLAUDE_LOGO}')`, maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center" }} />
      </div>
      {/* Gemini */}
      <div className="absolute bg-[#f0eee6] border border-[rgba(36,36,36,0.1)] rounded-full shadow-[0px_3px_12.5px_rgba(0,0,0,0.11)] size-[52px] left-[200px] top-[93px] overflow-hidden flex items-center justify-center">
        <img src={GEMINI_LOGO} alt="" className="size-[34px] object-contain" />
      </div>
      {/* ChatGPT */}
      <div className="absolute bg-[#f0eee6] border border-[rgba(36,36,36,0.1)] rounded-full shadow-[0px_3px_12.5px_rgba(0,0,0,0.11)] size-[52px] left-[143px] top-[93px] overflow-hidden flex items-center justify-center">
        <img src={CHATGPT_LOGO} alt="" className="size-[32px] object-contain" />
      </div>
      {/* Copilot */}
      <div className="absolute bg-[#f0eee6] border border-[rgba(36,36,36,0.1)] rounded-full shadow-[0px_3px_12.5px_rgba(0,0,0,0.11)] size-[52px] left-[169px] top-[145px] overflow-hidden flex items-center justify-center">
        <img src={COPILOT_LOGO} alt="" className="size-[32px] object-contain" />
      </div>
      {/* Manage Agents button */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[213px] flex items-center gap-1.5 px-5 py-2.5 rounded-[24px] bg-[#fcb344] shadow-[0px_0px_15px_7px_rgba(255,222,173,0.39)]">
        <img src={ADD_ICON} alt="" className="size-[15px]" />
        <span className="font-sans font-medium text-[10px] text-[#242424] whitespace-nowrap">Manage Agents</span>
      </div>
    </IllustrationWrap>
  );
}

function WorkflowsIllustration() {
  return (
    <IllustrationWrap>
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        {/* Three amber blocks */}
        {[FLOW_ICON_1, FLOW_ICON_2, FLOW_ICON_3].map((src, i) => (
          <div key={i} className="relative size-[42px] rounded-[11px] shadow-[0px_6px_18px_rgba(252,179,68,0.4)]"
            style={{ background: "linear-gradient(135deg, #fcd574 0%, #fcb344 50%, #e89d2d 100%)" }}>
            <img src={src} alt="" className="absolute inset-[20%] size-[60%] object-contain" />
          </div>
        ))}
        {/* Ghost blocks */}
        <div className="absolute right-[24px] top-[84px] size-[42px] rounded-[11px] opacity-55"
          style={{ background: "linear-gradient(135deg, #fff 0%, #f0eee7 100%)", border: "1px solid rgba(36,36,36,0.06)" }} />
      </div>
      {/* Arrow icons */}
      <div className="absolute top-[96px] left-[185px] w-[35px] h-[16px]">
        <img src={FLOW_ICON_4} alt="" className="size-full object-contain" />
      </div>
      <div className="absolute top-[96px] left-[91px] w-[54px] h-[16px]">
        <img src={FLOW_ICON_5} alt="" className="size-full object-contain" />
      </div>
    </IllustrationWrap>
  );
}

function ResearchIllustration() {
  return (
    <IllustrationWrap>
      {/* Fanned research docs */}
      <div className="absolute left-[94px] top-[77px] w-[52px] h-[66px] -rotate-6 rounded-[8px] border border-[rgba(36,36,36,0.08)] shadow-[0px_4px_6px_rgba(0,0,0,0.06)]"
        style={{ background: "linear-gradient(128deg, #fafaf8 0%, #f5f4ee 100%)" }}>
        <div className="absolute inset-[15%] opacity-20 flex flex-col gap-[5px]">
          {[26,31,22,29,24].map((w,i) => <div key={i} className="bg-[#242424] h-[3px] rounded-full" style={{width:`${w}px`}} />)}
        </div>
      </div>
      <div className="absolute left-[145px] top-[73px] w-[52px] h-[66px] rotate-3 rounded-[8px] border border-[rgba(240,160,48,0.3)] shadow-[0px_6px_8px_rgba(252,179,68,0.25)]"
        style={{ background: "linear-gradient(128deg, #fcb344 0%, #f0a030 100%)" }}>
        <div className="absolute inset-[15%] opacity-30 flex flex-col gap-[5px]">
          {[26,31,22,29,24].map((w,i) => <div key={i} className="bg-[#242424] h-[3px] rounded-full" style={{width:`${w}px`}} />)}
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.4)] size-[6px] rounded-full top-[8px] right-[8px]" />
      </div>
      <div className="absolute left-[195px] top-[78px] w-[52px] h-[66px] -rotate-4 rounded-[8px] border border-[rgba(36,36,36,0.08)] shadow-[0px_4px_6px_rgba(0,0,0,0.06)]"
        style={{ background: "linear-gradient(128deg, #fafaf8 0%, #f5f4ee 100%)" }}>
        <div className="absolute inset-[15%] opacity-20 flex flex-col gap-[5px]">
          {[26,31,22,29,24].map((w,i) => <div key={i} className="bg-[#242424] h-[3px] rounded-full" style={{width:`${w}px`}} />)}
        </div>
      </div>
      <div className="absolute left-[244px] top-[75px] w-[52px] h-[66px] rotate-5 rounded-[8px] border border-[rgba(36,36,36,0.08)] shadow-[0px_4px_6px_rgba(0,0,0,0.06)]"
        style={{ background: "linear-gradient(128deg, #fafaf8 0%, #f5f4ee 100%)" }}>
        <div className="absolute inset-[15%] opacity-20 flex flex-col gap-[5px]">
          {[26,31,22,29,24].map((w,i) => <div key={i} className="bg-[#242424] h-[3px] rounded-full" style={{width:`${w}px`}} />)}
        </div>
      </div>
      {/* Chart card */}
      <div className="absolute left-[127px] top-[166px] w-[141px] h-[89px] rounded-[12px] bg-[rgba(255,255,255,0.3)] border border-[rgba(36,36,36,0.06)] shadow-[0px_3.5px_6px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="absolute inset-[12px_12px_4px]">
          <img src={CHART_LINE} alt="" className="absolute inset-[14%_15%_18%_5%] object-contain" />
          <img src={CHART_AREA} alt="" className="absolute inset-[14%_15%_36%_5%] object-contain" />
          {[DOT_ICON, DOT_ICON, DOT_ICON, DOT_ICON, DOT_ICON].map((src, i) => (
            <img key={i} src={src} alt="" className="absolute size-[6px] object-contain" style={{ left: `${8+i*18}%`, top: `${[57,39,8,34,15][i]}%` }} />
          ))}
        </div>
      </div>
    </IllustrationWrap>
  );
}

function SecurityIllustration() {
  return (
    <IllustrationWrap>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Concentric dashed rings */}
          <div className="absolute size-[160px] rounded-full border-2 border-dashed border-[rgba(36,36,36,0.08)] opacity-25" />
          <div className="absolute size-[125px] rounded-full border-2 border-dashed border-[rgba(36,36,36,0.08)] opacity-40" />
          <div className="absolute size-[90px] rounded-full border-2 border-dashed border-[#fcb344] opacity-65 shadow-[0px_0px_10px_rgba(252,179,68,0.4)]">
            <div className="absolute size-full rounded-full" style={{ background: "linear-gradient(135deg, rgba(252,179,68,0.1) 0%, transparent 100%)" }} />
            <div className="absolute bg-[#fcb344] size-[8px] rounded-full shadow-[0px_0px_8px_rgba(252,179,68,0.6)] left-1/2 -translate-x-1/2 -top-1" />
          </div>
          <div className="absolute size-[55px] rounded-full border-2 border-dashed border-[rgba(36,36,36,0.08)] opacity-85" />
          {/* Lock icon */}
          <img src={LOCK_ICON} alt="" className="relative size-[36px] object-contain z-10" />
        </div>
      </div>
    </IllustrationWrap>
  );
}

function DataIllustration() {
  const FolderIcon = ({ className }: { className: string }) => (
    <div className={`absolute ${className}`}>
      <div className="relative size-full">
        <img src={FOLDER_TOP} alt="" className="absolute inset-[10%_7%_20%_9%] object-contain" />
        <img src={FOLDER_BODY} alt="" className="absolute inset-[30%_7%_20%_9%] object-contain" />
        <img src={FOLDER_TAB} alt="" className="absolute inset-[18%_11%_70%_78%] object-contain" />
        <img src={FOLDER_CORNER} alt="" className="absolute inset-[10%_54%_80%_37%] object-contain" />
      </div>
    </div>
  );
  return (
    <IllustrationWrap>
      {/* Concentric dashed circles */}
      <div className="absolute left-[102px] top-[48px] size-[182px] rounded-full border-2 border-dashed border-[rgba(36,36,36,0.08)] opacity-25" />
      <div className="absolute left-[122px] top-[68px] size-[142px] rounded-full border-2 border-dashed border-[rgba(36,36,36,0.08)] opacity-40" />
      <div className="absolute left-[142px] top-[88px] size-[102px] rounded-full border-2 border-dashed border-[#fcb344] opacity-65 shadow-[0px_0px_11px_rgba(252,179,68,0.4)]">
        <div className="absolute bg-[#fcb344] size-[9px] rounded-full left-1/2 -translate-x-1/2 -top-1 shadow-[0px_0px_9px_rgba(252,179,68,0.6)]" />
      </div>
      <div className="absolute left-[162px] top-[108px] size-[63px] rounded-full border-2 border-dashed border-[rgba(36,36,36,0.08)] opacity-85" />
      {/* Central folder */}
      <FolderIcon className="left-[163px] top-[108px] size-[61px]" />
      {/* Side folders */}
      <div className="absolute left-[240px] top-[107px] size-[61px] relative">
        <img src={FOLDER_SM_TOP} alt="" className="absolute inset-[11%_7%_9%_9%] object-contain" />
        <img src={FOLDER_SM_BOD} alt="" className="absolute inset-[34%_7%_9%_9%] object-contain" />
      </div>
      <div className="absolute left-[93px] top-[107px] size-[61px]">
        <img src={FOLDER_SM_TOP} alt="" className="absolute inset-[11%_7%_9%_9%] object-contain" />
        <img src={FOLDER_SM_BOD} alt="" className="absolute inset-[34%_7%_9%_9%] object-contain" />
      </div>
      {/* Small folders */}
      {[[117,166],[176,167],[237,166]].map(([l,t],i) => (
        <div key={i} className="absolute size-[40px]" style={{left:l,top:t}}>
          <img src={FOLDER_XS_TOP} alt="" className="absolute inset-[11%_7%_9%_9%] object-contain" />
          <img src={FOLDER_XS_BOD} alt="" className="absolute inset-[34%_7%_9%_9%] object-contain" />
        </div>
      ))}
    </IllustrationWrap>
  );
}

function EnablementIllustration() {
  const PersonAvatar = ({ className, amber = false, children }: { className: string; amber?: boolean; children?: React.ReactNode }) => (
    <div className={`absolute size-[58px] rounded-full border-2 ${amber ? "border-[#fcb344] shadow-[0px_5px_8px_rgba(252,179,68,0.35)]" : "border-[rgba(36,36,36,0.08)]"} overflow-hidden ${className}`}
      style={{ background: amber ? "linear-gradient(135deg, #fcd574 0%, #f0a030 100%)" : "linear-gradient(135deg, #fafaf8 0%, #f5f4ee 100%)" }}>
      {amber ? (
        <img src={PERSON_CENTER} alt="" className="absolute inset-[7%] object-contain" />
      ) : (
        <>
          <img src={PERSON_HEAD} alt="" className="absolute inset-[22%_35%_49%] object-contain" />
          <img src={PERSON_BODY} alt="" className="absolute inset-[55%_25%_23%] object-contain" />
        </>
      )}
      {children}
    </div>
  );
  return (
    <IllustrationWrap>
      {/* Connection lines */}
      <div className="absolute h-[3px] rounded-full opacity-30 left-[104px] top-[109px] w-[79px]" style={{ background: "linear-gradient(90deg, #fcb344, #f0a030)" }} />
      <div className="absolute h-[3px] rounded-full opacity-30 left-[212px] top-[109px] w-[76px]" style={{ background: "linear-gradient(90deg, #fcb344, #f0a030)" }} />
      <div className="absolute h-[3px] rounded-full opacity-21 left-[156px] top-[183px] w-[67px]" style={{ background: "linear-gradient(90deg, #fcb344, #f0a030)" }} />
      {/* Avatars */}
      <PersonAvatar className="left-[75px] top-[80px]" />
      <PersonAvatar className="left-[262px] top-[80px]">
        <div className="absolute bg-[#fcb344] size-[9px] rounded-full border border-white top-0 right-[8px] shadow-[0px_3px_8px_rgba(76,175,80,0.4)]" />
      </PersonAvatar>
      <PersonAvatar className="left-[104px] top-[155px]" />
      <PersonAvatar className="left-[209px] top-[155px]" />
      <PersonAvatar className="left-[169px] top-[75px]" amber />
    </IllustrationWrap>
  );
}

const cards = [
  {
    label: "Engineering",
    title: "Harness the latest agents",
    body: "Securely harness Claude Code and other state of the art agents to do work for your firm.",
    illustration: <EngineeringIllustration />,
  },
  {
    label: "Workflows",
    title: "Encode your firm's processes",
    body: "The way your team builds a thesis, runs a screen, prepares for earnings – drilled into your AI.",
    illustration: <WorkflowsIllustration />,
  },
  {
    label: "Research",
    title: "Automated research",
    body: "Daily coverage of every name on your watchlist. Your docs update with prints, guidance and filings the moment they cross.",
    illustration: <ResearchIllustration />,
  },
  {
    label: "Security",
    title: "Hedge-fund-grade infrastructure",
    body: "Tenant isolation. No training on your data. Controls treated as a design constraint from day one — not a compliance afterthought.",
    illustration: <SecurityIllustration />,
  },
  {
    label: "Data",
    title: "Organize your data",
    body: "Agents that maintain your file structure, enforce your ontology, and keep the archive queryable — without anyone playing librarian.",
    illustration: <DataIllustration />,
  },
  {
    label: "Enablement",
    title: "Training & governance",
    body: "Seminars, playbooks, and direct support — so AI gets used well across the firm, not just by the people who already love it.",
    illustration: <EnablementIllustration />,
  },
];

function CardBorder(i: number) {
  const isLastRow = i >= 3;
  const isLastCol = i % 3 === 2;
  return [
    "border-t border-l border-dashed border-[rgba(36,36,36,0.1)]",
    isLastRow ? "border-b" : "",
    isLastCol && !isLastRow ? "border-r" : "",
    isLastCol && isLastRow ? "" : "",
  ].join(" ");
}

export default function CapabilitiesSection() {
  return (
    <section className="bg-[#f0eee6] px-[10px] md:px-16 shrink-0">
      <div className="border-t border-l border-r border-[rgba(36,36,36,0.1)] px-8 py-[52px] flex flex-col gap-10 items-center">

        {/* Heading */}
        <h2 className="font-serif text-[36px] md:text-[48px] text-[#242424] text-center leading-[1.2] tracking-[-1.08px] md:tracking-[-1.44px] max-w-[720px]">
          Build a bespoke AI system for your Fund
        </h2>

        {/* Grid */}
        <div className="w-full flex flex-col">
          {/* Desktop: 2 rows of 3 / Mobile: single column */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((card, i) => (
              <div
                key={card.label}
                className={`bg-[#f5f4ee] flex flex-col gap-4 px-8 py-6 ${CardBorder(i)}`}
              >
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[12px] text-[#525252] uppercase tracking-[0.6px]">
                    {card.label}
                  </span>
                  <h3 className="font-serif text-[24px] text-[#242424] leading-[1.4] tracking-[-0.72px]">
                    {card.title}
                  </h3>
                </div>
                <p className="font-sans font-normal text-[16px] text-[#525252] leading-[1.5]">
                  {card.body}
                </p>
                {card.illustration}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
