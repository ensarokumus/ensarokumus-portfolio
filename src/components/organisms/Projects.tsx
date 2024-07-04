import { projectsData } from "../../lib/data";
import SectionHeading from "../atoms/SectionHeader";
import Project from "../molecules/Project";

const Projects = () => {
  return (
    <section id="projects" className="mb-12 lg:mb-28 scroll-mt-28">
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
