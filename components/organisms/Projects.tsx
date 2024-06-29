import { projectsData } from "@/lib/data";
import SectionHeading from "../atoms/SectionHeader";
import Project from "../molecules/Project";

const Projects = () => {
  return (
    <section>
      <SectionHeading>my projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;
