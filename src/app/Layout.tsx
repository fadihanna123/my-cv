import {
  ExperienceSection,
  EducationSection,
  PersonCardSection,
  ProjectsSection,
} from "../components";
import Footer from "../inc/Footer";
import Header from "../inc/Header";

const Layout: React.FC = () => (
  <div className="container text-lg m-0 p-0 border-0 outline-0 text-[#000] font-bold">
    <Header />
    <br />
    <br />
    <div className="">
      <div className="border-[#000] border-solid border-r-2 p-2">
        <PersonCardSection />
      </div>
      <div className="border-[#000] border-solid border-r-2 p-2 ml-20">
        <div className="flex" id="experience">
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
