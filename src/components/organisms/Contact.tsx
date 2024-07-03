import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SectionHeading from "../atoms/SectionHeader";
import { Variants, motion } from "framer-motion";
import ContactForm from "../molecules/ContactForm";

const slideInBelowAnimationVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-28 mb-12 lg:mb-28">
      <SectionHeading>contact me</SectionHeading>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={slideInBelowAnimationVariants}
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col lg:flex-row mx-2 max-w-[60rem]"
      >
        <div className="relative flex flex-col justify-end gap-4 min-h-[14rem] lg:w-1/2 rounded-lg p-4 bg-gray-100 border border-gray-300 border-opacity-40 shadow-xl overflow-clip">
          <div
            aria-hidden
            className="absolute -left-14 -top-14 blur-[5rem] rounded-full aspect-square bg-gradient-to-r from-green-500 to-purple-500 h-52 motion-safe:animate-spin-slow"
          />
          <p className="text-sm text-center lg:text-left text-gray-700">
            Thank you for taking the time to review my portfolio. If you're
            interested in hiring me, please feel free to reach out directly at{" "}
            <a
              href="mailto:ensarokumus@gmail.com"
              className="text-blue-700 underline"
            >
              ensarokumus@gmail.com
            </a>{" "}
            or through this form.
          </p>
          <nav className="flex gap-2 self-center lg:self-start">
            <a
              href="https://github.com/ensarokumus"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300"
              aria-label="GitHub Profile"
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
          </nav>
        </div>
        <ContactForm />
      </motion.div>
    </section>
  );
};
export default Contact;
