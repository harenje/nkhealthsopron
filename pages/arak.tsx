import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Arak = () => {
   return (
     <>
    <section className="bg-nk-black h-full p-5">
        <Navbar />
        <div className="container mx-auto flex flex-col gap-5">
            <h1 className="text-4xl font-bold text-nk-white uppercase">áraink</h1>
            <hr className="border-nk-red border-solid rounded-md w-36"/>
            <h2 className="uppercase text-2xl text-nk-white tracking-widest">a legjobb verziód itt készül</h2>
        </div>
        <div className="container mx-auto flex flex-col">
            <p className="text-xl text-nk-white">Mielőtt belevágunk a közös munkába, szeretettel látunk egy díjmentes találkozón, ahol rólad, a te céljaidról, terveidről lesz szó. Átbeszéljük, milyen típusú edzésmód lenne számodra ideális.
            </p>
            <hr className="border-nk-red border-solid rounded-md w-36"/>
        </div>
        <div className="container mx-auto flex justify-between">
            <div className="w-1/3 bg-nk-white rounded-md flex flex-col items-center">
                <h2>személyi edzés</h2>
                <h1>egyéni</h1>
                <p>
                    6000.-Ft / fő / <span className="text-nk-red font-bold">1</span> alkalom
                    <hr className="border-nk-red border-solid rounded-md w-10" />
                </p>
                <p>
                    6000.-Ft / fő / <span className="text-nk-red font-bold">1</span> alkalom
                    <hr className="border-nk-red border-solid rounded-md w-10" />
                </p>
                <p>
                    6000.-Ft / fő / <span className="text-nk-red font-bold">1</span> alkalom
                    <hr className="border-nk-red border-solid rounded-md w-10" />
                </p>
            </div>
            <div className="w-1/3 h-50 bg-nk-white rounded-md flex flex-col items-center">
                <h2>személyi edzés</h2>
                <h1>egyéni</h1>
                <p>
                    6000.-Ft / fő / <span className="text-nk-red font-bold">1</span> alkalom
                    <hr className="border-nk-red border-solid rounded-md w-10" />
                </p>
                <p>
                    6000.-Ft / fő / <span className="text-nk-red font-bold">1</span> alkalom
                    <hr className="border-nk-red border-solid rounded-md w-10" />
                </p>
                <p>
                    6000.-Ft / fő / <span className="text-nk-red font-bold">1</span> alkalom
                    <hr className="border-nk-red border-solid rounded-md w-10" />
                </p>
            </div>
        </div>
    </section>
    <Footer />
    </>
   )
};

export default Arak;
