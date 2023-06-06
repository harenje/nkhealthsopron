import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8 },
  },
  exit: {
    x: 300,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 360,
      damping: 30,
    },
  },
};

export default function FirstFeatureSection() {
  return (
    <>
      <section className="">
        <div className="flex flex-col text-nk-black lg:flex-row lg:items-center">
          <motion.div
            className="my-5 ml-5 lg:mr-2 xl:my-0"
            variants={cardVariants}
            exit="exit"
            initial={{ x: -300 }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 45,
              delay: 0.15,
            }}
            viewport={{ once: true }}
          >
            <h1 className="mb-5 flex flex-col text-4xl font-bold uppercase 2xl:text-5xl">
              <span>kik</span> <span>vagyunk</span>
            </h1>
            <span className="text-lg tracking-widest 2xl:text-xl min-[1920px]:text-2xl">
              Mi segítünk elérni a{" "}
              <strong className="uppercase text-nk-red">legjobb</strong>{" "}
              formádat.
            </span>
            <br></br>
            <span className="text-lg 2xl:text-xl min-[1920px]:text-2xl">
              Kvalifikált személyi edzők vagyunk, professzionális múlttal, több
              éves szakmai tapasztalattal.
            </span>
            <span className="text-lg 2xl:text-xl min-[1920px]:text-2xl">
              Nálunk fejlett eszközökkel, mindig megújuló tervekkel dolgozhatsz,
              mindezeket lendületesen és vidám hangulatban.
            </span>
            <div className="mt-5 lg:mb-2">
              <Link href="/edzok" scroll={false}>
                <Button>edzőink</Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex self-stretch"
            variants={cardVariants}
            exit="exit"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <Image
              src={"/images/feature2.jpg"}
              alt="About Us Image"
              width={3000}
              height={3000}
              className="self-stretch"
            ></Image>
          </motion.div>
        </div>
      </section>
      <section className="flex flex-col-reverse items-center text-nk-black lg:flex-row">
        <motion.div
          className="flex self-stretch"
          variants={cardVariants}
          exit="exit"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <Image
            src={"/images/feature2_2nd.jpg"}
            alt="About Us Second Image"
            width={3650}
            height={4000}
            className="self-stretch"
          ></Image>
        </motion.div>
        <motion.div
          className="my-5 ml-5 flex flex-col justify-center lg:mr-2 xl:my-0"
          variants={cardVariants}
          exit="exit"
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 45,
          }}
          viewport={{ once: true }}
        >
          <h1 className="mb-5 text-4xl font-bold uppercase tracking-widest 2xl:text-5xl">
            alakítsd a tested, erősítsd az elméd
          </h1>
          <p className="text-lg 2xl:text-xl min-[1920px]:text-2xl">
            Edzéseink kombinálják a cardio és az erősítő edzések elemeit a
            teljes test edzéséhez. Biztosak vagyunk abban, hogy ügyfeleink
            megtapasztalják a pozitív változást a testükben és a lelkükben.
          </p>
          <p className="text-lg 2xl:text-xl min-[1920px]:text-2xl">
            Segítünk ügyfeleinknek fenntartani a fizikai és mentális egészséget
            a hosszú távú eredmények érdekében. Velünk együtt érheti el céljait,
            javíthatja életminőségét és élvezheti a fizikai aktivitás örömeit.
          </p>
        </motion.div>
      </section>
    </>
  );
}
