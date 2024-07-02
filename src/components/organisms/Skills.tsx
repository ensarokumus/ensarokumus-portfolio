"use client";

import { motion } from "framer-motion";
import SectionHeading from "../atoms/SectionHeader";
import { skillsData } from "../../lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-28 mb-28">
      <SectionHeading>technical skills</SectionHeading>
      <ul className="flex flex-wrap justify-center max-w-[70rem] mx-2 md:mx-24 gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-gray-200 text-sm rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
