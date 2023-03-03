import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Layout from "../components/Animation/Layout";
import { motion } from "framer-motion";

const Kapcsolat = () => {
  return (
    <>
      <section className="bg-nk-black h-full">
        <Navbar />
        <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between">
          <div className="text-nk-white flex flex-col gap-10 p-5">
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
              <h1 className="text-4xl text-nk-white font-bold uppercase">
                kapcsolat
              </h1>
              <hr className="border-nk-red border-solid border-2 rounded-md w-52 lg:w-36"></hr>
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
            className="border rounded mb-5 mx-2"
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
              className="w-full h-[400px] lg:w-[720px] lg:h-[600px] xl:w-[920px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={process.env.NEXT_PUBLIC_API_KEY_GOOGLE}
            ></iframe>
          </motion.div>
        </div>
        <Layout>
          <div className="flex flex-col items-center p-5 gap-10">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-4xl text-nk-white font-bold uppercase">
                megközelítés
              </h1>
              <hr className="border-nk-red border-solid border-2 rounded-md w-[16.5rem] lg:w-52"></hr>
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
                <span className="text-nk-red mr-3">&#10132;</span>
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
                <span className="text-nk-red mr-3">&#10132;</span>parkolás
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
