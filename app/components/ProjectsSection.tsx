import { projectData } from "@utils/consts";
import Image from "next/image";

const ProjectsSection = () => (
  <>
    <h1 className="text-3xl text-center my-4 shadow-md">
      <i className="fa-solid fa-briefcase mr-2"></i>
      <span className="italic mr-9 ml-2">Projects</span>
    </h1>
    <div className="rounded overflow-hidden shadow-lg flex flex-col flex-wrap sm:flex-row">
      {projectData.map((project) => {
        return (
          <div
            className="sm:w-[50%] p-2 border mt-2 rounded text-center w-[100%]"
            key={project.id}
          >
            <Image
              className="w-full h-[500px] p-2"
              src={project.assetPath}
              alt={project.assetPath}
            />
            <div className="py-4 p-2">
              <div className={`font-bold text-xl mb-2 h-[170px]`}>
                <h1> {project.title} </h1>
                <p className="text-center text-[18px]">
                  {project.desc ? (
                    project.desc
                  ) : (
                    <small className="italic">No description</small>
                  )}
                </p>
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
    <div className="text-center text-xl">
      And many other in <br />
      <a
        target="_blank"
        className="text-blue-500"
        href="https://github.com/fadihanna123?tab=repositories"
      >
        Github profile
      </a>
      ...
    </div>
  </>
);

export default ProjectsSection;
