interface ProjectImageProps {
  imageUrl: string;
  imageAlt: string;
}

const ProjectImage = ({ imageUrl, imageAlt }: ProjectImageProps) => {
  return (
    <img
      src={imageUrl}
      alt={imageAlt}
      className="rounded-lg shadow-xl shadow-black/[0.2] backdrop-blur-[0.5rem]"
    />
  );
};
export default ProjectImage;
