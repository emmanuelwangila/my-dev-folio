import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillGmail,
  AiFillReact,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-blue-500 min-h-full flex-col  text-white rounded-md w-full">
      <div className="flex flex-row">
        <div className=" w-screen ml-4  h-full py-20  lg:flex-row lg:w-full md:w-[60%] sm:w-[100%] sm:flex-wrap font-sans rounded-md">
          <h3 className="m-2 ">Developed by Emmanuel Wangila</h3>
          <h4 className="m-2 ">phone: 0798719417</h4>
          <h4 className="m-2">@2024 All Rights Reserved</h4>
        </div>
        <div className=" ml-2  p-2 lg:flex-col  gap-4 py-10 sm:mx-auto mx-3    ">
          <ul className="flex flex-row m-2 cursor-pointer ">
            <a href=" https://x.com/manuelwangila">
              <AiFillTwitterCircle className="text-2xl"></AiFillTwitterCircle>{" "}
              <span className="text-white"> Twitter</span>
            </a>
          </ul>
          <ul className="flex flex-row m-2 cursor-pointer">
            <a href=" https://www.linkedin.com/in/emmanuel-wangila/">
              <AiFillLinkedin className="text-2xl cursor-pointer"></AiFillLinkedin>{" "}
              LInkedIn
            </a>
          </ul>
          <ul className="cursor-pointer">
            {" "}
            {/* <AiFillGmail className="text-2xl "></AiFillGmail> */}
            emmanuelwangila1@gmail.com
          </ul>
          <ul className="flex flex-row m-2  cursor-pointer">
            <AiFillGithub className="text-2xl"></AiFillGithub> Github
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
