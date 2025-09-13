import { useGlobalContext } from "@app/states";
import {
  githubProfile,
  manyOther,
  noDescription,
  projectData,
  projectsSection,
} from "@utils/consts";
import Image from "next/image";

const ProjectsSection = () => {
  const { darkMode } = useGlobalContext();

  return (
    <div className="dark:text-neutral-300">
      <h1 className="my-4 text-center text-3xl shadow-md">
        <i className="fa-solid fa-briefcase mr-2"></i>
        <span className="ml-2 mr-9 italic">{projectsSection}</span>
      </h1>
      <div className="flex flex-col flex-wrap overflow-hidden rounded-sm shadow-lg sm:flex-row">
        {projectData
          .sort((_a, b) => (b.URL === undefined ? -1 : 1))
          .map((project) => {
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
                    <h2> {project.title} </h2>
                    <p className="text-center text-[18px]">
                      {project.desc ? (
                        project.desc
                      ) : (
                        <small className="italic">{noDescription}</small>
                      )}
                    </p>
                  </div>
                </div>
                <div
                  className={`iconContainer mt-2 w-full bg-dark text-black ${darkMode ? "bg-black text-white" : "bg-white"}`}
                >
                  {project.GitURL && (
                    <a href={project.GitURL} className="m-2" target="_blank">
                      <i className="fa-brands fa-github text-2xl hover:animate-bounce"></i>
                    </a>
                  )}
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
      <div className="text-center mt-5 text-xl">
        {manyOther} <br />
        <a
          target="_blank"
          className="link sm:auto relative text-blue-500"
          href="https://github.com/fadihanna123?tab=repositories"
        >
          {githubProfile}
        </a>
        ...
      </div>
    </div>
  );
};

export default ProjectsSection;
