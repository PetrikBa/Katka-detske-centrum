const items = [
  ["Vstup na 1 hodinu", "5 €", "dieťa s dozorom rodiča"],
  ["Vstup na 2 hodiny", "9 €", "dieťa s dozorom rodiča"],
  ["Vstup na 3 hodiny", "12 €", "dieťa s dozorom rodiča"],
  ["Celodenný vstup", "15 €", "dieťa s dozorom rodiča"],
  ["Doprovod", "1 €", "dieťa od 0 do 1 roka zadarmo"],
  ["Akcia 17:00 – 19:00", "6,90 €", "večerný vstup"],
  ["Permanentka 5 vstupov", "25 €", "6. vstup zadarmo"],
  ["Permanentka 10 vstupov", "75 €", "vstupy na 2 hodiny"],
  ["Školy a škôlky od 10 detí", "3,50 €", "za dieťa, 1 hodina"],
  ["Opatrovanie dieťaťa", "8 €", "1 hodina"],
];
export function Pricing() {
  return (
    <section id="cennik" className="bg-[#efe0c1] px-5 py-16">
      <div className="mx-auto max-w-6xl">
      <h2 className="text-center text-3xl font-bold mb-4">Cenník hrania</h2>
      {/*<p className="mt-2 text-center text-[#526079]">Koľko stojí vstup</p>*/}
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map(([name, price, detail], i) => (
          <div
            key={name}
            className="flex items-center gap-4 rounded-2xl bg-white p-4"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f2b82d] font-bold text-[#172a50]">
              {i + 1}
            </span>
            <div className="flex-1">
              <b>{name}</b>
              <p className="text-sm text-[#526079]">{detail}</p>
            </div>
            <strong className="text-lg text-[#c93d2b]">{price}</strong>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-[#526079]">
        Dieťa do 1 roka vstúpi zadarmo, doprovod platí 1 €.
      </p>

      <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-white/70 p-5 sm:p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#172a50]">Darčekové poukazy a permanentky</h3>
          <p className="mt-2 text-sm text-[#526079]">
            Darujte deťom radosť – ideálny darček na narodeniny, sviatky alebo len tak.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#526079]">Permanentka na 2 hodiny</p>
            <p className="mt-2 text-sm text-[#526079]">Bez časového obmedzenia</p>
            <p className="mt-4 text-3xl font-bold text-[#c93d2b]">10 vstupov <span className="text-[#172a50]">75 €</span></p>
          </div>
          <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#526079]">Hodinová permanentka</p>
            <p className="mt-2 text-sm text-[#526079]">Bez časového obmedzenia</p>
            <p className="mt-4 text-3xl font-bold text-[#c93d2b]">5 + 1 vstup <span className="text-[#172a50]">25 €</span></p>
            <p className="mt-1 text-sm text-[#526079]">Jeden vstup navyše zadarmo</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
