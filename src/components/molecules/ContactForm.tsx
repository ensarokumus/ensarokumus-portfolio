import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { FaPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://formsubmit.co/ajax/5593fd1ee34005c5cbee78d27aa78e06",
        { email, message },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      toast.success("Email sent successfully");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send email");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col lg:w-1/2 min-h-[24rem] z-10 sm:z-0 gap-5 items-center justify-center px-4 lg:px-10 py-4 lg:py-5 text-sm rounded-lg border border-gray-300 dark:border-stone-700 bg-white dark:bg-stone-900 border-opacity-40 shadow-xl"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="sr-only">
        Your email address
      </label>
      <input
        className="h-14 w-full p-2 lg:p-3 rounded-lg border border-gray-300 dark:border-stone-600 text-gray-700 dark:text-stone-50 dark:bg-stone-700 dark:placeholder:text-stone-400"
        id="email"
        name="senderEmail"
        type="email"
        required
        maxLength={500}
        placeholder="Your email address (name@example.com)"
        value={email}
        disabled={isSubmitting}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message" className="sr-only">
        Your message
      </label>
      <textarea
        className="w-full h-full p-2 lg:p-3 flex-1 rounded-lg border border-gray-300 dark:border-stone-600 resize-none text-gray-700 dark:text-stone-50 dark:bg-stone-700 dark:placeholder:text-stone-400"
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
        className="group flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white border-opacity-40 shadow-xl shadow-black/[0.1] backdrop-blur-[0.5rem] text-sm text-gray-600 rounded-full hover:bg-gray-100 hover:text-gray-800 duration-300 dark:bg-stone-900 dark:border-stone-700 dark:shadow-stone-950/[0.3] dark:text-stone-50 dark:hover:bg-stone-700 dark:hover:text-gray-300 active:bg-gray-400 dark:active:bg-stone-800 active:text-gray-950 dark:active:text-gray-400 transition-colors"
      >
        {isSubmitting ? (
          <>
            <CgSpinner
              className="h-5 w-5 animate-spin opacity-70"
              aria-hidden={true}
            />
            <span className="sr-only">Submitting...</span>
          </>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane
              className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden={true}
            />{" "}
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
