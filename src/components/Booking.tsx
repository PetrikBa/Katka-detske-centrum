import { useState } from "react";
import partyPhoto from "../assets/oslavy.jpg";
import centrumPhoto from "../assets/centrum.jpg";
import mascotPhoto from "../assets/maskoty.webp";
import animatorPhoto from "../assets/animator.jpg";
import tablePhoto from "../assets/table.jpg";
const packs = [
  [
    "Rezervácia stola bez výzdoby",
    0,
    "",
    tablePhoto,
  ],
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
    centrumPhoto,
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
  ["Maskot s animátorom", 40, "Maskot a animátor, 1 deň, prinesú oslávencovi tortu a hrajú sa s ním", animatorPhoto],
] as const;
const food = [
  ["Prkénko", 1.5],
  ["Ovocná misa", 30],
  ["Hranolky", 5],
  ["Pizza malá", 7],
  ["Pizza veľká", 9],
  ["Nugetky (6 ks)", 5],
  ["Párok v rožku", 2.9],
  ["Zemiaková kvetina", 2.9],
  ["Palacinky", 2],
  ["Wafle", 2],
  ["Detský punč (2 dcl)", 2.5],
] as const;
export function Booking() {
  const [pack, setPack] = useState(0),
    [mascot, setMascot] = useState(0),
    [qty, setQty] = useState<string[]>(food.map(() => "")),
    [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const total =
    packs[pack][1] +
    mascots[mascot][1] +
    qty.reduce((s, n, i) => s + (Number(n) || 0) * food[i][1], 0);
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
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          setStatus("sending");
          try {
            const response = await fetch("./odoslat.php", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                children: formData.get("children"),
                date: formData.get("date"),
                time: formData.get("time"),
                note: formData.get("note"),
                website: formData.get("website"),
                pack: packs[pack][0],
                mascot: mascots[mascot][0],
                food: food.map(([name], i) => ({ name, quantity: qty[i] || "0" })),
              }),
            });
            const result: { success?: boolean } = await response.json();
            setStatus(response.ok && result.success ? "success" : "error");
          } catch {
            setStatus("error");
          }
        }}
        className="mx-auto max-w-3xl rounded-3xl border border-[#aab4bf] bg-white p-5 shadow-sm sm:p-8"
      >
        <h2 className="text-3xl font-bold text-center">Zostavte si oslavu</h2>
        <p className="mt-2 text-sm text-slate-600 text-center">
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
                max="100"
                step="1"
                inputMode="numeric"
                placeholder="0"
                value={qty[i]}
                name={`food_${i}`}
                onChange={(e) => setQty(qty.map((n, j) => j === i ? e.target.value : n))}
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
              name="name"
              maxLength={120}
              autoComplete="name"
              className="rounded-lg border p-3"
            />
          </label>
          <label className="grid gap-1 text-sm">
            E-mail
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className="rounded-lg border p-3"
            />
          </label>
          <label className="grid gap-1 text-sm">
            Telefón (nepovinné)
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              className="rounded-lg border p-3"
            />
          </label>
          <label className="grid gap-1 text-sm">
            Počet detí (nepovinné)
            <input
              type="number"
              name="children"
              min="1"
              max="60"
              className="rounded-lg border p-3"
            />
          </label>
          <label className="grid gap-1 text-sm">
            Dátum oslavy
            <input type="date" name="date" required className="rounded-lg border p-3" />
          </label>
          <label className="grid gap-1 text-sm">
            Začiatok oslavy
            <select name="time" required className="rounded-lg border p-3">
              <option value="">Vyberte začiatok oslavy</option>
              {Array.from({ length: 17 }, (_, index) => {
                const minutes = 10 * 60 + index * 30;
                const time = `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
                return <option key={time} value={time}>{time}</option>;
              })}
            </select>
          </label>
        </div>
        <label className="mt-4 grid gap-1 text-sm">
          Poznámka (meno oslávenca, vek, alergie)
          <textarea
            rows={3}
            name="note"
            maxLength={3000}
            className="rounded-lg border p-3"
          />
        </label>
        <label aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
          Nevyplňujte toto pole
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <p className="mt-3 text-xs text-slate-500">
          Kontaktné údaje použijeme na vybavenie vášho dopytu. Termín platí až
          po potvrdení.
        </p>
        <button disabled={status === "sending"} className="mt-4 rounded-full bg-[#c93d2b] px-6 py-3 font-bold text-white disabled:cursor-wait disabled:opacity-60">
          {status === "sending" ? "Odosielam…" : "Odoslať formulár"}
        </button>
        {status !== "idle" && status !== "sending" && (
          <p role={status === "success" ? "status" : "alert"} className={`mt-3 ${status === "success" ? "text-[#172a50]" : "text-[#a1261b]"}`}>
            {status === "success"
              ? "Ďakujeme, váš dopyt sme odoslali. Čoskoro sa vám ozveme."
              : "Dopyt sa nepodarilo odoslať. Skúste to, prosím, znova alebo nám zavolajte na 0944 282 864."}
          </p>
        )}
      </form>
    </section>
  );
}
