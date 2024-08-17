import {
  ExperienceSection,
  EducationSection,
  PersonCardSection,
} from "../components";

const Layout: React.FC = () => (
  <div className="container m-0 p-0 border-0 outline-0 text-[#fff] font-bold">
    <div className="flex">
      <div className="w-[50%] border-[#000] border-solid border-r-2 h-[100vh] p-2">
        <PersonCardSection />
      </div>
      <div className="w-[50%] border-[#000] border-solid border-r-2 h-[100vh] p-2">
        <div>
          <div className="flex">
            <ExperienceSection />
            <EducationSection />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
