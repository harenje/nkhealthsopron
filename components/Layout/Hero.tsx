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
        <section className="h-5/6 flex flex-col gap-10 justify-evenly container mx-auto">
          <motion.div
            className="px-1.5 lg:px-0 md:self-center md:text-center lg:text-start lg:self-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl sm:text-8xl 2xl:text-9xl text-nk-white uppercase tracking-widest">
              Érjük el a céljaid együtt
            </h1>
          </motion.div>
          <motion.div
            className="ml-2.5 md:self-center lg:self-start"
            initial={{ y: "25vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/bejelentkezes" scroll={false}>
              <Button>kezdd el most</Button>
            </Link>
          </motion.div>
        </section>
      </Layout>
    </>
  );
}
