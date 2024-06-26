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
        <div className=" ml-4   p-2 lg:flex-col  gap-4 py-10 sm:mx-auto mx-3    ">
          <ul className="flex flex-row m-2 cursor-pointer ">
            <a href=" https://x.com/manuelwangila">
              <AiFillTwitterCircle className="text-2xl"></AiFillTwitterCircle>{" "}
              <span className="text-white"> Twitter</span>
            </a>
          </ul>
          <ul className="flex  m-2  cursor-pointer">
            <a href=" https://www.linkedin.com/in/emmanuel-wangila/">
              <AiFillLinkedin className="text-2xl cursor-pointer"></AiFillLinkedin>{" "}
              LInkedIn
            </a>
          </ul>
          {/* <ul className="cursor-pointer flex ">
            <a href="https://mail.google.com/">
              <BiLogoGmail></BiLogoGmail>
              <span className="text-xs "> emmanuelwangila1@gmail.com</span>
            </a>
          </ul> */}
          <ul className="flex flex-row m-2  cursor-pointer">
            <a href="https://github.com/emmanuelwangila">
              <AiFillGithub className="text-2xl"></AiFillGithub> Github
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
