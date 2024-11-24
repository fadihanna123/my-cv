import { expeData } from "@utils/consts";
import TxtSection from "../ui/TxtSection";

const ExperienceSection: React.FC = () => (
  <div className="text-xl">
    <h1 className="text-3xl text-center my-4 italic"> 🧑‍💻 Experience</h1>

    <div className="flex sm:text-center text-left flex-wrap mt-2 sm:flex-row flex-col">
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
  </div>
);

export default ExperienceSection;
