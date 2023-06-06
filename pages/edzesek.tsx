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
          <div className="container mx-auto flex flex-col items-center py-5 lg:items-start">
            <h1 className="ml-2 text-4xl font-bold uppercase text-nk-white">
              edzések
            </h1>
            <hr className="ml-2 w-[9.5rem] rounded-md border-2 border-solid border-nk-red lg:w-24" />
          </div>
          <div className="container mx-auto w-full">
            <div className="flex flex-col xl:flex-row xl:items-center">
              <div className="mb-5 mr-5 ml-2 flex flex-col">
                <motion.h1
                  className="mb-5 self-center text-2xl font-bold text-nk-white"
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Sportolók fejlesztése
                </motion.h1>
                <p className="text-lg font-light leading-relaxed text-nk-white">
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
                src="/images/edzesekkep.jpg"
                alt="Trainer with Client"
                width={700}
                height={700}
                sizes="(max-width: 1024px) 80vw,
              (max-width: 1200px) 100vw
              "
                className="mb-2 md:ml-2 md:w-full md:pr-4 lg:mr-2 xl:w-[700px] xl:pr-0"
              ></Image>
            </div>
            <div className="mt-5 mb-2 flex flex-col-reverse xl:flex-row xl:items-center">
              <Image
                src="/images/edzeskkep2.jpg"
                alt="Trainer with Client"
                width={700}
                height={700}
                sizes="(max-width: 1024px) 80vw,
              (max-width: 1200px) 100vw,
              "
                className="md:ml-2 md:w-full md:pr-4 lg:mr-2 xl:w-[700px] xl:pr-0"
              ></Image>
              <div className="mb-5 ml-2 flex flex-col">
                <motion.h1
                  className="mb-5 self-center text-2xl font-bold text-nk-white"
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Személyi edzés
                </motion.h1>
                <p className="text-lg font-light leading-relaxed text-nk-white">
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
          </div>
        </Layout>
      </section>

      <Footer />
    </>
  );
};

export default Edzesek;
