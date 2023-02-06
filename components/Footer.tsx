import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <section className="p-5 container mx-auto h-1/2 bg-nk-white">
        <div className="flex flex-col content-center gap-10">
          <div className="text-6xl uppercase text-nk-black">
            készen állsz a változásra?
          </div>
          <div className="z-30">
            <Link href="/bejelentkezes">
              <Button onClick={()=>void{}}>bejelentkezes edzésre</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="h-min w-full bg-nk-black text-nk-white uppercase flex flex-col gap-5 p-10 mt-10 md:flex-row md:justify-evenly">
        <div className="flex flex-col self-center gap-6 md:self-auto">
          <h1 className="text-4xl">Nyitvatartás</h1>
          <div className="text-lg">Hétfő - Péntek 7:00 - 20:00</div>
          <div className="text-lg">Szombat 7:00 -12:00</div>
        </div>
        <div className="flex flex-col self-center pr-8 gap-6 md:self-auto">
          <h1 className="text-4xl">Információ</h1>
          <Link
            href="/aszf"
            className="transition-all hover:scale-y-110 duration-300 delay-100"
          >
            ászf
          </Link>
          <Link
            href="/hazirend"
            className="transition-all hover:scale-y-110 duration-300 delay-100"
          >
            házirend
          </Link>
          <Link
            href="/gyik"
            className="transition-all hover:scale-y-110 duration-300 delay-100"
          >
            gyik
          </Link>
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
    </footer>
  );
}