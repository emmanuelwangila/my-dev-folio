import React from "react";
import Image from "next/image";
import forlio from "../public/forlio.jpg";
import tender from "../public/tender.jpg";
import anime from "../public/anime.jpg";
import manu from "../public/manu.jpg";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <div className=" flex flex-col  sm:flex-col  overflow-scroll  ">
      <h1 className=" text-blue-500 font-sans text-4xl m-2 p-2 ">Projects</h1>
      <div className="  lg:flex lg:flex-row md:mx-auto sm:mx-auto">
        <div className="flex flex-col hover:bg-blue-500 cursor-pointer  gap-4 border border-gray-500 rounded-md m-2 p-2   ">
          <h2 className=" text-blue-500 "> KaziQuest </h2>
          <div className="">
            <p className="dark:text-white">
              This is an Applicant Tracking System , web application that
              enables employe's to hire the best talent from a group of
              applicants , applying for a specific job.
            </p>
            <div className="rounded-md flex justify-center h-[250px]">
              <Link></Link>
              <Image src={tender} className="rounded-md " />
            </div>

            <button className="dark:text-white flex bg-blue-500 m-3 p-3  flex-col rounded-md">
              <span className="text-white">
                {" "}
                <a href="https://www.kaziquest.com/">Visit the system</a>
              </span>
            </button>
          </div>
        </div>
        <div className="flex hover:bg-blue-500 flex-col  gap-4 border border-gray-500 rounded-md m-2 p-2  ">
          <h2 className="text-blue-800 uppercase  ">3D Meta Landing Page</h2>
          <div className="w-full  h-[250px] flex justify-center rounded-md">
            <Link to=" http://metacom.vercel.app/"></Link>
            <Image src={forlio} className="rounded-md " />
          </div>

          <div className="">
            <p className="dark:text-white">Virtual Reality Landing Page</p>
            <button className="dark:text-white flex flex-col m-4 p-4  rounded-md bg-blue-500  ">
              <span className="text-white">
                <a href="http://metacom.vercel.app/">Visit the system</a>
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 border border-gray-500 m-2 p-2 rounded-md ">
          <h2 className="text-blue-500 ">Movie ANimation Clone</h2>
          <p className="dark:text-white ">
            Animation Clone like hulu, renders movie cards from an api endpoint
          </p>
          <div>
            <div className="rounded-md w-full h-[250px] flex justify-center ">
              <Link></Link>
              <Image
                src={anime}
                alt="animation-clone "
                className="rounded-md "
              />
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
        <div className="flex flex-col gap-4 border border-gray-500 m-2 p-2 rounded-md ">
          <h2 className="text-blue-500 "> Tasks Aplication App</h2>
          <p className="dark:text-white ">
            Simple task application for managing priority tasks
          </p>
          <div>
            <div className="rounded-md w-full h-[250px] flex justify-center ">
              <Link></Link>
              <Image
                src={manu}
                alt="animation-clone "
                className="rounded-md "
              />
            </div>

            <button className="dark:text-white bg-blue-500 m-3 p-3 rounded-md flex flex-col ">
              <span className="text-white">
                <a href="https://pinia-tasks-iota.vercel.app/">
                  Visit the system
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
