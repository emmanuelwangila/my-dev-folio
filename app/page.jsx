"use client";
import Head from "next/head";
import Image from "next/image";
import manu from "../public/manu.jpg";
import laptop from "../public/laptop.jpg";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import About from "../components/About";
import Projects from "../components/Projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp } from "react-icons/fa";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillReact,
} from "react-icons/ai";

import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link, Element } from "react-scroll";
import Footer from "@/components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const [formStatus, setFormStatus] = useState({ message: "", success: null });

  const handleWhatsAppClick = () => {
    const whatsappNumber = "254798719417";
    // const appMessage = "Hi I would like to know more about you";

    // const encodedMessage = encodeURIComponent(appMessage);
    window.open(`https://wa.me/${whatsappNumber}?`, "_blank");
  };

  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus({ message: "", success: null });
      }, 5000); // 5 seconds timeout

      // Clean up the timeout when component unmounts or when formStatus changes
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formUrl = "https://formspree.io/f/xnqejply"; // Replace with your Formspree endpoint

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      location: e.target.location.value,
      message: e.target.message.value,
    };

    if (
      !formData.name ||
      !formData.phone ||
      !formData.location ||
      !formData.message
    ) {
      setFormStatus({ message: "All fields are required.", success: false });
      toast.error("All fields are required ");
      return;
    }

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          message: "Form has been submitted succesfully",
          success: true,
        });

        toast.success("Form submitted succesfully");
        e.target.reset();
      } else {
        setFormStatus({
          message: "Form submission failed, please try again.",
          success: false,
        });
        toast.error("Form submission failed , please enter all the fields");
        e.target.reset();
      }
    } catch (error) {
      setFormStatus({
        message: "Error during form submission.",
        success: false,
      });
      toast.error("Form submission failed , please try again");
      e.target.reset();
    }
  };

  return (
    <div className={darkMode ? "dark" : " "}>
      <main className=" w-full  bg-gray-700 text-white overflow-hidden dark:bg-gray-800  lg:w-full md:w-full  ">
        <section className="min-h-screen rounded-md   w-full ">
          <nav className="flex border-b  p-4   border-gray-500  rounded-md  justify-between   sm:flex-wrap  mb-12 ">
            <h1 className="text-md text-white  dark:text-white font-sans  cursor-pointer ">
              Emmanuel Wangila
            </h1>
            {/* <About /> */}
            <div className="m">
              <ul className="flex items-end m-0.5 ">
                <li className="text-2xl cursor-pointer dark:text-white">
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />{" "}
                </li>
                <li className="bg-gradient-to-r bg-blue-500 font-sans  font-bold hover:bg-blue-700  rounded-md hover:text-bg-700 text-sm  p-1   cursor-pointer text-white   border-none px-4 ml-8 ">
                  <Link to="/" duration={100} smooth={true}>
                    {" "}
                    Home
                  </Link>
                </li>
                <li className="bg-gradient-to-r text-sm font-bold font-sans  bg-blue-500 rounded-md  hover:bg-blue-700  from cursor-pointer  text-white p-1   border-none px-4 ml-6 ">
                  <Link to="about" duration={100} smooth={true}>
                    {" "}
                    About{" "}
                  </Link>
                </li>
                <li className="bg-gradient-to-r bg-blue-500 font-bold  font-sans rounded-md  hover:bg-blue-700 text-sm  from  cursor-pointer   p-1   border-none px-4 ml-6 text-white">
                  <Link to="contact" duration={100} smooth={true}>
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="flex flex-col font-sans text-center">
            <div className="w-full h-full m-3 p-3 font-sans">
              <h3 className="font-sans text-blue-500  font-bold text-3xl text-">
                Software Engineer
              </h3>
              <div className="flex justify-center gap-8 mt-4">
                <a
                  href="https://twitter.com/manuelwangila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <AiFillTwitterCircle className="text-5xl" />
                </a>
                <a
                  href="https://linkedin.com/in/emmanuel-wangila/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <AiFillLinkedin className="text-5xl" />
                </a>
                <a
                  href="https://github.com/emmanuelwangila/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <AiFillGithub className="text-5xl" />
                </a>
              </div>
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

        {/* <section>
          <div>
            <div className="flex justify-center  ">
              <button className="lg:text-2xl sm:text-sm mx-3 py-3 flex  justify-center lg:p-3 sm:p-1    text-white bg-blue-500 rounded-full   font-sans  dark:text-white">
                Experience{" "}
              </button>
            </div>

            <div className="grid grid-cols-2  dark:bg-gray-800 sm:w-fit sm:gap-4  md:flex-wrap py-10 mb-5 rounded-md shadow-lg">
              <div>
                <div className="flex justify-center mx-auto border border-green-500 rounded-md w-3/4">
                  <h2 className="text-green-800  font-sans">KaziQuest</h2>
                </div>

                <button className="text-white  bg-blue-500 lg:p-2 sm:p-1   rounded-full lg:text-2xl sm:text-sm font-sans m-2   ">
                  {" "}
                  April 2023 - Present
                </button>
                <p className=" grid-flow-col m-2  font-sans  font-medium text-gray-600 dark:text-white  py-5 leading-8 ">
                  At KaziQuest, I honed my skills in designing UI/UX using Nuxt
                  3 for the front-end and Django for the back-end. My
                  responsibilities included code reviews, Git version control,
                  testing, and consuming APIs from the back-end, ensuring
                  seamless integration and high-quality user experiences. I
                  expertly crafted dynamic front-end experiences while
                  leveraging Django for robust back-end functionality. My role
                  encompassed meticulous code reviews, efficient version control
                  with Git, and rigorous testing, ensuring top-notch performance
                  and user satisfaction. Through these efforts, I contributed to
                  creating seamless, responsive, and highly functional web
                  applications that delighted users and met business objectives.
                </p>
              </div>

              <div className="">
                <div className="flex justify-center mx-auto border border-green-500 rounded-md w-3/4">
                  <h2 className="text-green-800  font-sans">
                    Kenya Power Lighting Company(KPLC)
                  </h2>
                </div>

                <button className="font-sans lg:text-2xl sm:text-sm  m-2  text-white bg-blue-500 rounded-full lg:p-2 sm:p-1  ">
                  Jan 2023 - April 2023
                </button>
                <p className="grid-flow-col m-3  font-sans font-medium text-gray-600 dark:text-white  leading-8 ">
                  At Kenya Power, I excelled in networking, project management,
                  routing, and hardware and software solutions. My role involved
                  comprehensive database management, software installations, and
                  troubleshooting technical issues. I collaborated closely with
                  Kenya Power engineers, providing essential assistance and
                  meticulous documentation for IT projects. Through strategic
                  project management and hands-on technical expertise, I ensured
                  seamless operations and contributed to the successful
                  implementation of various IT initiatives, enhancing the
                  overall efficiency and reliability of Kenya Power's
                  technological infrastructure. My dynamic skill set and
                  proactive approach drove continuous improvements and
                  streamlined processes within the organization.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <Element name="contact">
          <div className=" flex justify-center ">
            <button className="text-white bg-blue-500 rounded-md font-bold hover:bg-blue-700  font-sans mx-3 py-3 lg:text-2xl sm:text-sm dark:text-white ">
              Contact Me
            </button>
          </div>
          <section id="contact" className="font-sans flex justify-center mt-10">
            <div className="flex flex-col lg:w-[60%] md:w-[60%] m-2 p-6 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-300 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                Get in Touch
              </h2>
              <form
                onSubmit={handleFormSubmit}
                method="POST"
                className="w-full"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
            {formStatus.message && (
              <p
                className={`text-center ${
                  formStatus.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {formStatus.message}
              </p>
            )}
          </section>
        </Element>

        <div className=" w-screen">
          <div className="whatsapp-icon flex justify-end m-2 p-2 ">
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center p-2 bg-green-500 rounded-full text-white shadow-md hover:bg-green-600"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={32} />
            </button>
          </div>
          <Footer className="w-screen" />
        </div>
      </main>
    </div>
  );
}
