import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer>
      <section className="flex h-1/2 w-full justify-center bg-nk-white p-5">
        <motion.div
          className="flex flex-col content-center gap-10"
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
          <div className="text-center text-4xl uppercase text-nk-black sm:text-5xl lg:text-6xl">
            készen állsz a változásra?
          </div>
          <div className="z-30 text-center">
            <Link href="/kapcsolat" scroll={false}>
              <Button>bejelentkezes edzésre</Button>
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="grid h-min w-full justify-center gap-5 bg-nk-black p-10 uppercase text-nk-white md:flex md:flex-row md:justify-evenly">
        <motion.div
          className="flex flex-col justify-center gap-6 md:justify-start"
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
          className="flex flex-col gap-6 md:justify-start"
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
          <h1 className="text-2xl md:text-3xl">Információ</h1>
          <Link
            href="/hazirendnk.pdf"
            className="transition-all delay-100 duration-300 hover:scale-y-110"
          >
            házirend
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center gap-6 md:ml-0 md:justify-start md:self-auto"
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
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
        </motion.div>
      </section>
      <section className="flex justify-center bg-nk-black text-center uppercase text-nk-white">
        <motion.small
          className="mx-1 mb-5 flex flex-col"
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
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
        </motion.small>
      </section>
    </footer>
  );
}
