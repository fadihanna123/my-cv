const Header: React.FC = () => (
  <nav className="mb-10 mt-2 text-center text-2xl sm:text-right sm:text-lg">
    <ul>
      <li className="m-4 block p-4 sm:inline">
        <a href="#education" className="link sm:auto relative">
          <i className="fa-solid fa-book mr-2"></i>
          <span className="ml-2">Education</span>
        </a>
      </li>
      <li className="m-4 block p-4 sm:inline">
        <a href="#experience" className="link sm:auto relative">
          <span className="mr-1 text-2xl">🧑‍💻</span>
          <span className="ml-2">Experience</span>
        </a>
      </li>
      <li className="m-4 block p-4 sm:inline">
        <a href="#projects" className="link sm:auto relative">
          <i className="fa-solid fa-briefcase mr-5 sm:mr-2"></i>
          <span className="ml-2 mr-6 sm:mr-auto">Projects</span>
        </a>
      </li>
      <li className="m-4 block p-4 sm:inline">
        <a href="#contact" className="link sm:auto relative">
          <i className="fa-solid fa-envelope mr-5 sm:mr-2"></i>
          <span className="ml-2 mr-6 sm:mr-auto">Contact</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Header;
