"use client";

import { FC, useEffect, useState } from "react";
import "@styles/App.css";
import { ClipLoader } from "react-spinners";

// Components
import {
  EducationSection,
  ExperienceSection,
  PersonCardSection,
  ProjectsSection,
  SkillsSection,
} from "./components";
import { Footer, Header } from "./inc";
import { MyGlobalContext } from "./states";
import { toggleTheme } from "./functions";
import { ContactSection } from "@containers/Contact";

const Layout: FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-neutral-900 text-white">
        <ClipLoader
          color={"white"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <MyGlobalContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`wrapper transition-all duration-300 container m-0 overflow-auto border-0 p-0 text-lg font-bold text-black outline-0 bg-neatural-100 dark:bg-neutral-900 ${
          !darkMode && "dark"
        }`}
      >
        <Header />
        <div className="border-r-2 border-solid border-black p-2">
          <PersonCardSection />
        </div>
        <div>
          <SkillsSection />
        </div>
        <div className="ml-0 border-r-2 border-solid border-black p-2 sm:ml-20">
          <div id="experience">
            <ExperienceSection />
            <EducationSection />
          </div>
          <div id="projects">
            <ProjectsSection />
          </div>
          <ContactSection />
        </div>
        <Footer />
        <button
          className="fixed right-0 bottom-0 m-3 p-2 z-50 border-2 border-solid border-black rounded-full bg-white cursor-pointer w-12.5 h-12.5"
          onClick={() => toggleTheme(darkMode, setDarkMode)}
        >
          {darkMode ? (
            <i className="fa-solid fa-moon text-black"></i>
          ) : (
            <i className="fa-solid fa-sun bg-white text-black"></i>
          )}
        </button>
      </div>
    </MyGlobalContext.Provider>
  );
};

export default Layout;
