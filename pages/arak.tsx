import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Arak = () => {
  return (
    <>
      <section className="bg-nk-black h-full p-5">
        <Navbar />
        <div className="container mx-auto flex flex-col">
          <h1 className="text-4xl font-bold text-nk-white uppercase mb-2">
            áraink
          </h1>
          <hr className="border-nk-red border-solid border-2 rounded-md w-20" />
          <h2 className="uppercase text-2xl text-nk-white tracking-widest mt-5">
            a legjobb verziód itt készül
          </h2>
        </div>
        <div className="container mx-auto flex flex-col">
          <p className="text-xl text-nk-white">
            Mielőtt belevágunk a közös munkába, szeretettel látunk egy díjmentes
            találkozón, ahol rólad, a te céljaidról, terveidről lesz szó.
            Átbeszéljük, milyen típusú edzésmód lenne számodra ideális.
          </p>
          <hr className="border-nk-red border-solid border-2 rounded-md w-36 mt-2" />
        </div>
        <div className="container mx-auto flex justify-between mt-5 text-nk-black tracking-widest">
          <div className="w-1/3 bg-white rounded-md flex flex-col items-center">
            <h2 className="uppercase  font-semibold p-2">személyi edzés</h2>
            <h1 className="uppercase text-xl font-extrabold mb-1 py-3">
              egyéni
            </h1>
            <div>
              <p className="mb-5 font-semibold tracking-[.24em]">
                6000.-Ft / fő / <span className="text-nk-red font-bold">1</span>{" "}
                alkalom
                <hr className="border-nk-red border-solid rounded-md w-10" />
              </p>
              <p className="mb-5 font-semibold tracking-[.24em]">
                44000.-Ft / fő /{" "}
                <span className="text-nk-red font-bold">8</span> alkalom
                <hr className="border-nk-red border-solid rounded-md w-10" />
              </p>
              <p className="mb-5 font-semibold tracking-[.24em]">
                80000.-Ft / fő /{" "}
                <span className="text-nk-red font-bold">16</span> alkalom
                <hr className="border-nk-red border-solid rounded-md w-10" />
              </p>
            </div>
          </div>
          <div className="w-1/3 bg-white rounded-md flex flex-col items-center">
            <h2 className="uppercase  font-semibold p-2">személyi edzés</h2>
            <h1 className="uppercase text-xl font-extrabold mb-1 py-3">
              páros
            </h1>
            <div>
              <p className="mb-5 font-semibold tracking-[.24em]">
                5400.-Ft / fő / <span className="text-nk-red font-bold">1</span>{" "}
                alkalom
                <hr className="border-nk-red border-solid rounded-md w-10" />
              </p>
              <p className="mb-5 font-semibold tracking-[.24em]">
                40000.-Ft / fő /{" "}
                <span className="text-nk-red font-bold">8</span> alkalom
                <hr className="border-nk-red border-solid rounded-md w-10" />
              </p>
              <p className="mb-5 font-semibold tracking-[.24em]">
                72000.-Ft / fő /{" "}
                <span className="text-nk-red font-bold">16</span> alkalom
                <hr className="border-nk-red border-solid rounded-md w-10" />
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Arak;
