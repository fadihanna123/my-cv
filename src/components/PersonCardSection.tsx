import { IMAGES } from "../utils/consts";

const PersonCardSection: React.FC = () => {
  return (
    <div className="w-full border p-2 rounded personCardSection flex justify-around ">
      <div className="">
        <img
          className="relative w-[300px] h-[300px] border-solid border-[#000] rounded-full max-w-[100%] animateIt iterateCountOnce"
          src={IMAGES.myProfilePic}
          alt="myProfilePic"
        />
      </div>
      <div className="mt-20">
        <h1 className="text-6xl iterateCountOnce text-[#000]">Fadi Hanna</h1>
        <h4 className="text-2xl iterateCountOnce text-center text-sky-600">
          {" "}
          Frontend developer{" "}
        </h4>
        <div className="text-center">
          <a href="https://www.linkedin.com/in/fadihanna123" target="_blank">
            <i className="fa-brands fa-linkedin text-[40px] m-[20px] text-[#000]"></i>
          </a>

          <a href="https://github.com/fadihanna123" target="_blank">
            <i className="fa-brands fa-github text-[40px] text-[#000]"></i>
          </a>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default PersonCardSection;
