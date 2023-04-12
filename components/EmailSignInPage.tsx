import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Button from "./Button";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}

const EmailSignInPage = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <section className="h-screen w-full bg-bejelentkezes bg-cover bg-center md:bg-fixed">
      <Navbar />
      <motion.h1
        className="text-4xl lg:text-6xl text-nk-white uppercase font-bold text-center mt-10 tracking-widest"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 30,
        }}
      >
        adj esélyt a változásnak
      </motion.h1>
      <div className="flex justify-center">
        <motion.div
          className="mx-5 py-5 min-w-2/4 min-h-5/6 bg-nk-white opacity-90 rounded-sm flex justify-center items-center mt-10"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 360,
            damping: 30,
          }}
        >
          <form
            className="px-4 flex justify-center items-center flex-col"
            method="post"
            action="/api/auth/signin/email"
          >
            <h1 className="text-center text-xl text-nk-grey font-bold mb-5">
              Üdvözöllek az NK Health & Sport online bejelentkező felületén,
              folytatáshoz kérlek lépj be!
            </h1>
            <div className="flex flex-col gap-2 justify-center">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <label className="self-center" htmlFor="email">
                E-mail cím
              </label>
              <input type="email" id="email" name="email" />
              <Button>Bejelentkezés</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSignInPage;
