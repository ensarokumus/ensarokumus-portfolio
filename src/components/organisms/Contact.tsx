import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa6";
import SectionHeading from "../atoms/SectionHeader";
import { Variants, motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/5593fd1ee34005c5cbee78d27aa78e06", {
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(response);
        toast.success("Email sent successfully");
        setEmail("");
        setMessage("");
      })
      .catch((error) => toast.error(error))
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
            <a href="mailto:ensarokumus@gmail.com" className="text-blue-500">
              ensarokumus@gmail.com
            </a>{" "}
            or through this form.
          </p>
          <div className="flex gap-2 self-center lg:self-start">
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
          </div>
        </div>
        <form
          className="flex flex-col lg:w-1/2 min-h-[24rem] z-10 sm:z-0 gap-5 items-center justify-center px-4 lg:px-10 py-4 lg:py-5 text-sm rounded-lg border border-gray-300 bg-white border-opacity-40 shadow-xl"
          onSubmit={handleSubmit}
        >
          <input
            className="h-14 w-full p-2 lg:p-3 rounded-lg border border-gray-300 text-gray-700"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email address (name@example.com)"
            value={email}
            disabled={isSubmitting}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="w-full h-full p-2 lg:p-3 flex-1 rounded-lg border border-gray-300 resize-none text-gray-700"
            id="message"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            value={message}
            disabled={isSubmitting}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 transition-colors duration-300"
          >
            {isSubmitting ? (
              <CgSpinner className="h-5 w-5 animate-spin opacity-70" />
            ) : (
              <>
                Submit{" "}
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
};
export default Contact;
