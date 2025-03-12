import { projectData } from "@utils/consts";
import Image from "next/image";

const ProjectsSection = () => (
  <>
    <h1 className="my-4 text-center text-3xl shadow-md">
      <i className="fa-solid fa-briefcase mr-2"></i>
      <span className="ml-2 mr-9 italic">Projects</span>
    </h1>
    <div className="flex flex-col flex-wrap overflow-hidden rounded-sm shadow-lg sm:flex-row">
      {projectData.map((project) => {
        return (
          <div
            className="mt-2 w-full rounded-sm border p-2 text-center sm:w-1/2"
            key={project.id}
          >
            <Image
              className="h-[200px] w-full object-contain p-2 sm:h-[200px]"
              src={project.assetPath}
              alt={project.assetPath}
              width={0}
              height={500}
            />
            <div className="p-2 py-4">
              <div className="mb-2 h-[170px] text-xl font-bold">
                <h1> {project.title} </h1>
                <p className="text-center text-[18px]">
                  {project.desc ? (
                    project.desc
                  ) : (
                    <small className="italic">No description yet</small>
                  )}
                </p>
              </div>
            </div>
            <div className="iconContainer mt-2 w-full bg-white text-black">
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
    <div className="text-center text-xl">
      And many other in <br />
      <a
        target="_blank"
        className="link sm:auto relative text-blue-500"
        href="https://github.com/fadihanna123?tab=repositories"
      >
        Github profile
      </a>
      ...
    </div>
  </>
);

export default ProjectsSection;
