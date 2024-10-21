import { eduData } from "../utils/consts";
import TxtSection from "../ui/TxtSection";

const EducationSection: React.FC = () => {
  return (
    <div className="text-center text-xl mt-2" id="education">
      <h1 className="text-3xl">
        <i className="fa-solid fa-book"></i> Education
      </h1>

      <div className="flex flex-wrap">
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
    </div>
  );
};

export default EducationSection;
