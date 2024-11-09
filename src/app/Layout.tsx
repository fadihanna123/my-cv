import {
  EducationSection,
  ExperienceSection,
  PersonCardSection,
  ProjectsSection,
  SkillsSection,
} from "../components";
import Footer from "../inc/Footer";
import Header from "../inc/Header";

const Layout: React.FC = () => (
  <div className="container bg-[#fff] text-lg m-0 p-0 border-0 outline-0 text-[#000] font-bold overflow-auto">
    <Header />
    <br />
    <br />
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
