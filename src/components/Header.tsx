import logo from "../assets/logo.png";

export function Header() {
  return (
    <>
      <header className="m-0 w-full bg-[#F7EEDC] p-0 font-poppins font-semibold text-[#172a50]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-5 py-4">
          <a href="#top" className="shrink-0">
            <img
              src={logo}
              alt="Katka detské centrum – detské ihrisko a oslavy"
              className="h-14 w-auto max-w-[42vw] object-contain"
            />
          </a>
          <nav aria-label="Hlavná navigácia" className="order-3 flex basis-full flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-semibold md:order-none md:basis-auto md:flex-nowrap md:gap-5">
            <a href="#cennik">Cenník hrania</a>
            <a href="#dopyt">Oslavy</a>
            <a href="#maskoty">Požičovňa maskotov</a>
            <a href="#sdoc-slniecko">SDOC Slniečko</a>
            <a href="#workshopy">Workshopy</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a
            className="rounded-full bg-[#c93d2b] px-4 py-2 font-bold text-white"
            href="tel:0944282864"
          >
            0944 282 864
          </a>
        </div>
      </header>
      <div
        aria-hidden="true"
        className="m-0 h-4 w-full overflow-hidden p-0"
        style={{
          backgroundColor: "#172a50",
          backgroundImage:
            "radial-gradient(circle at 16px 0, #F7EEDC 16px, transparent 16.5px)",
          backgroundSize: "32px 16px",
          backgroundPosition: "center top",
          backgroundRepeat: "repeat-x",
        }}
      />
    </>
  );
}
