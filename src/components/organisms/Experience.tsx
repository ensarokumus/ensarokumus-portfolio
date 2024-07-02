import SectionHeading from "../atoms/SectionHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="rgb(96, 165, 250)">
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "white",
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #9ca3af",
            }}
            date={experience?.date}
            dateClassName="mx-4"
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
            }}
            icon={experience?.icon}
          >
            <h3 className="font-semibold capitalize">
              {experience?.title}
              <br />
              <span className="font-light capitalize">
                {"("}
                {experience?.company}
                {")"}
              </span>{" "}
            </h3>
            <p className="font-normal !mt-0">{experience?.location}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
