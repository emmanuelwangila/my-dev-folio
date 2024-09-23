"use client";
import Head from "next/head";
import Image from "next/image";
import manu from "../public/manu.jpg";
import laptop from "../public/laptop.jpg";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import About from "../components/About";
import Projects from "../components/Projects";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillReact,
} from "react-icons/ai";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link, Element } from "react-scroll";
import Footer from "@/components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://formspree.io/f/xnqejply"; // Replace with your Formspree endpoint

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      location: e.target.location.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // You can perform additional actions after successful submission
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className={darkMode ? "dark" : " "}>
      <main className=" w-full  bg-slate-100 overflow-hidden dark:bg-gray-800  lg:w-full md:w-full  ">
        <section className="min-h-screen rounded-md   w-full ">
          <nav className="flex border-b bg-blue-500 p-4   border-gray-500  rounded-md  justify-between   sm:flex-wrap  mb-12 ">
            <h1 className="text-md text-white  dark:text-white font-sans  cursor-pointer ">
              porfolio
            </h1>
            {/* <About /> */}
            <div className="m">
              <ul className="flex items-end m-0.5 ">
                .
                <li className="text-2xl cursor-pointer dark:text-white">
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />{" "}
                </li>
                <li className="bg-gradient-to-r text-sm  p-1   cursor-pointer from bg-white  dark:bg-white rounded-full border-none px-4 ml-8 text-blue-500">
                  <Link to="projects" duration={100} smooth={true}>
                    {" "}
                    Projects
                  </Link>
                </li>
                <li className="bg-gradient-to-r text-sm  from bg-white cursor-pointer  dark:bg-white p-1  rounded-full border-none px-4 ml-6 text-blue-500">
                  <Link to="contact" duration={100} smooth={true}>
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className=" flex flex-col font-sans   text-center">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Emmanuel Wangila",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web and  Mobile app  Developer  ",
                1000,
                " Full Stack engineer ",
                1000,
                "Stay in touch",
                1000,
              ]}
              wrapper="span"
              speed={50}
              // style={{
              //   fontSize: "3em",
              //   color: "blue",
              //   display: "flex",
              //   font: "bold",
              //   fontFamily: "sans",
              //   backgroundColor: "bg-500",
              //   margin: "5px",
              //   justifyContent: "center",
              //   justifyItems: "center",
              // }}
              repeat={Infinity}
              className="font-sans text-3xl text-blue-500  "
            />

            <div className="font-medium text-gray-600 dark:text-white  py-5 leading-9 ">
              {" "}
              <div className=" w-[50% ] m-2 p-2 rounde-md font-sans">
                I'm a Full Stack developer, in the realm of front-end
                development, I'm proficient in utilizing popular JavaScript
                frameworks such as React , Vue and Next JS. I also have a good
                grasp of PHP , using it's Framework Laravel for web development
                and back-end database modelling, proficiency in intergrating
                Inertia with React , Vue with Laravel and CodeIgniter.
                <br />
                My mastery of these libraries allows me to craft elegant and
                responsive user interfaces that not only look stunning but also
                <br />
                deliver exceptional user experiences. Whether it's building
                dynamic web applications or designing engaging user interfaces,
                <br />
                Also back-end intergration and modeling of the server to
                communicate via API's to the client side and database design.
              </div>
            </div>

            <div className="flex flex-col text-2xl  ">
              <h1 className="text-blue-500 font-sans ">Social Links : </h1>
            </div>
          </div>

          <div className=" flex cursor-pointer justify-center gap-16 py-3 text-gray-600">
            <div className="border border-blue-500 rounded-full m-1 p-1 ">
              <a href={"https://twitter.com/manuelwangila"}>
                {" "}
                <AiFillTwitterCircle className="lg:text-5xl hover:text-blue-500 md:text-5xl  sm:text-7xl " />{" "}
              </a>
            </div>
            <div className="border border-blue-500 rounded-full m-1 p-1 ">
              <a href={"https://www.linkedin.com/in/emmanuel-wangila/"}>
                {" "}
                <AiFillLinkedin className="lg:text-5xl hover:text-blue-500 md:text-5xl sm:text-4xl" />{" "}
              </a>
            </div>

            <div className="border border-blue-500 rounded-full m-1 p-1 ">
              <a href={"https://github.com/emmanuelwangila"}>
                {" "}
                <AiFillGithub className="lg:text-5xl hover:text-blue-500  sm:text-4xl" />{" "}
              </a>
            </div>
          </div>

          <div className="">
            <Element name="about">
              <section id="about">
                <About />
              </section>
            </Element>
          </div>
        </section>

        <Element name="projects">
          <section id="projects" className="flex-col">
            <Projects className="" />
          </section>
        </Element>

        <section>
          <div>
            <div className="flex justify-center  ">
              <button className="lg:text-2xl sm:text-sm mx-3 py-3 flex  justify-center lg:p-3 sm:p-1    text-white bg-blue-500 rounded-full   font-sans  dark:text-white">
                Experience{" "}
              </button>
            </div>

            <div className="dark:text-white font-sans p-8 rounded-md shadow-lg">
              {/* Job 1 */}
              <div className="mb-8 dark:text-white">
                <h3 className="text-2xl font-semibold text-teal-600">
                  Web Developer - KaziQuest
                </h3>
                <p className="text-gray-600 italic">June 2022 - July 2023</p>
                <ul className="list-disc list-inside mt-2 ">
                  <li>
                    Developed and maintained websites using{" "}
                    <i className="fab fa-nuxt"></i> Nuxt 3,{" "}
                    <i className="fab fa-react"></i> React, and{" "}
                    <i className="fab fa-wordpress"></i> WordPress.
                  </li>
                  <li>
                    Implemented back-end features with{" "}
                    <i className="fab fa-python"></i> Python and{" "}
                    <i className="fab fa-postgresql"></i> PostgreSQL to handle
                    complex data queries and processing.
                  </li>
                  <li>
                    Deployed web applications using{" "}
                    <i className="fab fa-nginx"></i> Nginx and ensured smooth
                    CI/CD pipelines using <i className="fab fa-github"></i>{" "}
                    GitHub Actions.
                  </li>
                  <li>
                    Collaborated on code reviews and maintained code quality
                    standards using GitHub’s pull request feature, increasing
                    team productivity.
                  </li>
                  <li>
                    Worked in an Agile environment, optimizing website
                    performance and reducing load times by over 30%.
                  </li>
                </ul>
                <div className="flex space-x-4 mt-4">
                  <i className="fab fa-nuxt text-3xl text-green-500"></i>
                  <i className="fab fa-react text-3xl text-blue-500"></i>
                  <i className="fab fa-python text-3xl text-yellow-500"></i>
                  <i className="fab fa-postgresql text-3xl text-blue-800"></i>
                  <i className="fab fa-nginx text-3xl text-green-600"></i>
                  <i className="fab fa-github text-3xl text-black"></i>
                </div>
              </div>

              {/* Job 2 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-teal-600">
                  Information Technology Intern - KPLC
                </h3>
                <p className="text-gray-600 italic">August 2021 - May 2022</p>
                <ul className="list-disc list-inside mt-2 ">
                  <li>
                    Built RESTful APIs using <i className="fab fa-java"></i>{" "}
                    Java and <i className="fab fa-spring"></i> Spring Boot for
                    managing large-scale data transactions.
                  </li>
                  <li>
                    Integrated <i className="fab fa-mysql"></i> MySQL databases
                    to manage user data and optimized query performance.
                  </li>
                  <li>
                    Collaborated with the frontend team to create seamless
                    integrations using <i className="fab fa-angular"></i>{" "}
                    Angular.
                  </li>
                  <li>
                    Implemented unit testing using{" "}
                    <i className="fas fa-code"></i> JUnit and Mockito,
                    increasing code coverage by 25%.
                  </li>
                </ul>
                <div className="flex space-x-4 mt-4">
                  <i className="fab fa-java text-3xl text-red-500"></i>
                  <i className="fab fa-spring text-3xl text-green-500"></i>
                  <i className="fab fa-mysql text-3xl text-blue-500"></i>
                  <i className="fab fa-angular text-3xl text-red-600"></i>
                  <i className="fas fa-code text-3xl text-gray-800"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Element name="contact">
          <section id="contact" className="font-sans">
            <div className="flex justify-center ">
              <button className="text-white bg-blue-500 rounded-full  font-sans mx-3 py-3 lg:text-2xl sm:text-sm dark:text-white ">
                Contact Me
              </button>
            </div>

            <div className="flex lg:w-[60%] m-2 p-2   md:w-[60%] md:m-2  justify-center mt-5 mb-5 rounded-md  border-2 border-gray-400">
              <form
                onSubmit={handleFormSubmit}
                method="POST"
                className="flex m-2  lg:w-[70%] md:w-[60%] sm:w-[100%] flex-col justify-start items-center  dark:bg-gray-800  rounded-md  h-full mt-4 py-4 "
              >
                <input
                  className="p-3 m-2  w-full rounded-md   bg-gray-100   border border-blue-300"
                  id="name"
                  name="name"
                  placeholder="Enter  your name"
                ></input>
                <input
                  className="name p-3 m-2  w-full bg-gray-100 rounded-md border border-blue-300 "
                  id="phone"
                  name="phone"
                  placeholder="Enter your phoneNumber"
                ></input>
                <input
                  className="name p-3 m-2 w-full border border-blue-300 bg-gray-100 rounded-md"
                  id="location"
                  name="location"
                  placeholder="Enter your location"
                ></input>
                <textarea
                  name="message"
                  className="p-3 m-2 w-full bg-gray-200 border border-blue-300 rounded-md  "
                  placeholder="Input your message here "
                ></textarea>
                <button className="p-3 m-2 dark:bg-teal-600 bg-blue-500 text-white flex justify-center w-[50%] rounded-full ">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </Element>

        <div className=" w-screen">
          <Footer className="w-screen" />
        </div>
      </main>
    </div>
  );
}
