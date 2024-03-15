import React from "react";

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
          <p className="dark:text-white flex flex-col m-2  ">
            This is a Tender Management Software system, enabling people to
            create and bid for tenders. Users are able to receive emails upon
            bidding.
            <span className="text-red-400">
              {" "}
              <a href="https://mern-tender-system.onrender.com/">
                Visit the system
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col  gap-4 ">
        <h2 className="text-blue-500  ">3D Meta Landing Page</h2>
        <div>
          <p className="dark:text-white flex flex-col m-2  ">
            Virtual Reality Landing Page
            <span className="text-red-400">
              <a href="http://metacom.vercel.app/">Visit the system</a>
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
        <h2 className="text-blue-500 ">Movie ANimation Clone</h2>
        <div>
          <p className="dark:text-white flex flex-col ">
            Animation Clone like hulu, renders movie cards from an api endpoint
            <span className="text-red-400">
              <a href="http://metacom.vercel.app/">Visit the system</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
