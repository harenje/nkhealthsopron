import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import Button from "../components/Button";

import Dashboard from "../components/Dashboard";

export default function SignIn({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Dashboard userName={session.user?.email ?? ""} />
      </>
    );
  }

  return (
    <section className="h-screen w-full bg-nk-black">
      <Navbar />
      <div className="h-screen w-full px-1">
        <div className="container mx-auto flex h-3/4 flex-col items-center gap-20 rounded bg-signin_image bg-cover bg-center py-10">
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
          <motion.div
            className="min-w-1/2 lg-mx:0 mx-5 flex items-center justify-center rounded bg-nk-white bg-opacity-20 py-5 backdrop-blur-md"
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
              <h1 className="text-md mb-5 text-center font-bold text-nk-white lg:text-xl">
                Üdvözöllek az NK Health & Sport online bejelentkező felületén,
                folytatáshoz kérlek lépj be!
              </h1>
              <div className="flex flex-col justify-center gap-2">
                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />
                <label className="self-center text-nk-white" htmlFor="email">
                  E-mail cím
                </label>
                <input type="email" id="email" name="email" />
                <Button>Bejelentkezés</Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
