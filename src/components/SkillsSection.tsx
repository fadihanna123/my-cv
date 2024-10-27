import { skills } from "../utils/consts";

const SkillsSection = () => (
  <div className="text-center mt-2">
    <span className="text-3xl"> 🧑‍💻 Skills </span>
    <section className="text-lg m-2 flex flex-wrap">
      {skills.map((skill) => {
        return (
          <span
            key={skill.id}
            className="p-2 sm:m-2 m-4 w-[15%] animate-text-glow"
          >
            {
              <i
                className={`fa-brands fa-${skill.icon} text-[60px]`}
                title={skill.value}
              ></i>
            }
          </span>
        );
      })}
      <br />
    </section>
  </div>
);

export default SkillsSection;
