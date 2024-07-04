import { motion } from "framer-motion";
import { links } from "../../lib/data";

const Navbar = () => {
  return (
    <header className="z-50 relative">
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed flex items-center justify-center top-0 left-1/2 h-[5rem] w-full sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full rounded-none
        border border-white border-opacity-40 bg-opacity-80 bg-white  shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] 
        dark:bg-stone-900 dark:border-stone-700 dark:shadow-stone-950/[0.3]"
      >
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 dark:text-gray-50">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center h-3/4"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                className="px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-stone-700 hover:text-gray-800 dark:hover:text-gray-300 active:bg-gray-400 dark:active:bg-stone-800 active:text-gray-950 dark:active:text-gray-400 transition"
                href={link.hash}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Navbar;
