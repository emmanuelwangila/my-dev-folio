"use client";
import Head from "next/head";
import Image from "next/image";
import manu from "../public/manu.jpg";
import laptop from "../public/laptop.jpg";
import { BsFillMoonStarsFill } from "react-icons/bs";
import About from "../components/About";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillReact,
} from "react-icons/ai";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

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
    <div className={darkMode ? "dark" : ""}>
      <main className="px-10 bg-slate-100  dark:bg-black">
        <section className="min-h-screen  w-full ">
          <nav className="flex justify-between py-10 sm:py-5  mb-12 ">
            <h1 className="text-md text-blue-700  dark:text-teal-600 font-sans  cursor-pointer ">
              developedbyWangila
            </h1>
            {/* <About /> */}
            <ul className="flex items-end">
              .
              <li className="text-2xl cursor-pointer dark:text-white">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />{" "}
              </li>
              <li className="bg-gradient-to-r from bg-blue-500  dark:bg-teal-600 rounded-md border-none px-4 ml-8 text-white">
                <a href="">Home</a>
              </li>
            </ul>
          </nav>

          <div className="p-8 text-center">
            <h2 className="py-2 text-5xl font-sans text-blue-600 dark:text-teal-600 ">
              Emmanuel Wangila{" "}
            </h2>
            <h3 className="py-2 text-3xl  font-sans dark:text-teal-600 text-blue-500">
              Full Stack Developer
            </h3>
            <p className=" font-medium text-gray-600 dark:text-white  py-5 leading-8 flex justify-center">
              {" "}
              In the realm of front-end development, I'm proficient in utilizing
              popular JavaScript frameworks such as React and Vue. My mastery of
              these libraries allows me to craft elegant and responsive user
              interfaces that not only look stunning but also deliver
              exceptional user experiences. Whether it's building dynamic web
              applications or designing engaging user interfaces, I would love
              to think that my front-end skills are second to none.
            </p>

            <div className="flex flex-col text-3xl  ">
              <h1 className="text-blue-500 font-sans ">Social Links : </h1>
            </div>
          </div>

          <div className=" flex cursor-pointer justify-center gap-16 py-3 text-gray-600">
            <a href={"https://twitter.com/manuelwangila"}>
              {" "}
              <AiFillTwitterCircle className="lg:text-8xl md:text-5xl  sm:text-4xl " />{" "}
            </a>
            <a href={"https://www.linkedin.com/in/emmanuel-wangila/"}>
              {" "}
              <AiFillLinkedin className="lg:text-8xl md:text-5xl sm:text-4xl" />{" "}
            </a>
            <a href={"https://github.com/emmanuelwangila"}>
              {" "}
              <AiFillGithub className="lg:text-8xl  sm:text-4xl" />{" "}
            </a>
          </div>
        </section>
        <div>
          <About />
        </div>

        <section>
          <div>
            <h1 className="text-5xl mx-3 py-3 flex  justify-center  text-blue-500  font-sans  dark:text-teal-600">
              Experience{" "}
            </h1>

            <div className="grid grid-cols-2  dark:bg-black sm:w-fit sm:gap-4  md:flex-wrap py-10 mb-5 rounded-md shadow-lg">
              <p className=" grid-flow-col m-3  font-medium text-gray-600 dark:text-white  py-5 leading-8 ">
                Component-Based Architecture: I'm proficient in creating
                reusable UI components, which is a core concept in React. State
                Management: You've likely used state and props to manage data
                and UI updates efficiently. Routing: I'm familiar with
                client-side routing using libraries like React Router. API
                Integration: You've connected your React components to backend
                APIs using methods like Axios or the Fetch API. Styling: You've
                implemented CSS styles using various methods, including
                CSS-in-JS libraries like styled-components or CSS preprocessors
                like SASS
              </p>

              <p className="grid-flow-col m-3  font-medium text-gray-600 dark:text-white  leading-8 ">
                Model-View-Controller (MVC): I have great understanding of
                Django's MVC architecture and how to create models, views, and
                controllers (views and serializers in Django REST framework).
                Authentication and Authorization: Experience in implementing
                user authentication and authorization, perhaps using Django's
                built-in authentication system or third-party libraries like
                Django Rest Framework JWT. Database Integration: You're
                experienced in working with databases, especially with Django's
                ORM to define and query database schemas. API Development: I've
                skills in building RESTful APIs using Django REST framework or
                GraphQL APIs using Graphene-Django
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-blue-500 font-sans mx-3 py-3 text-3xl dark:text-teal-600 ">
            Contact Me
          </h3>
          <div className="flex lg:w-[60%]  md:w-[60%] justify-center mt-5 mb-5 rounded-md  border-2 border-teal-500">
            <form
              onSubmit={handleFormSubmit}
              method="POST"
              className="flex m-2  lg:w-[70%] md:w-[60%] sm:w-[100%] flex-col justify-start items-center  dark:bg-black  rounded-md  h-full mt-4 py-4 "
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
              <button className="p-3 m-2 dark:bg-teal-600 bg-blue-500 text-white flex justify-center w-[50%] rounded-md ">
                Submit
              </button>
            </form>
          </div>
        </section>
        <section>
          <div className="border  lg:w-[60%] md:w-[60%] sm:w-[100%] border-b border-blue-300 text-teal-600  font-sans  m-4 p-4 rounded-md">
            <h3>Developedby Emmanuel Wangila</h3>
            <h4>phone: 0798719417</h4>
            <h4>@2024 All Rights Reserved</h4>
          </div>
        </section>
      </main>
    </div>
  );
}
