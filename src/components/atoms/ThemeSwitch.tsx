import { BsMoon, BsSun } from "react-icons/bs";
import useTheme from "../../hooks/useTheme";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 px-2 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.3] backdrop-blur-[0.5rem] text-lg text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 hover:scale-[1.15] active:scale-100 transition-all duration-300"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
