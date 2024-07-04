import LetterAnimation from "../atoms/LetterAnimation";

const TitleAnimation = () => {
  return (
    <>
      <span className="block">
        {"ensar".split("").map((letter, index) => (
          <LetterAnimation
            key={index}
            letter={letter}
            duration={0.1 * (index + 1)}
            delay={0.1 * (index + 1)}
            className="text-gray-700 dark:text-stone-50"
          />
        ))}
      </span>
      <span className="block mt-2">
        {"okumus".split("").map((letter, index) => (
          <LetterAnimation
            key={index}
            letter={letter}
            duration={0.1 * (index + 6)}
            delay={0.1 * (index + 6)}
            className="text-gray-700 dark:text-stone-50"
          />
        ))}
      </span>
      <span className="block mt-2">
        {"portfolio".split("").map((letter, index) => (
          <LetterAnimation
            key={index}
            letter={letter}
            duration={0.1 * (index + 11)}
            delay={0.1 * (index + 11)}
            className="text-gray-400 dark:text-stone-400"
          />
        ))}
        <LetterAnimation
          letter="."
          duration={2}
          delay={2}
          className="text-blue-400 dark:text-orange-500"
        />
      </span>
    </>
  );
};

export default TitleAnimation;
