import { useState, useEffect } from "react";
import useScreenSize from "../hooks/useScreenSize";
import { useSession, getSession } from "next-auth/react";

import { FiMenu } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [open]);

  const breakpoint = 1024;
  const width = useScreenSize();

  const disableScrollFunc = () => {
    return setOpen(!open), (document.body.style.overflow = "hidden");
  };

  const enableScrollFunc = () => {
    return setOpen(!open), (document.body.style.overflow = "scroll");
  };

  const hamburgerVariants: Variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    exit: { opacity: 0, x: "-100%" },
  };

  const { data: session } = useSession();
  

  return (
    <>
      {/* // Navbar */}
      <nav className="container mx-auto text-nk-white">
        {/* Flex container */}
        <div className="flex items-center justify-between md:mr-2">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 350 }}
            >
              <Image
                src="/logofeher.png"
                height={144}
                width={144}
                alt="Brand Logo"
                className="2xl:scale-125 transition-all duration-300 delay-100"
              ></Image>
            </motion.div>
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
              className="transition-all duration-300 delay-100 hover:scale-150 mr-2.5 block lg:hidden cursor-pointer z-50"
              size="2.5em"
              onClick={() => {
                enableScrollFunc();
              }}
            />
          )}
          {/*Menu Items */}
          {width >= breakpoint && (
            <div className="hidden 2xl:text-xl lg:space-x-32 lg:flex lg:flex-row lg:mt-0 lg:mr-0">
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
                href={session ? "/bejelentkezes" : "/api/auth/signin"}
                className="transition-all hover:scale-150 duration-300"
              >
                {session ? `Profilom` : "Bejelentkezés"}
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/*Mobile view */}
      <AnimatePresence>
        {open && width <= breakpoint && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-nk-black text-nk-white text-4xl sm:text-5xl flex justify-center content-start opacity-95 overflow-hidden z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="flex flex-col justify-center gap-20 h-full"
              initial="closed"
              animate="open"
              exit="exit"
              variants={hamburgerVariants}
            >
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
                href={session ? "/bejelentkezes" : "/api/auth/signin"}
                className="transition-all hover:scale-150 duration-300"
              >
                {session ? `Profilom` : "Bejelentkezés"}
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
