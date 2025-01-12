import { skills } from "@utils/consts";

const SkillsSection = () => (
  <div className="text-center">
    <h1 className="my-4 text-3xl">
      <span className="mr-6 text-4xl sm:mr-2">🧑‍💻</span>
      <span className="mr-[80px] italic sm:ml-2 sm:mr-6">Skills</span>
    </h1>
    <section className="m-2 flex flex-wrap text-lg">
      {skills.map((skill) => {
        return (
          <span
            key={skill.id}
            className="animate-text-glow m-8 w-[10%] p-2 sm:m-2"
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
