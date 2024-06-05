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
        <div className="  dark:bg-gray-800 rounded-md  mt-4  ">
          <div className="flex  mx-auto text-white font-sans  ">
            <button className="text-2xl bg-blue-500 rounded-full text-white p-2 mx-auto font-sans  hover:text-white cursor-pointer  w-[10%]   dark:text-white   ">
              About
            </button>
          </div>

          <div className="flex lg:flex-row  gap-2 hover:text-blue-500 cursor-pointer     md:w-fit  sm:flex-auto ">
            <p className=" rounded-md border p-2 font-sans hover:text-blue-500  border-blue-500 b-m-2 w-[80%]  font-medium text-gray-600 dark:text-white m-4   leading-8 flex flex-row gap-6 ">
              {" "}
              I'm a software developer doing great designs and website's, Web
              Application Development: <br />
              Creating web applications using React and Vue to deliver
              responsive, dynamic, and interactive user interfaces.
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
          <div className="  dark:bg-gray-800 font-sans  rounded-md border-teal-600  py-10 mb-10 ">
            <div className="flex mx-auto justify-center">
              <button className="text-white lue-500 bg-blue-500 rounded-full lg:p-2 sm:p-1  hover:text-blue-500 cursor-pointer dark:text-white py-2 font-sans mx-4 flex  text-2xl justify-center ">
                Stack | Technlogies
              </button>
            </div>

            <p className=" font-medium m-4  text-gray-600 dark:text-white  py-5 leading-8 flex justify-center">
              I'm proficient in technologies like JavaScript, React, Vue 3, Nuxt
              3, Django, Python, PHP, Laravel, CSS, Tailwind CSS, React Native,
              and CodeIgniter. My journey through the diverse landscape of web
              and mobile development has endowed me with a robust skill set that
              thrives on both creativity and technical prowess. From crafting
              dynamic single-page applications with React and Vue 3 to building
              robust backends with Django and Laravel, I relish the challenge of
              translating complex requirements into seamless user experiences.
              My expertise in Tailwind CSS ensures that my designs are not only
              visually appealing but also highly responsive. Additionally, my
              experience with React Native enables me to create sophisticated
              mobile applications that maintain the elegance and performance of
              native apps. Each line of code I write is a testament to my
              commitment to quality, efficiency, and innovation, making me a
              versatile and valuable asset in any development team.
            </p>
            <div className="text-5xl overflow-scroll  font-bold flex px-8 mx-auto justify-center  gap-16  py-10 icons-container">
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
