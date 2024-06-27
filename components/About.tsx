"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";

interface LetterProps {
  letter: string;
  duration: number;
  delay: number;
  className: string;
}

const Letter: React.FC<LetterProps> = ({
  letter,
  duration,
  delay,
  className,
}) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration,
      delay,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    className={className}
  >
    {letter}
  </motion.span>
);

const About: React.FC = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center gap-10 lg:gap-40 px-4 lg:px-16 pt-16 overflow-x-hidden">
      <div className="relative flex flex-col items-center lg:items-start">
        <h1 className="text-6xl sm:text-8xl font-bold max-w-lg text-center lg:text-left text-gray-200">
          <span className="block">
            {"ensar".split("").map((letter, index) => (
              <Letter
                key={index}
                letter={letter}
                duration={0.1 * (index + 1)}
                delay={0.1 * (index + 1)}
                className="text-gray-700"
              />
            ))}
          </span>
          <span className="block mt-2">
            {"okumus".split("").map((letter, index) => (
              <Letter
                key={index}
                letter={letter}
                duration={0.1 * (index + 11)}
                delay={0.1 * (index + 11)}
                className="text-gray-600"
              />
            ))}
          </span>
          <span className="block mt-2">
            {"portfolio".split("").map((letter, index) => (
              <Letter
                key={index}
                letter={letter}
                duration={0.1 * (index + 13)}
                delay={0.1 * (index + 13)}
                className="text-gray-400"
              />
            ))}
            <Letter
              letter="."
              duration={2.2}
              delay={2.2}
              className="text-orange-400"
            />
          </span>
        </h1>

        <div className="flex items-center justify-center gap-5">
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 2.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mt-6 px-4 py-2 text-sm text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300"
            // TODO: add onClick to scroll to contact section
          >
            &lt;Contact Me /&gt;
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 2.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex items-center gap-3 mt-6 px-4 py-2 text-sm text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300"
            // TODO: add onClick to download resume
          >
            Download CV <FaDownload className="h-5 w-5" />
          </motion.button>
          <Link href="https://github.com/ensarokumus" target="_blank">
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 2.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex items-center gap-3 mt-6 px-4 py-2 text-sm text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300"
            >
              <FaGithub className="h-5 w-5" />
            </motion.button>
          </Link>
          <Link href="https://www.linkedin.com/in/ensarokumus/" target="_blank">
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 2.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex items-center gap-3 mt-6 px-4 py-2 text-sm text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300"
            >
              <FaLinkedin className="h-5 w-5" />
            </motion.button>
          </Link>
        </div>
      </div>

      <motion.div
        className="flex flex-col items-center mt-5 lg:mt-0"
        initial={{ opacity: 0, x: 100, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 2.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          src="/ensar-profile-pic.png"
          alt="Ensar Okumus"
          height={175}
          width={175}
          fetchPriority="high"
          className="grayscale rounded-xl drop-shadow-xl"
        />
        <p className="mt-6 text-gray-600 text-base max-w-lg border-gray-700 pl-4">
          Hello! I&apos;m Ensar, a dedicated{" "}
          <span className="font-medium text-orange-400">
            full-stack developer
          </span>{" "}
          with a focus on{" "}
          <span className="font-medium text-orange-400">ReactJS.</span> Welcome
          to my portfolio, where you can explore my work on{" "}
          <span className="font-medium text-orange-400">
            responsive web applications,
          </span>{" "}
          creating{" "}
          <span className="font-medium text-orange-400">
            intuitive user interfaces,
          </span>{" "}
          and{" "}
          <span className="font-medium text-orange-400">
            optimising website performance.
          </span>
          <br />
          <br />
          I&apos;m excited to share my journey and projects with you. Enjoy your
          visit!
        </p>
      </motion.div>
    </section>
  );
};

export default About;
