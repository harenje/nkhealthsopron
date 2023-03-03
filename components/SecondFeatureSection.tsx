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
      className="bg-nk-black relative flex items-center justify-center overflow-hidden"
      variants={cardVariants}
      exit="exit"
    >
      <Image
        src="/images/training_gif.gif"
        width={4500}
        height={4000}
        alt="Training Video"
      ></Image>
      <motion.div
        className="bg-nk-black bg-opacity-75 w-full h-full absolute text-md top-0 left-0 text-xs md:text-sm lg:text-md xl:text-xl min-[1920px]:text-2xl flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="w-10/12 h-1/4 text-nk-white mb-16 md:mb-6 lg:mb-0 uppercase text-center">
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
