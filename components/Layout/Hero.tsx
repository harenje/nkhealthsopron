import Navbar from "../Navbar";
import Button from "../Button";
import Link from "next/link";

export default function Hero() {
  return (
    // HERO NAV
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
      {/* HERO MAIN */}
      <section className="h-5/6 flex flex-col gap-10 justify-evenly container mx-auto">
        <div className="px-1.5 lg:px-0">
          <h1 className="text-8xl lg:text-9xl text-nk-white uppercase">
            Érjük el a céljaid együtt
          </h1>
        </div>
        <div className="ml-2.5">
          <Link href="/bejelentkezes">
            <Button>kezdd el most</Button>
          </Link>
        </div>
      </section>
    </>
  );
}