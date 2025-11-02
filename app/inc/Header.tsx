import {
  educationSection,
  experienceSection,
  projectsSection,
  contactSection,
} from "@app/utils";

const Header: React.FC = () => {
  return (
    <nav className="dark:text-neutral-300 mb-10 mt-2 text-center text-2xl md:text-right md:text-lg menuContainer">
      <ul>
        <li className="m-4 block p-4 sm:inline">
          <a
            aria-label="Education"
            href="#education"
            className="link sm:auto relative"
          >
            <i className="fa-solid fa-book mr-2"></i>
            <span className="ml-2">{educationSection}</span>
          </a>
        </li>

        <li className="m-4 block p-4 sm:inline">
          <a
            aria-label="Experience"
            href="#experience"
            className="link sm:auto relative"
          >
            <span className="mr-1 text-2xl">🧑‍💻</span>
            <span className="ml-2">{experienceSection}</span>
          </a>
        </li>

        <li className="m-4 block p-4 sm:inline">
          <a
            aria-label="Projects"
            href="#projects"
            className="link sm:auto relative"
          >
            <i className="fa-solid fa-briefcase mr-5 md:mr-2"></i>
            <span className="ml-2 mr-6 md:mr-auto">{projectsSection}</span>
          </a>
        </li>
        <li className="m-4 block p-4 sm:inline">
          <a
            aria-label="Contact"
            href="#contact"
            className="link sm:auto relative"
          >
            <i className="fa-solid fa-envelope mr-5 sm:mr-2"></i>
            <span className="ml-2 mr-6 md:mr-auto">{contactSection}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
