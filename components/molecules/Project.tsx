import { projectsData } from "@/lib/data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaCirclePlay, FaGithub, FaLink } from "react-icons/fa6";

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
    <section className="bg-gray-100 flex flex-col sm:flex-row gap-2 rounded-lg mb-20 hover:bg-gray-200 transition">
      <div className="flex flex-col gap-4 p-4">
        <ul className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="px-3 py-1 text-xs text-gray-500 rounded-full border border-gray-300 bg-white border-opacity-40 shadow-inner shadow-black/[0.1] backdrop-blur-[0.5rem] hover:bg-gray-700 hover:text-white transition-colors duration-300"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h3
          className={clsx(
            "my-6 text-4xl font-bold sm:text-6xl bg-gradient-to-r w-fit bg-clip-text text-transparent drop-shadow-sm",

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
        <div className="flex px-10 mt-10 justify-around">
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
      <Image
        src={imageUrl}
        alt="screenshot of the web app"
        quality={95}
        className="rounded-lg"
      />
    </section>
  );
};
export default Project;