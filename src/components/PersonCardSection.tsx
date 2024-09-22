import { IMAGES, skills } from "../consts";

const PersonCardSection: React.FC = () => {
  return (
    <div className="relative top-[30%] text-center">
      <img
        className="relative w-[200px] h-[200px] border-solid border-[#000] rounded-full max-w-[100%] ml-auto mr-auto animate-bounce iterateCountOnce"
        src={IMAGES.myProfilePic}
        alt="myProfilePic"
      />
      <br />
      <div>
        <h1 className="text-2xl iterateCountOnce">Fadi Hanna</h1>
        <h4 className="text-xl iterateCountOnce"> Frontend developer </h4>
        <div>
          <a href="https://www.linkedin.com/in/fadihanna123" target="_blank">
            <i className="fa-brands fa-linkedin text-[30px] m-[20px]"></i>
          </a>

          <a href="https://github.com/fadihanna123" target="_blank">
            <i className="fa-brands fa-github text-[30px]"></i>
          </a>
        </div>
        <br />
        <span className="text-2xl"> Skills: </span>
        <section className="animate-text-glow text-lg m-2 text-center">
          {skills.map((skill) => {
            return (
              <span key={skill.id} className="p-2 m-2">
                {
                  <i
                    className={`fa-brands fa-${skill.icon} text-[40px]`}
                    title={skill.value}
                  ></i>
                }
              </span>
            );
          })}
          <br />
          And many other....
        </section>
        <br />
      </div>
    </div>
  );
};

export default PersonCardSection;
