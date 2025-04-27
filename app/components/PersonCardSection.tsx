import { frontendDeveloper, myFullName } from "@app/utils/consts";
import Image from "next/image";

const PersonCardSection: React.FC = () => (
  <div className="personCardSection flex w-full flex-col justify-around rounded-sm border p-2 sm:flex-row">
    <Image
      className="animateIt relative h-[300px] max-w-full rounded-full border-solid border-black sm:w-[300px] w-full"
      src="/myProfilePic.JPG"
      alt="myProfilePic"
      width={300}
      height={300}
      priority
    />
    <div className="mt-20">
      <h1 className="text-center text-6xl text-black">{myFullName}</h1>
      <h4 className="text-center text-2xl text-sky-600">
        {" "}
        {frontendDeveloper}{" "}
      </h4>
      <div className="text-center">
        <a href="https://github.com/fadihanna123" target="_blank">
          <i className="fa-brands fa-github text-[40px] text-black hover:animate-bounce"></i>
        </a>
      </div>
      <br />
      <br />
    </div>
  </div>
);

export default PersonCardSection;
