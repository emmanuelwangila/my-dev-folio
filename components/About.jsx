import React from "react";
import developer from "../public/Developer.png";
import Image from "next/image";
import {
  BiLogoReact,
  BiLogoBootstrap,
  BiLogoDjango,
  BiLogoNetlify,
  BiLogoVuejs,
  BiLogoJavascript,
} from "react-icons/bi"; // 'bi' icons

import { FaReact, FaPhp, FaPython } from "react-icons/fa"; // 'fa' icons
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiSpring,
  SiAngular,
  SiOracle,
  SiPostgresql,
} from "react-icons/si"; // 'si' icons

import { IoLogoNodejs } from "react-icons/io5"; // 'io5' icons
import { TbBrandReactNative } from "react-icons/tb"; // 'tb' icons
import "../app/globals.css";

const About = () => {
  return (
    <div className="lg:flex md:flex sm:flex-wrap rounded-md">
      <section>
        <div className="dark:bg-gray-800 rounded-md mt-4">
          <div className="flex mx-auto text-white font-sans">
            <button className="text-2xl bg-blue-500 rounded-full text-white p-2 mx-auto font-sans hover:text-white cursor-pointer dark:text-white">
              About
            </button>
          </div>

          {/* Add Developer Image */}
          <div className="flex justify-center mt-6">
            <Image
              src={developer}
              alt="3D Developer"
              className="w-1/2 rounded-md shadow-lg"
            />
          </div>

          <div className="flex justify-center lg:flex-row gap-2 hover:text-blue-500 cursor-pointer md:w-fit sm:flex-auto">
            <p className="rounded-md border p-2 font-sans hover:text-blue-500 border-blue-500 b-m-2 w-[80%] font-medium text-gray-600 dark:text-white m-4 leading-8 flex flex-row gap-6">
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
              and consuming API data to be integrated in front-end applications.
              I have good skills in Django MVC model, Laravel using Inertia for
              React and Vue, Node.js, and Express. I also have expertise in
              creating APIs and controllers for both front-end and back-end
              applications.
            </p>
          </div>
        </div>

        <div>
          <div className="dark:bg-gray-800 font-sans rounded-md border-teal-600 py-10 mb-10">
            <div className="flex mx-auto justify-center">
              <button className="text-white bg-blue-500 rounded-full lg:p-2 sm:p-1 cursor-pointer dark:text-white py-2 font-sans mx-4 flex text-2xl justify-center">
                Stack | Technologies
              </button>
            </div>

            <p className="font-medium m-4 text-gray-600 dark:text-white py-5 leading-8 flex justify-center">
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
              native apps. I also have expertise in Spring Boot, Angular,
              Oracle, and PL/SQL for backend development.
            </p>

            <div className="text-5xl overflow-scroll flex-col font-bold flex px-8 mx-auto justify-center gap-16 py-10 icons-container">
              <div className="grid grid-cols-3">
                <div className="icon">
                  <FaReact />
                  <SiNuxtdotjs />
                  <SiTailwindcss />
                </div>
                <div className="icon">
                  <BiLogoBootstrap />
                  <SiNextdotjs />
                </div>
                <div className="icon">
                  <BiLogoDjango />
                  <IoLogoNodejs />
                  <TbBrandReactNative />
                </div>
                <div className="icon">
                  <BiLogoNetlify />
                  <SiSpring />
                </div>
                <div className="icon">
                  <BiLogoJavascript />
                  <FaPython />
                  <SiAngular />
                  <FaPhp />
                </div>
                <div className="icon">
                  <BiLogoVuejs />

                  <SiOracle />
                  <SiPostgresql />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
