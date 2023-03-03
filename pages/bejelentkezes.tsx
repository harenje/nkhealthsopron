import { useRef } from "react";
import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Bejelentkezes: NextPage = () => {
  const jelszoInputElement = useRef<HTMLInputElement>(null);
  const emailInputElement = useRef<HTMLInputElement>(null);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) =>
    e.preventDefault();

  return (
    <>
      <section className="h-screen w-full bg-bejelentkezes bg-cover bg-center bg-fixed">
        <Navbar />
        <motion.h1
          className="text-4xl lg:text-6xl text-nk-white uppercase font-bold text-center mt-10 tracking-widest"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
          adj esélyt a változásnak
        </motion.h1>
        <div className="flex justify-center">
          <motion.div
            className="mx-5 py-5 min-w-2/4 min-h-5/6 bg-nk-white opacity-90 rounded-sm flex justify-center items-center mt-10"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 360,
              damping: 30,
            }}
          >
            <form className="px-4" onSubmit={formHandler}>
              <h1 className="text-center text-xl text-nk-grey font-bold mb-5">
                Üdvözöllek az NK Health & Sport online bejelentkező felületén,
                folytatáshoz kérlek lépj be!
              </h1>
              <div className="flex flex-col mb-4">
                <label
                  className="text-nk-grey text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  ref={emailInputElement}
                  id="email"
                  placeholder="Email"
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-nk-grey leading-tight focus:outline-none focus:shadow-outline"
                  disabled
                />
              </div>
              <div className="flex flex-col mb-2">
                <label
                  className="text-nk-grey text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Jelszó
                </label>
                <input
                  ref={jelszoInputElement}
                  id="password"
                  placeholder="Jelszó"
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-nk-grey leading-tight focus:outline-none focus:shadow-outline"
                  disabled
                />
              </div>
              <Button>Belépés</Button>
            </form>
          </motion.div>
        </div>
      </section>
      <section className="h-min w-full bg-nk-black text-nk-white uppercase grid justify-center gap-5 p-10 md:flex md:flex-row md:justify-evenly">
        <div className="flex flex-col justify-center md:justify-start gap-6">
          <h1 className="text-2xl md:text-3xl">Nyitvatartás</h1>
          <div className="text-sm md:text-lg xl:text-xl">
            Hétfő - Péntek 7:00 - 20:00
          </div>
          <div className="text-sm md:text-lg xl:text-xl">
            Szombat 7:00 -12:00
          </div>
        </div>
        <div className="flex flex-col md:justify-start gap-6">
          <h1 className="text-2xl md:text-3xl">Információ</h1>
          <Link
            href="/aszf"
            className="transition-all hover:scale-y-110 duration-300 delay-100"
          >
            ászf
          </Link>
          <Link
            href="/tajekoztato"
            className="transition-all hover:scale-y-110 duration-300 delay-100"
          >
            adatvédelmi tájékoztató
          </Link>
          <Link
            href="/hazirendnk.pdf"
            className="transition-all hover:scale-y-110 duration-300 delay-100"
          >
            házirend
          </Link>
        </div>
        <div className="flex flex-col justify-center md:ml-0 md:justify-start gap-6 md:self-auto">
          <h1 className="text-2xl md:text-3xl">Elérhetőségek</h1>
          <div className="text-sm md:text-lg xl:text-xl relative">
            <Image
              src="/images/map.ico"
              alt="Map Icon"
              width={32}
              height={32}
              className="absolute"
            />
            <p className="ml-10">9400 Sopron, Győri út 36</p>
          </div>
          <div className="text-sm md:text-lg xl:text-xl relative">
            <Image
              src="/images/phone.ico"
              alt="Map Icon"
              width={32}
              height={32}
              className="absolute left-0"
            />
            <p className="ml-10">
              +36202432650/
              <br />
              +36308921068
            </p>
          </div>
          <div className="text-sm md:text-lg xl:text-xl relative">
            <Image
              src="/images/email.ico"
              alt="Map Icon"
              width={32}
              height={32}
              className="absolute"
            />
            <a
              href="mailto:nkhss2022@gmail.com"
              className="ml-10 text-blue-500"
            >
              nkhss2022@gmail.com
            </a>
          </div>
          <hr className="border-nk-red  border-solid rounded-md"></hr>
          <div className="flex gap-14 mt-5 justify-center">
            <a
              href="https://www.facebook.com/nkhealthsportstudio"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src="/images/facebook.ico"
                alt="Map Icon"
                width={32}
                height={32}
                className="transition-all hover:scale-150 duration-300 delay-100"
              />
            </a>
            <a
              href="https://www.instagram.com/nk_healthandsport_studio/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src="/images/instagram.ico"
                alt="Map Icon"
                width={32}
                height={32}
                className="transition-all hover:scale-150 duration-300 delay-100"
              />
            </a>
            <Image
              src="/images/tiktok.ico"
              alt="Map Icon"
              width={32}
              height={32}
              className="transition-all hover:scale-150 duration-300 delay-100"
            />
          </div>
        </div>
      </section>
      <section className="bg-nk-black text-nk-white uppercase flex justify-center text-center">
        <small className="mb-5 flex flex-col mx-1">
          &copy; {new Date().getFullYear()} by NK Health and Sport Studio -
          Minden jog fenntartva!
          <hr className="border-nk-red border-solid rounded-md"></hr>
          <small className="mt-2 self-center">
            fejlesztette:{" "}
            <a
              href="https://www.linkedin.com/in/donat-harajda/"
              rel="noreferrer"
              target={"_blank"}
            >
              Donat Harajda
            </a>
          </small>
        </small>
      </section>
    </>
  );
};

export default Bejelentkezes;
