import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    ["#cennik", "Cenník hrania"],
    ["#dopyt", "Oslavy"],
    ["#maskoty", "Požičovňa maskotov"],
    ["#sdoc-slniecko", "SDOC Slniečko"],
    ["#workshopy", "Workshopy"],
    ["#kontakt", "Kontakt"],
  ];

  useEffect(() => {
    // Use separate enter/leave points so the header's size transition cannot
    // immediately move scrollY back across the same threshold.
    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setIsScrolled((current) => current ? scrollY > 8 : scrollY > 32);
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <header className="m-0 w-full bg-[#F7EEDC] p-0 font-poppins font-semibold text-[#172a50]">
        <div className={`mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-5 transition-[padding] duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
          <a href="#top" className="shrink-0">
            <img
              src={logo}
              alt="Katka detské centrum – detské ihrisko a oslavy"
              className={`w-auto max-w-[34vw] object-contain transition-[height] duration-300 md:max-w-[42vw] ${isScrolled ? "h-10" : "h-14"}`}
            />
          </a>
          <nav aria-label="Hlavná navigácia" className="hidden items-center gap-5 text-sm font-semibold md:flex">
            {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
          <a
            className="rounded-full bg-[#c93d2b] px-3 py-2 text-sm font-bold text-white sm:px-4 sm:text-base"
            href="tel:0944282864"
          >
            0944 282 864
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full text-[#172a50] hover:bg-[#efe0c1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c93d2b] md:hidden"
            aria-label={isMenuOpen ? "Zavrieť navigáciu" : "Otvoriť navigáciu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="text-2xl leading-none" aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
          </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav id="mobile-navigation" aria-label="Mobilná navigácia" className="border-t border-[#172a50]/10 px-5 py-3 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col">
              {links.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setIsMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm hover:bg-[#efe0c1]">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
      <div
        aria-hidden="true"
        className={`m-0 h-4 w-full p-0 transition-opacity duration-300 ${isScrolled ? "opacity-0" : "opacity-100"}`}
        style={{
          backgroundColor: "#172a50",
          backgroundImage:
            "radial-gradient(circle at 16px 0, #F7EEDC 16px, transparent 16.5px)",
          backgroundSize: "32px 16px",
          backgroundPosition: "center top",
          backgroundRepeat: "repeat-x",
        }}
      />
    </div>
  );
}
