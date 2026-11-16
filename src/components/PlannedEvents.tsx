import mikulasskaParty from "../assets/mikulasskaakcia.jpg";

// Pri pridávaní ďalšej akcie stačí doplniť jej obsah do tohto zoznamu.
const plannedEvents = [
  {
    label: "Najbližšia akcia",
    title: "Mikulášska party",
    date: "Nedeľa 6. decembra 2026",
    time: "16:00 – 19:00",
    description:
      "Príďte si užiť popoludnie plné svetielok, hudby, smiechu a mikulášskych prekvapení!",
    image: mikulasskaParty,
    imageAlt:
      "Pozvánka na Mikulášsku party 6. decembra 2026 v Detskom centre Katka",
    program: [
      ["16:00", "Svetielkové mikulášske vystúpenie a disco s Mikulášskymi pomocníkmi"],
      ["17:00", "Príchod Mikuláša s pomocníkmi; zábava s čertovským Adamom"],
    ],
    treats: ["Čertovské zákusky", "Detský punč", "Slaný tanier", "Fotografia ako darček na pamiatku"],
    freeEntry:
      "Dieťa, ktoré príde 6. 12. o 9:00, bude mať vstup na párty zadarmo.",
    gift: "Každé dieťa si na rozlúčku vyberie hračku z nášho centra.",
    admission: "10 € / dieťa s rodičom",
    packagePrice: "Mikulášsky balíček: 9 €",
    places: "Počet miest je obmedzený na 50.",
    reservation: "Rezervácia stolíka a Mikulášskeho balíčka cez SMS",
  },
];

export function PlannedEvents() {
  return (
    <section className="bg-[#fff7e6] px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="font-semibold uppercase tracking-[.18em] text-[#c93d2b]">
            Čo sa u nás chystá
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#172a50] sm:text-4xl">
            Plánované akcie
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          {plannedEvents.map((event) => (
            <article key={event.title} className="grid md:grid-cols-2">
              <div className="flex items-center justify-center bg-[#172a50] p-4 sm:p-6">
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  className="max-h-[850px] w-full rounded-2xl object-contain"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-9 md:p-10">
                <span className="inline-flex rounded-full bg-[#f2b82d]/30 px-4 py-2 text-sm font-bold text-[#172a50]">
                  {event.label}
                </span>
                <h3 className="mt-4 text-3xl font-bold text-[#172a50] sm:text-4xl">
                  {event.title}
                </h3>
                <p className="mt-3 font-semibold text-[#c93d2b]">
                  {event.date} <span className="px-1">·</span> {event.time}
                </p>
                <p className="mt-4 leading-7 text-[#526079]">
                  {event.description}
                </p>

                <div className="mt-6 rounded-2xl bg-[#fff7e6] p-5">
                  <h4 className="font-bold text-[#172a50]">Program</h4>
                  <ul className="mt-3 space-y-3">
                    {event.program.map(([time, activity]) => (
                      <li key={time} className="flex gap-3 text-sm leading-6 text-[#526079]">
                        <span className="shrink-0 font-bold text-[#c93d2b]">{time}</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-[#172a50]">Čo bude v ponuke</h4>
                  <ul className="mt-2 grid gap-2 text-sm text-[#526079] sm:grid-cols-2">
                    {event.treats.map((treat) => (
                      <li key={treat} className="flex gap-2">
                        <span aria-hidden="true" className="font-bold text-[#c93d2b]">♥</span>
                        <span>{treat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-5 rounded-2xl bg-[#f2b82d]/25 p-4 text-sm font-semibold leading-6 text-[#172a50]">
                  {event.gift} {event.freeEntry}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#c93d2b] px-4 py-2 text-sm font-bold text-white">
                    Vstup: {event.admission}
                  </span>
                  <span className="rounded-full bg-[#172a50] px-4 py-2 text-sm font-bold text-white">
                    {event.packagePrice}
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold text-[#172a50]">{event.places}</p>
                <p className="mt-1 text-sm text-[#526079]">{event.reservation}</p>
                <a
                  href="sms:0944282864"
                  className="mt-4 inline-flex rounded-full bg-[#c93d2b] px-5 py-3 font-bold text-white transition hover:bg-[#a92f21]"
                >
                  Rezervovať cez SMS: 0944 282 864
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
