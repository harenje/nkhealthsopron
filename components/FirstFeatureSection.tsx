import Button from "./Button";
import Link from "next/link";

export default function FirstFeatureSection() {
  return (
    <div className="lg:h-screen lg:w-full flex flex-col lg:gap-10 lg:flex-row">
      <div className="none lg:w-full lg:h-full lg:bg-rolunk lg:bg-no-repeat lg:bg-auto lg:bg-center lg:bg-cover"></div>
      <div className="p-5 max-w-sm flex flex-col md:items-start space-y-5">
        <h1 className="text-4xl text-nk-black font-bold uppercase lg:pt-16">
          rólunk
        </h1>
        <span className="text-nk-black text-xl">
          Azért vagyunk, hogy segítsünk elérni a legjobb formádat.
        </span>
        <span className="text-nk-black text-xl">
          Kvalifikált személyi edzők vagyunk, professzionális múlttal, több éves
          szakmai tapasztalattal.
        </span>
        <span className="text-nk-black text-xl">
          Nálunk fejlett eszközökkel, mindig megújuló tervekkel dolgozhatsz,
          mindezeket lendületesen és vidám hangulatban.
        </span>
        <div className="self-start">
          <Link href="/edzok">
            <Button>edzőink</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
