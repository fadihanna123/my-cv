import { projectData } from "../data";

const ProjectsSection = () => {
  return (
    <>
      <h1 className="text-xl text-center">Projects</h1>

      {projectData.map((project) => {
        return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg flex">
            <img className="w-full" src="" alt={project.assetPath} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"> {project.title}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectsSection;
