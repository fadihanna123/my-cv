"use client";
import React, { useState } from "react";
import "@styles/App.css";
import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  PersonCardSection,
  ProjectsSection,
  SkillsSection,
} from "./components";
import { Footer, Header } from "./inc";
import { MyGlobalContext } from "./states";

const Layout: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <MyGlobalContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`wrapper container m-0 overflow-auto border-0 p-0 text-lg font-bold text-black outline-0 ${
          !darkMode && "dark"
        }`}
      >
        <div className="bg-neatural-100 dark:bg-neutral-900">
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
        </div>
      </div>
    </MyGlobalContext.Provider>
  );
};

export default Layout;
