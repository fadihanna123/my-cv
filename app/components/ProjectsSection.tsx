import { FC } from "react";
import Image from "next/image";

// Components
import {
  githubProfile,
  manyOther,
  noDescription,
  projectData,
  projectsSection,
} from "@app/utils";

const ProjectsSection: FC = () => (
  <div className="dark:text-neutral-300">
    <h1 className="my-4 text-center text-3xl shadow-md">
      <i className="fa-solid fa-briefcase mr-2"></i>
      <span className="ml-2 mr-9 italic">{projectsSection}</span>
    </h1>

    <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {projectData
        .slice()
        .sort((_a, b) => (b.URL === undefined ? -1 : 1))
        .map((project) => {
          return (
            <div
              className="rounded overflow-hidden shadow-lg dark:bg-linear-to-l dark:from-slate-800 dark:to-indigo-500 hover:scale-105"
              key={project.id}
            >
              <Image
                className="w-full h-50"
                src={project.assetPath}
                alt={project.title}
                width={500}
                height={200}
                priority
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base dark:text-white italic h-25">
                  {project.desc || noDescription}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {project.GitURL && (
                  <a
                    rel="noopener noreferrer"
                    href={project.GitURL}
                    target="_blank"
                    className="inline-block bg-black dark:bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white dark:text-gray-700 mr-2 mb-2"
                  >
                    <i className="fa-brands fa-github text-2xl hover:animate-bounce"></i>
                  </a>
                )}
                {project.URL && (
                  <a
                    rel="noopener noreferrer"
                    href={project.URL}
                    target="_blank"
                    className="inline-block bg-black dark:bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white dark:text-gray-700 mr-2 mb-2"
                  >
                    <i className="fa-solid fa-globe text-2xl hover:animate-bounce"></i>
                  </a>
                )}
              </div>
            </div>
          );
        })}
    </div>
    <div className="text-center mt-5 text-xl">
      {manyOther} <br />
      <a
        rel="noopener noreferrer"
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

export default ProjectsSection;
