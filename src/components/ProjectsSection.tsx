import { projectData } from "../consts";

const ProjectsSection = () => {
  return (
    <>
      <h1 className="text-2xl text-center m-2 shadow-md">Projects</h1>
      <div className="rounded overflow-hidden shadow-lg flex flex-row flex-wrap">
        {projectData.map((project) => {
          return (
            <div className="w-[50%] p-2 border mt-2 rounded">
              <img
                className="w-full"
                src={project.assetPath}
                alt={project.assetPath}
              />
              <div className="py-4">
                <div className="font-bold text-xl mb-2"> {project.title} </div>
              </div>
              <div className="w-[100]">
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
