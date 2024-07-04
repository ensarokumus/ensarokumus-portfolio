import { BsMoon, BsSun } from "react-icons/bs";
import useTheme from "../../hooks/useTheme";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 px-2 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 dark:bg-stone-900 dark:border-stone-700 dark:shadow-stone-950/[0.3] dark:text-stone-50 dark:hover:bg-stone-700 dark:hover:text-gray-300 active:bg-gray-400 dark:active:bg-stone-800 active:text-gray-950 dark:active:text-gray-400 text-lg hover:scale-[1.15] active:scale-100 transition-all duration-300"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
