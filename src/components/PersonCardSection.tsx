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
        <br />
        <span className="text-2xl"> Skills: </span>
        <section className="animate-text-glow text-lg m-2 text-left">
          {skills.map((skill) => {
            return (
              <span key={skill.id} className="border rounded-full p-2 m-2">
                {skill.value}
              </span>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default PersonCardSection;
