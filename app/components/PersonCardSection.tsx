import myProfilePic from "@assets/myProfilePic.JPG";
import Image from "next/image";

const PersonCardSection: React.FC = () => (
  <div className="w-full border p-2 rounded personCardSection flex justify-around sm:flex-row flex-col">
    <div>
      <Image
        className="relative sm:w-[300px] h-[300px] border-solid border-[#000] rounded-full max-w-[100%] animateIt"
        src={myProfilePic}
        alt="myProfilePic"
      />
    </div>
    <div className="mt-20">
      <h1 className="text-6xl text-[#000] text-center">Fadi Hanna</h1>
      <h4 className="text-2xl text-center text-sky-600">
        {" "}
        Frontend developer{" "}
      </h4>
      <div className="text-center">
        <a href="https://www.linkedin.com/in/fadihanna123" target="_blank">
          <i className="fa-brands fa-linkedin text-[40px] m-[20px] text-[#000] hover:animate-bounce"></i>
        </a>

        <a href="https://github.com/fadihanna123" target="_blank">
          <i className="fa-brands fa-github text-[40px] text-[#000] hover:animate-bounce"></i>
        </a>
      </div>
      <br />
      <br />
    </div>
  </div>
);

export default PersonCardSection;
