import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

const Edzesek = () => {
  return (
    <>
      <section className="h-full bg-nk-black">
        <Navbar />
        <div className="container mx-auto p-5">
          <h1 className="text-4xl uppercase text-nk-white font-bold">
            edzések
          </h1>
          <hr className="border-nk-red border-solid border-2 rounded-md w-24" />
        </div>
        <div className="flex">
          <div className="hidden lg:block">
            <Image
              src="/../public/images/edzesekkep.jpg"
              alt="Trainer with Client"
              width={1100}
              height={700}
            ></Image>
          </div>
          <div className="p-5 container mx-auto max-w-lg flex flex-col justify-center gap-5">
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
        <div className="p-5 container mx-auto flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-nk-white">Személyi edzés</h1>
          <p className="text-lg text-nk-white font-light leading-relaxed">
            Nem élsportoló vendégeinknek is több lépcsőből álló edzésterv
            alapján kívánunk segíteni a céljaik elérésében, legyen az
            testsúlycsökkentés, izomtömeg növelés vagy egészséges életmódhoz
            való hozzásegítés.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Edzesek;