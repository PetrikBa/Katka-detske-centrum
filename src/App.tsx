import poolPhoto from "./assets/bazen.jpg";
import partyPhoto from "./assets/oslavy.jpg";
import mascotPhoto from "./assets/maskoty.webp";
import heroPhoto from "./assets/heroimg.png";
import { Booking } from "./components/Booking";
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";
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
                pre deti od 0 do 12 rokov o ploche takmer 400m². Oslavu si
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
        <section id="kontakt" className="bg-[#efe0c1] px-5 py-16 scroll-mt-24">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                Centrum, ktoré patrí vám a vašim deťom
              </h2>
              <p className="mt-4 leading-7">
                Katka detské centrum je detské rozprávkové ihrisko na námestí v
                Novom Meste nad Váhom. Deti sa tu zahrajú, rodičia môžu posedieť
                a oddýchnuť si. Oslávte narodeniny svojich detí v príjemnom
                prostredí.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 leading-8">
              <b>Kontakt a otváracie hodiny</b>
              <p>
                0944 282 864
                <br />
                Nové Mesto nad Váhom
                <br />
                Pondelok – Nedeľa　10:00 – 19:00
              </p>
              <a href="mailto:detskecentrumkatka@gmail.com">
                detskecentrumkatka@gmail.com
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
      <h2 className="text-3xl font-bold">Pozrite sa k nám</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          [poolPhoto, "Gulôčkový bazén a preliezky v interiérovom ihrisku"],
          [partyPhoto, "Narodeninový stôl s výzdobou"],
          [mascotPhoto, "Maskoty z požičovne v centre"],
        ].map(([img, caption]) => (
          <figure key={caption}>
            <img
              src={img}
              alt={caption}
              className="h-56 w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-2 text-sm">{caption}</figcaption>
          </figure>
        ))}
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
