import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";
import TitleAnimation from "../molecules/TitleAnimation";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col sm:flex-row justify-center items-center gap-5 lg:gap-40 lg:px-16 pt-12 sm:pt-24 mt-16 mb-28 sm:mb-0 scroll-mt-28"
    >
      <div className="relative flex flex-col items-center lg:items-start">
        <h1 className="text-6xl sm:text-8xl font-bold max-w-lg text-center lg:text-left text-gray-200">
          <TitleAnimation />
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 2,
            ease: [0, 0.7, 0.2, 1],
          }}
          className="flex mt-6 items-center justify-center gap-5 flex-wrap"
        >
          <button
            className="px-4 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300"
            // TODO: add onClick to scroll to contact section
          >
            &lt;Contact Me /&gt;
          </button>
          <a href="/Resume_EnsarOkumus_Jun24.pdf" download target="_blank">
            <button className="flex items-center gap-3 px-4 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300">
              Download CV <FaDownload className="h-5 w-5" />
            </button>
          </a>
          <a href="https://github.com/ensarokumus" target="_blank">
            <button className="px-2 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300">
              <FaGithub className="h-5 w-5" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/ensarokumus/" target="_blank">
            <button className="px-2 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300">
              <FaLinkedin className="h-5 w-5" />
            </button>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center mt-5 lg:mt-0"
        initial={{ opacity: 0, x: 100, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 2,
          ease: [0, 0.7, 0.2, 1],
        }}
      >
        <div className="relative">
          <img
            src="/ensar-profile-pic.png"
            alt="Ensar Okumus"
            height={225}
            width={225}
            className="relative z-20 rounded-xl drop-shadow-xl grayscale"
          />
          <div
            aria-hidden
            className="absolute z-10 top-[15px] right-[20px] w-full h-[80%] rounded-xl border-gray-400 border-4"
          ></div>
          <div
            aria-hidden
            className="absolute bottom-0 w-full h-[80%] place-self-end rounded-xl bg-gradient-to-r from-green-400/50 via-blue-400/50 to-red-400/50"
          ></div>
        </div>

        <p className="mt-6 text-gray-700 text-lg max-w-lg text-center sm:text-left">
          Hello! I&apos;m Ensar, a{" "}
          <span className="font-medium text-blue-400">
            full stack developer
          </span>{" "}
          with a focus on{" "}
          <span className="font-medium text-blue-400">ReactJS. </span>
          I&apos;m excited to share my journey and projects with you. Enjoy your
          visit!
        </p>
      </motion.div>
    </section>
  );
}
