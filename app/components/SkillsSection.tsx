import { skills } from "@utils/consts";

const SkillsSection = () => (
  <div className="text-center">
    <h1 className="text-3xl my-4">
      <span className="sm:mr-2 mr-6 text-4xl">🧑‍💻</span>
      <span className="italic sm:mr-6 sm:ml-2 mr-[80px]">Skills</span>
    </h1>
    <section className="text-lg m-2 flex flex-wrap">
      {skills.map((skill) => {
        return (
          <span
            key={skill.id}
            className="p-2 sm:m-2 m-8 w-[10%] animate-text-glow"
          >
            <i
              className={`fa-brands fa-${skill.icon} text-[60px]`}
              title={skill.value}
            ></i>
          </span>
        );
      })}
      <br />
    </section>
  </div>
);

export default SkillsSection;
