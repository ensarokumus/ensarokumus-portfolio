import { projectsData } from "../../lib/data";
import clsx from "clsx";
import { FaCirclePlay, FaGithub, FaLink } from "react-icons/fa6";
import ProjectImage from "../atoms/ProjectImage";
import { motion, Variants } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const projectDetailsVariants: Variants = {
  offscreen: {
    translateX: -100,
    opacity: 0,
  },
  onscreen: {
    translateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const projectImageVariants: Variants = {
  offscreen: {
    translateX: 100,
    opacity: 0,
  },
  onscreen: {
    translateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  imageAlt,
  projectColor,
  gitHubRepo,
  liveDemo,
  website,
}: ProjectProps) => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      className="group flex flex-col max-w-[70rem] lg:flex-row lg:min-h-[30rem] mx-2 md:mx-24 mb-16 transition"
    >
      <motion.div
        variants={projectDetailsVariants}
        className="flex flex-col justify-between rounded-lg p-4 min-h-[24rem] lg:max-w-[22rem] bg-gray-100 dark:bg-stone-800 dark:border-stone-700 border border-gray-300 border-opacity-40"
      >
        <ul className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="px-3 py-1 text-xs text-gray-500 rounded-full border border-gray-300 bg-white dark:bg-stone-600 dark:text-stone-50 dark:border-stone-500 border-opacity-40 hover:bg-gray-700 hover:text-white transition"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h3
          className={clsx(
            "text-4xl font-bold sm:text-6xl bg-gradient-to-r w-fit bg-clip-text text-transparent",

            {
              "from-blue-600 to-blue-400": projectColor === "blue",
              "from-orange-600 to-orange-400": projectColor === "orange",
              "from-green-600 to-green-400": projectColor === "green",
              "from-blue-400 via-green-400 to-red-400":
                projectColor === "purple",
            }
          )}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-stone-50 text-pretty">
          {description}
        </p>
        <div className="flex justify-around items-end">
          {gitHubRepo !== "#" && (
            <a
              href={gitHubRepo}
              target="_blank"
              className="pl-2 pr-4 py-2 flex items-center gap-3 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 duration-300 dark:bg-stone-900 dark:border-stone-700 dark:shadow-stone-950/[0.3] dark:text-stone-50 dark:hover:bg-stone-700 dark:hover:text-gray-300 active:bg-gray-400 dark:active:bg-stone-800 active:text-gray-950 dark:active:text-gray-400 transition-colors"
            >
              <FaGithub className="text-xl" /> Source
            </a>
          )}
          {liveDemo !== "#" && (
            <a
              href={liveDemo}
              target="_blank"
              className="pl-2 pr-4 py-2 flex items-center gap-3 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 duration-300 dark:bg-stone-900 dark:border-stone-700 dark:shadow-stone-950/[0.3] dark:text-stone-50 dark:hover:bg-stone-700 dark:hover:text-gray-300 active:bg-gray-400 dark:active:bg-stone-800 active:text-gray-950 dark:active:text-gray-400 transition-colors"
            >
              <FaCirclePlay className="text-xl" /> Live Demo
            </a>
          )}
          {website !== "#" && (
            <a
              href={website}
              target="_blank"
              className="pl-2 pr-4 py-2 flex items-center gap-3 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 duration-300 dark:bg-stone-900 dark:border-stone-700 dark:shadow-stone-950/[0.3] dark:text-stone-50 dark:hover:bg-stone-700 dark:hover:text-gray-300 active:bg-gray-400 dark:active:bg-stone-800 active:text-gray-950 dark:active:text-gray-400 transition-colors"
            >
              <FaLink className="text-xl" /> Website
            </a>
          )}
        </div>
      </motion.div>
      <motion.div
        variants={projectImageVariants}
        className={clsx(
          "flex items-center justify-center px-10 py-5 rounded-lg border border-gray-300 bg-white border-opacity-40 dark:border-stone-700 dark:bg-gradient-to-r",
          {
            "from-blue-600 to-blue-400": projectColor === "blue",
            "from-orange-600 to-orange-400": projectColor === "orange",
            "from-green-600 to-green-400": projectColor === "green",
            "from-blue-400 via-green-400 to-red-400": projectColor === "purple",
          }
        )}
      >
        <ProjectImage imageUrl={imageUrl} imageAlt={imageAlt} />
      </motion.div>
    </motion.section>
  );
};
export default Project;
