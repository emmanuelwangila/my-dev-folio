import React from "react";

const Projects = () => {
  return (
    <div>
      <h1 className="text-teal-600 font-bold text-4xl "> Projects</h1>
      <div className="flex flex-row gap-4 ">
        <h2 className="dark:text-white ">Tender Management System</h2>
        <div>
          <p className="dark:text-white flex flex-col ">
            This is a Tender Management Software system, enabling people to
            create and bid for tenders. Users are able to receive emails upon
            bidding.
            <a href="https://mern-tender-system.onrender.com/">
              Visit the system
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4 ">
        <h2 className="dark:text-white ">3D Meta Landing Page</h2>
        <div>
          <p className="dark:text-white flex flex-col ">
            Virtual Reality Landing Page
            <a href="http://metacom.vercel.app/">Visit the system</a>
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-4 ">
        <h2 className="dark:text-white ">Movie ANimation Clone</h2>
        <div>
          <p className="dark:text-white flex flex-col ">
            Animation Clone like hulu, renders movie cards from an api endpoint
            <a href="http://metacom.vercel.app/">Visit the system</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
