import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillGmail,
  AiFillReact,
} from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-blue-500 min-h-full flex-col  text-white rounded-md w-full">
      <div className="flex flex-row">
        <div className=" w-screen ml-4  h-full py-20  lg:flex-row lg:w-full md:w-[60%] sm:w-[100%] sm:flex-wrap font-sans rounded-md">
          <h3 className="m-2  text-green-800">
            {" "}
            Inspired by: Emmanuel Wangila
          </h3>
          <h4 className="m-2  text-green-800"> Reach Me at: 0798719417</h4>
          <h4 className="m-2 p-2 text-green-800">@2024 All Rights Reserved</h4>
        </div>
        <div className="flex justify-center sm:mx-auto items-center lg:mr-20  py-10">
          <ul className="flex space-x-8 cursor-pointer">
            <a
              href="https://x.com/manuelwangila"
              className="flex items-center space-x-2 transform hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillTwitterCircle className="text-4xl" />
              <span className="text-white">Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/in/emmanuel-wangila/"
              className="flex items-center space-x-2 transform hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="text-4xl" />
              <span className="text-white">LinkedIn</span>
            </a>

            <a
              href="https://github.com/emmanuelwangila"
              className="flex items-center space-x-2 transform hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="text-4xl" />
              <span className="text-white">Github</span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
