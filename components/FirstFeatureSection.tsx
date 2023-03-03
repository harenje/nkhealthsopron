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
        <div className="text-nk-black flex flex-col lg:items-center lg:flex-row">
          <motion.div
            className="ml-5 my-5 xl:my-0 lg:mr-2"
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
            <h1 className="flex flex-col text-4xl 2xl:text-5xl font-bold uppercase mb-5">
              <span>kik</span> <span>vagyunk</span>
            </h1>
            <span className="text-lg 2xl:text-xl min-[1920px]:text-2xl tracking-widest">
              Mi segítünk elérni a{" "}
              <strong className="text-nk-red uppercase">legjobb</strong>{" "}
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
              src={"/../public/images/feature2.jpg"}
              alt="About Us Image"
              width={3000}
              height={3000}
              className="self-stretch"
            ></Image>
          </motion.div>
        </div>
      </section>
      <section className="flex flex-col-reverse text-nk-black items-center lg:flex-row">
        <motion.div
          className="flex self-stretch"
          variants={cardVariants}
          exit="exit"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <Image
            src={"/../public/images/feature2_2nd.jpg"}
            alt="About Us Second Image"
            width={3650}
            height={4000}
            className="self-stretch"
          ></Image>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center ml-5 my-5 xl:my-0 lg:mr-2"
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
          <h1 className="text-4xl 2xl:text-5xl font-bold uppercase mb-5 tracking-widest">
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
    // <div className="flex">
    //   <div className="p-5 max-w-sm text-nk-black flex flex-col space-y-5">
    //     <h1 className="text-4xl font-bold uppercase lg:pt-16">rólunk</h1>
    //     <span className="text-xl">
    //       Azért vagyunk, hogy segítsünk elérni a legjobb formádat.
    //     </span>
    //     <span className="text-xl">
    //       Kvalifikált személyi edzők vagyunk, professzionális múlttal, több éves
    //       szakmai tapasztalattal.
    //     </span>
    //     <span className="text-xl">
    //       Nálunk fejlett eszközökkel, mindig megújuló tervekkel dolgozhatsz,
    //       mindezeket lendületesen és vidám hangulatban.
    //     </span>
    //     <div className="self-start">
    //       <Link href="/edzok">
    //         <Button>edzőink</Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
