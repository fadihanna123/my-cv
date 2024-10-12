const Header: React.FC = () => {
  const getDark = () => {};

  return (
    <nav className="float-right">
      <ul>
        <li className="inline m-4 p-4">
          <a href="#" className="hover:text-white" onClick={getDark}>
            Dark Mode
          </a>
        </li>
        <li className="inline m-4 p-4">
          <a href="#education" className="hover:text-white">
            <i className="fa-solid fa-book"></i> Education
          </a>
        </li>
        <li className="inline m-4 p-4">
          <a href="#experience" className="hover:text-white">
            🧑‍💻 Experience
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
