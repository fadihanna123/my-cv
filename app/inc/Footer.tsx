import { downloadCV } from "@app/utils/consts";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="p-2 text-center sm:ml-18 mr-7 sm:mr-auto dark:text-neutral-300">
      <a
        className="link relative"
        href="./Fadi_Hanna_CV_IT.pdf"
        download="Fadi_Hanna_CV_IT"
      >
        <i className="fa-solid fa-file mr-2"></i> {downloadCV}
      </a>
    </footer>
  );
};

export default Footer;
