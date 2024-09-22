const Header: React.FC = () => {
  return (
    <nav className="float-right">
      <ul>
        <li className="inline m-4 p-4">
          <a href="#education" className="hover:text-white">
            Education
          </a>
        </li>
        <li className="inline m-4 p-4">
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
        </li>
        <li className="inline m-4 p-4">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
