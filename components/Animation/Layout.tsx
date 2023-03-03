import { motion } from "framer-motion";

const Layout = ({ children }: any) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 360,
      damping: 30,
    }}
    className="w-full h-full"
  >
    {children}
  </motion.div>
);
export default Layout;
