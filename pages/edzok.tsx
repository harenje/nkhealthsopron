import { useState } from "react";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Edzok = () => {
  return (
    <>
      <section className="bg-nk-black h-full pb-20">
        <Navbar />
        <div className="container mx-auto flex flex-col p-5 pb-20">
          <h1 className="text-4xl text-nk-white font-bold uppercase">edzők</h1>
          <hr className="border-nk-red border-solid border-2 rounded-md w-16"></hr>
        </div>
        <div className="text-nk-white grid grid-cols-1 gap-20 lg:grid lg:grid-cols-2 justify-items-center">
          <Edzo
            alt="Trainer Kevin"
            description={
              <>
                <span>
                  Varga Kevin vagyok a sport és a mozgás gyermekkorom óta nagy
                  szerepet játszik az életemben. Fiatal korom ellenére kiváló
                  sportolói múlttal rendelkezem. A mai napig is aktívan
                  foglalkozom labdarúgással.
                </span>{" "}
                <span>
                  Tanulmányaimban és a sportban szerzett tapasztalataim alapján
                  igyekszem a sportolni, mozogni vágyók minden igényét a lehető
                  legmaximálisabban kielégíteni.
                </span>
                <span>
                  Mire számíthatsz ha velem dolgozol? <br></br>- Precíz munka{" "}
                  <br></br>- Kivaló szakmai felkészültség <br></br>- Profi
                  hozzáállás
                </span>
                <span>📞 Varga Kevin: +36202432650</span>
                <span> 📩 nkhss2022@gmail.com</span>
              </>
            }
            image={"/../public/images/Kevin.jpg"}
            name="Varga Kevin"
            role="személyi edző"
          />
          <Edzo
            alt="Trainer Norbert"
            description={
              <>
                <span>
                  Baranyai Norbert vagyok 35 éves. 6 éves koromban ismerkedtem
                  meg a csapatsportokkal, a labdarúgásnak azóta is a rabja
                  vagyok. Profi labdarúgó múlttal rendelkezem. A sport az
                  életem, a sport megtanított a kitartásra, a céltudatosságra, a
                  kemény munkára, és az alázatra.
                </span>{" "}
                <span>
                  Ahogy az életben, úgy a sportban is mindent meg kell tenni
                  ahhoz, hogy a céljainkat elérjük, azért kezdtem el edzőként
                  dolgozni, hogy hozzá tudjam segíteni a vendégeimet egy
                  egészségesebb, fittebb élethez.
                </span>
                <span>📞 Baranyai Norbert: +36308921068</span>
                <span> 📩 nkhss2022@gmail.com</span>
              </>
            }
            image={"/../public/images/Norbi.jpg"}
            name="Baranyai Norbert"
            role="személyi edző"
          />

          <Edzo
            alt="Trainer Adrienn"
            description={
              <>
                <span>
                  Ivancsics Adrienn vagyok Fitness Instruktor /személyi edzés,
                  táplálkozási- és életmód tanácsadás/
                </span>{" "}
                <span>
                  Az évek során folyamatosan bővítettem ismereteimet a fitnesz
                  területén és tanulmányaimat az IWI Nemzetközi Fitnesz
                  Akadémián végeztem. Mit jelent számomra a sport? Szenvedély,
                  kikapcsolódás, testi-lelki feltöltődés. Ezt szeretném átadni a
                  közös edzések során vendégeimnek, mindenekelőtt az
                  egészségmegőrzést szem előtt tartva.
                </span>
                <span>
                  Célom, hogy átadjam a mozgás szeretetét, és együtt elérjük a
                  kitűzött célt. Amiben segítségedre lehetek:-életmódváltás
                  táplálkozási tanácsadás -állóképesség fejlesztés -funkcionális
                  edzések -tartásjavítás
                </span>
              </>
            }
            image={"/../public/images/Adrienn.jpg"}
            name="Ivancsics Adrienn"
            role="személyi edző"
          />

          <Edzo
            alt="Trainer Judit"
            description={
              <>
                <span>
                  Palotai-Fodor Juditnak hívnak, egy csodálatos eleven kislány
                  édesanyja vagyok. Célom minél többet kihozni magamból, hogy
                  ezáltal minden sportolni vágyónak segítséget tudjak nyújtani.
                  A sport mindig is az életem része volt különböző formában.
                  Kosárlabdáztam, művészi tornáztam…, sokféle sportban
                  kipróbáltam magamat.
                </span>{" "}
                <span>
                  Tanulmányaimat az IWI Nemzetközi Fitness Akadémián végeztem, a
                  naprakész tudásomat folyamatos képzésekkel bővítem. Szeretnék
                  mindenkit a mozgás örömére ösztönözni, és együtt haladni az
                  úton. Férjem és családom támogatásával lehetőségem nyílt ennek
                  továbbadására.
                </span>
                <span>
                  “A sikerhez vezető lift nem működik! Használd a lépcsőt!
                  Lépésről lépésre…” - Joe Girard
                </span>
              </>
            }
            image={"/../public/images/Judit.jpg"}
            name="Palotai-Fodor Judit"
            role="személyi edző"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

interface EdzoProps {
  image: string;
  alt: string;
  description: React.ReactNode;
  name: string;
  role: string;
}

export default Edzok;
function Edzo(props: EdzoProps) {
  const [infoToggler, setInfoToggler] = useState(false);

  const infoToggleHandler = () => {
    setInfoToggler(!infoToggler);
  };

  return (
    <div className="flex flex-col basis-1/2 pb-10 relative">
      <Image
        src={props.image}
        alt={props.alt}
        width={400}
        height={400}
        className="rounded-xl"
      ></Image>

      <div
        className={`bg-nk-grey rounded-xl ${
          infoToggler ? "opacity-0" : "opacity-100"
        } absolute top-1 left-2 right-2 p-2 flex flex-col gap-1`}
      >
        {props.description}
      </div>

      <h1>{props.name}</h1>
      <small>{props.role}</small>
    </div>
  );
}
