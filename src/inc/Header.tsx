const Header: React.FC = () => (
  <nav className="sm:text-right text-center sm:text-lg text-2xl mt-2">
    <ul>
      <li className="sm:inline block m-4 p-4">
        <a href="#education">
          <i className="fa-solid fa-book mr-2"></i>
          <span className="ml-2">Education</span>
        </a>
      </li>
      <li className="sm:inline block m-4 p-4">
        <a href="#experience">
          <span className="mr-1 text-2xl">🧑‍💻</span>
          <span className="ml-2">Experience</span>
        </a>
      </li>
      <li className="sm:inline block m-4 p-4">
        <a href="#projects">
          <i className="fa-solid fa-briefcase mr-2"></i>
          <span className="ml-2 mr-6">Projects</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Header;
