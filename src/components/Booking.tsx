import { useState } from "react";
import partyPhoto from "../assets/oslavy.jpg";
import poolPhoto from "../assets/bazen.jpg";
import mascotPhoto from "../assets/maskoty.webp";
import animatorPhoto from "../assets/animator.jpg";
const packs = [
  [
    "Oslava",
    190,
    "10 detí a dospelí, vstup, 10 detských nápojov, 2× detské šampanské, 2× 1 l limonády, sladké a slané dobroty, výzdoba a hudba",
    partyPhoto,
  ],
  [
    "Uzatvorená spoločnosť",
    360,
    "Celé centrum len pre vás, súkromie, neobmedzená zábava a oslava bez cudzích návštevníkov.",
    poolPhoto,
  ],
] as const;
const mascots = [
  ["Bez maskota", 0, "Oslava len s balíkom, ktorý ste si vybrali.", ""],
  [
    "Maskot v centre bez animátora",
    20,
    "Dino, Maco, Micky alebo Minnie, 1 deň.",
    mascotPhoto,
  ],
  ["Maskot s animátorom", 40, "Maskot a animátor, 1 deň.", animatorPhoto],
] as const;
const food = [
  ["Ovocné a mäsové prkénko", 18],
  ["Hranolky", 4],
  ["Pizza", 9],
  ["Nugetky", 6],
  ["Párok v rožku", 3],
  ["Zemiaková kvetina", 5],
  ["Palacinky", 4],
] as const;
export function Booking() {
  const [pack, setPack] = useState(0),
    [mascot, setMascot] = useState(0),
    [qty, setQty] = useState<number[]>(food.map(() => 0)),
    [sent, setSent] = useState(false);
  const total =
    packs[pack][1] +
    mascots[mascot][1] +
    qty.reduce((s, n, i) => s + n * food[i][1], 0);
  const card = (
    item: readonly [string, number, string, string],
    selected: boolean,
    click: () => void,
  ) => (
    <button
      type="button"
      onClick={click}
      className={`flex h-full min-h-80 w-full flex-col overflow-hidden rounded-2xl border-2 text-left transition ${selected ? "border-[#c93d2b] bg-[#fff7ee]" : "border-[#e5dfd4] bg-white"}`}
    >
      {item[3] && (
        <img
          src={item[3].startsWith("/") ? item[3] : `/foto/${item[3]}`}
          className={`h-36 w-full shrink-0 object-cover ${item[3] === animatorPhoto ? "object-top" : "object-center"}`}
        />
      )}
      <span className={`flex-1 p-4 ${item[3] ? "block" : "flex flex-col justify-center"}`}>
        <b>{item[0]}</b>
        <b className={`float-right text-[#c93d2b] ${item[1] ? "" : "text-xs"}`}>
          {item[1] ? `${item[1]} €` : "bez príplatku"}
        </b>
        <small className="mt-2 block leading-5 text-slate-600">{item[2]}</small>
      </span>
    </button>
  );
  return (
    <section id="dopyt" className="bg-[#f7efdf] px-4 py-16">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mx-auto max-w-3xl rounded-3xl border border-[#aab4bf] bg-white p-5 shadow-sm sm:p-8"
      >
        <h2 className="text-3xl font-bold">Zostavte si oslavu</h2>
        <p className="mt-2 text-sm text-slate-600">
          Vyberte balík, maskota a občerstvenie. Termín platí po potvrdení.
        </p>
        <h3 className="mb-3 mt-7 font-bold">1. Balík oslavy</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {packs.map((x, i) => (
            <div key={x[0]}>{card(x, pack === i, () => setPack(i))}</div>
          ))}
        </div>
        <h3 className="mb-3 mt-7 font-bold">2. Maskot na oslavu</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {mascots.map((x, i) => (
            <div key={x[0]}>{card(x, mascot === i, () => setMascot(i))}</div>
          ))}
        </div>
        <h3 className="mb-3 mt-7 font-bold">3. Catering podľa výberu</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {food.map(([name, price], i) => (
            <label
              key={name}
              className="flex items-center gap-3 rounded-xl border p-3"
            >
              <span className="flex-1">
                <b>{name}</b>
                <small className="block text-[#c93d2b]">{price} € / ks</small>
              </span>
              <input
                aria-label={`Počet ${name}`}
                className="w-16 rounded-lg border p-2 text-center"
                type="number"
                min="0"
                value={qty[i]}
                onChange={(e) =>
                  setQty(
                    qty.map((n, j) =>
                      i === j ? Math.max(0, +e.target.value) : n,
                    ),
                  )
                }
              />
            </label>
          ))}
        </div>
        <div className="my-6 border-y py-4">
          <b>Váš výber</b>
          <p className="mt-2 text-sm">
            {packs[pack][0]} · {packs[pack][1]} € · {mascots[mascot][0]}
            {mascots[mascot][1] ? ` · ${mascots[mascot][1]} €` : ""}
          </p>
          <p className="mt-1 text-2xl font-bold text-[#c93d2b]">
            Orientačne {total} €
          </p>
          <small>Catering je nacenený orientačne podľa vášho výberu.</small>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <label className="grid gap-1 text-sm">
            Meno
            <input
              required
              maxLength={120}
              autoComplete="name"
              className="rounded-lg border p-3"
            />
          </label>
          <label className="grid gap-1 text-sm">
            E-mail
            <input
              required
              type="email"
              autoComplete="email"
              className="rounded-lg border p-3"
            />
          </label>
          <label className="grid gap-1 text-sm">
            Telefón (nepovinné)
            <input
              type="tel"
              autoComplete="tel"
              className="rounded-lg border p-3"
            />
          </label>
          <label className="grid gap-1 text-sm">
            Počet detí (nepovinné)
            <input
              type="number"
              min="1"
              max="60"
              className="rounded-lg border p-3"
            />
          </label>
          <label className="grid gap-1 text-sm">
            Dátum oslavy
            <input type="date" required className="rounded-lg border p-3" />
          </label>
          <label className="grid gap-1 text-sm">
            Čas oslavy
            <select required className="rounded-lg border p-3">
              <option value="">Vyberte čas</option>
              <option>10:00 - 13:00</option>
              <option>15:00 - 18:00</option>
            </select>
          </label>
        </div>
        <label className="mt-4 grid gap-1 text-sm">
          Poznámka (meno oslávenca, vek, alergie)
          <textarea
            rows={3}
            maxLength={3000}
            className="rounded-lg border p-3"
          />
        </label>
        <p className="mt-3 text-xs text-slate-500">
          Kontaktné údaje použijeme na vybavenie vášho dopytu. Termín platí až
          po potvrdení.
        </p>
        <button className="mt-4 rounded-full bg-[#c93d2b] px-6 py-3 font-bold text-white">
          {sent ? "Dopyt pripravený" : "Odoslať dopyt na oslavu"}
        </button>
        {sent && (
          <p role="status" className="mt-3 text-[#172a50]">
            Ďakujeme, váš dopyt je pripravený.
          </p>
        )}
      </form>
    </section>
  );
}
