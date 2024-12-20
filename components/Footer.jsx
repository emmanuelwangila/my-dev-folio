import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t-2 rounded-md  text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-4 text-center">
          <h3 className="text-lg font-bold text-green-400">
            Inspired by: Emmanuel Wangila
          </h3>
          <h4 className="text-md text-green-400">Reach Me at: 0798719417</h4>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <AiFillTwitterCircle className="text-4xl" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <AiFillLinkedin className="text-4xl" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <AiFillGithub className="text-4xl" />
          </a>
          <a
            href="mailto:your-email@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <BiLogoGmail className="text-4xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
