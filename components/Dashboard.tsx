import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import BookingCard from "./BookingCard";
import { useState } from "react";
import Backdrop from "./Layout/Backdrop";

const Dashboard = (props: { userName: string }) => {
  return (
    <>
      <section className="h-screen w-screen bg-gradient-to-t from-nk-black to-nk-grey px-1.5 pb-36 lg:pb-0">
        <Navbar />
        <div className="container mx-auto flex h-full flex-col items-center rounded bg-signedin_image bg-cover lg:h-5/6 lg:items-end">
          <h1 className="p-1 text-center text-lg text-nk-black">
            Bejelentkezve mint, {props.userName}
          </h1>
          <Button
            onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
          >
            Kijelentkezek
          </Button>
          <div className="mt-2 flex w-full flex-col items-center gap-5 text-lg font-extrabold uppercase text-nk-white lg:text-3xl">
            <h1>Éld át a lélegzetet,</h1>
            <h1>Alakítsd magad,</h1>
            <h1>Hódítsd meg a csúcsot</h1>
          </div>

          <motion.div
            className="container mx-auto mt-5 flex h-4/5 justify-center"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 360,
              damping: 30,
            }}
          >
            {
              <div className="mx-5 grid h-5/6 w-5/6 grid-cols-1 items-center justify-items-center gap-5 rounded bg-nk-white bg-opacity-20 p-5 lg:grid-cols-2">
                <BookingCard
                  id="csoportos_koredzes"
                  imageUrl="/images/funktional_training.jpg"
                  imageAlt="Funktional training booking card"
                  heading="Funkcionális csoportos köredzés"
                  description="Több munkaállomás meghatározott munka- és pihenőidővel. A Crossfit és Tabata elemei is beépültek ebbe az izgalmas órába, amely próbára teszi tested, hozzáállásod és eltökéltséged.A legkeményebbeknek."
                  buttonText="Foglalás"
                />
                <BookingCard
                  id="szemelyi_edzes"
                  imageUrl="/images/private_training.jpg"
                  imageAlt="Private training booking card"
                  heading="Privát edzés"
                  description="Intenzív és személyre szabott edzés az egyéni igényeidnek megfelelően. Fejleszd az erődet, állóképességedet és egészségedet különböző gyakorlatokkal és technikákkal.Ajánljuk,ha kész vagy a kihívásokra."
                  buttonText="Foglalás"
                />
              </div>
            }
          </motion.div>
        </div>
      </section>
      <section className="grid h-min w-full justify-center gap-5 bg-nk-black p-10 uppercase text-nk-white md:flex md:flex-row md:justify-evenly">
        <div className="flex flex-col justify-center gap-6 md:justify-start">
          <h1 className="text-2xl md:text-3xl">Nyitvatartás</h1>
          <div className="text-sm md:text-lg xl:text-xl">
            Hétfő - Péntek 7:00 - 20:00
          </div>
          <div className="text-sm md:text-lg xl:text-xl">
            Szombat 7:00 -12:00
          </div>
        </div>
        <div className="flex flex-col gap-6 md:justify-start">
          <h1 className="text-2xl md:text-3xl">Információ</h1>
          <Link
            href="/aszf"
            className="transition-all delay-100 duration-300 hover:scale-y-110"
          >
            ászf
          </Link>
          <Link
            href="/tajekoztato"
            className="transition-all delay-100 duration-300 hover:scale-y-110"
          >
            adatvédelmi tájékoztató
          </Link>
          <Link
            href="/hazirendnk.pdf"
            className="transition-all delay-100 duration-300 hover:scale-y-110"
          >
            házirend
          </Link>
        </div>
        <div className="flex flex-col justify-center gap-6 md:ml-0 md:justify-start md:self-auto">
          <h1 className="text-2xl md:text-3xl">Elérhetőségek</h1>
          <div className="relative text-sm md:text-lg xl:text-xl">
            <Image
              src="/images/map.ico"
              alt="Map Icon"
              width={32}
              height={32}
              className="absolute"
            />
            <p className="ml-10">9400 Sopron, Győri út 36</p>
          </div>
          <div className="relative text-sm md:text-lg xl:text-xl">
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
          <div className="relative text-sm md:text-lg xl:text-xl">
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
          <hr className="rounded-md  border-solid border-nk-red"></hr>
          <div className="mt-5 flex justify-center gap-14">
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
                className="transition-all delay-100 duration-300 hover:scale-150"
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
                className="transition-all delay-100 duration-300 hover:scale-150"
              />
            </a>
            <Image
              src="/images/tiktok.ico"
              alt="Map Icon"
              width={32}
              height={32}
              className="transition-all delay-100 duration-300 hover:scale-150"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center bg-nk-black text-center uppercase text-nk-white">
        <small className="mx-1 mb-5 flex flex-col">
          &copy; {new Date().getFullYear()} by NK Health and Sport Studio -
          Minden jog fenntartva!
          <hr className="rounded-md border-solid border-nk-red"></hr>
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

export default Dashboard;
