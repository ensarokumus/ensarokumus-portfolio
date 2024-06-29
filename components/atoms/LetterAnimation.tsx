import { motion } from "framer-motion";

interface LetterAnimationProps {
  letter: string;
  duration: number;
  delay: number;
  className: string;
}

const LetterAnimation = ({
  letter,
  duration,
  delay,
  className,
}: LetterAnimationProps) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration,
      delay,
      ease: [0, 0.7, 0.2, 1],
    }}
    className={className}
  >
    {letter}
  </motion.span>
);

export default LetterAnimation;
