import Image from "next/image";
import { skills, skillsSection } from "@utils/consts";

const SkillsSection = () => (
  <div className="text-center dark:text-neutral-300">
    <h1 className="my-4 text-3xl">
      <span className="mr-6 text-4xl sm:mr-2">🧑‍💻</span>
      <span className="mr-[80px] italic sm:ml-2 sm:mr-6">{skillsSection}</span>
    </h1>
    <section className="m-2 flex flex-wrap">
      {skills.map((skill, i: number) => {
        return (
          <span key={i} className="m-4 w-[8%] p-2 sm:m-4 skillsImgContainer">
            <Image
              src={skill.assetURL!}
              alt={skill.value}
              width={60}
              height={60}
              title={skill.value}
              priority
            />
          </span>
        );
      })}
    </section>
  </div>
);

export default SkillsSection;
