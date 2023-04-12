import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Button from "./Button";

const Dashboard = (props: { userName: string }) => {
  return (
    <section className="w-screen h-screen bg-nk-black">
      <Navbar />
      <motion.div
        className="flex items-center p-5 flex-col"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 30,
        }}
      >
        <h1 className="text-nk-white text-2xl">Welcome {props.userName}</h1>
        <Button
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
        >
          Kijelentkezek
        </Button>
      </motion.div>
    </section>
  );
};

export default Dashboard;
