"use client";
import React, { useState } from "react";
import "@styles/App.css";
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
import { ContactSection } from "./containers";

const Layout: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <MyGlobalContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`wrapper container m-0 overflow-auto border-0 p-0 text-lg font-bold text-black outline-0 bg-neatural-100 dark:bg-neutral-900 ${
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
          className="fixed right-0 bottom-0 m-3 p-2 z-50 border-2 border-solid border-[#000] rounded-full bg-[#fff] cursor-pointer w-[50px] h-[50px]"
          onClick={() => toggleTheme(darkMode, setDarkMode)}
        >
          {darkMode ? (
            <i className="fa-solid fa-moon text-[#000]"></i>
          ) : (
            <i className="fa-solid fa-sun bg-[#fff] text-[#000]"></i>
          )}
        </button>
      </div>
    </MyGlobalContext.Provider>
  );
};

export default Layout;
