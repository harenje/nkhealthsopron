import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import Layout from "../components/Animation/Layout";
import { motion } from "framer-motion";

const Edzesek = () => {
  return (
    <>
      <section className="h-full w-full bg-nk-black">
        <Navbar />
        <Layout>
          <div className="container mx-auto py-5 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl uppercase text-nk-white font-bold ml-2">
              edzések
            </h1>
            <hr className="border-nk-red border-solid border-2 rounded-md w-[9.5rem] lg:w-24 ml-2" />
          </div>
          <div className="w-full container mx-auto">
            <div className="flex flex-col xl:flex-row xl:items-center">
              <div className="flex flex-col mb-5 mr-5 ml-2">
                <motion.h1
                  className="text-2xl font-bold text-nk-white mb-5 self-center"
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Sportolók fejlesztése
                </motion.h1>
                <p className="text-lg text-nk-white font-light leading-relaxed">
                  Egyéni edzéstervekkel dolgozunk, melyeket progresszíven
                  állítunk össze. Fő célkitűzéseink az állóképesség, a gyorsaság
                  és a robbanékonyság fejlesztése, valamint ezekhez szükséges
                  erőnövelés. Nagyon fontosnak tartjuk a megelőző
                  teljesítményfokozást is, amely minimalizálja a sérülés
                  kockázatát és lehetővé teszi a különböző kondicionális
                  képességek hatékonyabb fejlesztését. Az erőnövelő programunk
                  hat lépcsőből áll, melyek tartalmazzák a stabilizációt, az
                  állóképességet, a hipertrófiát, a maximális erőt, a
                  gyorsaságot és a robbanékonyságot. Ez a felosztás lehetővé
                  teszi a teljeskörű képességfejlesztést.
                </p>
              </div>
              <Image
                src="../public/static/images/edzesekkep.jpg"
                alt="Trainer with Client"
                width={700}
                height={700}
                sizes="(max-width: 1024px) 80vw,
              (max-width: 1200px) 100vw
              "
                className="mb-2 md:ml-2 lg:mr-2 md:pr-4 md:w-full xl:w-[700px] xl:pr-0"
              ></Image>
            </div>
            <div className="flex flex-col-reverse xl:flex-row xl:items-center mt-5 mb-2">
              <Image
                src="../public/static/images/edzeskkep2.jpg"
                alt="Trainer with Client"
                width={700}
                height={700}
                sizes="(max-width: 1024px) 80vw,
              (max-width: 1200px) 100vw,
              "
                className="md:ml-2 lg:mr-2 md:pr-4 md:w-full xl:w-[700px] xl:pr-0"
              ></Image>
              <div className="flex flex-col mb-5 ml-2">
                <motion.h1
                  className="text-2xl font-bold text-nk-white mb-5 self-center"
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Személyi edzés
                </motion.h1>
                <p className="text-lg text-nk-white font-light leading-relaxed">
                  Személyi edzés szolgáltatásunk mindenki számára elérhető, aki
                  egészségét megőrizni, testsúlyát csökkenteni vagy izomtömegét
                  növelni szeretné, valamint az egészséges életmódra törekszik.
                  Az edzéstervünk egyedülálló és személyre szabott, figyelembe
                  véve a vendég korát, életvitelét, edzettségi szintjét és
                  egészségügyi kockázatait. Az edzéstervünk nemcsak az
                  állóképesség, az erőnövelés, a koordináció és az egyensúly
                  fejlesztésére összpontosít, hanem nagy hangsúlyt fektet a
                  sérülések kockázatának csökkentésére is, így biztonságos és
                  hatékony edzéstervet kínálunk vendégeinknek. Az edzéstervünk
                  több lépcsőből áll, amelyek a vendég edzettségi szintjéhez és
                  céljaihoz igazodnak. Az első lépcső a stabilizáció, amely
                  segít a vendégeknek az alapvető izomcsoportok fejlesztésében.
                  Az állóképesség növelése és az izomnövekedés (hipertrófia)
                  következik, majd a maximális erőnövelés és a gyorsaság
                  fejlesztése.
                </p>
              </div>
            </div>
            {/* <div className="p-5 container mx-auto max-w-lg flex flex-col justify-start gap-5">
            <h1 className="text-2xl font-bold text-nk-white">
              Sportolók fejlesztése
            </h1>
            <p className="text-lg text-nk-white font-light leading-relaxed">
              Egyéni edzéseink keretében progresszíven felépített program
              szerint dolgozunk. Fő profilként az állóképesség a gyorsaság és a
              robbanékonyságot tűztük ki célul, illetve ezekhez a képességhez
              szükséges erőfejlesztést. Kiemelten fontos számunkra a preventív
              teljesítményfokozás mellyel lehetővé tesszük, hogy a sérülések
              kockázatát minimális szintre csökkentsük és megteremtsük az
              alapját a különböző kondícionális képességek leghatékonyabb
              feljesztésének. Erőfejlesztő programunkat hat lépcsőben építjük
              fel, mely tartalmazza a stabilizációt, erő állóképességet,
              hipertrófiát, maximális erőt, gyorserőt és robbanékonyságot. Ez a
              fajta felosztás biztosítja számunkra a teljeskörű
              képességfejlesztést.
            </p>
          </div>
        </div>
        <div className="p-5 container mx-auto flex flex-col gap-5 justify-center items-center">
          <h1 className="text-2xl font-bold text-nk-white">Személyi edzés</h1>
          <p className="text-lg text-nk-white font-light leading-relaxed">
            Nem élsportoló vendégeinknek is több lépcsőből álló edzésterv
            alapján kívánunk segíteni a céljaik elérésében, legyen az
            testsúlycsökkentés, izomtömeg növelés vagy egészséges életmódhoz
            való hozzásegítés.
          </p>*/}
          </div>
        </Layout>
      </section>

      <Footer />
    </>
  );
};

export default Edzesek;
