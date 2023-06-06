import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { signOut } from "next-auth/react";

const EmailVerification = (props: { text: string; button?: boolean }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-nk-grey">
      <motion.div
        className="mx-5 flex flex-col items-center rounded-md bg-nk-black p-5 sm:w-1/2 lg:w-1/3 2xl:w-1/4"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 30,
        }}
      >
        <Image src="/logofeher.png" alt="Logo" width={200} height={100}></Image>
        <h1 className="mb-5 text-center text-xl text-nk-white">{props.text}</h1>
        {props.button && (
          <Button onClick={() => signOut()}>Kijelentkezés</Button>
        )}
        <p className="mt-5 text-nk-grey">NK Health & Sport Stúdió</p>
      </motion.div>
    </div>
  );
};

export default EmailVerification;
