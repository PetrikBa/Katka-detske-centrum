const mascotOptions = ["Mickey", "Minnie", "Dinosaurus", "Maco"];
const attendancePlans = [
  ["7:00 – 13:00", "360 €", "6 hodín denne · 20 dní"],
  ["8:00 – 13:00", "300 €", "5 hodín denne · 20 dní"],
  ["7:00 – 15:00", "480 €", "8 hodín denne · 20 dní"],
  ["8:00 – 15:00", "420 €", "7 hodín denne · 20 dní"],
];
const workshopActivities = [
  "Tvorivé aktivity a dielničky",
  "Varenie a pečenie",
  "Vzdelávacie workshopy",
  "Tanečné a pohybové aktivity",
  "Workshopy pre deti aj rodičov",
];

export function MascotRental() {
  return (
    <section id="maskoty" className="scroll-mt-24 bg-[#fffaf1] px-5 py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
        <div>
          <p className="mb-2 font-semibold uppercase tracking-[.16em] text-[#c93d2b]">Rozprávková návšteva</p>
          <h2 className="text-3xl font-bold text-[#172a50] md:text-4xl">Požičovňa maskotov</h2>
          <p className="mt-4 leading-7">Vyberte si maskota z obľúbených rozprávok na súkromnú oslavu, detskú párty alebo verejné podujatie. Na výber sú:</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {mascotOptions.map((mascot) => <span key={mascot} className="rounded-full bg-[#efe0c1] px-4 py-2 font-semibold text-[#172a50]">{mascot}</span>)}
          </div>
          <p className="mt-4 text-sm leading-6">Kostýmy majú výšku približne 175 – 185 cm. Osobné prevzatie a vrátenie si dohodnite vopred.</p>
        </div>
        <div className="rounded-3xl border-2 border-[#f2b82d] bg-white p-6 shadow-sm">
          <div className="rounded-2xl bg-[#172a50] p-5 text-[#fff7e6]">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#f2b82d]">Prenájom na 1 deň</p>
            <p className="mt-1 text-3xl font-bold">30 €</p>
            <p className="text-sm">za maskota bez animátora</p>
          </div>
          <ul className="mt-5 space-y-3 leading-6">
            <li>• Záloha je 50 % ceny, teda 15 € za maskota.</li>
            <li>• Osobné vyzdvihnutie, vrátenie nasledujúci deň.</li>
            <li>• Pri prenájme na 2 dni je príplatok 10 €.</li>
          </ul>
          <div className="mt-5 border-t border-[#efe0c1] pt-4 text-sm leading-6">
            <b className="text-[#172a50]">Maskot na oslave v centre</b>
            <p className="mt-1">Maskot sa venuje deťom; pri návšteve bez animátora si kostým oblečie dospelý z hostí.</p>
            <p className="mt-1">½ hodiny bez animátora – 20 € · ½ hodiny s animátorom – 20 € · 1 hodina s animátorom – 40 €.</p>
          </div>
          <a className="mt-5 inline-flex rounded-full bg-[#c93d2b] px-5 py-3 font-bold text-white" href="tel:0944282864">Dohodnúť prenájom: 0944 282 864</a>
        </div>
      </div>
    </section>
  );
}

export function SdocSlnecko() {
  return (
    <section id="sdoc-slniecko" className="scroll-mt-24 bg-[#efe0c1] px-5 py-14">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="mb-2 font-semibold uppercase tracking-[.16em] text-[#c93d2b]">Súkromné opatrovateľské centrum</p>
          <h2 className="text-3xl font-bold text-[#172a50] md:text-4xl">SDOC Slniečko</h2>
          <p className="mt-4 leading-7">Bezpečné, útulné a rodinné prostredie pre deti vo veku od 2,5 do 4 rokov. Centrum s rozlohou 380 m² funguje od 1. apríla 2026; otváracie hodiny od 9:00 do 16:00 sú po dohode s rodičmi.</p>
          <div className="mt-5 rounded-2xl bg-[#fffaf1] p-5">
            <h3 className="font-bold text-[#172a50]">Každý deň sa učíme hrou</h3>
            <p className="mt-2 text-sm leading-6">Hravé vzdelávanie, základy angličtiny, pohybové hry, čítanie rozprávok, hudobné nástroje, rozvoj jemnej motoriky, tvorenie a zapájanie sa do kolektívu.</p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#c93d2b]">Pravidelná dochádzka · pondelok až piatok</p>
              <h3 className="mt-1 text-2xl font-bold text-[#172a50]">Mesačné balíky</h3>
            </div>
            <span className="text-sm">20 dní</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {attendancePlans.map(([hours, price, detail]) => (
              <div key={hours} className="rounded-2xl bg-[#fffaf1] p-4">
                <p className="font-bold text-[#172a50]">{hours}</p>
                <p className="text-2xl font-bold text-[#c93d2b]">{price}</p>
                <p className="text-sm">{detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6">Každá ďalšia hodina pri pravidelnej dochádzke: 3 €. Nepravidelná dochádzka: 4 €/hod. (3-krát týždenne). Opatrovanie na 1 hodinu raz týždenne: 8 €/hod.</p>
          <p className="mt-3 text-sm leading-6">Denný program: príchod 7:00 – 8:00, raňajky 8:30, učenie hrou 9:00, desiata 10:00, prechádzka 10:45, obed a voľný program 12:00, olovrant 14:00, odchod 15:00.</p>
          <a className="mt-5 inline-flex rounded-full bg-[#c93d2b] px-5 py-3 font-bold text-white" href="tel:0944282864">Informácie: 0944 282 864</a>
        </div>
      </div>
    </section>
  );
}

export function Workshops() {
  return (
    <section id="workshopy" className="scroll-mt-24 bg-[#f2b82d] px-5 py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-2 font-semibold uppercase tracking-[.16em] text-[#172a50]">Tvorivý čas pre malých aj veľkých</p>
          <h2 className="text-3xl font-bold text-[#172a50] md:text-4xl">Víkendové workshopy</h2>
          <p className="mt-4 max-w-2xl leading-7">Priestory Detského centra Katka si môžete prenajať na vlastný workshop. Ponúkame tvorivé, vzdelávacie aj pohybové aktivity pre deti a rodičov.</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {workshopActivities.map((activity) => <li key={activity} className="rounded-full bg-[#fffaf1] px-4 py-2 text-sm font-semibold text-[#172a50]">{activity}</li>)}
          </ul>
        </div>
        <div className="min-w-56 rounded-3xl bg-[#fffaf1] p-6 text-center text-[#172a50] shadow-sm">
          <p className="font-semibold">Prenájom priestorov</p>
          <p className="mt-1 text-4xl font-bold text-[#c93d2b]">25 €</p>
          <p>za 1 hodinu</p>
          <a className="mt-5 inline-flex rounded-full bg-[#c93d2b] px-5 py-3 font-bold text-white" href="tel:0944282864">Dohodnúť termín</a>
        </div>
      </div>
    </section>
  );
}
