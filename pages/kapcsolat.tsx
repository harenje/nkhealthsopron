import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const Kapcsolat = () => {
  return (
    <>
      <section className="bg-nk-black h-full">
        <Navbar />
        <div className="container mx-auto flex flex-row justify-between">
          <div className="text-nk-white flex flex-col gap-10 p-5">
            <div>
              <h1 className="text-4xl text-nk-white font-bold uppercase">
                kapcsolat
              </h1>
              <hr className="border-nk-red border-solid border-2 rounded-md w-36"></hr>
            </div>
            <div className="flex gap-2">
              <Image
                src="/../public/images/house.ico"
                alt="House symbol"
                width={32}
                height={32}
              ></Image>
              <p>NK Health & Sport Stúdió</p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/../public/images/phone.ico"
                alt="House symbol"
                width={32}
                height={32}
              ></Image>
              <p>+36202432650 / +36308921068 </p>
            </div>
            <div className="flex gap-2">
              <Image
                src="/../public/images/map.ico"
                alt="House symbol"
                width={32}
                height={32}
              ></Image>
              <p>Sopron, Győri út 36, 9400 </p>
            </div>
          </div>
          <div id="map" className="border rounded mb-5">
            <iframe
              width="820"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBRyXYYF2SFztm29XRgxF3hnJ7W6p617P8&q=NK+Health+%26+Sport+Studio"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col items-center p-14">
          <div>
            <h1 className="text-4xl text-nk-white font-bold uppercase">
              megközelítés
            </h1>
            <hr className="border-nk-red border-solid border-2 rounded-md w-52"></hr>
          </div>
          <ul className="mt-14 tracking-widest text-nk-white">
            <li className="mb-3">
              <span className="text-nk-red mr-3">&#10132;</span>
              soproni helyijáratos 5, 5A, 5T, 5Y, 4, 22 buszokkal Győri út,
              autómosó megálló
            </li>
            <li>
              <span className="text-nk-red mr-3">&#10132;</span>parkolás
              ingyenes
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Kapcsolat;
