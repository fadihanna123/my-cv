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
  <div className="container wrapper bg-[#fff] text-lg m-0 p-0 border-0 outline-0 text-[#000] font-bold overflow-auto">
    <Header />
    <div>
      <div className="border-[#000] border-solid border-r-2 p-2">
        <PersonCardSection />
      </div>
      <div>
        <SkillsSection />
      </div>
      <div className="border-[#000] border-solid border-r-2 p-2 sm:ml-20 ml-0">
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
