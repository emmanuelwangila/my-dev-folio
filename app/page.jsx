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
  const [darkMode, setDarkMode] = useState(false);

  const [formStatus, setFormStatus] = useState({ message: "", success: null });

  const handleWhatsAppClick = () => {
    const whatsappNumber = "254798719417";
    const appMessage = "Hi I would like to know more about you";

    const encodedMessage = encodeURIComponent(appMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
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
        </section>
        <Element name="contact">
          <section id="contact" className="font-sans">
            <div className="flex justify-center ">
              <button className="text-white bg-blue-500 rounded-full  font-sans mx-3 py-3 lg:text-2xl sm:text-sm dark:text-white ">
                Contact Me
              </button>
            </div>

            <div className="flex lg:w-[60%] m-2 p-2   md:w-[60%] md:m-2  justify-center mt-5 mb-5 rounded-md  border-2 border-gray-400">
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
                  required
                ></input>
                <input
                  className="name p-3 m-2  w-full bg-gray-100 rounded-md border border-blue-300 "
                  id="phone"
                  name="phone"
                  placeholder="Enter your phoneNumber"
                  required
                ></input>
                <input
                  className="name p-3 m-2 w-full border border-blue-300 bg-gray-100 rounded-md"
                  id="location"
                  name="location"
                  placeholder="Enter your location"
                  required
                ></input>
                <textarea
                  name="message"
                  className="p-3 m-2 w-full bg-gray-200 border border-blue-300 rounded-md  "
                  placeholder="Input your message here "
                  required
                ></textarea>
                <button className="p-3 m-2 dark:bg-teal-600 bg-blue-500 text-white flex justify-center w-[50%] rounded-full ">
                  Submit
                </button>

                {formStatus.message && (
                  <p
                    className={`text-center ${
                      formStatus.success ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {formStatus.message}
                  </p>
                )}
              </form>
            </div>
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
