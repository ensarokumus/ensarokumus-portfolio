import { motion } from "framer-motion";
import SectionHeading from "../atoms/SectionHeader";
import { groupedSkills } from "../../lib/data";

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
      <SectionHeading>Technical Skills</SectionHeading>
      <div className="max-w-[70rem] mx-2 md:mx-24">
        {Object.entries(groupedSkills).map(([group, skills], groupIndex) => (
          <div key={group} className="mb-8">
            <motion.h3
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={groupIndex * (skills.length + 1)}
              className="text-xl font-semibold mb-4 text-gray-800 dark:text-stone-200"
            >
              {group}
            </motion.h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill, skillIndex) => (
                <motion.li
                  className="bg-white dark:bg-stone-800 border border-gray-200 dark:border-stone-700 text-sm rounded-xl px-5 py-3 text-gray-800 dark:text-stone-50"
                  key={`${group}-${skill}`}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={groupIndex * (skills.length + 1) + skillIndex + 1}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
