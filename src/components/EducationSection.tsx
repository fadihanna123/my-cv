import { eduData } from "../consts";
import TxtSection from "./TxtSection";

const EducationSection: React.FC = () => {
  return (
    <div className="text-center text-xl" id="education">
      <h1 className="text-2xl">
        <i className="fa-solid fa-book"></i> Education
      </h1>

      {eduData.map((expe: expeEduData) => {
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

export default EducationSection;
