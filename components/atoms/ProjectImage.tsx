import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";

interface ProjectImageProps {
  imageUrl: StaticImageData;
  className: string;
}

const ProjectImage = ({ imageUrl, className }: ProjectImageProps) => {
  return (
    <div className={className}>
      <Image
        src={imageUrl}
        alt="screenshot of the web app"
        quality={95}
        className="rounded-lg shadow-xl shadow-black/[0.2] backdrop-blur-[0.5rem]"
      />
    </div>
  );
};
export default ProjectImage;
