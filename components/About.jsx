// About.js
import React from "react";
import {
  BiLogoReact,
  BiLogoBootstrap,
  BiLogoDjango,
  BiLogoNetlify,
  BiLogoVuejs,
  BiLogoJavascript,
} from "react-icons/bi";
import "../app/globals.css";

const About = () => {
  return (
    <div className="lg:flex  md:flex  sm:flex-wrap  rounded-md ">
      <section>
        <div className="  dark:bg-black rounded-md  mt-4  ">
          <div className="justify-center text-blue-500  font-sans text-4xl "></div>

          <h3 className="text-5xl py-5 font-sans mx-auto hover:text-blue-600 cursor-pointer  w-[10%] border-b-2 border-teal-500 dark:text-teal-500  text-blue-500 ">
            About
          </h3>
          <div className="flex lg:flex-row  gap-2     md:w-fit  sm:flex-auto ">
            <p className=" rounded-md border p-2  border-gray-400 b-m-2 w-[80%]  font-medium text-gray-600 dark:text-white m-4   leading-8 flex flex-row gap-6 ">
              {" "}
              I'm a software developer doing great designs and website's, Web
              Application Development: <br />
              Create web applications using React and Vue to deliver responsive,
              dynamic, and interactive user interfaces.
              <br />
              User Interface (UI) Design: <br />
              Design visually appealing and user-friendly interfaces that
              enhance the overall user experience.
              <br />
              Single Page Applications (SPAs): <br />
              Build SPAs that load once and dynamically update content without
              requiring full-page refreshes, providing a smoother user
              experience. I'm also able to interact with data from the back-end
              and consuming api- data to be intergrated in front-end
              applications. I have good skills set in Dj'ango MVC model, also
              Lravel using Inretia for React and Vue , for designing user
              interfaces and for the best user experience's. Not to foorget Node
              Js, and Express and it's framework, I have skills to match api
              modeling and creation and Controllers for functionalities and
              working of both front-end and back-end applications.
            </p>
          </div>

          {/* <p className=" font-medium text-gray-600 m-4  dark:text-white  py-5 leading-8 flex justify-center">
            {" "}
            I'm a software developer doing great designs and website's, API
            Development: Design and build RESTful or GraphQL APIs to enable
            communication between the front-end and back-end. Database
            Management: Set up, configure, and manage databases (e.g.,
            PostgreSQL, MySQL) to store and retrieve data efficiently.
            Authentication and Authorization: Implement user authentication and
            authorization systems to secure the application's resources
          </p> */}
        </div>

        <div>
          <div className="  dark:bg-black  rounded-md border-teal-600  py-10 mb-10 ">
            <h3 className="text-blue-500 dark:text-teal-600 py-5 font-sans mx-4 flex  text-5xl justify-center ">
              Stack
            </h3>
            <p className=" font-medium m-4  text-gray-600 dark:text-white  py-5 leading-8 flex justify-center">
              React, Vue, and Django are three powerful tools in the web
              development toolkit. React, a JavaScript library, excels in
              creating dynamic and reusable user interfaces with its virtual DOM
              and component-based architecture. <br />
              Vue, another JavaScript framework, offers flexibility and
              simplicity for building modern web applications with its
              reactivity system and component-driven approach.
              <br />
              On the back-end, Django, a Python web framework, provides a
              robust, secure, and highly modular platform for building web
              applications, complete with an ORM, authentication, and an admin
              interface.
              <br />
              Together, these technologies empower developers to create
              efficient, interactive, and feature-rich web applications,
              covering both front-end and back-end aspects of development, and
              allowing for a wide range of web development projects to be
              undertaken with confidence.
            </p>
            <div className="text-5xl  font-bold flex px-8 mx-auto justify-center  gap-16  py-10 icons-container">
              <div className="icon text-blue-500 ">
                <BiLogoReact className="icon-item text-6xl " />
              </div>
              <div className="icon text-blue-500">
                <BiLogoBootstrap className="icon-item text-6xl " />
              </div>
              <div className="icon text-blue-500">
                <BiLogoDjango className="icon-item" />
              </div>
              <div className="icon text-blue-500">
                <BiLogoNetlify className="icon-item" />
              </div>
              <div className="icon text-blue-500">
                <BiLogoJavascript className="icon-item" />
              </div>
              <div className="icon text-blue-500">
                <BiLogoVuejs className="icon-item" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
