const LOGO =
  "https://www.figma.com/api/mcp/asset/ed3221b6-9616-4032-b2d3-b168358139fb";

const navLinks = ["Company", "Work", "Products", "Resources"];

export default function Header() {
  return (
    <header className="bg-[#f0eee6] border-b border-black/10 h-[69px] px-16 flex items-center shrink-0">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <img src={LOGO} alt="WithAI" className="size-[43px]" />

        {/* Nav links */}
        <nav className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-2.5 text-[14px] font-medium font-sans text-[#242424] rounded-lg hover:bg-[#f5f4ee] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#"
          className="border border-[#242424] px-5 py-2 rounded-[10px] text-[16px] font-medium font-sans text-[#242424] hover:bg-[#f5f4ee] transition-colors"
        >
          Book a demo
        </a>
      </div>
    </header>
  );
}
