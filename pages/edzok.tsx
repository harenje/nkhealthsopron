import { useState, useRef, useEffect } from "react";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Layout from "../components/Animation/Layout";
import { motion } from "framer-motion";

const Edzok = () => {
  return (
    <>
      <section className="h-full bg-nk-black pb-20">
        <Navbar />
        <motion.div
          className="container mx-auto flex flex-col items-center pb-20 lg:items-start"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
          <h1 className="text-4xl font-bold uppercase text-nk-white lg:ml-5 xl:ml-0">
            edzők
          </h1>
          <hr className="w-28 rounded-md border-2 border-solid border-nk-red lg:ml-5 lg:w-16 xl:ml-0"></hr>
        </motion.div>
        <Layout>
          <div className="mx-5 grid grid-cols-1 justify-items-center gap-20 text-nk-white md:grid md:grid-cols-2">
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
                    Tanulmányaimban és a sportban szerzett tapasztalataim
                    alapján igyekszem a sportolni, mozogni vágyók minden igényét
                    a lehető legmaximálisabban kielégíteni.
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
              image={"/images/Kevin.jpg"}
              name="Varga Kevin"
              role="személyi edző / erőnléti edző"
            />
            <Edzo
              alt="Trainer Norbert"
              description={
                <>
                  <span>
                    Baranyai Norbert vagyok 35 éves. 6 éves koromban ismerkedtem
                    meg a csapatsportokkal, a labdarúgásnak azóta is a rabja
                    vagyok. Profi labdarúgó múlttal rendelkezem. A sport az
                    életem, a sport megtanított a kitartásra, a céltudatosságra,
                    a kemény munkára, és az alázatra.
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
              image={"/images/Norbi.jpg"}
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
                    kikapcsolódás, testi-lelki feltöltődés. Ezt szeretném átadni
                    a közös edzések során vendégeimnek, mindenekelőtt az
                    egészségmegőrzést szem előtt tartva.
                  </span>
                  <span>
                    Célom, hogy átadjam a mozgás szeretetét, és együtt elérjük a
                    kitűzött célt. Amiben segítségedre lehetek:-életmódváltás
                    táplálkozási tanácsadás -állóképesség fejlesztés
                    -funkcionális edzések -tartásjavítás
                  </span>
                  <span>📞 Ivancsics Adrienn: +36304443563</span>
                </>
              }
              image={"/images/Adrienn.jpg"}
              name="Ivancsics Adrienn"
              role="személyi edző"
            />
           

           
          </div>
        </Layout>
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
    <motion.div
      className="relative flex basis-1/2 flex-col pb-10"
      animate={{
        scale: [1, 1.05, 1],
      }}
    >
      <Image
        src={props.image}
        alt={props.alt}
        width={400}
        height={400}
        className="rounded-xl"
      ></Image>
      <div className="z-50 mt-1">
        <Button onClick={infoToggleHandler}>Személyes leírás</Button>
      </div>

      <div
        className={`cursor-default rounded-xl bg-nk-grey ${
          infoToggler
            ? "bg-opacity-80 text-xs transition-all delay-100 duration-300 2xl:text-sm"
            : "opacity-0 transition-all delay-100 duration-300"
        } absolute top-1 left-2 right-2 flex flex-col gap-1 p-1 transition-all`}
      >
        {props.description}
      </div>

      <h1>{props.name}</h1>
      <small>{props.role}</small>
    </motion.div>
  );
}
