import { eduData } from "@utils/consts";
import TxtSection from "../ui/TxtSection";

const EducationSection: React.FC = () => (
  <div className="sm:text-center text-left text-xl" id="education">
    <h1 className="text-3xl text-center my-4">
      <i className="fa-solid fa-book mr-2"></i>
      <span className="italic mr-6 ml-2">Education</span>
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

export default EducationSection;
