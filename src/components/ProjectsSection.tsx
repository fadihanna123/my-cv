import Carousel from "../ui/Carousel";
import { carouselImageCollection, projectData } from "../utils/consts";

const ProjectsSection = () => {
  return (
    <>
      <Carousel images={carouselImageCollection} />
      <h1 className="text-2xl text-center m-2 shadow-md italic">Projects</h1>
      <div className="rounded overflow-hidden shadow-lg flex flex-row flex-wrap">
        {projectData.map((project) => {
          return (
            <div
              className="w-[50%] p-2 border mt-2 rounded text-center"
              key={project.id}
            >
              <img
                className="w-full h-[500px]"
                src={project.assetPath}
                alt={project.assetPath}
              />
              <div className="py-4 text-black p-2">
                <div className="font-bold text-xl mb-2 text-[#fff]">
                  {project.title}
                  <p className="text-center text-[18px]">{project.desc}</p>
                </div>
              </div>
              <div className="w-[100%] bg-white text-black">
                <a href={project.GitURL} className="m-2" target="_blank">
                  <i className="fa-brands fa-github text-2xl"></i>
                </a>
                {project.URL ? (
                  <a href={project.URL} className="m-2" target="_blank">
                    <i className="fa-solid fa-globe text-2xl"></i>
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectsSection;
