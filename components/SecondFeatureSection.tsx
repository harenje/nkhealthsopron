import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  exit: {
    x: 300,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 360,
      damping: 30,
    },
  },
};

export default function SecondFeatureSection() {
  return (
    <motion.section
      className="relative flex items-center justify-center overflow-hidden bg-nk-black"
      variants={cardVariants}
      exit="exit"
    >
      <Image
        src="/images/training_gif.gif"
        width={4500}
        height={4000}
        priority={true}
        alt="Training Video"
      ></Image>
      <motion.div
        className="text-md lg:text-md absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-nk-black bg-opacity-75 text-xs md:text-sm xl:text-xl min-[1920px]:text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="mb-16 h-1/4 w-10/12 text-center uppercase text-nk-white md:mb-6 lg:mb-0">
          A személyi edzőink segítenek Önnek megtalálni a legjobb edzéstervet
          céljai eléréséhez. Ha bármilyen kérdése van az edzési módszerekről,
          forduljon hozzánk bizalommal vagy kattintson az edzések gombra.
        </div>
        <Link href="/edzesek" scroll={false}>
          <Button>edzések</Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
