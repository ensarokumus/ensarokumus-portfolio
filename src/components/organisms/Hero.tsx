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
            type: "spring",
            bounce: 0.4,
          }}
          className="flex mt-6 items-center justify-center gap-5 flex-wrap"
        >
          <a
            href="#contact"
            className="px-4 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300"
          >
            &lt;Contact Me /&gt;
          </a>
          <a
            href="/Resume_EnsarOkumus_Jul24.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300"
          >
            Download CV <FaDownload className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/ensarokumus"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300"
            aria-label="Github Profile"
          >
            <FaGithub className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/ensarokumus/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-5 w-5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col items-center mt-5 lg:mt-0"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
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
            aria-hidden={true}
            className="absolute z-10 top-[15px] right-[20px] w-full h-[80%] rounded-xl border-gray-400 border-4"
          ></div>
          <div
            aria-hidden={true}
            className="absolute bottom-0 w-full h-[80%] place-self-end rounded-xl bg-gradient-to-r from-green-400/50 via-blue-400/50 to-red-400/50"
          ></div>
        </div>

        <p className="mt-6 text-gray-700 text-lg max-w-lg text-center sm:text-left">
          Hello! I&apos;m Ensar, a{" "}
          <span className="font-semibold">full stack developer</span> with a
          focus on <span className="font-semibold">ReactJS. </span>
          I&apos;m excited to share my journey and projects with you. Enjoy your
          visit!
        </p>
      </motion.div>
    </section>
  );
}
