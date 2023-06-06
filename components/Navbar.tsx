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
                className="transition-all delay-100 duration-300 2xl:scale-125"
              ></Image>
            </motion.div>
          </Link>
          {/* Hamburger Icon */}
          {!open ? (
            <FiMenu
              className="mr-2.5 block cursor-pointer transition-all delay-100 duration-300 hover:scale-150 lg:hidden"
              size="2.5em"
              onClick={() => {
                disableScrollFunc();
              }}
            />
          ) : (
            <FiXSquare
              className="z-50 mr-2.5 block cursor-pointer transition-all delay-100 duration-300 hover:scale-150 lg:hidden"
              size="2.5em"
              onClick={() => {
                enableScrollFunc();
              }}
            />
          )}
          {/*Menu Items */}
          {width >= breakpoint && (
            <div className="hidden lg:mt-0 lg:mr-0 lg:flex lg:flex-row lg:space-x-32 2xl:text-xl">
              <Link
                href="/edzesek"
                className="transition-all duration-300 hover:scale-150"
              >
                Edzések
              </Link>

              <Link
                href="/edzok"
                className="transition-all duration-300 hover:scale-150"
              >
                Edzők
              </Link>

              <Link
                href="/arak"
                className="transition-all duration-300 hover:scale-150"
              >
                Árak
              </Link>

              <Link
                href="/kapcsolat"
                className="transition-all duration-300 hover:scale-150"
              >
                Kapcsolat
              </Link>

              <Link
                href={session ? "/bejelentkezes" : "/api/auth/signin"}
                className="transition-all duration-300 hover:scale-150"
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
            className="absolute top-0 left-0 z-40 flex h-full w-full content-start justify-center overflow-hidden bg-nk-black text-4xl text-nk-white opacity-95 sm:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="flex h-full flex-col justify-center gap-20"
              initial="closed"
              animate="open"
              exit="exit"
              variants={hamburgerVariants}
            >
              <Link
                href="/edzesek"
                className="transition-all delay-100 duration-300 hover:scale-y-110"
              >
                Edzések
              </Link>

              <Link
                href="/edzok"
                className="transition-all delay-100 duration-300 hover:scale-y-110"
              >
                Edzők
              </Link>

              <Link
                href="/arak"
                className="transition-all delay-100 duration-300 hover:scale-y-110"
              >
                Árak
              </Link>

              <Link
                href="/kapcsolat"
                className="transition-all delay-100 duration-300 hover:scale-y-110"
              >
                Kapcsolat
              </Link>

              <Link
                href={session ? "/bejelentkezes" : "/api/auth/signin"}
                className="transition-all duration-300 hover:scale-150"
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
