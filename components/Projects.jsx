import React from "react";
import Image from "next/image";
import forlio from "../public/forlio.jpg";
import tender from "../public/tender.jpg";
import anime from "../public/anime.jpg";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <div>
      <h1 className="text-blue-500 flex justify-center m-3 p-2    font-sans  text-5xl ">
        {" "}
        Projects
      </h1>

      <div className="flex flex-col  gap-4 ">
        <h2 className=" text-blue-500 ">Tender Management System</h2>
        <div>
          <p className="dark:text-white">
            This is a Tender Management Software system, enabling people to
            create and bid for tenders. Users are able to receive emails upon
            bidding.
          </p>
          <div className="rounded-md flex justify-center h-[250px]">
            <Link></Link>
            <Image src={tender} className="rounded-md " />
          </div>

          <button className="dark:text-white flex bg-blue-500 m-3 p-3  flex-col rounded-md">
            <span className="text-white">
              {" "}
              <a href="https://mern-tender-system.onrender.com/">
                Visit the system
              </a>
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col  gap-4 ">
        <h2 className="text-blue-800 uppercase  ">3D Meta Landing Page</h2>
        <div className="w-full  h-[250px] flex justify-center rounded-md">
          <Link to=" http://metacom.vercel.app/"></Link>
          <Image src={forlio} className="rounded-md " />
        </div>

        <div>
          <p className="dark:text-white">Virtual Reality Landing Page</p>
          <button className="dark:text-white flex flex-col m-4 p-4  rounded-md bg-blue-500  ">
            <span className="text-white">
              <a href="http://metacom.vercel.app/">Visit the system</a>
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        <h2 className="text-blue-500 ">Movie ANimation Clone</h2>
        <p className="dark:text-white ">
          Animation Clone like hulu, renders movie cards from an api endpoint
        </p>
        <div>
          <div className="rounded-md w-full h-[250px] flex justify-center ">
            <Link></Link>
            <Image src={anime} alt="animation-clone " className="rounded-md " />
          </div>

          <button className="dark:text-white bg-blue-500 m-3 p-3 rounded-md flex flex-col ">
            <span className="text-white">
              <a href="https://animation-clone-xi.vercel.app/">
                Visit the system
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
