import SectionHeading from "../atoms/SectionHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../lib/data";
import useTheme from "../../hooks/useTheme";

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section id="experience" className="scroll-mt-28 mb-28">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline
        lineColor={
          theme === "light" ? "rgb(209, 213, 219)" : "rgb(249, 115, 22)"
        }
      >
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: theme === "light" ? "white" : "#292524",
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              border:
                theme === "light"
                  ? "1px solid rgba(209, 213, 219, 0.3)"
                  : "1px solid rgba(68, 64, 60, 1)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              borderRadius: "0.75rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={experience?.date}
            iconClassName="bg-white dark:bg-stone-800 text-gray-700 dark:text-stone-50 shadow-xl border border-gray-300/30 shadow-black/[0.1]"
            icon={experience?.icon}
          >
            <h3 className="font-semibold capitalize">{experience?.title}</h3>
            <p className="!font-light !mt-0 !text-sm text-gray-700 dark:text-stone-400 capitalize">
              {experience?.company}
              {" ("}
              {experience?.location}
              {")"}
            </p>
            <p className="!text-md !font-light">{experience?.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
