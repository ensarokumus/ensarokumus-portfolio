import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-semibold capitalize mb-8 text-center text-gray-700 dark:text-stone-50">
      {children}
    </h2>
  );
}
