import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

const Edzok = () => {
  return (
    <>
      <section className="bg-nk-black h-full">
        <Navbar />
        <div className="container mx-auto flex flex-col p-5">
          <h1 className="text-4xl text-nk-white font-bold uppercase">edzők</h1>
          <hr className="border-nk-red border-solid rounded-md w-24"></hr>
        </div>
        <div className="container mx-auto text-nk-white flex flex-wrap p-5">
          <div className="flex flex-col basis-1/2 pb-10">
            <Image
              src="/../public/images/Kevin.jpg"
              alt="Trainer Kevin"
              width={400}
              height={400}
              className="rounded-xl"
            ></Image>
            <h1>Varga Kevin</h1>
            <small>személyi edző</small>
          </div>
          <div className="flex flex-col basis-1/2 pb-10">
            <Image
              src="/../public/images/Norbi.jpg"
              alt="Trainer Norbi"
              width={400}
              height={400}
              className="rounded-xl"
            ></Image>
            <h1>Baranyai Norbert</h1>
            <small>személyi edző</small>
          </div>
          <div className="flex flex-col basis-1/2">
            <Image
              src="/../public/images/Adrienn.jpg"
              alt="Trainer Adrienn"
              width={400}
              height={400}
              className="rounded-xl"
            ></Image>
            <h1>Ivancsics Adrienn</h1>
            <small>szeméyi edző</small>
          </div>
          <div className="flex flex-col basis-1/2">
            <Image
              src="/../public/images/Judit.jpg"
              alt="Trainer Judit"
              width={400}
              height={400}
              className="rounded-xl"
            ></Image>
            <h1>Palotai Fodor Judit</h1>
            <small>személyi edző</small>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Edzok;
