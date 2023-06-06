import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Layout from "../components/Animation/Layout";
import { motion } from "framer-motion";

const Kapcsolat = () => {
  return (
    <>
      <section className="h-full bg-nk-black">
        <Navbar />
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-10 p-5 text-nk-white">
            <motion.div
              className="flex flex-col items-center lg:items-start"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 30,
              }}
            >
              <h1 className="text-4xl font-bold uppercase text-nk-white">
                kapcsolat
              </h1>
              <hr className="w-52 rounded-md border-2 border-solid border-nk-red lg:w-36"></hr>
            </motion.div>
            <motion.div
              className="flex gap-2"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 30,
              }}
            >
              <Image
                src="/images/house.ico"
                alt="House symbol"
                width={32}
                height={32}
              ></Image>
              <p>NK Health & Sport Stúdió</p>
            </motion.div>
            <motion.div
              className="flex gap-2"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 30,
              }}
            >
              <Image
                src="/images/phone.ico"
                alt="House symbol"
                width={32}
                height={32}
              ></Image>
              <p>+36202432650 / +36308921068 </p>
            </motion.div>
            <motion.div
              className="flex gap-2"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 360,
                damping: 30,
              }}
            >
              <Image
                src="/images/map.ico"
                alt="House symbol"
                width={32}
                height={32}
              ></Image>
              <p>Sopron, Győri út 36, 9400 </p>
            </motion.div>
          </div>
          <motion.div
            id="map"
            className="mx-2 mb-5 rounded border"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 360,
              damping: 30,
            }}
          >
            <iframe
              className="h-[400px] w-full lg:h-[600px] lg:w-[720px] xl:w-[920px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={process.env.NEXT_PUBLIC_API_KEY_GOOGLE}
            ></iframe>
          </motion.div>
        </div>
        <Layout>
          <div className="flex flex-col items-center gap-10 p-5">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-4xl font-bold uppercase text-nk-white">
                megközelítés
              </h1>
              <hr className="w-[16.5rem] rounded-md border-2 border-solid border-nk-red lg:w-52"></hr>
            </div>
            <ul className="tracking-widest text-nk-white">
              <motion.li
                className="mb-3"
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 30,
                }}
                viewport={{ once: true }}
              >
                <span className="mr-3 text-nk-red">&#10132;</span>
                soproni helyijáratos 5, 5A, 5T, 5Y, 4, 22 buszokkal Győri út,
                autómosó megálló
              </motion.li>
              <motion.li
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 360,
                  damping: 30,
                }}
                viewport={{ once: true }}
              >
                <span className="mr-3 text-nk-red">&#10132;</span>parkolás
                ingyenes
              </motion.li>
            </ul>
          </div>
        </Layout>
      </section>
      <Footer />
    </>
  );
};

export default Kapcsolat;
