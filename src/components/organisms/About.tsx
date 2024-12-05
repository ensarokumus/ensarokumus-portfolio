import SectionHeading from "../atoms/SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center text-gray-700 dark:text-stone-50 leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>about me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-semibold dark:text-orange-500">
          Industrial Engineering
        </span>
        , I had over a decade of experience in multi-national companies in
        marketing, data analytics and graphic design. Designing for digital
        mediums helped me to discover my passion for programming and I decided
        to go on a self-learning journey for becoming a{" "}
        <span className="font-semibold dark:text-orange-500">
          full-stack web developer
        </span>
        .{" "}
      </p>

      <p>
        <em>My favorite part of programming</em> is the problem-solving aspect.
        I <em>love</em> the feeling of finally figuring out a solution to a
        problem. My core stack is{" "}
        <span className="font-semibold dark:text-orange-500">
          React, TypeScript, Next.js, Node.js, Express and MongoDB
        </span>
        . I am always looking to learn new technologies and currently working
        at{" "}
        <span className="font-semibold dark:text-orange-500">
          Quad Lock
        </span>{" "}
        as a Junior Developer.
      </p>
    </motion.section>
  );
}
