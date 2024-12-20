import { Link } from "react-scroll";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">
          <Link to="/" smooth={true} duration={100}>
            Emmanuel Wangila
          </Link>
        </div>
        <ul className="flex items-center space-x-6">
          <li className="text-2xl cursor-pointer">
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
          </li>
          <li className="text-sm cursor-pointer bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105">
            <Link to="/" smooth={true} duration={100}>
              Home
            </Link>
          </li>
          <li className="text-sm cursor-pointer bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105">
            <Link to="about" smooth={true} duration={100}>
              About
            </Link>
          </li>
          <li className="text-sm cursor-pointer bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105">
            <Link to="contact" smooth={true} duration={100}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
