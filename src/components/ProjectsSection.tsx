import { projectData } from "../utils/consts";

const ProjectsSection = () => (
  <>
    {/*  <Carousel images={carouselImageCollection} /> */}
    <h1 className="text-3xl text-center my-4 shadow-md italic"> 🌐 Projects</h1>
    <div className="rounded overflow-hidden shadow-lg flex flex-col flex-wrap sm:flex-row">
      {projectData.map((project) => {
        return (
          <div
            className="sm:w-[50%] p-2 border mt-2 rounded text-center w-[100%]"
            key={project.id}
          >
            <img
              className="w-full h-[500px]"
              src={project.assetPath}
              alt={project.assetPath}
            />
            <div className="py-4 p-2">
              <div
                className={`font-bold text-xl mb-2 ${project.desc && "h-[170px]"}`}
              >
                <h1> {project.title} </h1>
                <p className="text-center text-[18px]">{project.desc}</p>
              </div>
            </div>
            <div className="iconContainer w-[100%] bg-[#fff] text-[#000] mt-2">
              <a href={project.GitURL} className="m-2" target="_blank">
                <i className="fa-brands fa-github text-2xl hover:animate-bounce"></i>
              </a>
              {project.URL ? (
                <a href={project.URL} className="m-2" target="_blank">
                  <i className="fa-solid fa-globe text-2xl hover:animate-bounce"></i>
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

export default ProjectsSection;
