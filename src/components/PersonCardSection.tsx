import { IMAGES } from "../consts";

const PersonCardSection: React.FC = () => {
  return (
    <div className="relative top-[30%] text-center">
      <img
        className="relative w-[200px] h-[200px] border-solid border-[#000] rounded-full max-w-[100%] ml-auto mr-auto"
        src={IMAGES.myProfilePic}
        alt="myProfilePic"
      />
      <br />
      <div>
        <h1 className="text-xl">Fadi Hanna</h1>
        <h4> Frontend developer </h4>
        <br />
        Skills:
        <section className="skillSec"> HTML CSS JAVASCRIPT </section>
      </div>
    </div>
  );
};

export default PersonCardSection;
