"use client";
import { expeData } from "@utils/consts";
import TxtSection from "../ui/TxtSection";
import CountUp from "react-countup";

const ExperienceSection: React.FC = () => {
  return (
    <div className="text-xl">
      <h1 className="text-3xl text-center my-4">
        <span className="sm:mr-2 mr-6 text-4xl">🧑‍💻</span>
        <span className="italic sm:mr-6 sm:ml-2">Experience</span>
        <br />
        <br />
        <div className="flex justify-center items-center sm:mr-14 sm:ml-auto ml-5">
          <i className="fa-solid fa-clock fa-fw sm:mr-1 mr-5"></i>
          <span className="italic sm:mr-6 sm:ml-2 mr-[80px]">
            <CountUp
              start={0}
              end={2.5}
              duration={2}
              decimals={1}
              className="text-4xl"
            />{" "}
            <span className="text-xl">years</span>
          </span>
        </div>
      </h1>

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
};

export default ExperienceSection;
