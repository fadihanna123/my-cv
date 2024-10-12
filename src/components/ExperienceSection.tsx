import { expeData } from "../utils/consts";
import TxtSection from "../ui/TxtSection";

const ExperienceSection: React.FC = () => {
  return (
    <div className="text-center text-xl" id="experience">
      <h1 className="text-3xl"> 🧑‍💻 Experience</h1>

      {expeData.map((expe: expeEduData) => {
        return (
          <TxtSection
            key={expe.id}
            title={expe.title}
            fromDate={expe.fromDate}
            toDate={expe.toDate}
            company={expe.company}
            location={expe.location}
          />
        );
      })}
    </div>
  );
};

export default ExperienceSection;
