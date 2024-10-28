const Header: React.FC = () => (
  <nav className="sm:text-right text-center mt-2">
    <ul>
      <li className="sm:inline block m-4 p-4">
        <a href="#education" className="hover:text-[#fff]">
          <i className="fa-solid fa-book"></i> Education
        </a>
      </li>
      <li className="sm:inline block m-4 p-4">
        <a href="#experience" className="hover:text-[#fff]">
          🧑‍💻 Experience
        </a>
      </li>
      <li className="sm:inline block m-4 p-4">
        <a href="#projects" className="hover:text-[#fff]">
          🌐 Projects
        </a>
      </li>
    </ul>
  </nav>
);

export default Header;
