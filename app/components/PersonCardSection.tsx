import { FC } from "react";
import Image from "next/image";

// Components
import { myFullName, frontendDeveloper } from "@app/utils";

const PersonCardSection: FC = () => (
  <div className="personCardSection bg-[linear-gradient(43deg,#4158d0_50%,#fff_10%)] transition-all duration-300 flex w-full flex-col justify-around rounded-sm border p-2 sm:flex-row">
    <Image
      className="animate-[animateFromLeft_1s_alternate] relative h-75 max-w-full rounded-full border-solid border-black sm:w-75 w-full"
      src="/myProfilePic.JPG"
      alt="Profile picture of Fadi Hanna"
      width={300}
      height={300}
      priority
    />
    <div className="mt-20">
      <h1 className="text-center text-6xl text-black">{myFullName}</h1>
      <h4 className="text-center text-2xl text-sky-600 relative w-[24em] whitespace-nowrap overflow-hidden mx-auto my-0 border-r-2 border-r-[rgb(255,255,255,75%)] border-solid animate-[typewriter_1s_steps(50)_1s_1_normal_both]">
        {" "}
        {frontendDeveloper}{" "}
      </h4>
      <div className="text-center">
        <a
          rel="noopener noreferrer"
          href="https://github.com/fadihanna123"
          target="_blank"
        >
          <i className="fa-brands fa-github text-[40px] text-black hover:animate-bounce m-2"></i>
        </a>

        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/fadihanna123"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin text-[40px] text-black hover:animate-bounce m-2"></i>
        </a>
      </div>
      <br />
      <br />
    </div>
  </div>
);

export default PersonCardSection;
