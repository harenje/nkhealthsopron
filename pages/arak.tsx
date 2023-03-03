import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "../components/Animation/Layout";
import { motion } from "framer-motion";

const Arak = () => {
  return (
    <>
      <section className="bg-nk-black h-full p-5 overflow-hidden">
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
          <h1 className="text-4xl font-bold text-nk-white uppercase mb-2 self-center lg:self-start">
            áraink
          </h1>
          <hr className="border-nk-red border-solid border-2 rounded-md w-32 self-center lg:w-24 lg:self-start" />
          <h2 className="uppercase text-2xl text-nk-white tracking-widest mt-5 text-center lg:text-start">
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
            <hr className="border-nk-red border-solid border-2 rounded-md w-36 mt-2" />
          </div>
        </Layout>
        <Layout>
          <div className="container mx-auto flex flex-col lg:flex-row mt-5 text-nk-black tracking-widest gap-10">
            <motion.div
              className="w-full bg-white bg-logo_image bg-center bg-cover rounded-md flex flex-col items-center p-3"
              animate={{
                scale: [1, 1.05, 1],
              }}
            >
              <h2 className="uppercase  font-semibold p-2">személyi edzés</h2>
              <h1 className="uppercase text-xl font-extrabold mb-1 py-3">
                egyéni
              </h1>
              <div className="max-[320px]:text-center">
                <div className="mb-5 font-semibold tracking-[.24em]">
                  6000.-Ft / fő /{" "}
                  <span className="text-nk-red font-bold">1</span> alkalom
                  <hr className="border-nk-red border-solid rounded-md w-10 max-[320px]:hidden" />
                </div>
                <div className="mb-5 font-semibold tracking-[.24em]">
                  44000.-Ft / fő /{" "}
                  <span className="text-nk-red font-bold">8</span> alkalom
                  <hr className="border-nk-red border-solid rounded-md w-10 max-[320px]:hidden" />
                </div>
                <div className="mb-5 font-semibold tracking-[.24em]">
                  80000.-Ft / fő /{" "}
                  <span className="text-nk-red font-bold">16</span> alkalom
                  <hr className="border-nk-red border-solid rounded-md w-10 max-[320px]:hidden" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full bg-white bg-logo_image bg-center bg-cover rounded-md flex flex-col items-center p-3"
              animate={{
                scale: [1, 1.05, 1],
              }}
            >
              <h2 className="uppercase  font-semibold p-2">személyi edzés</h2>
              <h1 className="uppercase text-xl font-extrabold mb-1 py-3">
                páros
              </h1>
              <div className="max-[320px]:text-center">
                <div className="mb-5 font-semibold tracking-[.24em]">
                  5400.-Ft / fő /{" "}
                  <span className="text-nk-red font-bold">1</span> alkalom
                  <hr className="border-nk-red border-solid rounded-md w-10 max-[320px]:hidden" />
                </div>
                <div className="mb-5 font-semibold tracking-[.24em]">
                  40000.-Ft / fő /{" "}
                  <span className="text-nk-red font-bold">8</span> alkalom
                  <hr className="border-nk-red border-solid rounded-md w-10 max-[320px]:hidden" />
                </div>
                <div className="mb-5 font-semibold tracking-[.24em]">
                  72000.-Ft / fő /{" "}
                  <span className="text-nk-red font-bold">16</span> alkalom
                  <hr className="border-nk-red border-solid rounded-md w-10 max-[320px]:hidden" />
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
