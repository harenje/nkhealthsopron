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
        className="mt-10 text-center text-4xl font-bold uppercase tracking-widest text-nk-white lg:text-6xl"
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
          className="min-w-2/4 min-h-5/6 mx-5 mt-10 flex items-center justify-center rounded-sm bg-nk-white py-5 opacity-90"
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
            className="flex flex-col items-center justify-center px-4"
            method="post"
            action="/api/auth/signin/email"
          >
            <h1 className="mb-5 text-center text-xl font-bold text-nk-grey">
              Üdvözöllek az NK Health & Sport online bejelentkező felületén,
              folytatáshoz kérlek lépj be!
            </h1>
            <div className="flex flex-col justify-center gap-2">
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
