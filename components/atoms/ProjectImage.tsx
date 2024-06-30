import Image, { StaticImageData } from "next/image";

interface ProjectImageProps {
  imageUrl: StaticImageData;
}

const ProjectImage = ({ imageUrl }: ProjectImageProps) => {
  return (
    <Image
      src={imageUrl}
      alt="screenshot of the web app"
      quality={95}
      className="rounded-lg shadow-xl shadow-black/[0.2] backdrop-blur-[0.5rem]"
    />
  );
};
export default ProjectImage;
