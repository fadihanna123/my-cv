import { expeData } from "../consts";
import TxtSection from "./TxtSection";

const ExperienceSection: React.FC = () => {
  return (
    <div className="w-[50%] text-xl">
      <h1 className="text-2xl">Experience</h1>

      {expeData.map((expe) => {
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
