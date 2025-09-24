"use client";
import Head from "next/head";
import Image from "next/image";
import manu from "../public/manu.jpg";
import laptop from "../public/laptop.jpg";
import { BsFillMoonStarsFill, BsArrowDown } from "react-icons/bs";
import { FaReact, FaWhatsapp, FaCode, FaServer } from "react-icons/fa";
import About from "../components/About";
import Projects from "../components/Projects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillHeart,
} from "react-icons/ai";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link, Element } from "react-scroll";
import Footer from "@/components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const formRef = useRef(null);

  const [formStatus, setFormStatus] = useState({ message: "", success: null });

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappNumber = "254798719417";
    window.open(`https://wa.me/${whatsappNumber}?`, "_blank");
  };

  useEffect(() => {
    if (formStatus.message) {
      const timer = setTimeout(() => {
        setFormStatus({ message: "", success: null });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formUrl = "https://formspree.io/f/xnqejply";

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    if (!formData.name || !formData.email || !formData.message) {
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
          message: "Message sent successfully! I'll get back to you soon.",
          success: true,
        });
        toast.success("Message sent successfully!");
        e.target.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setFormStatus({
        message: "Failed to send message. Please try again.",
        success: false,
      });
      toast.error("Failed to send message. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-white text-lg font-light">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-all duration-300">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent dark:from-blue-900/20"></div>
        </div>

        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Emmanuel Wangila
                </h1>
              </div>

              <div className="flex items-center space-x-6">
                <ul className="flex items-center space-x-6">
                  <li>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-sm font-medium hover:text-blue-500 transition-colors cursor-pointer"
                      onSetActive={() => setActiveSection("home")}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-sm font-medium hover:text-blue-500 transition-colors cursor-pointer"
                      onSetActive={() => setActiveSection("about")}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-sm font-medium hover:text-blue-500 transition-colors cursor-pointer"
                      onSetActive={() => setActiveSection("projects")}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="text-sm font-medium hover:text-blue-500 transition-colors cursor-pointer"
                      onSetActive={() => setActiveSection("contact")}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <BsFillMoonStarsFill className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <Element name="home">
          <section className="min-h-screen flex items-center justify-center relative pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {/* Animated Avatar */}
              <div className="relative inline-block mb-8">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-gradient-x">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1">
                    <Image
                      src={manu}
                      alt="Emmanuel Wangila"
                      className="w-full h-full rounded-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <FaCode className="text-white text-xl" />
                </div>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 font-sans bg-clip-text text-transparent">
                  Emmanuel Wangila
                </span>
              </h2>

              <div className="text-2xl md:text-4xl font-sans text-gray-600 dark:text-gray-300 font-light mb-8 min-h-[60px]">
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent"
                />
              </div>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Crafting digital experiences with modern technologies. 
                Passionate about building scalable solutions and beautiful interfaces.
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-12">
                {[
                  { Icon: AiFillTwitterCircle, href: "https://twitter.com/manuelwangila", color: "hover:text-blue-400" },
                  { Icon: AiFillLinkedin, href: "https://linkedin.com/in/emmanuel-wangila/", color: "hover:text-blue-600" },
                  { Icon: AiFillGithub, href: "https://github.com/emmanuelwangila/", color: "hover:text-gray-700 dark:hover:text-gray-300" },
                ].map(({ Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-4xl text-gray-600 dark:text-gray-400 transition-all duration-300 transform hover:scale-110 ${color}`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  View My Work
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-medium hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <Link to="about" spy={true} smooth={true} duration={500}>
                  <BsArrowDown className="text-2xl text-gray-400 cursor-pointer" />
                </Link>
              </div>
            </div>
          </section>
        </Element>

        {/* About Section */}
        <Element name="about">
          <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <About />
            </div>
          </section>
        </Element>

        {/* Projects Section */}
        <Element name="projects">
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Here are some of my recent projects that showcase my skills and passion for development.
                </p>
              </div>
              <Projects />
            </div>
          </section>
        </Element>

        {/* Contact Section */}
        <Element name="contact">
          <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Let's Work Together
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Have a project in mind? I'd love to hear about it.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
                  <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="relative">
                      <FiUser className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>

                    <div className="relative">
                      <FiMail className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>

                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>

                  {formStatus.message && (
                    <div className={`mt-4 p-3 rounded-lg text-center ${
                      formStatus.success 
                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300" 
                        : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                    }`}>
                      {formStatus.message}
                    </div>
                  )}
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
                    <p className="mb-6 opacity-90">
                      I'm always open to discussing new opportunities and creative ideas.
                    </p>
                    
                    <div className="space-y-4">
                      <button
                        onClick={handleWhatsAppClick}
                        className="w-full flex items-center justify-center space-x-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 rounded-lg transition-all duration-300"
                      >
                        <FaWhatsapp className="text-xl" />
                        <span>Chat on WhatsApp</span>
                      </button>
                      
                      <a
                        href="mailto:your-email@example.com"
                        className="block w-full text-center bg-white/20 hover:bg-white/30 backdrop-blur-sm py-3 rounded-lg transition-all duration-300"
                      >
                        Send an Email
                      </a>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
                    <h4 className="font-bold text-lg mb-4">Why work with me?</h4>
                    <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Clean, efficient code</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Modern technologies</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Responsive design</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>Timely delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>

        {/* WhatsApp Float */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-pulse"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={24} />
          </button>
        </div>

        {/* Footer */}
        <Footer />

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
          theme={darkMode ? "dark" : "light"}
        />
      </main>
    </div>
  );
}