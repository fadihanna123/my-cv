import {
  ExperienceSection,
  EducationSection,
  PersonCardSection,
  ProjectsSection,
} from "../components";

const Layout: React.FC = () => (
  <div className="container text-lg m-0 p-0 border-0 outline-0 text-[#fff] font-bold">
    <div className="flex">
      <div className="w-[50%] border-[#000] border-solid border-r-2 h-[100vh] p-2">
        <PersonCardSection />
      </div>
      <div className="w-[50%] border-[#000] border-solid border-r-2 p-2">
        <div className="flex">
          <ExperienceSection />
          <EducationSection />
        </div>
        <div className="">
          <ProjectsSection />
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
