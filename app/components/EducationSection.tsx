import { educationSection, eduData } from "@utils/consts";
import TxtSection from "../ui/TxtSection";
import { FC } from "react";

const EducationSection: FC = () => (
  <div className="text-left text-xl sm:text-center" id="education">
    <h1 className="my-4 text-center text-3xl">
      <i className="fa-solid fa-book mr-2"></i>
      <span className="ml-2 mr-6 italic">{educationSection}</span>
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
