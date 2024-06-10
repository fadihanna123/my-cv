import {
  ExperienceSection,
  EducationSection,
  PersonCardSection,
} from "../components";

const Layout: React.FC = () => (
  <div className="container">
    <div className="containerRow">
      <div className="containerCol">
        <PersonCardSection />
      </div>
      <div className="containerCol">
        <div className="secondContainerCol">
          <div className="expeeduRow">
            <ExperienceSection />
            <EducationSection />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;
