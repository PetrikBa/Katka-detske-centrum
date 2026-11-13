export function Party() {
  return (
    <section id="oslavy" className="bg-[#e8efe5] px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold">Oslava na presný čas</h2>
        <p className="mt-3 text-center text-[#66736c]">Čo si môžete vybrať</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            [
              "Oslava",
              "190 €",
              "10 detí a dospelí, vstup, 10 detských nápojov, 2× detské šampanské, 2× 1 l limonády, sladké a slané dobroty, výzdoba a hudba",
            ],
            [
              "Uzatvorená spoločnosť",
              "360 €",
              "Celé centrum len pre vás, súkromie, neobmedzená zábava a oslava bez cudzích návštevníkov",
            ],
            [
              "Maskot",
              "od 20 €",
              "Dino, Maco, Micky alebo Minnie. S animátorom 40 €.",
            ],
          ].map(([title, price, desc]) => (
            <article key={title} className="rounded-3xl bg-white p-7">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#a95643]">
                Oslava
              </p>
              <h3 className="mt-2 text-2xl font-bold">{title}</h3>
              <p className="mt-2 text-xl font-bold text-[#315e57]">{price}</p>
              <p className="mt-4 leading-7 text-[#66736c]">{desc}</p>
              <a
                href="#kontakt"
                className="mt-6 inline-block font-semibold text-[#315e57]"
              >
                Naplánovať oslavu →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
