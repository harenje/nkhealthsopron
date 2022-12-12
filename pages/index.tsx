import Hero from "../components/Layout/Hero";
import Head from "next/head";
import HeroLayout from "../components/Layout/HeroLayout";
import FirstFeatureSection from "../components/FirstFeatureSection";
import SecondFeatureSection from "../components/SecondFeatureSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Edzőterem & Személyi edzés Sopronban | NK Health & Sport stúdió
        </title>
        <meta
          name="description"
          content="Személyi edzés Sopronban, a város egyik leginnovatívabb edzőtermében. NK Health & Sport stúdió vár minden kedves edzeni vágyót"
        />
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <HeroLayout>
        <Hero />
      </HeroLayout>
      <FirstFeatureSection />
      <SecondFeatureSection />
      <Footer />
    </div>
  );
}
