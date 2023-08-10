import Navbar from "../Navbar";
import Button from "../Button";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../Animation/Layout";

export default function Hero() {
  return (
    // HERO NAV
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
      {/* HERO MAIN */}
      <Layout>
        <section className="container mx-auto flex h-5/6 flex-col justify-evenly gap-10">
          <motion.div
            className="px-1.5 md:self-center md:text-center lg:self-start lg:px-0 lg:text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl uppercase tracking-widest text-nk-white sm:text-8xl 2xl:text-9xl">
              Érjük el a céljaid együtt
            </h1>
          </motion.div>
          <motion.div
            className="ml-2.5 md:self-center lg:self-start"
            initial={{ y: "25vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/kapcsolat" scroll={false}>
              <Button>kezdd el most</Button>
            </Link>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
