import type { NextPage, GetStaticProps } from "next";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

type Media = {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  media_type: string;
  permalink: string;
};

type Props = {
  feed: {
    data: Media[];
  };
};

const Hirfolyam: NextPage<Props> = ({ feed }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const url = `https://graph.instagram.com/me/media?/?size=l&fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch from Instagram. Status: ${response.status}`
      );
    }

    const feed = await response.json();

    const updatedFeedData = await Promise.all(
      feed.data.map(async (post: Media) => {
        const oEmbedUrl = `https://graph.facebook.com/v17.0/instagram_oembed?url=${encodeURIComponent(
          post.permalink
        )}&fields=thumbnail_url&access_token=${process.env.INSTAGRAM_KEY}`;
        try {
          const oEmbedResponse = await fetch(oEmbedUrl);
          const oEmbedData = await oEmbedResponse.json();

          if (oEmbedData.thumbnail_url) {
            return { ...post, thumbnail_url: oEmbedData.thumbnail_url };
          } else {
            return { ...post, thumbnail_url: post.media_url };
          }
        } catch (error) {
          return { ...post, thumbnail_url: post.media_url };
        }
      })
    );

    return { props: { feed: { data: updatedFeedData } } };
  } catch (error: any) {
    console.error("Error fetching Instagasddram data:", error.message);
    return {
      props: {
        feed: {
          data: [],
        },
      },
    };
  }
};
export default Hirfolyam;
