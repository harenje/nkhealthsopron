import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Hirfolyam: NextPage = ({ feed }: any) => {
  const images = feed.data;
  return (
    <>
      <section className="h-full w-full bg-nk-black">
        <Navbar />
        <motion.h1
          className="mt-10 mb-10 text-center text-4xl font-bold uppercase tracking-widest text-nk-white lg:text-6xl"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
          Aktuális
        </motion.h1>
        <main className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-5 px-4 sm:gap-4 sm:px-6 md:grid-cols-2">
          {images &&
            images.map((media: any) => (
              <a
                key={media.id}
                href={media.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="pb-3">
                  {media.media_type === "VIDEO" ? (
                    <video
                      controls
                      className="aspect-square rounded-md object-cover grayscale filter transition duration-200 hover:filter-none"
                    >
                      <source src={media.media_url} type="video/mp4" />A
                      böngésző nem támogatja a videó formátumot.
                    </video>
                  ) : (
                    <img
                      className="aspect-square rounded-md object-cover grayscale filter transition duration-200 hover:filter-none"
                      src={media.media_url}
                      alt={media.caption}
                    />
                  )}
                  <h2 className="mt-2 text-sm font-semibold text-nk-white">
                    {media.caption}
                  </h2>
                </div>
              </a>
            ))}
        </main>
      </section>
    </>
  );
};
{
}

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return { props: { feed } };
};
export default Hirfolyam;
