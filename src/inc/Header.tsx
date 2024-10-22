const Header: React.FC = () => {
  return (
    <nav className="sm:text-right text-center">
      <ul>
        <li className="sm:inline block m-4 p-4">
          <a href="#education" className="hover:text-white">
            <i className="fa-solid fa-book"></i> Education
          </a>
        </li>
        <li className="sm:inline block m-4 p-4">
          <a href="#experience" className="hover:text-white">
            🧑‍💻 Experience
          </a>
        </li>
        <li className="sm:inline block m-4 p-4">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
