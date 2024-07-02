interface ProjectImageProps {
  imageUrl: string;
}

const ProjectImage = ({ imageUrl }: ProjectImageProps) => {
  return (
    <img
      src={imageUrl}
      alt="screenshot of the web app"
      className="rounded-lg shadow-xl shadow-black/[0.2] backdrop-blur-[0.5rem]"
    />
  );
};
export default ProjectImage;
