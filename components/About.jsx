import developer from "../public/Developer.png";
import Image from "next/image";
import {
  SiReact,
  SiBootstrap,
  SiDjango,
  SiNetlify,
  SiVuedotjs,
  SiJavascript,
  SiPhp,
  SiPython,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiSpring,
  SiAngular,
  SiOracle,
  SiPostgresql,
} from "react-icons/si";

const About = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="mb-6">
        <Image
          src={developer}
          alt="Developer"
          className="rounded-full w-36 h-36"
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold font-sans text-blue-500 mb-4">
          Technologies I Use
        </h2>
        <div className="flex justify-center">
          <p className="text-lg text-white font-sans mb-6 max-w-2xl">
            I have experience working with a variety of technologies and
            frameworks to build robust and scalable applications. From front-end
            libraries like React and Vue.js to back-end frameworks like Django
            and Spring, I am proficient in using these tools to create seamless
            user experiences. I also have expertise in using tools like Netlify
            for deployment and Tailwind CSS for styling. Below are some of the
            technologies I frequently use:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-4">
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiReact className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiBootstrap className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiDjango className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiNetlify className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiVuedotjs className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiJavascript className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiPhp className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiPython className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiNextdotjs className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiNuxtdotjs className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiTailwindcss className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiSpring className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiAngular className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiOracle className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
          <div className="p-4 bg-gray-100 rounded-full shadow-lg hover:bg-blue-100 transition-colors">
            <SiPostgresql className="text-5xl text-gray-700 hover:text-blue-500 transition-transform transform hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
