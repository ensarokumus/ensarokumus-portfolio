import { projectsData } from "@/lib/data";
import clsx from "clsx";
import Link from "next/link";
import { FaCirclePlay, FaGithub, FaLink } from "react-icons/fa6";
import ProjectImage from "../atoms/ProjectImage";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  projectColor,
  gitHubRepo,
  liveDemo,
  website,
}: ProjectProps) => {
  return (
    <section className="group flex flex-col max-w-[70rem] lg:flex-row lg:min-h-[30rem] mx-2 md:mx-24 mb-16 transition">
      <div className="flex flex-col justify-between rounded-lg p-4 min-h-[24rem] lg:max-w-[22rem] bg-gray-100 border border-gray-300 border-opacity-40 shadow-xl shadow-black/[0.1] group-hover:shadow-black/[0.2] transition backdrop-blur-[0.5rem]">
        <ul className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="px-3 py-1 text-xs text-gray-500 rounded-full border border-gray-300 bg-white border-opacity-40 shadow-inner shadow-black/[0.1] backdrop-blur-[0.5rem] hover:bg-gray-700 hover:text-white transition"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h3
          className={clsx(
            "text-4xl font-bold sm:text-6xl bg-gradient-to-r w-fit bg-clip-text text-transparent drop-shadow-sm",

            {
              "from-blue-600 to-blue-400": projectColor === "blue",
              "from-orange-600 to-orange-400": projectColor === "orange",
              "from-green-600 to-green-400": projectColor === "green",
            }
          )}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-700 text-pretty">{description}</p>
        <div className="flex justify-around items-end">
          {gitHubRepo !== "#" && (
            <Link
              href={gitHubRepo}
              target="_blank"
              className="pl-2 pr-4 py-2 flex gap-2 items-center text-xs text-gray-700 rounded-full border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] hover:bg-gray-700 hover:text-white hover:shadow-black/[0.3] transition duration-300"
            >
              <FaGithub className="text-xl" /> Source
            </Link>
          )}
          {liveDemo !== "#" && (
            <Link
              href={liveDemo}
              target="_blank"
              className="pl-2 pr-4 py-2 flex gap-2 items-center text-xs text-gray-700 rounded-full border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] hover:bg-gray-700 hover:text-white hover:shadow-black/[0.3] transition duration-300"
            >
              <FaCirclePlay className="text-xl" /> Live Demo
            </Link>
          )}
          {website !== "#" && (
            <Link
              href={website}
              target="_blank"
              className="pl-2 pr-4 py-2 flex gap-2 items-center text-xs text-gray-700 rounded-full border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] hover:bg-gray-700 hover:text-white hover:shadow-black/[0.3] transition duration-300"
            >
              <FaLink className="text-xl" /> Website
            </Link>
          )}
        </div>
      </div>
      <ProjectImage
        imageUrl={imageUrl}
        className="flex items-center justify-center px-10 py-5 rounded-lg border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] group-hover:shadow-black/[0.2] transition backdrop-blur-[0.5rem]"
      />
    </section>
  );
};
export default Project;
