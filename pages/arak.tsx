import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Animation/Layout";
import { motion } from "framer-motion";

const Arak = () => {
  return (
    <>
      <section className="h-full overflow-hidden bg-nk-black p-5">
        <Navbar />
        <motion.div
          className="container mx-auto flex flex-col"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
          <h1 className="mb-2 self-center text-4xl font-bold uppercase text-nk-white lg:self-start">
            áraink
          </h1>
          <hr className="w-32 self-center rounded-md border-2 border-solid border-nk-red lg:w-24 lg:self-start" />
          <h2 className="mt-5 text-center text-2xl uppercase tracking-widest text-nk-white lg:text-start">
            a legjobb verziód itt készül
          </h2>
        </motion.div>
        <Layout>
          <div className="container mx-auto flex flex-col">
            <p className="text-xl text-nk-white">
              Mielőtt belevágunk a közös munkába, szeretettel látunk egy
              díjmentes találkozón, ahol rólad, a te céljaidról, terveidről lesz
              szó. Átbeszéljük, milyen típusú edzésmód lenne számodra ideális.
            </p>
            <hr className="mt-2 w-36 rounded-md border-2 border-solid border-nk-red" />
          </div>
        </Layout>
        <Layout>
          <div className="container mx-auto mt-5 flex flex-col gap-10 tracking-widest text-nk-black lg:flex-row">
            <motion.div
              className="flex w-full flex-col items-center rounded-md bg-white bg-logo_image bg-cover bg-center p-3"
              animate={{
                scale: [1, 1.05, 1],
              }}
            >
              <h2 className="p-2  font-semibold uppercase">személyi edzés</h2>
              <h1 className="mb-1 py-3 text-xl font-extrabold uppercase">
                egyéni
              </h1>
              <div className="max-[320px]:text-center">
                <div className="mb-5 font-semibold tracking-[.24em]">
                  6000.-Ft / fő /{" "}
                  <span className="font-bold text-nk-red">1</span> alkalom
                  <hr className="w-10 rounded-md border-solid border-nk-red max-[320px]:hidden" />
                </div>
                <div className="mb-5 font-semibold tracking-[.24em]">
                  44000.-Ft / fő /{" "}
                  <span className="font-bold text-nk-red">8</span> alkalom
                  <hr className="w-10 rounded-md border-solid border-nk-red max-[320px]:hidden" />
                </div>
                <div className="mb-5 font-semibold tracking-[.24em]">
                  80000.-Ft / fő /{" "}
                  <span className="font-bold text-nk-red">16</span> alkalom
                  <hr className="w-10 rounded-md border-solid border-nk-red max-[320px]:hidden" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="flex w-full flex-col items-center rounded-md bg-white bg-logo_image bg-cover bg-center p-3"
              animate={{
                scale: [1, 1.05, 1],
              }}
            >
              <h2 className="p-2  font-semibold uppercase">személyi edzés</h2>
              <h1 className="mb-1 py-3 text-xl font-extrabold uppercase">
                páros
              </h1>
              <div className="max-[320px]:text-center">
                <div className="mb-5 font-semibold tracking-[.24em]">
                  5400.-Ft / fő /{" "}
                  <span className="font-bold text-nk-red">1</span> alkalom
                  <hr className="w-10 rounded-md border-solid border-nk-red max-[320px]:hidden" />
                </div>
                <div className="mb-5 font-semibold tracking-[.24em]">
                  40000.-Ft / fő /{" "}
                  <span className="font-bold text-nk-red">8</span> alkalom
                  <hr className="w-10 rounded-md border-solid border-nk-red max-[320px]:hidden" />
                </div>
                <div className="mb-5 font-semibold tracking-[.24em]">
                  72000.-Ft / fő /{" "}
                  <span className="font-bold text-nk-red">16</span> alkalom
                  <hr className="w-10 rounded-md border-solid border-nk-red max-[320px]:hidden" />
                </div>
              </div>
            </motion.div>
          </div>
        </Layout>
      </section>
      <Layout>
        <Footer />
      </Layout>
    </>
  );
};

export default Arak;
