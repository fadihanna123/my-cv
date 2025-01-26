import React from "react";
import "@styles/App.css";
import {
  EducationSection,
  ExperienceSection,
  PersonCardSection,
  ProjectsSection,
  SkillsSection,
} from "./components";
import { Footer, Header } from "./inc";

const Layout: React.FC = () => (
  <div className="wrapper container m-0 overflow-auto border-0 p-0 text-lg font-bold text-black outline-0">
    <Header />
    <div>
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
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
