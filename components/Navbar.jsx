import { Link } from "react-scroll";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? darkMode
              ? "bg-gray-900/95 backdrop-blur-lg shadow-2xl"
              : "bg-white/95 backdrop-blur-lg shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Brand */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-75"></div>
              </div>
              <span
                className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 ${
                  isScrolled ? "group-hover:scale-105" : ""
                }`}
              >
                Emmanuel Wangila
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer group ${
                    activeSection === item.to
                      ? darkMode
                        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                        : "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                      : darkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-3/4 ${
                      activeSection === item.to ? "w-3/4" : ""
                    }`}
                  ></span>
                </Link>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 ${
                  darkMode
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? <BsSunFill className="text-lg" /> : <BsFillMoonStarsFill className="text-lg" />}
              </button>

              {/* CTA Button */}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                  darkMode
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/25"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-blue-400/25"
                }`}
              >
                Get In Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-100 text-gray-700"
                }`}
                aria-label="Toggle theme"
              >
                {darkMode ? <BsSunFill /> : <BsFillMoonStarsFill />}
              </button>

              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span
                    className={`block h-0.5 w-full transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    } ${
                      darkMode ? "bg-white" : "bg-gray-700"
                    }`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    } ${darkMode ? "bg-white" : "bg-gray-700"}`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    } ${
                      darkMode ? "bg-white" : "bg-gray-700"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          } ${
            darkMode
              ? "bg-gray-900/95 backdrop-blur-lg"
              : "bg-white/95 backdrop-blur-lg"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setActiveSection(item.to);
                }}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === item.to
                    ? darkMode
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600"
                      : "text-white bg-gradient-to-r from-blue-500 to-purple-500"
                    : darkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold text-center transition-all duration-300 cursor-pointer ${
                darkMode
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              }`}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default Navbar;