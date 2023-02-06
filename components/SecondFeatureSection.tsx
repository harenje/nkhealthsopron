import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

export default function SecondFeatureSection() {
  return (
    <section className="relative flex flex-col justify-center gap-5 h-screen -mb-80 sm:-mb-16 overflow-hidden">
      <div className="relative z-30 container mx-auto text-2xl text-nk-white p-5 -mt-96 md:p-0">
        <h1 className="uppercase text-4xl mb-5 font-bold">edzések</h1>
        Minden nap edzések széles választékával várjuk a sportolni vágyókat.
        <br />
        <br />
        Súlyzós edzések mellett, sportspecifikus egyéni edzésterv
        összeállításával is foglalkozunk.
      </div>
      <div className="container mx-auto z-40 text-nk-white p-5 md:p-0">
        <Link href="/edzesek">
          <Button>edzések</Button>
        </Link>
      </div>
      <Image
        src="/../public/images/nk_sablon_ikon.png"
        alt="Brand Secondary Logo"
        width={560}
        height={560}
        className="absolute md:left-1/5 md:ml-20 md:mb-32 z-30"
      ></Image>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 max-w-screen-lg -mt-96 sm:max-w-none"
      >
        <source src={require("../public/images/video.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}