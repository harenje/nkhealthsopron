import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer>
      <section className="p-5 w-full flex justify-center h-1/2 bg-nk-white">
        <motion.div
          className="flex flex-col content-center gap-10"
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
          <div className="text-4xl sm:text-5xl lg:text-6xl uppercase text-nk-black text-center">
            készen állsz a változásra?
          </div>
          <div className="z-30 text-center">
            <Link href="/bejelentkezes" scroll={false}>
              <Button>bejelentkezes edzésre</Button>
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="h-min w-full bg-nk-black text-nk-white uppercase grid justify-center gap-5 p-10 md:flex md:flex-row md:justify-evenly">
        <motion.div
          className="flex flex-col justify-center md:justify-start gap-6"
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
          <h1 className="text-2xl md:text-3xl">Nyitvatartás</h1>
          <div className="text-sm md:text-lg xl:text-xl">
            Hétfő - Péntek 7:00 - 20:00
          </div>
          <div className="text-sm md:text-lg xl:text-xl">
            Szombat 7:00 -12:00
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col md:justify-start gap-6"
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
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
            adatvedelmi tájékoztató
          </Link>
          <Link
            href="/hazirendnk.pdf"
            className="transition-all hover:scale-y-110 duration-300 delay-100"
          >
            házirend
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center md:ml-0 md:justify-start gap-6 md:self-auto"
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
          <h1 className="text-2xl md:text-3xl">Elérhetőségek</h1>
          <div className="text-sm md:text-lg xl:text-xl relative">
            <Image
              src="/../public/images/map.ico"
              alt="Map Icon"
              width={32}
              height={32}
              className="absolute"
            />
            <p className="ml-10">9400 Sopron, Győri út 36</p>
          </div>
          <div className="text-sm md:text-lg xl:text-xl relative">
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
          <div className="text-sm md:text-lg xl:text-xl relative">
            <Image
              src="/../public/images/email.ico"
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
                src="/../public/images/facebook.ico"
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
                src="/../public/images/instagram.ico"
                alt="Map Icon"
                width={32}
                height={32}
                className="transition-all hover:scale-150 duration-300 delay-100"
              />
            </a>
            <Image
              src="/../public/images/tiktok.ico"
              alt="Map Icon"
              width={32}
              height={32}
              className="transition-all hover:scale-150 duration-300 delay-100"
            />
          </div>
        </motion.div>
      </section>
      <section className="bg-nk-black text-nk-white uppercase flex justify-center text-center">
        <motion.small
          className="mb-5 flex flex-col mx-1"
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
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
        </motion.small>
      </section>
    </footer>
  );
}
