import { FC } from "react";
import Image from "next/image";

// Components
import { skills, skillsSection } from "@app/utils";

const SkillsSection: FC = () => (
  <div className="text-center dark:text-neutral-300">
    <h1 className="my-4 text-3xl">
      <span className="mr-6 text-4xl sm:mr-2">🧑‍💻</span>
      <span className="mr-20 italic sm:ml-2 sm:mr-6">{skillsSection}</span>
    </h1>
    <section className="m-2 flex flex-wrap">
      {skills.map((skill, i: number) => {
        return (
          <span
            key={i}
            className="m-4 w-[8%] p-4 sm:m-4 skillsImgContainer border rounded-full"
          >
            <Image
              unoptimized
              src={skill.assetURL!}
              alt={skill.value}
              width={60}
              height={60}
              title={skill.value}
              priority
              className="mx-auto"
            />
          </span>
        );
      })}
    </section>
  </div>
);

export default SkillsSection;
