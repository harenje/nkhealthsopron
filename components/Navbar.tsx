import { useState, useEffect } from "react";
import useScreenSize from "../hooks/useScreenSize";

import { FiMenu } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    width >= breakpoint && !open
      ? (document.body.style.overflow = "scroll")
      : (document.body.style.overflow = "hidden");
    width <= breakpoint && open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  });

  const breakpoint = 1024;
  const width = useScreenSize();

  const disableScrollFunc = () => {
    return setOpen(!open), (document.body.style.overflow = "hidden");
  };

  const enableScrollFunc = () => {
    return setOpen(!open), (document.body.style.overflow = "scroll");
  };

  return (
    <>
      {/* // Navbar */}
      <nav className="container mx-auto text-nk-white">
        {/* Flex container */}
        <div className="flex items-center justify-between md:mr-2">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logofeher.png"
              height={144}
              width={144}
              alt="Brand Logo"
              className="transition-all hover:scale-150 duration-300 delay-100"
            ></Image>
          </Link>
          {/* Hamburger Icon */}
          {!open ? (
            <FiMenu
              className="transition-all duration-300 delay-100 mr-2.5 block lg:hidden hover:scale-150 cursor-pointer"
              size="2.5em"
              onClick={() => {
                disableScrollFunc();
              }}
            />
          ) : (
            <FiXSquare
              className="transition-all duration-300 delay-100 hover:scale-150 mr-2.5 block lg:hidden z-10 cursor-pointer"
              size="2.5em"
              onClick={() => enableScrollFunc()}
            />
          )}
          {/*Menu Items */}
          {width >= breakpoint && (
            <div className="hidden lg:space-x-32 lg:flex lg:flex-row lg:mt-0 lg:mr-0">
              <Link
                href="/edzesek"
                className="transition-all hover:scale-150 duration-300"
              >
                Edzések
              </Link>

              <Link
                href="/edzok"
                className="transition-all hover:scale-150 duration-300"
              >
                Edzők
              </Link>

              <Link
                href="/arak"
                className="transition-all hover:scale-150 duration-300"
              >
                Árak
              </Link>

              <Link
                href="/kapcsolat"
                className="transition-all hover:scale-150 duration-300"
              >
                Kapcsolat
              </Link>

              <Link
                href="/bejelentkezes"
                className="transition-all hover:scale-150 duration-300"
              >
                Bejelentkezés
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/*Mobile view */}
      {open && width <= breakpoint && (
        <div className="absolute top-0 left-0 w-full h-full bg-nk-black text-nk-white text-6xl flex justify-center content-start opacity-95">
          <nav className="flex flex-col justify-center gap-20 h-full">
            <Link
              href="/edzesek"
              className="transition-all hover:scale-y-110 duration-300 delay-100"
            >
              Edzések
            </Link>

            <Link
              href="/edzok"
              className="transition-all hover:scale-y-110 duration-300 delay-100"
            >
              Edzők
            </Link>

            <Link
              href="/arak"
              className="transition-all hover:scale-y-110 duration-300 delay-100"
            >
              Árak
            </Link>

            <Link
              href="/kapcsolat"
              className="transition-all hover:scale-y-110 duration-300 delay-100"
            >
              Kapcsolat
            </Link>

            <Link
              href="/bejelentkezes"
              className="transition-all hover:scale-y-110 duration-300 delay-100"
            >
              Bejelentkezés
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
