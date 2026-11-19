import centrumPhoto from "./assets/centrum.jpg";
import partyPhoto from "./assets/oslavy.jpg";
import mascotPhoto from "./assets/maskoty.webp";
import cafePhoto from "./assets/bar.jpg";
import heroPhoto from "./assets/heroimg.png";
import { Booking } from "./components/Booking";
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";
import { PlannedEvents } from "./components/PlannedEvents";
import {
  MascotRental,
  SdocSlnecko,
  Workshops,
} from "./components/SpecialSections";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fffaf1] text-[#263b50]">
      <Header />
      <main>
        <section className="bg-[#172a50] text-[#fff7e6]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-4 font-semibold uppercase tracking-[.18em] text-[#f2b82d]">
                Katka · detská hernička a oslavy
              </p>
              <h1 className="max-w-xl text-5xl font-bold leading-tight md:text-6xl">
                Deti sa vyhrajú, vy si pokojne posedíte
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#f4ead5]">
                Detská rozprávková hernička na námestí v Novom Meste nad Váhom
                pre deti od 0 do 12 rokov o ploche takmer 380 m² s terasou. Oslavu si
                vyberiete na presný čas a termín platí po potvrdení.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="rounded-full bg-[#c93d2b] px-6 py-3 font-semibold text-white"
                  href="#dopyt"
                >
                  Zostaviť oslavu
                </a>
                <a
                  className="rounded-full border border-[#fff7e6] px-6 py-3 font-semibold text-[#fff7e6]"
                  href="tel:0944282864"
                >
                  Zavolať 0944 282 864
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                className="h-80 w-full rounded-[2rem] border-4 border-[#f2b82d] object-cover md:h-[26rem]"
                src={heroPhoto}
                alt="Detské ihrisko Katka"
              />
              {/* <span className="absolute -bottom-4 left-5 rounded-full bg-[#f2b82d] px-5 py-3 font-semibold text-[#172a50]">
                Otvorené denne 10:00 – 19:00
              </span> */}
            </div>
          </div>
        </section>
        <PlannedEvents />
        <Pricing />
        <Gallery />
        <Booking />
        {/*
        <div className="bg-[#f2b82d] px-5 py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 text-center sm:grid-cols-4">
            {[
              ["4,5 ★", "Google (53 recenzií)"],
              ["0–12", "pre každého drobca"],
              ["Denne", "10:00 – 19:00"],
              ["Oslavy", "presne podľa vás"],
            ].map(([a, b]) => (
              <div key={b}>
                <b className="text-xl">{a}</b>
                <p className="text-sm">{b}</p>
              </div>
            ))}
          </div>
        </div>
        */}
        <MascotRental />
        <SdocSlnecko />
        <Workshops />
        <Reviews />
        <section id="kontakt" className="scroll-mt-24 bg-[#f7eedc] px-5 py-16">
          <div className="mx-auto grid max-w-6xl items-stretch gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="max-w-lg text-4xl font-bold leading-tight text-[#172a50] sm:text-5xl">
                Kontakt a otváracie hodiny
              </h2>
              <div className="mt-7 border-t-2 border-[#172a50]">
                <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-[#172a50]/20 py-4 sm:grid-cols-[8rem_1fr]">
                  <span className="text-sm text-[#526079]">Telefón</span>
                  <a className="font-semibold text-[#172a50] underline decoration-[#c93d2b] underline-offset-4" href="tel:0944282864">0944 282 864</a>
                </div>
                <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-[#172a50]/20 py-4 sm:grid-cols-[8rem_1fr]">
                  <span className="text-sm text-[#526079]">E-mail</span>
                  <a className="break-all font-semibold text-[#172a50] underline decoration-[#c93d2b] underline-offset-4" href="mailto:detskecentrumkatka@gmail.com">detskecentrumkatka@gmail.com</a>
                </div>
                <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-[#172a50]/20 py-4 sm:grid-cols-[8rem_1fr]">
                  <span className="text-sm text-[#526079]">Adresa</span>
                  <span className="font-medium leading-6 text-[#172a50]">Námestie slobody 2869/3, 915 01 Nové Mesto nad Váhom</span>
                </div>
                <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-[#172a50]/20 py-4 sm:grid-cols-[8rem_1fr]">
                  <span className="text-sm text-[#526079]">Facebook</span>
                  <a className="font-semibold text-[#172a50] underline decoration-[#c93d2b] underline-offset-4" href="https://www.facebook.com/detskecentrumKatka" target="_blank" rel="noreferrer">Katka detské centrum</a>
                </div>
                <div className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-[#172a50]/20 py-4 sm:grid-cols-[8rem_1fr]">
                  <span className="text-sm text-[#526079]">Instagram</span>
                  <a className="font-semibold text-[#172a50] underline decoration-[#c93d2b] underline-offset-4" href="https://www.instagram.com/detske_centrum_katka/" target="_blank" rel="noreferrer">@detske_centrum_katka</a>
                </div>
              </div>
              <div className="mt-6">
                {[
                  ["Pondelok", "9:00 – 12:00, 15:00 – 19:00"],
                  ["Utorok", "9:00 – 12:00, 15:00 – 19:00"],
                  ["Streda", "9:00 – 12:00, 15:00 – 19:00"],
                  ["Štvrtok", "9:00 – 12:00, 15:00 – 19:00"],
                  ["Piatok", "9:00 – 19:00"],
                  ["Sobota", "9:00 – 19:00"],
                  ["Nedeľa", "9:00 – 19:00"],
                ].map(([day, hours]) => (
                  <div key={day} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-[#172a50]/20 py-3 font-semibold text-[#172a50] sm:grid-cols-[8rem_1fr]">
                    <span>{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex min-h-[360px] flex-col overflow-hidden rounded-3xl bg-[#efe0c1] shadow-sm md:min-h-[520px]">
              <iframe
                title="Mapa Detského centra Katka na Námestí slobody v Novom Meste nad Váhom"
                src="https://maps.google.com/maps?q=N%C3%A1mestie%20slobody%202869%2F3%2C%20915%2001%20Nov%C3%A9%20Mesto%20nad%20V%C3%A1hom&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="min-h-[360px] w-full flex-1 border-0 md:min-h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                className="px-5 py-3 text-center text-sm font-semibold text-[#172a50] underline underline-offset-4"
                href="https://maps.google.com/?q=N%C3%A1mestie%20slobody%202869%2F3%2C%20915%2001%20Nov%C3%A9%20Mesto%20nad%20V%C3%A1hom"
                target="_blank"
                rel="noreferrer"
              >
                Otvoriť trasu v Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#263b50] px-5 py-8 text-center text-white">
        Katka detské centrum · Nové Mesto nad Váhom ·{" "}
        <a href="tel:0944282864">0944 282 864</a>
      </footer>
    </div>
  );
}

function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14">
      <h2 className="text-3xl font-bold text-center">Pozrite sa k nám</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          [centrumPhoto, "Trampolíny, gulôčkový bazén a preliezky v interiérovom ihrisku"],
          [partyPhoto, "Narodeninový stôl s výzdobou"],
          [mascotPhoto, "Maskoty z požičovne v centre"],
        ].map(([img, caption]) => (
          <figure key={caption}>
            <img
              src={img}
              alt={caption}
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-2 text-center text-sm">{caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold">Kaviareň</h3>
        <figure className="mt-4 w-full max-w-sm">
          <img
            src={cafePhoto}
            alt="Kaviareň v detskom centre Katka"
            className="aspect-square w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-2 text-center text-sm">
            Káva, čaj, sladké a slané pochutiny
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
function Reviews() {
  return (
    <section className="bg-[#efe0c1] px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Čo o nás píšu hostia</h2>
        <p className="mt-2">Google: 4,5 z 5 (53 hodnotení)</p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            [
              "Pekné, menšie detské centrum s primeranými cenami. Je tu viacero hracích prvkov pre menšie aj väčšie deti. Pre rodičov miesto na sedenie.",
              "Eva Z.",
            ],
            [
              "Príjemné detské interiérové ihrisko, super aj pre menšie detičky. Navštívili sme ho prvýkrát a deti nechceli ísť domov. Určite sa ešte vrátime.",
              "Nikol B.",
            ],
            [
              "Detské centrum bolo moc super, príjemná obsluha, všade čisto, naozaj sme boli spokojní. Určite prídeme znova.",
              "Mário Č.",
            ],
          ].map(([quote, name]) => (
            <blockquote key={name} className="rounded-2xl bg-white p-6">
              <div className="tracking-widest text-[#c93d2b]">★★★★★</div>
              <p className="mt-3 leading-7">„{quote}”</p>
              <footer className="mt-4 text-sm font-semibold">
                {name}, Google
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
