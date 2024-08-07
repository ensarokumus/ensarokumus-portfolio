import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      className="bg-blue-400 dark:bg-orange-500 my-24 h-16 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
