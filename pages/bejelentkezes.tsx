import { useRef } from "react";
import type { NextPage } from "next";
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0/client";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";

const Bejelentkezes: NextPage = () => {
  const jelszoInputElement = useRef<HTMLInputElement>(null);
  const emailInputElement = useRef<HTMLInputElement>(null);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) =>
    e.preventDefault();

  return (
    <>
      <section className="h-screen w-full bg-bejelentkezes bg-cover bg-center bg-fixed">
        <Navbar />
        <h1 className="text-6xl text-nk-white uppercase font-bold text-center mt-10 tracking-widest">
          adj esélyt a változásnak
        </h1>

        <div className="w-1/4 h-2/4 bg-nk-white opacity-90 rounded-sm  mx-auto flex justify-center items-center mt-10">
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
              />
            </div>
            <Button onClick={()=>void}>Belépés</Button>
          </form>
        </div>
      </section>
      <section className="h-min w-full bg-nk-black text-nk-white uppercase flex flex-col gap-5 p-10  md:flex-row md:justify-evenly">
        <div className="flex flex-col self-center gap-6 md:self-auto">
          <h1 className="text-4xl">Nyitvatartás</h1>
          <div className="text-lg">Hétfő - Péntek 7:00 - 20:00</div>
          <div className="text-lg">Szombat 7:00 -12:00</div>
        </div>
        <div className="flex flex-col self-center pr-8 gap-6 md:self-auto">
          <h1 className="text-4xl">Információ</h1>
          <Link href="/aszf">ászf</Link>
          <Link href="/hazirend">házirend</Link>
          <Link href="/gyik">gyik</Link>
        </div>
        <div className="flex flex-col self-center gap-6 md:self-auto">
          <h1 className="text-4xl">Elérhetőségek</h1>
          <div className="text-lg relative">
            <Image
              src="/../public/images/map.ico"
              alt="Map Icon"
              width={32}
              height={32}
              className="absolute"
            />
            <p className="ml-10">9400 Sopron, Győri út 36</p>
          </div>
          <div className="text-lg relative">
            <Image
              src="/../public/images/phone.ico"
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
          <div className="text-lg relative">
            <Image
              src="/../public/images/email.ico"
              alt="Map Icon"
              width={32}
              height={32}
              className="absolute"
            />
            <p className="ml-10">nksopron@gmail.com</p>
          </div>
          <hr className="border-nk-red  border-solid rounded-md"></hr>
          <div className="flex gap-14 mt-5">
            <a
              href="https://www.facebook.com/nkhealthsportstudio"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src="/../public/images/facebook.ico"
                alt="Map Icon"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.instagram.com/nk_healthandsport_studio/"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src="/../public/images/instagram.ico"
                alt="Map Icon"
                width={32}
                height={32}
              />
            </a>
            <Image
              src="/../public/images/tiktok.ico"
              alt="Map Icon"
              width={32}
              height={32}
            />
          </div>
        </div>
      </section>
      <section className="bg-nk-black text-nk-white uppercase flex justify-center">
        <small className="mb-5 flex flex-col">
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

export default withPageAuthRequired(Bejelentkezes);
