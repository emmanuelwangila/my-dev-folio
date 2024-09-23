import React from "react";
import Image from "next/image";
import forlio from "../public/forlio.jpg";
import tender from "../public/tender.jpg";
import anime from "../public/anime.jpg";
import manu from "../public/manu.jpg";
import ayepo from "../public/ayepo-logo.jpg";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <div className=" flex  flex-col font-sans  sm:mx-auto  ">
      <div className=" flex mx-auto">
        <button className="  text-white bg-blue-500 rounded-full  font-sans text-2xl m-2 p-2 ">
          Projects
        </button>
      </div>

      <div className="  lg:flex lg:flex-row md:mx-auto sm:mx-auto">
        <div className="flex flex-col hover:bg-blue-500 hover:text-white cursor-pointer  gap-4 border border-gray-500 rounded-md m-2 p-2   ">
          <h2 className=" text-blue-800 "> TENDER MANAGEMENT SYSTEM </h2>
          <div className="">
            <p className="dark:text-white">
              A modern procurement and automated tender management system , with
              automation through emailng and onlne application of tenders at
              large .
            </p>
            <div className="rounded-md flex justify-center w-[250px] h-[250px]">
              <Link></Link>
              <Image src={ayepo} className="rounded-md " />
            </div>

            <button className="dark:text-white flex bg-green-500 m-3 p-3  flex-col rounded-md">
              <span className="text-white">
                {" "}
                <a href="https://ayepoafrica.org/">Visit the system</a>
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col hover:bg-blue-500 hover:text-white cursor-pointer  gap-4 border border-gray-500 rounded-md m-2 p-2   ">
          <h2 className=" text-blue-800 "> KaziQuest </h2>
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

            <button className="dark:text-white flex bg-green-500 m-3 p-3  flex-col rounded-md">
              <span className="text-white">
                {" "}
                <a href="https://www.kaziquest.com/">Visit the system</a>
              </span>
            </button>
          </div>
        </div>
        <div className="flex hover:bg-blue-500 hover:text-white cursor-pointer flex-col  gap-4 border border-gray-500 rounded-md m-2 p-2  ">
          <h2 className="text-blue-800 uppercase  ">3D Meta Landing Page</h2>
          <div className="w-full  h-[250px] flex justify-center rounded-md">
            <Link to=" http://metacom.vercel.app/"></Link>
            <Image src={forlio} className="rounded-md " />
          </div>

          <div className="">
            <p className="dark:text-white">Virtual Reality Landing Page</p>
            <button className="dark:text-white  flex flex-col m-4 p-4  rounded-md bg-green-500 ">
              <span className="text-white">
                <a href="http://metacom.vercel.app/">Visit the system</a>
              </span>
            </button>
          </div>
        </div>
        <div className="flex cursor-pointer hover:text-white hover:bg-blue-500 flex-col gap-4 border border-gray-500 m-2 p-2 rounded-md ">
          <h2 className="text-blue-800 ">Movie ANimation Clone</h2>
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

            <button className="dark:text-white bg-green-500 m-3 p-3 rounded-md flex flex-col ">
              <span className="text-white">
                <a href="https://animation-clone-xi.vercel.app/">
                  Visit the system
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className="flex cursor-pointer hover:bg-blue-500 hover:text-white flex-col gap-4 border border-gray-500 m-2 p-2 rounded-md ">
          <h2 className="text-blue-800 "> Tasks Aplication App</h2>
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

            <button className="dark:text-white bg-green-500 m-3 p-3 rounded-md flex flex-col ">
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
