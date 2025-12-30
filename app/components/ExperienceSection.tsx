"use client";

import { FC } from "react";
import CountUp from "react-countup";

// Components
import { expeData, experienceSection, years } from "@app/utils";
import TxtSection from "@ui/TxtSection";

const ExperienceSection: FC = () => (
  <div className="text-xl dark:text-neutral-300">
    <h1 className="my-4 text-center text-3xl">
      <span className="mr-6 text-4xl sm:mr-2">🧑‍💻</span>
      <span className="italic sm:ml-2 sm:mr-6">{experienceSection}</span>
      <br />
      <br />
      <div className="ml-5 flex items-center justify-center sm:ml-auto sm:mr-14">
        <i className="fa-solid fa-clock fa-fw mr-5 sm:mr-1"></i>
        <span className="mr-20 italic sm:ml-2 sm:mr-6">
          <CountUp
            start={0}
            end={2.5}
            duration={2}
            decimals={1}
            className="text-4xl"
          />{" "}
          <span className="text-xl">{years}</span>
        </span>
      </div>
    </h1>

    <div className="mt-2 flex flex-col flex-wrap text-left sm:flex-row sm:text-center">
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
