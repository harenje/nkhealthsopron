import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

import { FiMenu } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const breakpoint = 1024;
  const width = useScreenSize();

  return (
    <>
      {/* // Navbar */}
      <nav className="container mx-auto text-nk-white">
        {/* Flex container */}
        <div className="flex items-center justify-between md:mr-2">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            height={144}
            width={144}
            alt="Brand Logo"
          ></Image>
          {/* Hamburger Icon */}
          {!open ? (
            <FiMenu
              className={`mr-2.5 block lg:hidden`}
              size="2.5em"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <FiXSquare
              className="hover:scale-180 active:animate-spin mr-2.5 block lg:hidden z-10"
              size="2.5em"
              onClick={() => setOpen(!open)}
            />
          )}
          {/*Menu Items */}
          {width >= breakpoint && (
            <div className="hidden lg:space-x-32 lg:flex lg:flex-row lg:mt-0 lg:mr-0">
              <Link href="/edzesek">Edzések</Link>

              <Link href="/edzok">Edzők</Link>

              <Link href="/arak">Árak</Link>

              <Link href="/kapcsolat">Kapcsolat</Link>

              <Link href="/bejelentkezes">Bejelentkezés</Link>
            </div>
          )}
        </div>
      </nav>
      {/*Mobile view */}
      {open && width <= breakpoint && (
        <div className="absolute top-0 left-0 w-full h-full bg-nk-black text-nk-white text-6xl flex justify-center content-start opacity-95">
          <nav className="flex flex-col justify-center gap-20 h-full">
            <Link href="/edzesek">Edzések</Link>

            <Link href="/edzok">Edzők</Link>

            <Link href="/arak">Árak</Link>

            <Link href="/kapcsolat">Kapcsolat</Link>

            <Link href="/bejelentkezes">Bejelentkezés</Link>
          </nav>
        </div>
      )}
    </>
  );
}
